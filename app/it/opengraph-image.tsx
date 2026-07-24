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
        subtitle="Spazio, relazioni, crescita: coworking per il benessere e il movimento nel cuore di Milano."
      />
    ),
    { ...size, fonts: ogFonts }
  );
}
