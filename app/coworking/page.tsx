import { Navbar, Footer } from "@/components";
import { CoworkingFunnel } from "@/components/CoworkingFunnel";

export const metadata = {
  title: "Coworking",
  description:
    "Coworking per professionisti del benessere a Milano: stanze ad ore senza costi fissi, pagamento a fine mese e un ecosistema che ti aiuta a far crescere la tua attività.",
};

export default function CoworkingPage() {
  return (
    <main className="w-full relative">
      <Navbar />
      <CoworkingFunnel />
      <Footer />
    </main>
  );
}
