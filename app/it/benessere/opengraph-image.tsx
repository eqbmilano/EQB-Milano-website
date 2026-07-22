import { ImageResponse } from "next/og";
import { OgCard, OG_SIZE, ogFonts } from "@/lib/og/render";

export const runtime = "nodejs";
export const alt = "EQB Milano — Benessere";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Benessere"
        title="Trattamenti su misura"
        subtitle="Osteopatia, fisioterapia, pilates e massaggi con i professionisti di EQB Milano."
      />
    ),
    { ...size, fonts: ogFonts }
  );
}
