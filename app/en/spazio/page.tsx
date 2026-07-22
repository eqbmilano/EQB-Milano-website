import type { Metadata } from "next";
import { Navbar, Footer, FixedBackground } from "@/components";
import { SpazioPage } from "@/components/SpazioPage";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata("en", "spazio", "Space — EQB Milano");

export default function SpazioRoute() {
  return (
    <>
      <FixedBackground src="/assets/Spazi-sole-luna-ingresso.jpg" alt="Sole Room and Luna Room entrance" />
      <main className="w-full relative">
        <Navbar />
        <SpazioPage />
        <Footer />
      </main>
    </>
  );
}
