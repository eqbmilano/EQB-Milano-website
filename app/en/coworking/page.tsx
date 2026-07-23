import type { Metadata } from "next";
import { Navbar, Footer } from "@/components";
import { CoworkingFunnel } from "@/components/CoworkingFunnel";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "en",
  "coworking",
  "Coworking — EQB Milano",
  "Coworking for wellness professionals in Milan: hourly rooms with no fixed costs, pay at the end of the month, and an ecosystem that helps your business grow."
);

export default function EnCoworking() {
  return (
    <main className="w-full relative">
      <Navbar />
      <CoworkingFunnel />
      <Footer />
    </main>
  );
}
