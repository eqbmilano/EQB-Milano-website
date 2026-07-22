import type { Metadata } from "next";
import { Navbar, Footer } from "@/components";
import { CoworkingFunnel } from "@/components/CoworkingFunnel";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata("en", "coworking", "Coworking — EQB Milano");

export default function CoworkingRoute() {
  return (
    <main className="w-full relative">
      <Navbar />
      <CoworkingFunnel />
      <Footer />
    </main>
  );
}
