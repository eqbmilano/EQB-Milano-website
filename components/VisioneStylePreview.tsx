"use client";
import React, { useRef, useEffect, useState } from "react";
import "./VisioneStylePreview.css";

function useVisible(threshold = 0.25) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { setVisible(e.isIntersecting); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ══════════════════════════════════════
   A1 — CREAM + BREATH
   Animazione blur → focus, sfondo crema.
══════════════════════════════════════ */
function VariantA1() {
  const { ref, visible } = useVisible();
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="vs-section vs-section--cream">
      <span className="vs-label vs-label--dark">A1 — Cream · Breath</span>
      <div className={`vs-breath${visible ? " vs-breath--on" : ""}`}>
        <p className="vs-pre vs-pre--dark">I professionisti del benessere</p>
        <h2 className="vs-title vs-title--dark">meritano di più.</h2>
        <div className="vs-rule vs-rule--dark" />
      </div>
      <p className={`vs-sub vs-sub--dark${visible ? " vs-sub--on" : ""}`}>
        Scopri i volti del cambiamento.
      </p>
      <a href="/visione" className={`vs-cta vs-cta--dark${visible ? " vs-cta--on" : ""}`}>
        La nostra storia →
      </a>
    </section>
  );
}

/* ══════════════════════════════════════
   A2 — CREAM + SPOTLIGHT
   Stesso alone caldo di C, ma su crema.
   Testo scuro che emerge dalla luce.
══════════════════════════════════════ */
function VariantA2() {
  const { ref, visible } = useVisible();
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="vs-section vs-section--cream-spot">
      <span className="vs-label vs-label--dark">A2 — Cream · Spotlight</span>
      <div className="vs-cream-glow" aria-hidden />
      <div className={`vs-breath${visible ? " vs-breath--on" : ""}`} style={{ position: "relative", zIndex: 1 }}>
        <p className="vs-pre vs-pre--dark">I professionisti del benessere</p>
        <h2 className="vs-title vs-title--dark">meritano di più.</h2>
        <div className="vs-rule vs-rule--dark" />
      </div>
      <p className={`vs-sub vs-sub--dark${visible ? " vs-sub--on" : ""}`} style={{ position: "relative", zIndex: 1 }}>
        Scopri i volti del cambiamento.
      </p>
      <a href="/visione" className={`vs-cta vs-cta--dark${visible ? " vs-cta--on" : ""}`} style={{ position: "relative", zIndex: 1 }}>
        La nostra storia →
      </a>
    </section>
  );
}

export function VisioneStylePreview() {
  return (
    <>
      <VariantA1 />
      <VariantA2 />
    </>
  );
}
