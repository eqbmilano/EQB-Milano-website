import { ImageResponse } from "next/og";
import { OgCard, OG_SIZE, ogFonts } from "@/lib/og/render";

export const runtime = "nodejs";
export const alt = "EQB Milano — Spazio";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Spazio"
        title="Uno studio pensato per il benessere"
        subtitle="Ambienti curati nel cuore di Milano, pronti per il tuo lavoro e i tuoi clienti."
      />
    ),
    { ...size, fonts: ogFonts }
  );
}
