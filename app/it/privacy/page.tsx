import type { Metadata } from "next";
import { PrivacyPageContent } from "@/components/PrivacyPageContent";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "it",
  "privacy",
  "Privacy Policy — EQB Milano",
  "Informativa sul trattamento dei dati personali del sito eqbmilano.it, ai sensi del Regolamento (UE) 2016/679 (GDPR)."
);

export default function PrivacyRoute() {
  return <PrivacyPageContent />;
}
