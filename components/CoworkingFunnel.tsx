"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { CTAButton } from "./CTAButton";
import { Multiline } from "./Multiline";
import "./CoworkingFunnel.css";

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current!;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transition = "transform 0.08s, box-shadow 0.08s";
    el.style.transform = `perspective(700px) rotateX(${-y * 20}deg) rotateY(${x * 20}deg) scale(1.04)`;
    el.style.boxShadow = `${x * -28}px ${y * -28}px 60px rgba(50,37,35,0.18), 0 8px 32px rgba(50,37,35,0.08)`;
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

function useVisible(rootMargin = "-100px") {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { rootMargin, threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [rootMargin]);
  return { ref, visible };
}

type Pain = { n: string; title: string; body: string };
type Pillar = { n: string; title: string; body: string };
type Step = { n: string; title: string; body: string };
type Testimonial = { name: string; role: string; quote: string };
type Objection = { q: string; a: string };

const TESTI_IMAGES = ["/assets/testi-cristiana.jpg", "/assets/testi-roberta.jpg", "/assets/testi-loris.jpg"];

function PracticeTimeline({ steps }: { steps: Step[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const seen = vh - r.top;
      setP(Math.max(0, Math.min(1, seen / (r.height + vh * 0.6))));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return (
    <div ref={ref} className="cw-timeline">
      <div className="cw-timeline__track" aria-hidden="true">
        <span className="cw-timeline__fill" style={{ transform: `scaleX(${p})` }} />
      </div>
      <div className="cw-timeline__steps">
        {steps.map((s, i) => (
          <div key={s.n} className={`cw-tstep${s.n === "03" ? " cw-tstep--climax" : ""}${p >= i / 3 + 0.04 ? " is-active" : ""}`}>
            <div className="cw-tstep__node">{s.n}</div>
            <h4 className="cw-tstep__title">{s.title}</h4>
            <p className="cw-tstep__body">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export const CoworkingFunnel: React.FC = () => {
  const locale = useLocale();
  const t = useTranslations("coworking");
  const pains = t.raw("pains") as Pain[];
  const pillars = t.raw("pillars") as Pillar[];
  const steps = t.raw("steps") as Step[];
  const testimonials = (t.raw("testimonials") as Testimonial[]).map((tm, i) => ({ ...tm, img: TESTI_IMAGES[i] }));
  const objections = t.raw("objections") as Objection[];
  const sOpen  = useVisible("-40px");
  const sPain  = useVisible("-80px");
  const sSol   = useVisible("-80px");
  const sDiff  = useVisible("-80px");
  const sTesti = useVisible("-80px");
  const sComm  = useVisible("-80px");
  const sObj   = useVisible("-80px");
  const sCta   = useVisible("-60px");

  const [showSticky, setShowSticky] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── 1. Opening ── */}
      <section ref={sOpen.ref as React.RefObject<HTMLElement>} className={`cw-opening${sOpen.visible ? " is-on" : ""}`}>
        <div className="cw-opening__inner">
          <h2 className="cw-opening__title cw-anim cw-anim--1">
            <Multiline text={t("openingTitle")} />
            <em>{t("openingEm")}</em>
          </h2>
        </div>
        <div className="cw-opening__scroll" aria-hidden="true">
          <div className="cw-opening__scroll-line" />
        </div>
      </section>

      {/* ── 2. Pain points ── */}
      <section ref={sPain.ref as React.RefObject<HTMLElement>} className={`cw-pain${sPain.visible ? " is-on" : ""}`}>
        <div className="cw-pain__inner">
          <div className="cw-pain__header cw-anim cw-anim--1">
            <span className="cw-label cw-label--dark">{t("painLabel")}</span>
            <h2 className="cw-pain__title">{t("painTitle")}</h2>
            <p className="cw-pain__intro">
              {t("painIntro")}
            </p>
          </div>
          <div className="cw-pain__grid">
            {pains.map((p, i) => (
              <TiltCard key={p.n} className={`cw-pain__card cw-anim cw-anim--${i + 2}`}>
                <span className="cw-pain__n">{p.n}</span>
                <h3 className="cw-pain__card-title">{p.title}</h3>
                <p className="cw-pain__card-body">{p.body}</p>
              </TiltCard>
            ))}
          </div>
          <p className="cw-pain__close cw-anim cw-anim--6">
            {t("painClose")}
          </p>
        </div>
      </section>

      {/* ── 3. Solution — 4 pilastri specchio dei pain ── */}
      <section ref={sSol.ref as React.RefObject<HTMLElement>} className={`cw-solution${sSol.visible ? " is-on" : ""}`}>
        <div className="cw-sol__inner">
          <div className="cw-sol__header">
            <span className="cw-label cw-anim cw-anim--1">{t("solutionLabel")}</span>
            <h2 className="cw-sol__title cw-anim cw-anim--2">{t("solutionTitle")}</h2>
            <p className="cw-sol__intro cw-anim cw-anim--3">
              {t("solutionIntro")}
            </p>
          </div>
          <div className="cw-sol__pillars">
            {pillars.map((p, i) => (
              <TiltCard key={p.n} className={`cw-pillar cw-anim cw-anim--${Math.min(i + 2, 6)}`}>
                <span className="cw-pillar__n">{p.n}</span>
                <h3 className="cw-pillar__title">{p.title}</h3>
                <p className="cw-pillar__body">{p.body}</p>
              </TiltCard>
            ))}
          </div>
          <div className="cw-practice">
            <span className="cw-practice__label cw-anim cw-anim--1">{t("practiceLabel")}</span>
            <PracticeTimeline steps={steps} />
          </div>
        </div>
      </section>

      {/* ── 4. Il differenziatore (climax) ── */}
      <section ref={sDiff.ref as React.RefObject<HTMLElement>} className={`cw-diff${sDiff.visible ? " is-on" : ""}`}>
        <div className="cw-diff__glow" aria-hidden="true" />
        <div className="cw-diff__inner">
          <span className="cw-label cw-anim cw-anim--1">{t("diffLabel")}</span>
          <h2 className="cw-diff__title cw-anim cw-anim--2">
            <Multiline text={t("diffTitle")} />
          </h2>
          <p className="cw-diff__body cw-anim cw-anim--3">
            {t("diffBody")}
          </p>
          <p className="cw-diff__proof cw-anim cw-anim--4">
            {t("diffProof")}
          </p>
        </div>
      </section>

      {/* ── 5. Testimonianze ── */}
      <section ref={sTesti.ref as React.RefObject<HTMLElement>} className={`cw-testi${sTesti.visible ? " is-on" : ""}`}>
        <div className="cw-testi__inner">
          <div className="cw-testi__header cw-anim cw-anim--1">
            <span className="cw-label">{t("testiLabel")}</span>
            <h2 className="cw-testi__title">{t("testiTitle")}</h2>
          </div>
          <div className="cw-testi__grid">
            {testimonials.map((t, i) => (
              <div key={t.name} className={`cw-testi__card cw-anim cw-anim--${i + 2}`}>
                <div className="cw-testi__photo">
                  <Image src={t.img} alt={t.name} fill sizes="(max-width: 768px) 100vw, 320px" style={{ objectFit: "cover" }} />
                </div>
                <p className="cw-testi__quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="cw-testi__person">
                  <span className="cw-testi__name">{t.name}</span>
                  <span className="cw-testi__role">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Community — la vita dello spazio ── */}
      <section ref={sComm.ref as React.RefObject<HTMLElement>} className={`cw-community${sComm.visible ? " is-on" : ""}`}>
        <div className="cw-community__inner">
          <div className="cw-community__text">
            <span className="cw-label cw-label--dark cw-anim cw-anim--1">{t("communityLabel")}</span>
            <h2 className="cw-community__title cw-anim cw-anim--2">
              <Multiline text={t("communityTitle")} />
            </h2>
            <p className="cw-community__body cw-anim cw-anim--3">
              {t("communityBody1")}
            </p>
            <p className="cw-community__body cw-anim cw-anim--4">
              {t("communityBody2")}
            </p>
          </div>
          <div className="cw-community__image">
            <Image
              src="/assets/Workshop-Rinascere.jpg"
              alt="Workshop EQB Milano"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        </div>
      </section>

      {/* ── 7. Objections ── */}
      <section ref={sObj.ref as React.RefObject<HTMLElement>} className={`cw-obj${sObj.visible ? " is-on" : ""}`}>
        <div className="cw-obj__inner">
          <h2 className="cw-obj__title cw-anim cw-anim--1">
            {t("objTitle")}
          </h2>
          <div className="cw-obj__list">
            {objections.map((o, i) => (
              <div key={i} className={`cw-obj__item cw-anim cw-anim--${i + 2}`}>
                <p className="cw-obj__q">{o.q}</p>
                <p className="cw-obj__a">{o.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Final CTA ── */}
      <section ref={sCta.ref as React.RefObject<HTMLElement>} className={`cw-cta${sCta.visible ? " is-on" : ""}`}>
        <div className="cw-cta__inner">
          <span className="cw-label cw-anim cw-anim--1">{t("ctaLabel")}</span>
          <h2 className="cw-cta__title cw-anim cw-anim--2">
            <Multiline text={t("ctaTitle")} />
          </h2>
          <p className="cw-cta__sub cw-anim cw-anim--3">
            <Multiline text={t("ctaSub")} />
          </p>
          <p className="cw-cta__urgency cw-anim cw-anim--4">
            {t("ctaUrgency")}
          </p>
          <div className="cw-cta__actions cw-anim cw-anim--5">
            <CTAButton href={`/${locale}/candidatura`} variant="filled">
              {t("ctaCandidati")}
            </CTAButton>
            <CTAButton href="tel:+393755153273" variant="light">
              {t("ctaChiama")}
            </CTAButton>
            <CTAButton href="mailto:info@eqbmilano.it" variant="light">
              {t("ctaScrivi")}
            </CTAButton>
          </div>
          <p className="cw-cta__note cw-anim cw-anim--6">
            {t("ctaNote")}
          </p>
        </div>
      </section>

      {/* ── Sticky CTA ── */}
      <div className={`cw-sticky${showSticky ? " is-shown" : ""}`}>
        <span className="cw-sticky__text">{t("stickyText")}</span>
        <a href={`/${locale}/candidatura`} className="cw-sticky__btn">{t("stickyCta")}</a>
      </div>
    </>
  );
};
