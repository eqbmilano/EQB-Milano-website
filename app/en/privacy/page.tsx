import type { Metadata } from "next";
import { PrivacyPageContent } from "@/components/PrivacyPageContent";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "en",
  "privacy",
  "Privacy Policy — EQB Milano",
  "Privacy policy for the eqbmilano.it website, in accordance with EU Regulation 2016/679 (GDPR)."
);

export default function PrivacyRoute() {
  return <PrivacyPageContent />;
}
