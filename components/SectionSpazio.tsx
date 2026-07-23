"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Reveal } from "./Reveal";
import "./SectionSpazio.css";

export const SectionSpazio: React.FC = () => {
  const t = useTranslations("home.spazio");
  const locale = usePathname().split("/")[1] || "it";
  const [titleLine1, titleLine2] = t("title").split("\n");
  return (
    <section id="spazio" className="section-spazio">
      <div className="section-spazio__container">
        <div className="section-spazio__content">
          <Reveal>
            <span className="section-spazio__label">{t("label")}</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="section-spazio__title">
              {titleLine1}<br />
              {titleLine2}
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="section-spazio__description">
              {t("description")}
            </p>
          </Reveal>
          <Reveal delay={240}>
            <a href={`/${locale}/spazio`} className="section-spazio__cta">{t("cta")}</a>
          </Reveal>
        </div>
        <Reveal delay={320} className="section-spazio__image-wrapper">
          <Image
            src="/assets/Stanza Terra.jpg"
            alt="Stanza Terra EQB Milano"
            fill
            className="section-spazio__image"
            sizes="(max-width: 900px) 100vw, 50vw"
            priority
          />
        </Reveal>
      </div>
    </section>
  );
};
