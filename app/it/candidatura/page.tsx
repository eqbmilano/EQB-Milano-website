import type { Metadata } from "next";
import { CandidaturaWizard } from "@/components/CandidaturaWizard";

export const metadata: Metadata = {
  title: "Candidatura — EQB Milano",
  robots: { index: false, follow: false },
};

export default function ItCandidatura() {
  return <CandidaturaWizard />;
}
