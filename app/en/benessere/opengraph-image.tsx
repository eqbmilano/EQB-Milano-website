import { ImageResponse } from "next/og";
import { OgCard, OG_SIZE, ogFonts } from "@/lib/og/render";

export const runtime = "nodejs";
export const alt = "EQB Milano — Wellness";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Wellness"
        title="Tailored treatments"
        subtitle="Osteopathy, physiotherapy, pilates and massage with EQB Milano's professionals."
      />
    ),
    { ...size, fonts: ogFonts }
  );
}
