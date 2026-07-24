"use client";
import { useTranslations } from "next-intl";
import { Navbar, Footer } from "@/components";
import { Multiline } from "@/components/Multiline";
import "./PrivacyPageContent.css";

export function PrivacyPageContent() {
  const t = useTranslations("privacy");

  return (
    <main className="w-full relative">
      <Navbar />

      <section className="priv-hero">
        <div className="priv-hero__inner">
          <span className="priv-label">{t("label")}</span>
          <h1 className="priv-hero__title">{t("heroTitle")}</h1>
          <p className="priv-hero__sub">
            {t("heroSub")}
          </p>
        </div>
      </section>

      <section className="priv-body">
        <div className="priv-body__inner">

          <h2>{t("titolareH2")}</h2>
          <p>
            <Multiline text={t("titolareBody")} />{" "}
            <a href="mailto:info@eqbmilano.it">info@eqbmilano.it</a>
          </p>

          <h2>{t("datiH2")}</h2>

          <h3>{t("dati1H3")}</h3>
          <p>
            {t("dati1Body")}
          </p>

          <h3>{t("dati2H3")}</h3>
          <p>
            {t("dati2Body")}
          </p>

          <h3>{t("dati3H3")}</h3>
          <p>
            {t("dati3BodyPre")}{" "}
            <a href="mailto:info@eqbmilano.it">info@eqbmilano.it</a>
            {t("dati3BodyPost")}
          </p>

          <h3>{t("dati4H3")}</h3>
          <p>
            {t("dati4BodyPre")}{" "}
            <a href="mailto:info@eqbmilano.it">info@eqbmilano.it</a>
            {t("dati4BodyPost")}
          </p>

          <h3>{t("dati5H3")}</h3>
          <p>
            {t("dati5BodyPre")}{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              {t("dati5Link")}
            </a>.
          </p>

          <h2>{t("cookieH2")}</h2>
          <p>
            {t("cookieBody")}
          </p>

          <h2>{t("comunicazioneH2")}</h2>
          <p>
            {t("comunicazioneBodyPre")}{" "}
            <a href="mailto:info@eqbmilano.it">info@eqbmilano.it</a>
            {t("comunicazioneBodyPost")}
          </p>

          <h2>{t("dirittiH2")}</h2>
          <p>
            {t("dirittiBodyPre")}{" "}
            <a href="mailto:info@eqbmilano.it">info@eqbmilano.it</a>{t("dirittiBodyMid")}{" "}
            <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">
              {t("dirittiLink")}
            </a>.
          </p>

          <h2>{t("aggiornamentiH2")}</h2>
          <p>
            <Multiline text={t("aggiornamentiBody")} />
          </p>

        </div>
      </section>

      <Footer />
    </main>
  );
}
