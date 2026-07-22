import { ImageResponse } from "next/og";
import { OgCard, OG_SIZE, ogFonts } from "@/lib/og/render";

export const runtime = "nodejs";
export const alt = "EQB Milano — Contatti";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Contatti"
        title="Parliamone"
        subtitle="Scrivici su WhatsApp, email o vieni a trovarci in studio a Milano."
      />
    ),
    { ...size, fonts: ogFonts }
  );
}
