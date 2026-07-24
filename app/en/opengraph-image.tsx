import { ImageResponse } from "next/og";
import { OgCard, OG_SIZE, ogFonts } from "@/lib/og/render";

export const runtime = "nodejs";
export const alt = "EQB Milano — Wellness & Fitness Coworking";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Wellness & Fitness Coworking"
        title="EQB Milano"
        subtitle="Space, relationships, growth: a coworking space for wellness and movement in the heart of Milan."
      />
    ),
    { ...size, fonts: ogFonts }
  );
}
