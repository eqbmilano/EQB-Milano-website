"use client";
import React, { useRef, useCallback } from "react";
import { Reveal } from "./Reveal";
import "./CardVariantPreview.css";

const pillars = [
  {
    title: "Flessibilità reale",
    body: "Modello ad ore, senza affitti né contratti rigidi.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="3"/>
        <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
        <line x1="8" y1="15" x2="10" y2="15"/><line x1="14" y1="15" x2="16" y2="15"/>
      </svg>
    ),
  },
  {
    title: "Qualità degli spazi",
    body: "Ambienti curati, reception e servizi inclusi.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.5L12 3l9 6.5V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/>
        <path d="M9 22V12h6v10"/>
      </svg>
    ),
  },
  {
    title: "Collaborazione",
    body: "Percorsi integrati e rete reale tra specialisti.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="7" r="3"/><circle cx="17" cy="9" r="2.5"/>
        <path d="M2 20c0-3.3 3.1-6 7-6s7 2.7 7 6"/>
        <path d="M17.5 14c1.9.4 3.5 1.8 3.5 4"/>
      </svg>
    ),
  },
  {
    title: "Crescita",
    body: "Supporto strategico e accesso a nuovi clienti.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
  },
];

type Variant = "tortora" | "dark" | "outlined" | "accent";

function TiltCard({ title, body, icon, variant }: typeof pillars[0] & { variant: Variant }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current!;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transition = "transform 0.08s, box-shadow 0.08s";
    el.style.transform = `perspective(700px) rotateX(${-y * 16}deg) rotateY(${x * 16}deg) scale(1.03)`;
    el.style.boxShadow = `${x * -22}px ${y * -22}px 48px rgba(50,37,35,0.18), 0 6px 24px rgba(50,37,35,0.08)`;
  }, []);

  const onLeave = useCallback(() => {
    const el = ref.current!;
    el.style.transition = "transform 0.55s cubic-bezier(0.22,1,0.36,1), box-shadow 0.55s cubic-bezier(0.22,1,0.36,1)";
    el.style.transform = "";
    el.style.boxShadow = "";
  }, []);

  return (
    <div
      ref={ref}
      className={`cv-card cv-card--${variant}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className="cv-card__icon">{icon}</div>
      <div className="cv-card__content">
        <h3 className="cv-card__title">{title}</h3>
        <p className="cv-card__body">{body}</p>
      </div>
    </div>
  );
}

function VariantSection({ variant, label }: { variant: Variant; label: string }) {
  return (
    <section className="cv-section">
      <div className="cv-section__inner">
        <Reveal>
          <p className="cv-section__label">{label}</p>
        </Reveal>
        <div className="cv-grid">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 70}>
              <TiltCard {...p} variant={variant} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CardVariantPreview() {
  return (
    <>
      <VariantSection variant="tortora"  label="A — Tortora / Wellness" />
      <VariantSection variant="dark"     label="B — Dark inverted" />
      <VariantSection variant="outlined" label="C — Outlined editorial" />
      <VariantSection variant="accent"   label="D — Accent line" />
    </>
  );
}
