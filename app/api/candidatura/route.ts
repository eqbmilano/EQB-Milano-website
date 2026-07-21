import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendMail } from "@/lib/mailer";
import { notificaGruppo } from "@/lib/notifica-gruppo";

export const runtime = "nodejs";

const MAX_CV_BYTES = 8 * 1024 * 1024;

const schema = z
  .object({
    categorie: z.string().optional().default(""),
    categoriaAltro: z.string().optional().default(""),
    portabili: z.string().optional().default(""),
    appuntamenti: z.string().optional().default(""),
    aspettative: z.string().optional().default(""),
    inizio: z.string().optional().default(""),
    perche: z.string().trim().min(1, "Raccontaci perché EQB"),
    nome: z.string().trim().min(1, "Il nome è obbligatorio"),
    cognome: z.string().trim().min(1, "Il cognome è obbligatorio"),
    numero: z.string().optional().default(""),
    email: z.string().optional().default(""),
    ig: z.string().optional().default(""),
    sito: z.string().optional().default(""),
  })
  .refine((d) => d.numero.trim().length > 0 || d.email.trim().length > 0, {
    message: "Serve almeno un numero di telefono o una email",
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
      portabili: field("portabili"),
      appuntamenti: field("appuntamenti"),
      aspettative: field("aspettative"),
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
      `Clienti portabili: ${d.portabili || "-"}`,
      `Appuntamenti/settimana: ${d.appuntamenti || "-"}`,
      `Aspettative: ${d.aspettative || "-"}`,
      `Quando: ${d.inizio || "-"}`,
      "",
      "Perché EQB:",
      d.perche,
    ].join("\n");

    await sendMail({
      to,
      subject: `Nuova candidatura — ${d.nome} ${d.cognome}`,
      text: testo,
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
