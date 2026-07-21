import { ImageResponse } from "next/og";
import { OgCard, OG_SIZE, ogFonts } from "@/lib/og/render";

export const runtime = "nodejs";
export const alt = "EQB Milano — Aziende & eventi";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Aziende & eventi"
        title="Il tuo evento, il nostro spazio."
        subtitle="Workshop, eventi e collaborazioni continuative nel wellness coworking di Milano."
      />
    ),
    { ...size, fonts: ogFonts }
  );
}
