import type { Metadata } from "next";
import { CandidaturaWizard } from "@/components/CandidaturaWizard";

export const metadata: Metadata = {
  title: "Application — EQB Milano",
  robots: { index: false, follow: false },
};

export default function EnCandidatura() {
  return <CandidaturaWizard />;
}
