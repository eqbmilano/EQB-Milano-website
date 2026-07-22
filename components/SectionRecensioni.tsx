"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { Reveal } from "./Reveal";
import { Multiline } from "./Multiline";
import "./SectionRecensioni.css";

type Review = { quote: string; name: string; role: string };

function ReviewCard({ quote, name, role }: Review) {
  return (
    <div className="review-card">
      <p className="review-card__quote">&ldquo;{quote}&rdquo;</p>
      <div className="review-card__author">
        <span className="review-card__name">{name}</span>
        <span className="review-card__role">{role}</span>
      </div>
    </div>
  );
}

export const SectionRecensioni: React.FC = () => {
  const t = useTranslations("home.recensioni");
  const professionisti = t.raw("professionisti") as Review[];
  const clienti = t.raw("clienti") as Review[];

  return (
    <section id="recensioni" className="section-recensioni">
      <div className="recensioni__inner">

        <Reveal className="recensioni__header">
          <span className="recensioni__label">{t("label")}</span>
          <h2 className="recensioni__title"><Multiline text={t("title")} /></h2>
        </Reveal>

        <div className="recensioni__cols">
          {/* Professionisti */}
          <div className="recensioni__col">
            <Reveal>
              <span className="recensioni__col-label">{t("colProfessionisti")}</span>
            </Reveal>
            <div className="recensioni__list">
              {professionisti.map((r, i) => (
                <Reveal key={r.name} delay={i * 80}>
                  <ReviewCard {...r} />
                </Reveal>
              ))}
            </div>
          </div>

          {/* Clienti */}
          <div className="recensioni__col">
            <Reveal>
              <span className="recensioni__col-label">{t("colClienti")}</span>
            </Reveal>
            <div className="recensioni__list">
              {clienti.map((r, i) => (
                <Reveal key={r.name} delay={i * 80}>
                  <ReviewCard {...r} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
