import type { Metadata } from "next";
import { VisionePageContent } from "@/components/VisionePageContent";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata("it", "visione", "Visione — EQB Milano");

export default function VisioneRoute() {
  return <VisionePageContent />;
}
