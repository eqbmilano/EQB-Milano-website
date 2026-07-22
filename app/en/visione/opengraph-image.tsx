import { ImageResponse } from "next/og";
import { OgCard, OG_SIZE, ogFonts } from "@/lib/og/render";

export const runtime = "nodejs";
export const alt = "EQB Milano — Vision";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Vision"
        title="Our story"
        subtitle="Meet the team and mission behind EQB Milano."
      />
    ),
    { ...size, fonts: ogFonts }
  );
}
