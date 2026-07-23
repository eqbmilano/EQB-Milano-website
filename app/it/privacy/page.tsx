import type { Metadata } from "next";
import { PrivacyPageContent } from "@/components/PrivacyPageContent";

export const metadata: Metadata = {
  title: "Privacy Policy — EQB Milano",
  description:
    "Informativa sul trattamento dei dati personali del sito eqbmilano.it, ai sensi del Regolamento (UE) 2016/679 (GDPR).",
};

export default function ItPrivacy() {
  return <PrivacyPageContent />;
}
