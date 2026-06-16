"use client";
import React from "react";
import Image from "next/image";
import "./SectionContattiHome.css";

const ArrowUpRight = () => (
  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 10L10 1M10 1H3M10 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const SectionContattiHome: React.FC = () => (
  <section className="section-contatti-home">
    <div className="sch__text">
      <span className="sch__eyebrow">Dove siamo</span>
      <h2 className="sch__title">Piazza Cinque<br />Giornate.</h2>
      <p className="sch__body">
        Viale Regina Margherita 43, 20122 Milano.<br />
        A pochi passi dal cuore della città.
      </p>
      <div className="sch__links">
        <a href="tel:+393755153273" className="sch__link">
          +39 375 515 3273 <ArrowUpRight />
        </a>
        <a href="mailto:info@eqbmilano.it" className="sch__link">
          info@eqbmilano.it <ArrowUpRight />
        </a>
        <a href="https://share.google/bu1nHJ6pAM3LBYwkU" target="_blank" rel="noopener noreferrer" className="sch__link">
          Apri in Maps <ArrowUpRight />
        </a>
      </div>
    </div>

    <div className="sch__photo">
      <Image
        src="/assets/Piazza-Cinque-Giornate.jpg"
        alt="Piazza Cinque Giornate, Milano"
        fill
        sizes="50vw"
        style={{ objectFit: "cover", objectPosition: "center 40%" }}
      />
    </div>
  </section>
);
