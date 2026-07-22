import type { Metadata } from "next";
import { Navbar, Footer } from "@/components";
import { ContattiPage } from "@/components/ContattiPage";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata("it", "contatti", "Contatti — EQB Milano");

export default function ContattiRoute() {
  return (
    <main className="w-full relative">
      <Navbar />
      <ContattiPage />
      <Footer />
    </main>
  );
}
