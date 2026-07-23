"use client";
import React, { useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Reveal, useReveal } from "./Reveal";
import "./SectionPercheScegliere.css";

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

function VeroWord({ word }: { word: string }) {
  // Self-triggered: la sottolineatura si disegna quando la parola entra in
  // vista (stesso principio di <Reveal>), senza dipendere da un observer di
  // sezione.
  const { ref, visible } = useReveal();
  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>} className={`perche__vero${visible ? " perche__vero--on" : ""}`}>
      {word}
      <svg className="perche__vero-line" viewBox="0 0 60 8" preserveAspectRatio="none" aria-hidden="true">
        <path d="M1 5 Q10 1 20 5 Q30 9 40 5 Q50 1 59 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </span>
  );
}

export const SectionPercheScegliere: React.FC = () => {
  const t = useTranslations("home.percheScegliere");
  const cards = t.raw("cards") as Card[];
  const locale = usePathname().split("/")[1] || "it";

  // Linea guida animazioni: NIENTE observer unico di sezione con stagger CSS
  // (faceva partire tutto insieme, cosi' card e statement erano gia' fermi
  // quando li scrollavi). Ogni elemento e ogni card e' avvolto nel suo
  // <Reveal>, con il proprio IntersectionObserver: compare quando entra LUI
  // in vista. Stesso meccanismo di SectionSpazio.
  return (
    <section id="coworking" className="section-perche">
      <div className="perche__inner">

        <div className="perche__header">
          <Reveal as="span" className="perche__label">{t("label")}</Reveal>
          <Reveal as="h2" delay={80} className="perche__title">{t("title").split("\n")[0]}<br />{t("title").split("\n")[1]}</Reveal>
          <Reveal as="p" delay={160} className="perche__subtitle">
            {t("subtitlePre")}&nbsp;<VeroWord word={t("subtitleVero")} />,&nbsp;{t("subtitlePost")}
          </Reveal>
        </div>

        <div className="perche__grid-2x2">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <TiltCard card={c} />
            </Reveal>
          ))}
        </div>

        <div className="perche__statement">
          <Reveal className="statement__lines">
            <p className="statement__line">{t("statement1")}</p>
            <p className="statement__line">{t("statement2")}</p>
            <p className="statement__line">{t("statement3")}</p>
          </Reveal>
          <Reveal delay={80}><div className="statement__divider" /></Reveal>
          <Reveal as="p" delay={140} className="statement__coda">{t("coda")}</Reveal>
          <Reveal delay={200}>
            <a href={`/${locale}/coworking`} className="statement__cta">{t("cta")}</a>
          </Reveal>
        </div>

      </div>
    </section>
  );
};
