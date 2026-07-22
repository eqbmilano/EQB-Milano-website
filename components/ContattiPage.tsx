"use client";
import React, { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { SocialLinks } from "./SocialIcons";
import { Multiline } from "./Multiline";
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
  const t = useTranslations("contatti");
  const locale = useLocale();
  const [nome, setNome] = useState("");
  const [msg, setMsg] = useState("");
  const [mapOn, setMapOn] = useState(false);
  const composed = `${t("waSono")} ${nome.trim() || "[nome]"}. ${msg.trim() || t("waDefaultMsg")}`;
  const formWa = `${WA}${encodeURIComponent(composed)}`;
  const formMail = `mailto:${EMAIL}?subject=${encodeURIComponent(
    `${t("mailOggetto")} — ${nome.trim() || "EQB website"}`
  )}&body=${encodeURIComponent(composed)}`;

  // Cattura server best-effort: non blocca il click, il canale primario resta WhatsApp.
  const notifyServer = () => {
    fetch("/api/contatto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ origine: "contatti", nome, messaggio: msg }),
      keepalive: true,
    }).catch(() => {});
  };

  return (
    <div className="cnt-page">

      {/* Header */}
      <section className="cnt-hero">
        <span className="cnt-eyebrow">{t("eyebrow")}</span>
        <h1 className="cnt-hero__title">{t("heroTitle")}</h1>
        <p className="cnt-hero__sub">
          <Multiline text={t("heroSub")} />
        </p>
      </section>

      {/* Contatti rapidi */}
      <section className="cnt-quick">
        <a className="cnt-card" href={`tel:${PHONE_TEL}`}>
          <span className="cnt-card__ico"><Ico name="phone" /></span>
          <span className="cnt-card__label">{t("telefonoLabel")}</span>
          <span className="cnt-card__value">{PHONE_DISPLAY}</span>
          <span className="cnt-card__cta">{t("telefonoCta")}</span>
        </a>
        <a className="cnt-card cnt-card--wa" href={`${WA}${encodeURIComponent(t("waGenerico"))}`} target="_blank" rel="noopener noreferrer">
          <span className="cnt-card__ico"><Ico name="wa" /></span>
          <span className="cnt-card__label">{t("whatsappLabel")}</span>
          <span className="cnt-card__value">{PHONE_DISPLAY}</span>
          <span className="cnt-card__cta">{t("whatsappCta")}</span>
        </a>
        <a className="cnt-card" href={`mailto:${EMAIL}`}>
          <span className="cnt-card__ico"><Ico name="mail" /></span>
          <span className="cnt-card__label">{t("emailLabel")}</span>
          <span className="cnt-card__value">{EMAIL}</span>
          <span className="cnt-card__cta">{t("emailCta")}</span>
        </a>
      </section>

      {/* Seguici */}
      <section className="cnt-social">
        <span className="cnt-social__label">{t("seguiciLabel")}</span>
        <SocialLinks variant="dark" size={22} iconStyle="circle" />
      </section>

      {/* Dove siamo */}
      <section className="cnt-where">
        <div className="cnt-where__info">
          <span className="cnt-eyebrow">{t("doveSiamoEyebrow")}</span>
          <h2 className="cnt-where__title"><Multiline text={t("doveSiamoTitle")} /></h2>
          <ul className="cnt-where__list">
            <li>
              <span className="cnt-where__ico"><Ico name="pin" /></span>
              <div>
                <strong>{t("indirizzoLabel")}</strong>
                <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer">{ADDRESS}</a>
              </div>
            </li>
            <li>
              <span className="cnt-where__ico"><Ico name="clock" /></span>
              <div>
                <strong>{t("orariLabel")}</strong>
                <span>{t("orariValue")}</span>
              </div>
            </li>
          </ul>
          <a className="cnt-where__btn" href={MAPS_LINK} target="_blank" rel="noopener noreferrer">{t("mapsBtn")}</a>
        </div>
        <div className="cnt-where__map">
          {mapOn ? (
            <iframe
              title="Mappa EQB Milano"
              src={MAPS_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          ) : (
            <button type="button" className="cnt-map-gate" onClick={() => setMapOn(true)}>
              <span className="cnt-map-gate__ico"><Ico name="pin" /></span>
              <span className="cnt-map-gate__title">{t("mapGateTitle")}</span>
              <span className="cnt-map-gate__note">
                {t("mapGateNote")}{" "}
                <a href={`/${locale}/privacy`} onClick={(e) => e.stopPropagation()}>{t("mapGateDettagli")}</a>
              </span>
            </button>
          )}
        </div>
      </section>

      {/* Form */}
      <section className="cnt-form">
        <div className="cnt-form__inner">
          <div className="cnt-form__head">
            <span className="cnt-eyebrow">{t("formEyebrow")}</span>
            <h2 className="cnt-form__title">{t("formTitle")}</h2>
            <p className="cnt-form__sub">{t("formSub")}</p>
          </div>
          <div className="cnt-form__fields">
            <label className="cnt-field">
              <span>{t("fieldNome")}</span>
              <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder={t("fieldNomePlaceholder")} />
            </label>
            <label className="cnt-field">
              <span>{t("fieldMsg")}</span>
              <textarea value={msg} onChange={(e) => setMsg(e.target.value)} rows={4} placeholder={t("fieldMsgPlaceholder")} />
            </label>
            <a className="cnt-form__btn" href={formWa} target="_blank" rel="noopener noreferrer" onClick={notifyServer}>
              {t("btnWhatsapp")}
            </a>
            <p className="cnt-form__alt">{t("altMail")} <a href={formMail} onClick={notifyServer}>{EMAIL}</a></p>
          </div>
        </div>
      </section>

    </div>
  );
};
