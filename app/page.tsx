"use client";

import {
  Navbar,
  Hero,
  Essenza,
  Spazio,
  Coworking,
  Benessere,
  Visione,
  Contatti,
} from "@/components";

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Navbar />
      <Hero />
      <Essenza />
      <Spazio />
      <Coworking />
      <Benessere />
      <Visione />
      <Contatti />
    </main>
  );
}

