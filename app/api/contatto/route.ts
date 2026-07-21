import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendMail } from "@/lib/mailer";
import { notificaGruppo } from "@/lib/notifica-gruppo";

export const runtime = "nodejs";

const schema = z.object({
  origine: z.enum(["contatti", "aziende"]),
  nome: z.string().optional().default(""),
  messaggio: z.string().optional().default(""),
  tipo: z.string().optional().default(""),
  website: z.string().optional().default(""), // honeypot
});

// Cattura best-effort per i form che restano primariamente WhatsApp/mailto: se
// l'utente non completa l'invio nel suo client, questa copia arriva comunque.
// Non deve mai bloccare la UX del bottone WhatsApp: risponde sempre ok.
export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ ok: true });
    }
    const d = parsed.data;

    if (d.website.trim().length > 0) {
      return NextResponse.json({ ok: true });
    }
    if (!d.nome.trim() && !d.messaggio.trim()) {
      return NextResponse.json({ ok: true });
    }

    const to = process.env.CONTATTI_TO ?? "eqbmilano@gmail.com";
    const origineLabel = d.origine === "aziende" ? "Aziende & eventi" : "Contatti";

    await sendMail({
      to,
      subject: `Nuovo messaggio da ${origineLabel} — ${d.nome || "anonimo"}`,
      text: [
        `Origine: ${origineLabel}`,
        d.tipo ? `Tipo: ${d.tipo}` : null,
        `Nome: ${d.nome || "-"}`,
        "",
        d.messaggio || "-",
      ]
        .filter(Boolean)
        .join("\n"),
    });

    await notificaGruppo(`✉️ Nuovo messaggio (${origineLabel}) da ${d.nome || "anonimo"}`);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contatto] errore invio:", err);
    return NextResponse.json({ ok: true });
  }
}
