import { Navbar, Footer } from "@/components";
import { CoworkingFunnel } from "@/components/CoworkingFunnel";

export const metadata = {
  title: "Coworking — EQB Milano",
  alternates: { canonical: "/coworking" },
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
