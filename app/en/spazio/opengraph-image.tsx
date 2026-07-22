import { ImageResponse } from "next/og";
import { OgCard, OG_SIZE, ogFonts } from "@/lib/og/render";

export const runtime = "nodejs";
export const alt = "EQB Milano — Space";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Space"
        title="A studio designed for wellness"
        subtitle="Curated settings in the heart of Milan, ready for your work and your clients."
      />
    ),
    { ...size, fonts: ogFonts }
  );
}
