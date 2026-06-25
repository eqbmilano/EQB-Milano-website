"use client";
import React, { useState } from "react";
import "./ContattiPage.css";

const WA_NUM = "393755153273";
const WA = `https://wa.me/${WA_NUM}?text=`;
const PHONE_DISPLAY = "+39 375 515 3273";
const PHONE_TEL = "+393755153273";
const EMAIL = "info@eqbmilano.it";
const ADDRESS = "Viale Regina Margherita 43, 20122 Milano";
const MAPS_LINK = "https://share.google/bu1nHJ6pAM3LBYwkU";
const MAPS_EMBED = "https://www.google.com/maps?q=Viale%20Regina%20Margherita%2043%2C%2020122%20Milano&output=embed";

function Ico({ name }: { name: "phone" | "wa" | "mail" | "pin" | "clock" }) {
  const c = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (name === "phone") return (<svg {...c}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.56 2.81.69A2 2 0 0 1 22 16.92z" /></svg>);
  if (name === "wa") return (<svg {...c}><path d="M3 21l1.65-4.5A8.5 8.5 0 1 1 7.5 19.3L3 21z" /><path d="M9 9.5c.3 2 2.5 4.2 4.5 4.5l1-1.3 1.7.7c.2 1-.6 1.8-1.6 1.7-2.9-.3-5.3-2.7-5.6-5.6-.1-1 .7-1.8 1.7-1.6l.7 1.7-1.1 1z" /></svg>);
  if (name === "mail") return (<svg {...c}><rect x="2.5" y="4.5" width="19" height="15" rx="2" /><path d="M3 6l9 7 9-7" /></svg>);
  if (name === "clock") return (<svg {...c}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>);
  return (<svg {...c}><path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z" /><circle cx="12" cy="10" r="2.5" /></svg>);
}

export const ContattiPage: React.FC = () => {
  const [nome, setNome] = useState("");
  const [msg, setMsg] = useState("");
  const composed = `Ciao! Sono ${nome.trim() || "[nome]"}. ${msg.trim() || "Vorrei avere informazioni."}`;
  const formWa = `${WA}${encodeURIComponent(composed)}`;

  return (
    <div className="cnt-page">

      {/* Header */}
      <section className="cnt-hero">
        <span className="cnt-eyebrow">Contatti</span>
        <h1 className="cnt-hero__title">Parliamone.</h1>
        <p className="cnt-hero__sub">
          Scrivici, chiamaci o passa a trovarci.<br />Ti rispondiamo in fretta e troviamo insieme da dove partire.
        </p>
      </section>

      {/* Contatti rapidi */}
      <section className="cnt-quick">
        <a className="cnt-card" href={`tel:${PHONE_TEL}`}>
          <span className="cnt-card__ico"><Ico name="phone" /></span>
          <span className="cnt-card__label">Telefono</span>
          <span className="cnt-card__value">{PHONE_DISPLAY}</span>
          <span className="cnt-card__cta">Chiama →</span>
        </a>
        <a className="cnt-card cnt-card--wa" href={`${WA}${encodeURIComponent("Ciao! Vorrei avere informazioni su EQB Milano")}`} target="_blank" rel="noopener noreferrer">
          <span className="cnt-card__ico"><Ico name="wa" /></span>
          <span className="cnt-card__label">WhatsApp</span>
          <span className="cnt-card__value">{PHONE_DISPLAY}</span>
          <span className="cnt-card__cta">Scrivici →</span>
        </a>
        <a className="cnt-card" href={`mailto:${EMAIL}`}>
          <span className="cnt-card__ico"><Ico name="mail" /></span>
          <span className="cnt-card__label">Email</span>
          <span className="cnt-card__value">{EMAIL}</span>
          <span className="cnt-card__cta">Invia →</span>
        </a>
      </section>

      {/* Dove siamo */}
      <section className="cnt-where">
        <div className="cnt-where__info">
          <span className="cnt-eyebrow">Dove siamo</span>
          <h2 className="cnt-where__title">Vieni a trovarci<br />in studio.</h2>
          <ul className="cnt-where__list">
            <li>
              <span className="cnt-where__ico"><Ico name="pin" /></span>
              <div>
                <strong>Indirizzo</strong>
                <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer">{ADDRESS}</a>
              </div>
            </li>
            <li>
              <span className="cnt-where__ico"><Ico name="clock" /></span>
              <div>
                <strong>Orari</strong>
                <span>Su appuntamento — scrivici per fissare il tuo.</span>
              </div>
            </li>
          </ul>
          <a className="cnt-where__btn" href={MAPS_LINK} target="_blank" rel="noopener noreferrer">Apri in Google Maps →</a>
        </div>
        <div className="cnt-where__map">
          <iframe
            title="Mappa EQB Milano"
            src={MAPS_EMBED}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>

      {/* Form */}
      <section className="cnt-form">
        <div className="cnt-form__inner">
          <div className="cnt-form__head">
            <span className="cnt-eyebrow">Scrivici</span>
            <h2 className="cnt-form__title">Raccontaci di cosa hai bisogno.</h2>
            <p className="cnt-form__sub">Compila e invia: si apre WhatsApp con il messaggio già pronto.</p>
          </div>
          <div className="cnt-form__fields">
            <label className="cnt-field">
              <span>Il tuo nome</span>
              <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Come ti chiami?" />
            </label>
            <label className="cnt-field">
              <span>Il tuo messaggio</span>
              <textarea value={msg} onChange={(e) => setMsg(e.target.value)} rows={4} placeholder="Cosa cerchi? Un percorso, un trattamento, uno spazio di lavoro…" />
            </label>
            <a className="cnt-form__btn" href={formWa} target="_blank" rel="noopener noreferrer">
              Invia su WhatsApp →
            </a>
            <p className="cnt-form__alt">Preferisci la mail? <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
          </div>
        </div>
      </section>

    </div>
  );
};
