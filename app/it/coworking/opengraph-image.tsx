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
        title="Una base, finalmente tua."
        subtitle="Sale in affitto per professionisti del movimento e della salute a Milano."
      />
    ),
    { ...size, fonts: ogFonts }
  );
}
