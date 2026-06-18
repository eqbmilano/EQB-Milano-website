"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "./entry-b.css";

const Arrow = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function EntryBPage() {
  const [opened, setOpened] = useState(false);
  const [hover, setHover] = useState<"pro" | "cli" | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setOpened(true), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`eb-root${opened ? " is-open" : ""}${hover ? ` eb-root--${hover}` : ""}`}>
      {/* Brand moment */}
      <div className="eb-brand" aria-hidden={opened}>
        <Image src="/assets/Logo-Bianco.svg" alt="EQB Milano" width={96} height={48} className="eb-brand__logo" />
        <span className="eb-brand__claim">Wellness &amp; Fitness Coworking</span>
        <span className="eb-brand__city">Milano</span>
      </div>

      {/* Split */}
      <Link
        href="/coworking"
        className="eb-half eb-half--pro"
        onMouseEnter={() => setHover("pro")}
        onMouseLeave={() => setHover(null)}
        tabIndex={opened ? 0 : -1}
      >
        <Image src="/assets/Sala-Allenamento.jpg" alt="" fill sizes="50vw" style={{ objectFit: "cover" }} />
        <div className="eb-half__overlay" />
        <div className="eb-half__content">
          <span className="eb-half__label">Coworking</span>
          <h2 className="eb-half__title">Sei un<br />professionista?</h2>
          <p className="eb-half__sub">Cerchi uno spazio dove far crescere il tuo lavoro — senza costi fissi.</p>
          <span className="eb-half__cta">Entra <Arrow /></span>
        </div>
      </Link>

      <Link
        href="/benessere"
        className="eb-half eb-half--cli"
        onMouseEnter={() => setHover("cli")}
        onMouseLeave={() => setHover(null)}
        tabIndex={opened ? 0 : -1}
      >
        <Image src="/assets/Dettagli-accoglienza.png" alt="" fill sizes="50vw" style={{ objectFit: "cover", objectPosition: "center 55%" }} />
        <div className="eb-half__overlay" />
        <div className="eb-half__content">
          <span className="eb-half__label">Benessere</span>
          <h2 className="eb-half__title">Sei un<br />cliente?</h2>
          <p className="eb-half__sub">Cerchi cura, movimento ed equilibrio per il tuo corpo.</p>
          <span className="eb-half__cta">Entra <Arrow /></span>
        </div>
      </Link>
    </div>
  );
}
