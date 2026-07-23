import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { VisionePageContent } from "@/components/VisionePageContent";

export const metadata: Metadata = buildPageMetadata(
  "en",
  "visione",
  "Vision — EQB Milano",
  "The story and mission of EQB Milano: building Italy's first coworking chain for therapy, movement and wellness studios."
);

export default function EnVisione() {
  return <VisionePageContent />;
}
