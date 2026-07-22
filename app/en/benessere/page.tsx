import type { Metadata } from "next";
import { Navbar, Footer } from "@/components";
import { BenesserePageV2 } from "@/components/BenesserePageV2";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata("en", "benessere", "Wellness — EQB Milano");

export default function BenessereRoute() {
  return (
    <main className="w-full relative">
      <Navbar />
      <BenesserePageV2 />
      <Footer />
    </main>
  );
}
