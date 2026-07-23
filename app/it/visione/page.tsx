import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { VisionePageContent } from "@/components/VisionePageContent";

export const metadata: Metadata = buildPageMetadata(
  "it",
  "visione",
  "Visione — EQB Milano",
  "La storia e la missione di EQB Milano: costruire la prima catena di studi in coworking per la terapia, il movimento e il benessere in Italia."
);

export default function ItVisione() {
  return <VisionePageContent />;
}
