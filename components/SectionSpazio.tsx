"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Reveal } from "./Reveal";
import "./SectionSpazio.css";

const SPAZIO_SLIDES = [
  { src: "/assets/Stanza Terra.jpg", alt: "Stanza Terra EQB Milano" },
  { src: "/assets/Sala-Allenamento.jpg", alt: "Sala allenamento EQB Milano" },
];

function SpazioSlideshow() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % SPAZIO_SLIDES.length), 4500);
    return () => clearInterval(t);
  }, []);
  return (
    <>
      {SPAZIO_SLIDES.map((s, i) => (
        <Image
          key={s.src}
          src={s.src}
          alt={s.alt}
          fill
          className={`section-spazio__image${i === current ? " is-active" : ""}`}
          sizes="(max-width: 900px) 100vw, 50vw"
          priority={i === 0}
        />
      ))}
      <div className="section-spazio__dots">
        {SPAZIO_SLIDES.map((_, i) => (
          <button
            key={i}
            className={`section-spazio__dot${i === current ? " is-active" : ""}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </>
  );
}

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
              Il tuo spazio,<br />
              già pronto.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="section-spazio__description">
              Ambientazioni curate, luce naturale e
              spazi progettati per il lavoro professionale.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <a href="/spazio" className="section-spazio__cta">Scopri gli spazi</a>
          </Reveal>
        </div>
        <Reveal delay={320} className="section-spazio__image-wrapper">
          <SpazioSlideshow />
        </Reveal>
      </div>
    </section>
  );
};
