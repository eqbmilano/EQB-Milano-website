"use client";
import React from "react";
import "./SectionPercheScegliere.css";

export const SectionPercheScegliere: React.FC = () => {
  return (
    <section id="visione" className="section-perche">
      <div className="section-perche__header">
        <h2 className="section-perche__title">Perché scegliere EQB</h2>
        <p className="section-perche__subtitle">
          Un sistema progettato per far crescere professionisti del benessere.
        </p>
      </div>

      <div className="section-perche__bento">

        {/* Top left: Autonomia */}
        <div className="perche-card card--autonomia">
          <h3 className="perche-card__title">Totale autonomia e libertà.</h3>
          <p className="perche-card__body">
            Paghi solo le ore che usi.<br />
            No vincoli.<br />
            No costi fissi.
          </p>
          <div className="perche-card__slider">
            <div className="slider-track">
              <div className="slider-thumb slider-thumb--a" />
              <div className="slider-thumb slider-thumb--b" />
            </div>
          </div>
        </div>

        {/* Right tall: Clienti */}
        <div className="perche-card card--clienti">
          <h3 className="perche-card__title">I tuoi clienti accolti come si deve.</h3>
          <p className="perche-card__body">
            Reception, snack, ambiente curato. Tu pensi solo al lavoro.
          </p>
          <div className="perche-card__placeholder" />
        </div>

        {/* Middle left: Ecosistema */}
        <div className="perche-card card--ecosistema">
          <h3 className="perche-card__title">Entra in un ecosistema, non solo in uno studio.</h3>
          <p className="perche-card__body">
            Collaborazioni reali, percorsi integrati, sinergie tra specialisti.
          </p>
        </div>

        {/* Bottom left: due mini card */}
        <div className="card--bottom-row">
          <div className="perche-card card--award">
            <span className="perche-card__label">Award winning</span>
            <div className="card__trophy">🏆</div>
          </div>
          <div className="perche-card card--professionisti">
            <div className="card__stars">★★★★★</div>
            <div className="card__number">20+</div>
            <p className="card__number-label">Professionisti attivi</p>
          </div>
        </div>

        {/* Bottom right: Crescita */}
        <div className="perche-card card--crescita">
          <h3 className="perche-card__title">Crescita reale.</h3>
          <p className="perche-card__body">
            Supporto strategico e accesso a nuovi clienti.
          </p>
          <svg className="card__arcs" viewBox="0 0 120 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5,62 A55,55 0 0,1 115,62" stroke="#c8d5c6" strokeWidth="9" strokeLinecap="round" />
            <path d="M18,62 A42,42 0 0,1 102,62" stroke="#9db89a" strokeWidth="9" strokeLinecap="round" />
            <path d="M31,62 A29,29 0 0,1 89,62" stroke="#6e9669" strokeWidth="9" strokeLinecap="round" />
          </svg>
        </div>

      </div>

      <div className="section-perche__cta-wrap">
        <a href="#spazi" className="section-perche__cta">
          Scopri come funziona →
        </a>
      </div>
    </section>
  );
};
