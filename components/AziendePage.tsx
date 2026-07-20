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

  return (
    <div className="az-page">

      {/* Opening — full viewport, stesso pattern di spazio-opening */}
      <section className="az-opening">
        <Image
          src="/assets/Sala-Allenamento.jpg"
          alt="Sala Allenamento EQB Milano"
          fill priority sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className="az-opening__overlay" />
        <div className="az-opening__content">
          <span className="az-opening__label">Aziende & eventi</span>
          <h1 className="az-opening__title">Il tuo evento,<br />il nostro spazio.</h1>
          <p className="az-opening__sub">
            Un ambiente diverso per un workshop, un evento o una collaborazione continuativa.
          </p>
        </div>
        <div className="az-opening__scroll" aria-hidden="true">
          <div className="az-opening__scroll-line" />
        </div>
      </section>

      {/* Eventi e workshop */}
      <section className="az-section">
        <div className="az-section__inner">
          <Reveal as="div" className="az-section__media">
            <Image
              src="/assets/Spazi-ingresso-frontale.jpg"
              alt="Ingresso EQB Milano"
              fill
              sizes="(max-width: 900px) 100vw, 55vw"
              style={{ objectFit: "cover" }}
            />
            <div className="az-photo-caption">
              <span>Ingresso e Sala</span>
              <span>EQB Milano</span>
            </div>
          </Reveal>
          <Reveal as="div" className="az-section__text" delay={100}>
            <span className="az-label">Eventi e workshop</span>
            <h2 className="az-section__title">Uno spazio pensato<br />per il corpo, aperto anche a te.</h2>
            <p className="az-section__body">
              La sala allenamento e gli spazi comuni sono disponibili anche fuori dagli orari classici: presto la mattina, la sera tardi, nel weekend. L'accesso è autonomo, e se il tuo evento ha bisogno di una mano ci siamo anche noi di persona.
            </p>
            <p className="az-section__body">
              Ogni richiesta è diversa, quindi qui non trovi un listino: raccontaci il tuo evento e torniamo con una proposta pensata apposta per te.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Partnership e collaborazioni */}
      <section className="az-section az-section--reverse">
        <div className="az-section__inner">
          <Reveal as="div" className="az-section__text" delay={100}>
            <span className="az-label">Collaborazioni</span>
            <h2 className="az-section__title">Una presenza<br />stabile dentro EQB.</h2>
            <p className="az-section__body">
              Alcuni professionisti scelgono di stare a EQB con continuità, con una o più stanze dedicate settimana dopo settimana. Siamo aperti a costruire nuove collaborazioni fatte così, con calma e nei tempi giusti.
            </p>
          </Reveal>
          <Reveal as="div" className="az-section__media">
            <Image
              src="/assets/Spazi-sole-luna-ingresso.jpg"
              alt="Corridoio stanze EQB Milano"
              fill
              sizes="(max-width: 900px) 100vw, 55vw"
              style={{ objectFit: "cover" }}
            />
            <div className="az-photo-caption">
              <span>Corridoio Stanze</span>
              <span>EQB Milano</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Form finale */}
      <section className="az-form">
        <div className="az-form__inner">
          <div className="az-form__head">
            <span className="az-eyebrow">Parliamone</span>
            <h2 className="az-form__title">Raccontaci la tua idea.</h2>
            <p className="az-form__sub">Rispondiamo noi, di persona, appena possibile.</p>
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
            <a className="az-form__btn" href={formWa} target="_blank" rel="noopener noreferrer">
              Scrivici su WhatsApp →
            </a>
            <p className="az-form__alt">Preferisci la mail? <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
          </div>
        </div>
      </section>

    </div>
  );
};
