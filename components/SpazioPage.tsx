"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { ParallaxDivider } from "./ParallaxDivider";
import { Multiline } from "./Multiline";
import "./SpazioPage.css";

function useVisible(rootMargin = "-60px") {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { rootMargin, threshold: 0.04 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [rootMargin]);
  return { ref, visible };
}

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current!;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transition = "transform 0.08s, box-shadow 0.08s";
    el.style.transform = `perspective(700px) rotateX(${-y * 12}deg) rotateY(${x * 12}deg) scale(1.02)`;
    el.style.boxShadow = `${x * -18}px ${y * -18}px 40px rgba(50,37,35,0.1), 0 6px 24px rgba(50,37,35,0.06)`;
  };
  const onLeave = () => {
    const el = ref.current!;
    el.style.transition = "transform 0.55s cubic-bezier(0.22,1,0.36,1), box-shadow 0.55s cubic-bezier(0.22,1,0.36,1)";
    el.style.transform = "";
    el.style.boxShadow = "";
  };
  return (
    <div ref={ref} className={className} onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </div>
  );
}

export const SpazioPage: React.FC = () => {
  const locale = useLocale();
  const t = useTranslations("spazio");
  const s0 = useVisible("-20px");
  const s1 = useVisible("-60px");
  const s2 = useVisible("-60px");
  const s3 = useVisible("-60px");
  const s5 = useVisible("-60px");
  const s6 = useVisible("-60px");
  const s7 = useVisible("-60px");
  const s8 = useVisible("-60px");
  const sServizi = useVisible("-60px");

  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const ctaRef = useRef<HTMLElement>(null);
  const showSticky = scrolledPastHero && !ctaVisible;

  useEffect(() => {
    const onScroll = () => setScrolledPastHero(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = ctaRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => setCtaVisible(e.isIntersecting), {
      rootMargin: "0px 0px -20% 0px",
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="spazio-page">

      {/* ── 1. Opening — full viewport ── */}
      <section ref={s0.ref as React.RefObject<HTMLElement>} className={`spazio-opening${s0.visible ? " is-on" : ""}`}>
        <Image
          src="/assets/Spazi-corridoio.jpg"
          alt="EQB Milano — corridoio con stampe anatomiche"
          fill priority sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
        />
        <div className="spazio-opening__overlay" />
        <div className="spazio-opening__content">
          <span className="spazio-opening__label spazio-fade spazio-fade--1">{t("openingLabel")}</span>
          <h1 className="spazio-opening__title spazio-fade spazio-fade--2">
            <Multiline text={t("openingTitle")} />
          </h1>
          <p className="spazio-opening__sub spazio-fade spazio-fade--3">
            {t("openingSub")}
          </p>
        </div>
        <div className="spazio-opening__scroll" aria-hidden="true">
          <div className="spazio-opening__scroll-line" />
        </div>
      </section>

      {/* ── 2. Accoglienza ── */}
      <section ref={s1.ref as React.RefObject<HTMLElement>} className={`spazio-section spazio-v4${s1.visible ? " is-on" : ""}`}>
        <div className="spazio-v4__inner">
          <div className="spazio-v4__main spazio-up spazio-up--1">
            <Image src="/assets/Spazi-reception-ambiente.jpg" alt="Reception EQB Milano" fill
              sizes="(max-width: 900px) 100vw, 55vw"
              style={{ objectFit: "cover", objectPosition: "center" }} />
            <div className="spazio-photo-caption">
              <span>{t("reception.captionTitle")}</span>
              <span>EQB Milano</span>
            </div>
          </div>
          <div className="spazio-v4__text spazio-up spazio-up--2">
            <span className="spazio-label">{t("reception.label")}</span>
            <h2 className="spazio-section__title">
              {t("reception.title")}
            </h2>
            <p className="spazio-tagline">{t("reception.tagline")}</p>
            <p className="spazio-section__body">
              {t("reception.body")}
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. Aree comuni ── */}
      <section ref={s7.ref as React.RefObject<HTMLElement>} className={`spazio-section spazio-comuni${s7.visible ? " is-on" : ""}`}>
        <div className="spazio-comuni__inner">
          <div className="spazio-comuni__text spazio-up spazio-up--1">
            <span className="spazio-label">{t("comuni.label")}</span>
            <h2 className="spazio-section__title">
              {t("comuni.title")}
            </h2>
            <p className="spazio-tagline">{t("comuni.tagline")}</p>
            <p className="spazio-section__body">
              {t("comuni.body")}
            </p>
            <TiltCard className="spazio-card spazio-card--featured spazio-up spazio-up--3">
              <span className="spazio-label">{t("comuni.caratteristicheLabel")}</span>
              <ul>
                {(t.raw("comuni.features") as string[]).map((f) => (
                  <li key={f}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </TiltCard>
          </div>
          <div className="spazio-comuni__gallery spazio-up spazio-up--2">
            <div className="spazio-comuni__main">
              <Image src="/assets/Spazi-relax-corner.jpg" alt={t("comuni.snackCaption")} fill
                sizes="(max-width: 900px) 100vw, 45vw"
                style={{ objectFit: "cover", objectPosition: "center" }} />
              <div className="spazio-photo-caption">
                <span>{t("comuni.snackCaption")}</span>
                <span>EQB Milano</span>
              </div>
            </div>
            <div className="spazio-comuni__side">
              <div className="spazio-comuni__side-img">
                <Image src="/assets/Spazi-bagno-completo.jpg" alt="Bagno con doccia EQB Milano" fill
                  sizes="(max-width: 900px) 100vw, 22vw"
                  style={{ objectFit: "cover", objectPosition: "center" }} />
              </div>
              <div className="spazio-comuni__side-img">
                <Image src="/assets/Spazi-bagno-doccia.jpg" alt="Doccia EQB Milano" fill
                  sizes="(max-width: 900px) 100vw, 22vw"
                  style={{ objectFit: "cover", objectPosition: "center" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3b. Servizi inclusi — piccola sezione a parte ── */}
      <section ref={sServizi.ref as React.RefObject<HTMLElement>} className={`spazio-servizi${sServizi.visible ? " is-on" : ""}`}>
        <div className="spazio-servizi__inner spazio-up spazio-up--1">
          <span className="spazio-label">{t("serviziLabel")}</span>
          <ul className="spazio-servizi__list">
            {(t.raw("servizi") as string[]).map((s) => (
              <li key={s}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 4. Intermezzo Piano Nobile ── */}
      <ParallaxDivider src="/assets/Spazi-ingresso-frontale.jpg" text={t("dividerPianoNobile")} />

      {/* ── 5. Sala Allenamento ── */}
      <section ref={s2.ref as React.RefObject<HTMLElement>} className={`spazio-section spazio-sala${s2.visible ? " is-on" : ""}`}>
        <div className="spazio-sala__inner">
          <div className="spazio-sala__text">
            <span className="spazio-label spazio-up spazio-up--1">{t("sala.label")}</span>
            <h2 className="spazio-section__title spazio-up spazio-up--2">
              {t("sala.title")}
            </h2>
            <p className="spazio-section__body spazio-up spazio-up--3">
              {t("sala.body")}
            </p>
            <TiltCard className="spazio-card spazio-up spazio-up--4">
              <span className="spazio-label">{t("sala.caratteristicheLabel")}</span>
              <ul>
                {(t.raw("sala.features") as string[]).map((f) => <li key={f}>{f}</li>)}
              </ul>
            </TiltCard>
          </div>
          <div className="spazio-sala__image spazio-up spazio-up--2">
            <div className="spazio-photo-frame">
              <Image src="/assets/Sala-Allenamento.jpg" alt={t("sala.caption")} fill
                sizes="(max-width: 900px) 100vw, 55vw"
                style={{ objectFit: "cover", objectPosition: "center" }} />
              <div className="spazio-photo-caption">
                <span>{t("sala.caption")}</span>
                <span>EQB Milano</span>
              </div>
            </div>
            <div className="spazio-tags">
              {(t.raw("sala.tags") as string[]).map((tag) => <span key={tag} className="spazio-tag">{tag}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Stanza Terra ── */}
      <section ref={s3.ref as React.RefObject<HTMLElement>} className={`spazio-section spazio-terra${s3.visible ? " is-on" : ""}`}>
        <div className="spazio-terra__inner">
          <div className="spazio-terra__image spazio-up spazio-up--1">
            <div className="spazio-photo-frame">
              <Image src="/assets/Stanza Terra.jpg" alt={t("terra.caption")} fill
                sizes="(max-width: 900px) 100vw, 55vw"
                style={{ objectFit: "cover", objectPosition: "center" }} />
              <div className="spazio-photo-caption">
                <span>{t("terra.caption")}</span>
                <span>EQB Milano</span>
              </div>
            </div>
            <div className="spazio-tags">
              {(t.raw("terra.tags") as string[]).map((tag) => <span key={tag} className="spazio-tag">{tag}</span>)}
            </div>
          </div>
          <div className="spazio-terra__text spazio-up spazio-up--2">
            <span className="spazio-label">{t("terra.label")}</span>
            <h2 className="spazio-section__title">
              {t("terra.title")}
            </h2>
            <p className="spazio-section__body">
              {t("terra.body")}
            </p>
            <TiltCard className="spazio-card spazio-up spazio-up--3">
              <span className="spazio-label">{t("terra.caratteristicheLabel")}</span>
              <ul>
                {(t.raw("terra.features") as string[]).map((f) => <li key={f}>{f}</li>)}
              </ul>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* ── 6. Intermezzo: la foto ora vive nel FixedBackground della pagina,
             qui c'è solo il varco trasparente che la rivela (come in home) ── */}
      <ParallaxDivider text={t("dividerPianoInferiore")} />

      {/* ── 6. Stanza Sole ── */}
      <section ref={s5.ref as React.RefObject<HTMLElement>} className={`spazio-section spazio-sole${s5.visible ? " is-on" : ""}`}>
        <div className="spazio-sole__inner">
          <div className="spazio-sole__image spazio-up spazio-up--1">
            <div className="spazio-photo-frame">
              <Image src="/assets/Spazi-sole-2.jpg" alt={t("sole.caption")} fill
                sizes="(max-width: 900px) 100vw, 55vw"
                style={{ objectFit: "cover", objectPosition: "center" }} />
              <div className="spazio-photo-caption">
                <span>{t("sole.caption")}</span>
                <span>EQB Milano</span>
              </div>
            </div>
            <div className="spazio-tags">
              {(t.raw("sole.tags") as string[]).map((tag) => <span key={tag} className="spazio-tag">{tag}</span>)}
            </div>
          </div>
          <div className="spazio-sole__text spazio-up spazio-up--2">
            <span className="spazio-label">{t("sole.label")}</span>
            <h2 className="spazio-section__title">
              {t("sole.title")}
            </h2>
            <p className="spazio-section__body">
              {t("sole.body")}
            </p>
            <TiltCard className="spazio-card spazio-up spazio-up--3">
              <span className="spazio-label">{t("sole.caratteristicheLabel")}</span>
              <ul>
                {(t.raw("sole.features") as string[]).map((f) => <li key={f}>{f}</li>)}
              </ul>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* ── 7. Stanza Luna ── */}
      <section ref={s6.ref as React.RefObject<HTMLElement>} className={`spazio-section spazio-luna${s6.visible ? " is-on" : ""}`}>
        <div className="spazio-luna__inner">
          <div className="spazio-luna__text spazio-up spazio-up--1">
            <span className="spazio-label">{t("luna.label")}</span>
            <h2 className="spazio-section__title">
              {t("luna.title")}
            </h2>
            <p className="spazio-section__body">
              {/* TODO: mq da confermare con Marco - Luna sarebbe più grande di Sole ma il codice le ha entrambe a 15 mq */}
              {t("luna.body")}
            </p>
            <TiltCard className="spazio-card spazio-up spazio-up--2">
              <span className="spazio-label">{t("luna.caratteristicheLabel")}</span>
              <ul>
                {(t.raw("luna.features") as string[]).map((f) => <li key={f}>{f}</li>)}
              </ul>
            </TiltCard>
          </div>
          <div className="spazio-luna__image spazio-up spazio-up--3">
            <div className="spazio-photo-frame">
              <Image src="/assets/Spazi-luna-2.jpg" alt={t("luna.caption")} fill
                sizes="(max-width: 900px) 100vw, 55vw"
                style={{ objectFit: "cover", objectPosition: "center" }} />
              <div className="spazio-photo-caption">
                <span>{t("luna.caption")}</span>
                <span>EQB Milano</span>
              </div>
            </div>
            <div className="spazio-tags">
              {(t.raw("luna.tags") as string[]).map((tag) => <span key={tag} className="spazio-tag">{tag}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. CTA finale ── */}
      <section
        ref={(el) => {
          (s8.ref as React.RefObject<HTMLElement | null>).current = el;
          ctaRef.current = el;
        }}
        className={`spazio-cta${s8.visible ? " is-on" : ""}`}
      >
        <div className="spazio-cta__inner">
          <div className="spazio-cta__text spazio-up spazio-up--1">
            <h2 className="spazio-cta__title"><Multiline text={t("ctaTitle")} /></h2>
            <p className="spazio-cta__body">
              {t("ctaBody")}
            </p>
            <a href={`/${locale}/coworking`} className="spazio-cta__btn">{t("ctaBtn")}</a>
          </div>
          <div className="spazio-cta__mosaic spazio-up spazio-up--2">
            <div className="spazio-cta__grid">
              <div className="spazio-cta__item spazio-cta__item--tall">
                <Image src="/assets/Spazi-ingresso-frontale.jpg" alt="" fill style={{ objectFit: "cover" }} />
              </div>
              <div className="spazio-cta__item">
                <Image src="/assets/Sala-Allenamento.jpg" alt="" fill style={{ objectFit: "cover" }} />
              </div>
              <div className="spazio-cta__item">
                <Image src="/assets/Stanza Terra.jpg" alt="" fill style={{ objectFit: "cover" }} />
              </div>
              <div className="spazio-cta__item">
                <Image src="/assets/Spazi-relax-corner.jpg" alt="" fill style={{ objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sticky CTA verso il coworking ── */}
      <div className={`sp-sticky${showSticky ? " is-shown" : ""}`}>
        <span className="sp-sticky__text">{t("stickyText")}</span>
        <a href={`/${locale}/coworking`} className="sp-sticky__btn">{t("stickyBtn")}</a>
      </div>

    </div>
  );
};
