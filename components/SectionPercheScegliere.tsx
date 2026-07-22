"use client";
import React, { useRef, useCallback, useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Multiline } from "./Multiline";
import "./SectionPercheScegliere.css";

function useVisible(threshold = 0.2, rootMargin = "-120px") {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { setVisible(e.isIntersecting); },
      { threshold, rootMargin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin]);
  return { ref, visible };
}

type Card = { value: string; title: string; desc: string };

function TiltCard({ card }: { card: Card }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current!;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transition = "transform 0.08s, box-shadow 0.08s";
    el.style.transform = `perspective(700px) rotateX(${-y * 20}deg) rotateY(${x * 20}deg) scale(1.04)`;
    el.style.boxShadow = `${x * -28}px ${y * -28}px 60px rgba(50,37,35,0.20), 0 8px 32px rgba(50,37,35,0.10)`;
  }, []);

  const onLeave = useCallback(() => {
    const el = ref.current!;
    el.style.transition = "transform 0.55s cubic-bezier(0.22,1,0.36,1), box-shadow 0.55s cubic-bezier(0.22,1,0.36,1)";
    el.style.transform = "";
    el.style.boxShadow = "";
  }, []);

  return (
    <div ref={ref} className="pcard" onMouseMove={onMove} onMouseLeave={onLeave}>
      <span className="pcard__value">{card.value}</span>
      <h3 className="pcard__title">{card.title}</h3>
      <p className="pcard__desc">{card.desc}</p>
    </div>
  );
}

function VeroWord({ visible, word }: { visible: boolean; word: string }) {
  return (
    <span className={`perche__vero${visible ? " perche__vero--on" : ""}`}>
      {word}
      <svg className="perche__vero-line" viewBox="0 0 60 8" preserveAspectRatio="none" aria-hidden="true">
        <path d="M1 5 Q10 1 20 5 Q30 9 40 5 Q50 1 59 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </span>
  );
}

export const SectionPercheScegliere: React.FC = () => {
  const locale = useLocale();
  const t = useTranslations("home.percheScegliere");
  const cards = t.raw("cards") as Card[];
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => setVisible(e.isIntersecting),
      { rootMargin: "-180px", threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="coworking" ref={sectionRef} className={`section-perche${visible ? " is-visible" : ""}`}>
      <div className="perche__inner">

        <div className="perche__header">
          <span className="perche__label perche-anim perche-anim--1">{t("label")}</span>
          <h2 className="perche__title perche-anim perche-anim--2"><Multiline text={t("title")} /></h2>
          <p className="perche__subtitle perche-anim perche-anim--3">
            {t("subtitlePre")}&nbsp;<VeroWord visible={visible} word={`${t("subtitleVero")},`} />&nbsp;{t("subtitlePost")}
          </p>
        </div>

        <div className="perche__grid-2x2 perche-anim perche-anim--4">
          {cards.map(c => <TiltCard key={c.title} card={c} />)}
        </div>

        <div className="perche__statement perche-anim perche-anim--5">
          <div className="statement__lines">
            <p className="statement__line">{t("statement1")}</p>
            <p className="statement__line">{t("statement2")}</p>
            <p className="statement__line">{t("statement3")}</p>
          </div>
          <div className="statement__divider" />
          <p className="statement__coda">{t("coda")}</p>
          <a href={`/${locale}/coworking`} className="statement__cta">{t("cta")}</a>
        </div>

      </div>
    </section>
  );
};
