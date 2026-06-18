"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import "./entry-c.css";

const Arrow = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const SKEW = 9; // gradi di inclinazione della diagonale (in % di larghezza)

export default function EntryCPage() {
  const [split, setSplit] = useState(50);
  const raf = useRef<number | null>(null);

  const onMove = (e: React.MouseEvent) => {
    if (raf.current) return;
    const x = e.clientX;
    raf.current = requestAnimationFrame(() => {
      const pct = (x / window.innerWidth) * 100;
      setSplit(Math.max(30, Math.min(70, pct)));
      raf.current = null;
    });
  };
  const reset = () => setSplit(50);

  // Diagonale: punto alto a split+SKEW, punto basso a split-SKEW
  const proClip = `polygon(0 0, ${split + SKEW}% 0, ${split - SKEW}% 100%, 0 100%)`;
  const cliClip = `polygon(${split + SKEW}% 0, 100% 0, 100% 100%, ${split - SKEW}% 100%)`;

  return (
    <div className="ec-root" onMouseMove={onMove} onMouseLeave={reset}>
      <Link href="/entry" className="ec-logo" aria-label="EQB Milano">
        <Image src="/assets/Logo-Bianco.svg" alt="EQB Milano" width={64} height={32} />
      </Link>

      <Link href="/coworking" className="ec-panel ec-panel--pro" style={{ clipPath: proClip }}>
        <Image src="/assets/Spazi-corridoio.jpg" alt="" fill priority sizes="100vw" style={{ objectFit: "cover" }} />
        <div className="ec-panel__overlay" />
        <div className="ec-panel__content ec-panel__content--pro">
          <span className="ec-panel__label">Coworking</span>
          <h2 className="ec-panel__title">Sei un<br />professionista?</h2>
          <p className="ec-panel__sub">Uno spazio dove far crescere il tuo lavoro — senza costi fissi.</p>
          <span className="ec-panel__cta">Entra <Arrow /></span>
        </div>
      </Link>

      <Link href="/benessere" className="ec-panel ec-panel--cli" style={{ clipPath: cliClip }}>
        <Image src="/assets/Pilates.jpg" alt="" fill priority sizes="100vw" style={{ objectFit: "cover" }} />
        <div className="ec-panel__overlay" />
        <div className="ec-panel__content ec-panel__content--cli">
          <span className="ec-panel__label">Benessere</span>
          <h2 className="ec-panel__title">Sei un<br />cliente?</h2>
          <p className="ec-panel__sub">Cura, movimento ed equilibrio per il tuo corpo.</p>
          <span className="ec-panel__cta">Entra <Arrow /></span>
        </div>
      </Link>
    </div>
  );
}
