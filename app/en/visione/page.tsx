import type { Metadata } from "next";
import { VisionePageContent } from "@/components/VisionePageContent";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata("en", "visione", "Vision — EQB Milano");

export default function VisioneRoute() {
  return <VisionePageContent />;
}
