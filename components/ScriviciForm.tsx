"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { EqbLogo } from "./CandidaturaWizard";
import "./CandidaturaWizard.css";

const EMAIL = "info@eqbmilano.it";
const WA = "https://wa.me/393755153273?text=";

// Flusso isolato a schermo intero, stesso chrome (logo + X) di /candidatura:
// un solo step, il form "Scrivici" per chi arriva dal dropdown UNISCITI ->
// Sei un cliente? Niente barra di avanzamento (un solo step, non serve).
export const ScriviciForm: React.FC = () => {
  const locale = usePathname().split("/")[1] || "it";
  const t = useTranslations("scrivici");
  const [nome, setNome] = useState("");
  const [msg, setMsg] = useState("");

  const composed = `${t("waSono")} ${nome.trim() || "[nome]"}. ${msg.trim() || t("waDefaultMsg")}`;
  const formWa = `${WA}${encodeURIComponent(composed)}`;
  const formMail = `mailto:${EMAIL}?subject=${encodeURIComponent(t("mailOggetto"))}&body=${encodeURIComponent(composed)}`;

  const notifyServer = () => {
    fetch("/api/contatto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ origine: "scrivici-cliente", nome, messaggio: msg }),
      keepalive: true,
    }).catch(() => {});
  };

  return (
    <div className="cand-app">
      <div className="cand-chrome">
        <div className="cand-chrome__brand">
          <EqbLogo />
        </div>
        <div style={{ flex: 1 }} />
        <a className="cand-chrome__exit" href={`/${locale}`} aria-label={t("exit")} title={t("exit")}>
          &#10005;
        </a>
      </div>

      <main className="cand-stage">
        <section className="cand-step is-active">
          <p className="cand-step__eyebrow">{t("eyebrow")}</p>
          <h1 className="cand-step__title">{t("title")}</h1>
          <p className="cand-step__sub">{t("sub")}</p>
          <div className="cand-fields">
            <div className="cand-field">
              <label htmlFor="scrivici-nome">{t("fieldNome")}</label>
              <input
                id="scrivici-nome"
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder={t("fieldNomePlaceholder")}
              />
            </div>
            <div className="cand-field">
              <label htmlFor="scrivici-msg">{t("fieldMsg")}</label>
              <textarea
                id="scrivici-msg"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                rows={4}
                placeholder={t("fieldMsgPlaceholder")}
              />
            </div>
          </div>
          <div className="cand-fields--inline">
            <a
              className="cand-btn"
              href={formWa}
              target="_blank"
              rel="noopener noreferrer"
              onClick={notifyServer}
              style={{ width: "fit-content" }}
            >
              {t("btnWhatsapp")}
            </a>
            <a
              href={formMail}
              onClick={notifyServer}
              className="cand-link-quiet"
            >
              {t("btnMail")}
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};
