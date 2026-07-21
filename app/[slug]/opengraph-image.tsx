import { ImageResponse } from "next/og";
import { OgPersonCard, OG_SIZE, ogFonts } from "@/lib/og/render";
import { professionisti } from "./data";

export const runtime = "nodejs";
export const size = OG_SIZE;
export const contentType = "image/png";

type Props = { params: Promise<{ slug: string }> };

export async function generateImageMetadata({ params }: Props) {
  const { slug } = await params;
  const p = professionisti.find((x) => x.slug === slug);
  if (!p) return [];
  return [{ id: "og", size, alt: `${p.nome} ${p.cognome} — EQB Milano`, contentType }];
}

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const p = professionisti.find((x) => x.slug === slug);
  if (!p) return new ImageResponse(<div />, size);

  const initials = `${p.nome[0]}${p.cognome[0]}`;

  return new ImageResponse(
    (
      <OgPersonCard
        initials={initials}
        name={`${p.nome} ${p.cognome}`}
        role={p.specializzazione}
      />
    ),
    { ...size, fonts: ogFonts }
  );
}
