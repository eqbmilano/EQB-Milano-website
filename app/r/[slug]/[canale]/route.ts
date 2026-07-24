import { NextResponse } from "next/server";
import {
  professionisti,
  linkPerCanale,
  type CanaleTracker,
} from "../../../[slug]/data";

const CANALI: CanaleTracker[] = [
  "prenota",
  "promo",
  "sito",
  "maps",
  "instagram",
  "whatsapp",
  "linkedin",
];

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string; canale: string }> }
) {
  const { slug, canale } = await params;

  const p = professionisti.find((x) => x.slug === slug);
  if (!p || !CANALI.includes(canale as CanaleTracker)) {
    return new NextResponse(null, { status: 404 });
  }

  const target = linkPerCanale(p, canale as CanaleTracker);
  if (!target) {
    return NextResponse.redirect(new URL(`/${slug}`, "https://eqbmilano.it"), 302);
  }

  // Hook tracking (proposta attribuzione approvata da Marco/Fede):
  // quando il tracker sarà attivo, loggare qui il click (slug, canale,
  // ref/utm/fbclid dalla query string) prima del redirect.
  // ATTENZIONE: quel giorno va aggiornata anche la privacy (chiavi
  // privacy.dati2* in messages/it.json + en.json, sezione "Statistiche
  // di utilizzo": oggi dice che non c'è alcun tracciamento).
  return NextResponse.redirect(target, 302);
}
