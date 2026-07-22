import { ImageResponse } from "next/og";
import { OgCard, OG_SIZE, ogFonts } from "@/lib/og/render";

export const runtime = "nodejs";
export const alt = "EQB Milano — Visione";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Visione"
        title="La nostra storia"
        subtitle="Conosci il team e la missione di EQB Milano."
      />
    ),
    { ...size, fonts: ogFonts }
  );
}
