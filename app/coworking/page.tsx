import { Navbar, Footer } from "@/components";
import { CoworkingFunnel } from "@/components/CoworkingFunnel";

export const metadata = {
  title: "Coworking — EQB Milano",
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
