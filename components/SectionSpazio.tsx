"use client";
import React from "react";
import Image from "next/image";
import { Reveal } from "./Reveal";
import "./SectionSpazio.css";

export const SectionSpazio: React.FC = () => {
  return (
    <section id="spazio" className="section-spazio">
      <div className="section-spazio__container">
        <div className="section-spazio__content">
          <Reveal>
            <span className="section-spazio__label">SPAZIO</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="section-spazio__title">
              Il tuo studio,<br />
              già pronto.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="section-spazio__description">
              Ambientazioni curate, luce naturale e<br />
              spazi progettati per il lavoro professionale.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <a href="/spazio" className="section-spazio__cta">Scopri gli spazi</a>
          </Reveal>
        </div>
        <Reveal delay={320} className="section-spazio__image-wrapper">
          <Image
            src="/assets/Stanza Terra.jpg"
            alt="Spazio professionale EQB"
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
