import type { Metadata } from "next";
import { ScriviciForm } from "@/components/ScriviciForm";

export const metadata: Metadata = {
  title: "Scrivici — EQB Milano",
  robots: { index: false, follow: false },
};

export default function ItScrivici() {
  return <ScriviciForm />;
}
