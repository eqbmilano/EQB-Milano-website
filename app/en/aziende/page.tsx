import type { Metadata } from "next";
import { Navbar, Footer } from "@/components";
import { AziendePage } from "@/components/AziendePage";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata("en", "aziende", "Companies & Events — EQB Milano");

export default function AziendeRoute() {
  return (
    <main className="w-full relative">
      <Navbar />
      <AziendePage />
      <Footer />
    </main>
  );
}
