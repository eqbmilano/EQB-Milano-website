import { CandidaturaWizard } from "@/components/CandidaturaWizard";

export const metadata = {
  title: "Candidatura — EQB Milano",
  robots: { index: false, follow: false },
};

export default function CandidaturaPage() {
  return <CandidaturaWizard />;
}
