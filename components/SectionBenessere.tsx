"use client";
import React from "react";
import Image from "next/image";
import { CTAButton } from "./CTAButton";
import { Reveal } from "./Reveal";
import "./SectionBenessere.css";

export const SectionBenessere: React.FC = () => {
  return (
    <section id="benessere" className="section-benessere">
      <div className="section-benessere__header">
        <Reveal>
          <span className="section-benessere__label">BENESSERE</span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="section-benessere__title">
            Due anime, un unico spazio
          </h2>
        </Reveal>
      </div>

      <div className="section-benessere__grid">
        <Reveal className="section-benessere__col" delay={0}>
          <div className="section-benessere__image-wrap">
            <Image
              src="/assets/Pilates.jpg"
              alt="Movimento — Pilates"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
            <span className="section-benessere__tag">MOVIMENTO</span>
          </div>
          <div className="section-benessere__col-text">
            <h3>Muoviti con consapevolezza</h3>
            <p>
              Sale dedicate a yoga, pilates, functional training e ogni forma di
              movimento guidato da professionisti certificati.
            </p>
            <CTAButton href="/benessere" variant="dark">
              PRENOTA →
            </CTAButton>
          </div>
        </Reveal>

        <Reveal className="section-benessere__col" delay={120}>
          <div className="section-benessere__image-wrap">
            <Image
              src="/assets/Massaggio-viso.jpg"
              alt="Benessere — Trattamenti"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
            <span className="section-benessere__tag">TRATTAMENTI</span>
          </div>
          <div className="section-benessere__col-text">
            <h3>Prenditi cura di te</h3>
            <p>
              Massaggi, osteopatia, fisioterapia e trattamenti estetici.
              Professionisti selezionati in un ambiente pensato per il relax.
            </p>
            <CTAButton href="/benessere" variant="dark">
              SCOPRI →
            </CTAButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
