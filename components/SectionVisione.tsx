"use client";
import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import "./SectionVisione.css";

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

export const SectionVisione: React.FC = () => {
  const { ref, visible } = useVisible();
  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="visione-manifesto" className="section-visione">
      <div className="visione__glow" aria-hidden />
      <div className={`visione__breath${visible ? " visione__breath--on" : ""}`}>
        <p className="visione__pre">I professionisti del benessere</p>
        <h2 className="visione__title">meritano di più.</h2>
        <div className="visione__rule" />
      </div>
      <p className={`visione__sub${visible ? " visione__sub--on" : ""}`}>
        Scopri i volti del cambiamento.
      </p>
      <Link href="/visione" className={`visione__cta${visible ? " visione__cta--on" : ""}`}>
        La nostra storia →
      </Link>
    </section>
  );
};
