"use client";
import React from "react";
import { Reveal } from "./Reveal";
import "./SectionRecensioni.css";

const professionisti = [
  {
    quote: "Ho finalmente uno spazio professionale senza il peso di un affitto fisso. EQB mi ha permesso di concentrarmi sui miei clienti invece che sui costi.",
    name: "Marco R.",
    role: "Osteopata",
  },
  {
    quote: "La community è il vero valore aggiunto. Ho trovato colleghi con cui collaborare e i clienti iniziano ad arrivare anche per passaparola interno.",
    name: "Sara M.",
    role: "Personal Trainer",
  },
  {
    quote: "Lavoro meglio, guadagno di più, senza l'ansia del canone mensile. EQB è il modello che cercavo da anni.",
    name: "Luca P.",
    role: "Fisioterapista",
  },
];

const clienti = [
  {
    quote: "Ambiente curato, professionisti competenti. Ho trovato in un unico posto il trainer, l'osteopata e il nutrizionista. Non cercherò altro.",
    name: "Giulia F.",
    role: "Cliente",
  },
  {
    quote: "Ho iniziato con il pilates e poi ho scoperto la fisioterapia. Un percorso integrato che non avevo mai trovato altrove, in un posto bello e accogliente.",
    name: "Andrea B.",
    role: "Cliente",
  },
  {
    quote: "La qualità dei professionisti è evidente già al primo appuntamento. Spazio pulito, organizzato, e si respira un'atmosfera diversa.",
    name: "Valentina C.",
    role: "Cliente",
  },
];

function ReviewCard({ quote, name, role }: { quote: string; name: string; role: string }) {
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

export const SectionRecensioni: React.FC = () => (
  <section id="recensioni" className="section-recensioni">
    <div className="recensioni__inner">

      <Reveal className="recensioni__header">
        <span className="recensioni__label">COSA DICONO DI NOI</span>
        <h2 className="recensioni__title">Due punti di vista,<br />una sola certezza.</h2>
      </Reveal>

      <div className="recensioni__cols">
        {/* Professionisti */}
        <div className="recensioni__col">
          <Reveal>
            <span className="recensioni__col-label">Professionisti</span>
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
            <span className="recensioni__col-label">Clienti</span>
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
