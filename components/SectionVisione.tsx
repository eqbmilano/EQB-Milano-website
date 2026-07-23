"use client";
import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
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
  const t = useTranslations("home.visioneCta");
  const locale = usePathname().split("/")[1] || "it";
  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="visione-manifesto" className="section-visione">
      <div className="visione__glow" aria-hidden />
      <div className={`visione__breath${visible ? " visione__breath--on" : ""}`}>
        <p className="visione__pre">{t("pre")}</p>
        <h2 className="visione__title">{t("title")}</h2>
        <div className="visione__rule" />
      </div>
      <p className={`visione__sub${visible ? " visione__sub--on" : ""}`}>
        {t("sub")}
      </p>
      <Link href={`/${locale}/visione`} className={`visione__cta${visible ? " visione__cta--on" : ""}`}>
        {t("cta")}
      </Link>
    </section>
  );
};
