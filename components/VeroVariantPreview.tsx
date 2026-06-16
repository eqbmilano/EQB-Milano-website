"use client";
import React, { useRef, useEffect, useState } from "react";
import "./VeroVariantPreview.css";

function useVisible() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { setVisible(e.isIntersecting); },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

/* ── Testo condiviso con slot per "vero" ── */
function SubtitleWrapper({ children, veroSlot }: { children?: React.ReactNode; veroSlot: React.ReactNode }) {
  return (
    <p className="vero-subtitle">
      Il primo,&nbsp;{veroSlot},&nbsp;coworking polifunzionale ad ore<br />
      per trainer e terapisti.
    </p>
  );
}

/* ══════════════════════════════════════
   A — SVG squiggle sottolineatura
══════════════════════════════════════ */
function VariantA() {
  const { ref, visible } = useVisible();
  return (
    <div ref={ref} className="vero-section vero-section--light">
      <span className="vero-variant-label">A — Sottolineatura SVG animata</span>
      <h2 className="vero-title">Il primo, vero, coworking.</h2>
      <SubtitleWrapper veroSlot={
        <span className={`vero-a${visible ? " vero-a--on" : ""}`}>
          vero
          <svg className="vero-a__line" viewBox="0 0 60 8" preserveAspectRatio="none" aria-hidden="true">
            <path d="M1 5 Q10 1 20 5 Q30 9 40 5 Q50 1 59 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </span>
      } />
    </div>
  );
}

/* ══════════════════════════════════════
   B — Highlight sweep
══════════════════════════════════════ */
function VariantB() {
  const { ref, visible } = useVisible();
  return (
    <div ref={ref} className="vero-section vero-section--dark">
      <span className="vero-variant-label vero-variant-label--light">B — Highlight sweep</span>
      <h2 className="vero-title vero-title--light">Il primo, vero, coworking.</h2>
      <SubtitleWrapper veroSlot={
        <span className={`vero-b${visible ? " vero-b--on" : ""}`}>vero</span>
      } />
    </div>
  );
}

/* ══════════════════════════════════════
   C — Italic + colore brand
══════════════════════════════════════ */
function VariantC() {
  const { ref, visible } = useVisible();
  return (
    <div ref={ref} className="vero-section vero-section--light">
      <span className="vero-variant-label">C — Italic &amp; colore</span>
      <h2 className="vero-title">Il primo, vero, coworking.</h2>
      <SubtitleWrapper veroSlot={
        <em className={`vero-c${visible ? " vero-c--on" : ""}`}>vero</em>
      } />
    </div>
  );
}

/* ══════════════════════════════════════
   D — Underline thick scaleX
══════════════════════════════════════ */
function VariantD() {
  const { ref, visible } = useVisible();
  return (
    <div ref={ref} className="vero-section vero-section--warm">
      <span className="vero-variant-label">D — Underline bold</span>
      <h2 className="vero-title">Il primo, vero, coworking.</h2>
      <SubtitleWrapper veroSlot={
        <span className={`vero-d${visible ? " vero-d--on" : ""}`}>vero</span>
      } />
    </div>
  );
}

export function VeroVariantPreview() {
  return (
    <>
      <VariantA />
      <VariantB />
      <VariantC />
      <VariantD />
    </>
  );
}
