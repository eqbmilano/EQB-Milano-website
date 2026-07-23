"use client";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Navbar, Footer } from "@/components";
import { Reveal } from "@/components/Reveal";
import { VisionePillars } from "@/components/VisionePillars";
import { Multiline } from "@/components/Multiline";
import "./VisionePageContent.css";

export function VisionePageContent() {
  const locale = useLocale();
  const t = useTranslations("visione");

  return (
    <main className="w-full relative">
      <Navbar />

      {/* ── 1. HERO ── */}
      <section className="vis-hero">
        <div className="vis-hero__inner">
          <Reveal><span className="vis-label">{t("heroLabel")}</span></Reveal>
          <Reveal delay={80}>
            <h1 className="vis-hero__title">{t("heroTitle")}</h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="vis-hero__sub">{t("heroSub")}</p>
          </Reveal>
        </div>
      </section>

      {/* ── 2. CHI SIAMO ── */}
      <section className="vis-chisiamo">
        <div className="vis-chisiamo__inner">
          <div className="vis-chisiamo__text">
            <Reveal><span className="vis-label">{t("chiSiamoLabel")}</span></Reveal>
            <Reveal delay={80}>
              <h2 className="vis-chisiamo__title">
                <Multiline text={t("chiSiamoTitle")} />
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="vis-chisiamo__body">
                {t("chiSiamoBody")}
              </p>
            </Reveal>
          </div>
          <Reveal delay={120} className="vis-chisiamo__photo">
            <Image
              src="/assets/Reception-Sala-Attesa.jpg"
              alt="EQB Milano studio"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </Reveal>
        </div>
      </section>

      {/* ── 3. MISSIONE ── */}
      <section className="vis-missione">
        <div className="vis-missione__inner">
          <Reveal><span className="vis-label vis-label--center">{t("missioneLabel")}</span></Reveal>
          <Reveal delay={80}>
            <h2 className="vis-missione__title">{t("missioneTitle")}</h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="vis-missione__body">
              {t("missioneBody")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 4. PILASTRI ── */}
      <section className="vis-pillars">
        <VisionePillars />
      </section>

      {/* ── 5. FONDATORI ── */}
      <section className="vis-team">
        <div className="vis-team__inner">
          <Reveal>
            <span className="vis-label vis-label--center">{t("teamLabel")}</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="vis-team__title">{t("teamTitle")}</h2>
          </Reveal>

          {/* Marco */}
          <div className="vis-founder">
            <Reveal className="vis-founder__photo">
              <Image
                src="/assets/visione-marco.jpg"
                alt={`${t("marco.name")}, ${t("marco.role")}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </Reveal>
            <Reveal delay={100} className="vis-founder__text">
              <h3 className="vis-founder__name">{t("marco.name")}</h3>
              <p className="vis-founder__role">{t("marco.role")}</p>
              <p className="vis-founder__bio">
                {t("marco.bio")}
              </p>
            </Reveal>
          </div>

          {/* Federico */}
          <div className="vis-founder vis-founder--reverse">
            <Reveal delay={100} className="vis-founder__text">
              <h3 className="vis-founder__name">{t("federico.name")}</h3>
              <p className="vis-founder__role">{t("federico.role")}</p>
              <p className="vis-founder__bio">
                {t("federico.bio")}
              </p>
            </Reveal>
            <Reveal className="vis-founder__photo">
              <Image
                src="/assets/visione-federico.jpg"
                alt={`${t("federico.name")}, ${t("federico.role")}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 6. CTA DARK ── */}
      <section className="vis-cta">
        <div className="vis-cta__inner">
          <div className="vis-cta__text">
            <Reveal>
              <h2 className="vis-cta__title"><Multiline text={t("ctaTitle")} /></h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="vis-cta__body">
                {t("ctaBody")}
              </p>
            </Reveal>
            <Reveal delay={200}>
              <a href={`/${locale}/candidatura`} className="vis-cta__btn">
                {t("ctaBtn")}
              </a>
            </Reveal>
          </div>

          <Reveal delay={80} className="vis-cta__mosaic">
            <div className="vis-mosaic__grid">
              <div className="vis-mosaic__item vis-mosaic__item--tall">
                <Image src="/assets/Pilates.jpg" alt="" fill style={{ objectFit: "cover" }} />
              </div>
              <div className="vis-mosaic__item">
                <Image src="/assets/Massaggio-viso.jpg" alt="" fill style={{ objectFit: "cover" }} />
              </div>
              <div className="vis-mosaic__item">
                <Image src="/assets/Sala-Allenamento.jpg" alt="" fill style={{ objectFit: "cover" }} />
              </div>
              <div className="vis-mosaic__item">
                <Image src="/assets/01_Terapia_Manuale.jpeg" alt="" fill style={{ objectFit: "cover" }} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
