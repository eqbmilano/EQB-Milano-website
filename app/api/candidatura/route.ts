import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendMail } from "@/lib/mailer";
import { notificaGruppo } from "@/lib/notifica-gruppo";

export const runtime = "nodejs";

const MAX_CV_BYTES = 8 * 1024 * 1024;

// Numero per wa.me: solo cifre, con il 39 davanti se manca (come cleanPhoneDigits
// del gestionale, piu' i cellulari che cominciano per 39x, es. 392...).
function waDigits(raw: string): string | null {
  let p = raw.replace(/[^0-9]/g, "").replace(/^00/, "");
  if (!p) return null;
  if (p.length === 10 && p.startsWith("3")) p = "39" + p;
  else if (!p.startsWith("39") && p.length >= 9 && p.length <= 11) p = "39" + p;
  return p.length >= 11 ? p : null;
}

const maiuscola = (s: string) =>
  s.trim().toLowerCase().replace(/(^|[\s'-])(\p{L})/gu, (_, a, b) => a + b.toUpperCase());

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// Il primo messaggio, nello stile di quello di Marco a Giuseppe del 10/10. Prima di
// inviarlo Marco adatta la riga su cosa cerca e aggiunge l'orario.
function primoMessaggio(nome: string, conCv: boolean): string {
  return [
    `Ciao ${nome}, sono Marco di EQB ☺️`,
    `Grazie per la candidatura${conCv ? " e per il curriculum" : ""}.`,
    "",
    "Ci ha fatto piacere leggere cosa cerchi.",
    "",
    "Ci piacerebbe conoscerti con una breve call e raccontarti come funziona.",
    "Domani avresti un momento?",
    "",
    "A presto",
    "Marco, EQB",
  ].join("\n");
}

const schema = z
  .object({
    categorie: z.string().optional().default(""),
    categoriaAltro: z.string().optional().default(""),
    dove: z.string().optional().default(""),
    doveAltro: z.string().optional().default(""),
    appuntamenti: z.string().optional().default(""),
    portabili: z.string().optional().default(""),
    inizio: z.string().optional().default(""),
    perche: z.string().trim().min(1, "Raccontaci cosa stai cercando"),
    nome: z.string().trim().min(1, "Il nome è obbligatorio"),
    cognome: z.string().trim().min(1, "Il cognome è obbligatorio"),
    numero: z.string().optional().default(""),
    email: z.string().optional().default(""),
    ig: z.string().optional().default(""),
    sito: z.string().optional().default(""),
  })
  .refine((d) => d.numero.trim().length > 0, {
    message: "Il numero di telefono è obbligatorio",
    path: ["numero"],
  });

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();

    // Honeypot: campo nascosto lato client, un bot che lo compila riceve una
    // risposta silenziosa senza che nulla venga inviato.
    if (String(form.get("website") ?? "").trim().length > 0) {
      return NextResponse.json({ ok: true });
    }

    const field = (name: string) => String(form.get(name) ?? "");
    const parsed = schema.safeParse({
      categorie: field("categorie"),
      categoriaAltro: field("categoriaAltro"),
      dove: field("dove"),
      doveAltro: field("doveAltro"),
      appuntamenti: field("appuntamenti"),
      portabili: field("portabili"),
      inizio: field("inizio"),
      perche: field("perche"),
      nome: field("nome"),
      cognome: field("cognome"),
      numero: field("numero"),
      email: field("email"),
      ig: field("ig"),
      sito: field("sito"),
    });

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: parsed.error.issues[0]?.message ?? "Dati non validi" },
        { status: 400 }
      );
    }
    const d = parsed.data;

    let attachments: { filename: string; content: Buffer; contentType?: string }[] | undefined;
    const cvFile = form.get("cv");
    if (cvFile instanceof File && cvFile.size > 0) {
      if (cvFile.type !== "application/pdf") {
        return NextResponse.json({ ok: false, error: "Il CV deve essere un PDF" }, { status: 400 });
      }
      if (cvFile.size > MAX_CV_BYTES) {
        return NextResponse.json({ ok: false, error: "Il CV supera la dimensione massima (8MB)" }, { status: 400 });
      }
      attachments = [
        {
          filename: cvFile.name || "cv.pdf",
          content: Buffer.from(await cvFile.arrayBuffer()),
          contentType: "application/pdf",
        },
      ];
    }

    const to = process.env.CANDIDATURE_TO ?? "eqbmilano@gmail.com";
    const testo = [
      `Nome: ${d.nome} ${d.cognome}`,
      `Telefono: ${d.numero || "-"}`,
      `Email: ${d.email || "-"}`,
      `Instagram: ${d.ig || "-"}`,
      `Sito: ${d.sito || "-"}`,
      "",
      `Categoria: ${d.categorie || "-"}${d.categoriaAltro ? ` / Altro: ${d.categoriaAltro}` : ""}`,
      `Dove lavora oggi: ${d.dove || "-"}${d.doveAltro ? ` / Altro: ${d.doveAltro}` : ""}`,
      `Appuntamenti/settimana: ${d.appuntamenti || "-"}`,
      `Clienti portabili: ${d.portabili || "-"}`,
      `Quando: ${d.inizio || "-"}`,
      "",
      "Cosa cerca che oggi gli manca:",
      d.perche,
    ].join("\n");

    // Il testo resta com'è: lo legge eqb-posta per portare la candidatura nel CRM.
    // L'html aggiunge solo il pulsante WhatsApp sopra lo stesso testo.
    const nome = maiuscola(d.nome);
    const wa = waDigits(d.numero);
    const waLink = wa
      ? `https://wa.me/${wa}?text=${encodeURIComponent(primoMessaggio(nome, !!attachments))}`
      : null;
    const html = `<div style="font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;max-width:560px;color:#1c1917;">
${waLink ? `<a href="${escapeHtml(waLink)}" style="display:block;text-align:center;background:#25D366;color:#fff;text-decoration:none;font-weight:700;padding:14px;border-radius:10px;">📲 Scrivi a ${escapeHtml(nome)} su WhatsApp</a>` : ""}
<pre style="white-space:pre-wrap;font-family:inherit;font-size:14px;line-height:1.5;margin:18px 0 0;">${escapeHtml(testo)}</pre>
</div>`;

    await sendMail({
      to,
      subject: `Nuova candidatura — ${d.nome} ${d.cognome}`,
      text: testo,
      html,
      replyTo: d.email || undefined,
      attachments,
    });

    await notificaGruppo(
      `📋 Nuova candidatura: ${d.nome} ${d.cognome}${d.categorie ? ` (${d.categorie})` : ""} — ${d.numero || d.email}`
    );

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[candidatura] errore invio:", err);
    return NextResponse.json({ ok: false, error: "Errore imprevisto, riprova" }, { status: 500 });
  }
}
