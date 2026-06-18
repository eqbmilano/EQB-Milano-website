"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./entry-d.css";

export default function EntryDPage() {
  const [side, setSide] = useState<"pro" | "cli" | null>(null);

  return (
    <div className={`ed-root${side ? ` ed-root--${side}` : ""}`}>
      {/* Una sola scena: sfondo base d'atmosfera + due tinte che emergono ai lati */}
      <div className="ed-bg ed-bg--base">
        <Image src="/assets/Reception-Main.jpg" alt="" fill priority sizes="100vw" style={{ objectFit: "cover" }} />
      </div>
      <div className="ed-bg ed-bg--pro">
        <Image src="/assets/Sala-Allenamento.jpg" alt="" fill sizes="100vw" style={{ objectFit: "cover" }} />
      </div>
      <div className="ed-bg ed-bg--cli">
        <Image src="/assets/Federico-trattamento.jpg" alt="" fill sizes="100vw" style={{ objectFit: "cover", objectPosition: "center 30%" }} />
      </div>
      <div className="ed-overlay" />

      {/* Brand al centro */}
      <div className="ed-center">
        <Image src="/assets/Logo-Bianco.svg" alt="EQB Milano" width={110} height={55} className="ed-center__logo" />
        <span className="ed-center__claim">Wellness &amp; Fitness Coworking · Milano</span>
        <span className="ed-center__hint">Da che parte vuoi entrare?</span>
      </div>

      {/* Due direzioni che divergono ai lati */}
      <Link
        href="/coworking"
        className="ed-side ed-side--pro"
        onMouseEnter={() => setSide("pro")}
        onMouseLeave={() => setSide(null)}
      >
        <svg className="ed-side__arrow" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M11 6l-6 6 6 6" />
        </svg>
        <span className="ed-side__label">Coworking</span>
        <span className="ed-side__title">Sei un professionista?</span>
        <span className="ed-side__sub">Uno spazio dove far crescere il tuo lavoro — senza costi fissi.</span>
      </Link>

      <Link
        href="/benessere"
        className="ed-side ed-side--cli"
        onMouseEnter={() => setSide("cli")}
        onMouseLeave={() => setSide(null)}
      >
        <svg className="ed-side__arrow" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
        <span className="ed-side__label">Benessere</span>
        <span className="ed-side__title">Sei un cliente?</span>
        <span className="ed-side__sub">Cura, movimento ed equilibrio per il tuo corpo.</span>
      </Link>
    </div>
  );
}
