"use client";
import React, { useRef, useCallback } from "react";
import { useTranslations } from "next-intl";
import { Reveal } from "./Reveal";

const ICONS = [
  <svg key="0" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="3"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
    <line x1="8" y1="15" x2="10" y2="15"/>
    <line x1="14" y1="15" x2="16" y2="15"/>
  </svg>,
  <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9.5L12 3l9 6.5V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/>
    <path d="M9 22V12h6v10"/>
  </svg>,
  <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="7" r="3"/>
    <circle cx="17" cy="9" r="2.5"/>
    <path d="M2 20c0-3.3 3.1-6 7-6s7 2.7 7 6"/>
    <path d="M17.5 14c1.9.4 3.5 1.8 3.5 4"/>
  </svg>,
  <svg key="3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
    <polyline points="17 6 23 6 23 12"/>
  </svg>,
];

type Pillar = { title: string; body: string };

function TiltPillar({ title, body, icon }: Pillar & { icon: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current!;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transition = "transform 0.08s, box-shadow 0.08s";
    el.style.transform = `perspective(700px) rotateX(${-y * 18}deg) rotateY(${x * 18}deg) scale(1.04)`;
    el.style.boxShadow = `${x * -24}px ${y * -24}px 50px rgba(50,37,35,0.18), 0 6px 28px rgba(50,37,35,0.08)`;
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
      className="vis-pillar"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className="vis-pillar__icon">{icon}</div>
      <h3 className="vis-pillar__title">{title}</h3>
      <p className="vis-pillar__body">{body}</p>
    </div>
  );
}

export function VisionePillars() {
  const t = useTranslations("visione");
  const pillars = t.raw("pillars") as Pillar[];
  return (
    <div className="vis-pillars__inner">
      {pillars.map((p, i) => (
        <Reveal key={p.title} delay={i * 60}>
          <TiltPillar {...p} icon={ICONS[i]} />
        </Reveal>
      ))}
    </div>
  );
}
