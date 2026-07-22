"use client";
import React, { useRef, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import "./SectionEcosistema.css";

export const SectionEcosistema: React.FC = () => {
  const t = useTranslations("home.ecosistema");
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: "-80px", threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="ecosistema" ref={ref} className={`section-ecosistema${visible ? " is-visible" : ""}`}>
      <div className="section-ecosistema__content">
        <h2 className="section-ecosistema__claim">
          <span className="eco-anim eco-anim--1">{t("claim1")}</span>
          <span className="eco-anim eco-anim--2 section-ecosistema__claim-accent">{t("claim2")}</span>
        </h2>
        <p className="section-ecosistema__subtext eco-anim eco-anim--3">
          {t("subtext")}
        </p>
      </div>
    </section>
  );
};
