import { ImageResponse } from "next/og";
import { OgCard, OG_SIZE, ogFonts } from "@/lib/og/render";

export const runtime = "nodejs";
export const alt = "EQB Milano — Coworking";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Coworking"
        title="A base, finally your own."
        subtitle="Rentable rooms for movement and health professionals in Milan."
      />
    ),
    { ...size, fonts: ogFonts }
  );
}
