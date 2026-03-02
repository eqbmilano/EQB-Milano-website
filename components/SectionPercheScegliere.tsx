import React from "react";
import "./SectionPercheScegliere.css";

const features = [
  {
    number: "01",
    title: "Spazi professionali",
    description:
      "Sale trattamento attrezzate, uffici privati e spazi condivisi progettati per i professionisti del benessere.",
  },
  {
    number: "02",
    title: "Comunità qualificata",
    description:
      "Una rete di professionisti selezionati: fisioterapisti, personal trainer, nutrizionisti, coach e medici.",
  },
  {
    number: "03",
    title: "Posizione strategica",
    description:
      "Nel cuore di Milano, facilmente raggiungibile con i mezzi pubblici e con parcheggio disponibile.",
  },
  {
    number: "04",
    title: "Flessibilità totale",
    description:
      "Formula a ore, giornaliera o mensile. Scegli il piano più adatto alla tua attività.",
  },
];

export const SectionPercheScegliere: React.FC = () => {
  return (
    <section id="visione" className="section-perche">
      <div className="section-perche__header">
        <span className="section-perche__label">VISIONE</span>
        <h2 className="section-perche__title">Perché scegliere EQB</h2>
      </div>

      <div className="section-perche__grid">
        {features.map((f) => (
          <div key={f.number} className="section-perche__card">
            <span className="section-perche__number">{f.number}</span>
            <h3 className="section-perche__card-title">{f.title}</h3>
            <p className="section-perche__card-body">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
