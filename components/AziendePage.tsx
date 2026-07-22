"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Reveal } from "./Reveal";
import { Multiline } from "./Multiline";
import "./AziendePage.css";

const WA_NUM = "393755153273";
const WA = `https://wa.me/${WA_NUM}?text=`;
const EMAIL = "info@eqbmilano.it";

type Tipo = "evento" | "collaborazione";

export const AziendePage: React.FC = () => {
  const t = useTranslations("aziende");
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState<Tipo>("evento");
  const [msg, setMsg] = useState("");

  const TIPO_LABEL: Record<Tipo, string> = {
    evento: t("tipoLabelEvento"),
    collaborazione: t("tipoLabelCollaborazione"),
  };

  const composed = `${t("waSono")} ${nome.trim() || "[nome]"}. ${t("waScrivo")} ${TIPO_LABEL[tipo]}. ${msg.trim() || ""}`.trim();
  const formWa = `${WA}${encodeURIComponent(composed)}`;
  const formMail = `mailto:${EMAIL}?subject=${encodeURIComponent(
    `${t("mailOggetto")} — ${TIPO_LABEL[tipo]} (${nome.trim() || "EQB website"})`
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
        <span className="az-eyebrow">{t("eyebrow")}</span>
        <h1 className="az-hero__title"><Multiline text={t("heroTitle")} /></h1>
        <p className="az-hero__sub">
          {t("heroSub")}
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
            <h2 className="az-section__title">{t("eventiTitle")}</h2>
            <p className="az-tagline">{t("eventiTagline")}</p>
            <p className="az-section__body">
              {t("eventiBody")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Partnership e collaborazioni */}
      <section className="az-section az-section--reverse">
        <div className="az-section__inner">
          <Reveal as="div" className="az-section__text" delay={100}>
            <h2 className="az-section__title">{t("partnershipTitle")}</h2>
            <p className="az-tagline">{t("partnershipTagline")}</p>
            <p className="az-section__body">
              {t("partnershipBody")}
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
            <span className="az-eyebrow">{t("formEyebrow")}</span>
            <h2 className="az-form__title">{t("formTitle")}</h2>
            <p className="az-form__sub">{t("formSub")}</p>
          </div>
          <div className="az-form__fields">
            <label className="az-field">
              <span>{t("fieldNome")}</span>
              <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder={t("fieldNomePlaceholder")} />
            </label>
            <div className="az-field">
              <span>{t("fieldTipo")}</span>
              <div className="az-toggle">
                <button
                  type="button"
                  className={`az-toggle__btn${tipo === "evento" ? " is-active" : ""}`}
                  onClick={() => setTipo("evento")}
                >
                  {t("tipoEvento")}
                </button>
                <button
                  type="button"
                  className={`az-toggle__btn${tipo === "collaborazione" ? " is-active" : ""}`}
                  onClick={() => setTipo("collaborazione")}
                >
                  {t("tipoCollaborazione")}
                </button>
              </div>
            </div>
            <label className="az-field">
              <span>{t("fieldMsg")}</span>
              <textarea value={msg} onChange={(e) => setMsg(e.target.value)} rows={4} placeholder={t("fieldMsgPlaceholder")} />
            </label>
            <a className="az-form__btn" href={formWa} target="_blank" rel="noopener noreferrer" onClick={notifyServer}>
              {t("btnWhatsapp")}
            </a>
            <p className="az-form__alt">{t("altMail")} <a href={formMail} onClick={notifyServer}>{EMAIL}</a></p>
          </div>
        </div>
      </section>

    </div>
  );
};
