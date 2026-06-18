"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./entry-a.css";

const Arrow = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function EntryAPage() {
  const [hover, setHover] = useState<"pro" | "cli" | null>(null);

  return (
    <div className={`ea-root${hover ? ` ea-root--${hover}` : ""}`}>
      <Link href="/entry" className="ea-logo" aria-label="EQB Milano">
        <Image src="/assets/Logo-Bianco.svg" alt="EQB Milano" width={64} height={32} />
      </Link>

      <Link
        href="/coworking"
        className="ea-half ea-half--pro"
        onMouseEnter={() => setHover("pro")}
        onMouseLeave={() => setHover(null)}
      >
        <Image src="/assets/Reception-Main.jpg" alt="" fill priority sizes="50vw" style={{ objectFit: "cover" }} />
        <div className="ea-half__overlay" />
        <div className="ea-half__content">
          <span className="ea-half__label">Coworking</span>
          <h2 className="ea-half__title">Sei un<br />professionista?</h2>
          <p className="ea-half__sub">Cerchi uno spazio dove far crescere il tuo lavoro — senza costi fissi.</p>
          <span className="ea-half__cta">Entra <Arrow /></span>
        </div>
      </Link>

      <Link
        href="/benessere"
        className="ea-half ea-half--cli"
        onMouseEnter={() => setHover("cli")}
        onMouseLeave={() => setHover(null)}
      >
        <Image src="/assets/Federico-trattamento.jpg" alt="" fill priority sizes="50vw" style={{ objectFit: "cover", objectPosition: "center 30%" }} />
        <div className="ea-half__overlay" />
        <div className="ea-half__content">
          <span className="ea-half__label">Benessere</span>
          <h2 className="ea-half__title">Sei un<br />cliente?</h2>
          <p className="ea-half__sub">Cerchi cura, movimento ed equilibrio per il tuo corpo.</p>
          <span className="ea-half__cta">Entra <Arrow /></span>
        </div>
      </Link>

      <div className="ea-divider" aria-hidden="true" />
    </div>
  );
}
