import type { Metadata } from "next";
import { ScriviciForm } from "@/components/ScriviciForm";

export const metadata: Metadata = {
  title: "Get in touch — EQB Milano",
  robots: { index: false, follow: false },
};

export default function EnScrivici() {
  return <ScriviciForm />;
}
