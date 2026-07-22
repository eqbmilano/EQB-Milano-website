import { ImageResponse } from "next/og";
import { OgCard, OG_SIZE, ogFonts } from "@/lib/og/render";

export const runtime = "nodejs";
export const alt = "EQB Milano — Contact";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Contact"
        title="Let's talk"
        subtitle="Write to us on WhatsApp, email, or come visit us in the studio in Milan."
      />
    ),
    { ...size, fonts: ogFonts }
  );
}
