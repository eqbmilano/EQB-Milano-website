import type { Metadata } from "next";
import { Navbar, Footer } from "@/components";
import { CoworkingFunnel } from "@/components/CoworkingFunnel";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "it",
  "coworking",
  "Coworking — EQB Milano",
  "Coworking per professionisti del benessere a Milano: stanze ad ore senza costi fissi, pagamento a fine mese e un ecosistema che ti aiuta a far crescere la tua attività."
);

export default function ItCoworking() {
  return (
    <main className="w-full relative">
      <Navbar />
      <CoworkingFunnel />
      <Footer />
    </main>
  );
}
