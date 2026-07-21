"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Reveal } from "./Reveal";
import "./AziendePage.css";

const WA_NUM = "393755153273";
const WA = `https://wa.me/${WA_NUM}?text=`;
const EMAIL = "info@eqbmilano.it";

type Tipo = "evento" | "collaborazione";

const TIPO_LABEL: Record<Tipo, string> = {
  evento: "un evento o un workshop",
  collaborazione: "una collaborazione stabile",
};

export const AziendePage: React.FC = () => {
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState<Tipo>("evento");
  const [msg, setMsg] = useState("");

  const composed = `Ciao! Sono ${nome.trim() || "[nome]"}. Vi scrivo per ${TIPO_LABEL[tipo]}. ${msg.trim() || ""}`.trim();
  const formWa = `${WA}${encodeURIComponent(composed)}`;
  const formMail = `mailto:${EMAIL}?subject=${encodeURIComponent(
    `Aziende & eventi — ${TIPO_LABEL[tipo]} (${nome.trim() || "sito EQB"})`
  )}&body=${encodeURIComponent(composed)}`;

  // Cattura server best-effort: non blocca il click, il canale primario resta WhatsApp.
  const notifyServer = () => {
    fetch("/api/contatto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ origine: "aziende", nome, tipo: TIPO_LABEL[tipo], messaggio: msg }),
      keepalive: true,
    }).catch(() => {});
  };

  return (
    <div className="az-page">

      {/* Hero */}
      <section className="az-hero">
        <span className="az-eyebrow">Aziende & eventi</span>
        <h1 className="az-hero__title">Il tuo evento,<br />il nostro spazio.</h1>
        <p className="az-hero__sub">
          Se cerchi un ambiente diverso per un workshop, un evento o una collaborazione continuativa, raccontaci cosa hai in mente.
        </p>
      </section>

      {/* Eventi e workshop */}
      <section className="az-section">
        <div className="az-section__inner">
          <Reveal as="div" className="az-section__media">
            <Image
              src="/assets/Spazi-ingresso-frontale.jpg"
              alt="Ingresso EQB Milano"
              fill
              sizes="(max-width: 900px) 100vw, 58vw"
              style={{ objectFit: "cover" }}
            />
          </Reveal>
          <Reveal as="div" className="az-section__text" delay={100}>
            <h2 className="az-section__title">Eventi e Workshop</h2>
            <p className="az-tagline">Il posto giusto per farlo bene.</p>
            <p className="az-section__body">
              Ospitiamo esperienze costruite attorno al benessere: workshop, incontri, format dedicati a chi lavora con il corpo e con le persone. Mettiamo a disposizione l'ambiente, la rete di professionisti che vive lo spazio ogni giorno e la cura per ogni dettaglio.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Partnership e collaborazioni */}
      <section className="az-section az-section--reverse">
        <div className="az-section__inner">
          <Reveal as="div" className="az-section__text" delay={100}>
            <h2 className="az-section__title">Partnership e Collaborazioni</h2>
            <p className="az-tagline">Una casa per chi lavora con continuità.</p>
            <p className="az-section__body">
              Lavoriamo con realtà che condividono il nostro modo di intendere il benessere. Brand, professionisti e progetti che vogliono crescere in un contesto costruito sulla qualità e sulla fiducia.
            </p>
          </Reveal>
          <Reveal as="div" className="az-section__media">
            <Image
              src="/assets/Spazi-sole-luna-ingresso.jpg"
              alt="Corridoio stanze EQB Milano"
              fill
              sizes="(max-width: 900px) 100vw, 58vw"
              style={{ objectFit: "cover" }}
            />
          </Reveal>
        </div>
      </section>

      {/* Form finale */}
      <section className="az-form">
        <div className="az-form__inner">
          <div className="az-form__head">
            <span className="az-eyebrow">Parliamone</span>
            <h2 className="az-form__title">Raccontaci la tua idea.</h2>
            <p className="az-form__sub">Rispondiamo noi, di persona.</p>
          </div>
          <div className="az-form__fields">
            <label className="az-field">
              <span>Il tuo nome</span>
              <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Come ti chiami?" />
            </label>
            <div className="az-field">
              <span>Di cosa si tratta</span>
              <div className="az-toggle">
                <button
                  type="button"
                  className={`az-toggle__btn${tipo === "evento" ? " is-active" : ""}`}
                  onClick={() => setTipo("evento")}
                >
                  Evento o workshop
                </button>
                <button
                  type="button"
                  className={`az-toggle__btn${tipo === "collaborazione" ? " is-active" : ""}`}
                  onClick={() => setTipo("collaborazione")}
                >
                  Collaborazione stabile
                </button>
              </div>
            </div>
            <label className="az-field">
              <span>Il tuo messaggio</span>
              <textarea value={msg} onChange={(e) => setMsg(e.target.value)} rows={4} placeholder="Di cosa hai bisogno? Quando vorresti fare tutto questo?" />
            </label>
            <a className="az-form__btn" href={formWa} target="_blank" rel="noopener noreferrer" onClick={notifyServer}>
              Scrivici su WhatsApp →
            </a>
            <p className="az-form__alt">Preferisci la mail? <a href={formMail} onClick={notifyServer}>{EMAIL}</a></p>
          </div>
        </div>
      </section>

    </div>
  );
};
