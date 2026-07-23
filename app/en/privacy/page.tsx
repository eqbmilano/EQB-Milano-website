import type { Metadata } from "next";
import { PrivacyPageContent } from "@/components/PrivacyPageContent";

export const metadata: Metadata = {
  title: "Privacy Policy — EQB Milano",
  description:
    "Privacy policy for the processing of personal data on eqbmilano.it, pursuant to Regulation (EU) 2016/679 (GDPR).",
};

export default function EnPrivacy() {
  return <PrivacyPageContent />;
}
