"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import { ParallaxDivider } from "./ParallaxDivider";
import LazyVideo from "./LazyVideo";
import { Reveal } from "./Reveal";
import { Multiline } from "./Multiline";
import "swiper/css";
import "./BenesserePageV2.css";

const WA = "https://wa.me/393755153273?text=";

const GROUP_IMAGES: Record<string, string[]> = {
  Trattamenti: ["/assets/Osteopatia-v2.jpg", "/assets/Osteopatia-pediatrica-v2.jpg", "/assets/Fisioterapia-v4.jpg", "/assets/Massaggio-Decontratturante-Sportivo-v2.jpg"],
  Movimento: ["/assets/Pilates.jpg", "/assets/Rinforzo-Posturale-v2.jpg", "/assets/Functional-Training-v3.jpg"],
  "Recupero & Benessere": ["/assets/Massaggi-Rilassanti-v2.jpg", "/assets/Linfodrenante-v2.jpg", "/assets/Riflessologia-v2.jpg", "/assets/Coppettazione-v2.jpg"],
  Consulenza: ["/assets/Nutrizione-BIA-v3.jpg", "/assets/Mental-Coach-v2.jpg"],
};

type Service = { name: string; desc: string; msg: string };
type Group = { label: string; services: Service[] };
type Feature = { num: string; label: string; title: string; micro: string; tags: string[] };
type AccPillar = { t: string; d: string };

function HoverCard({ name, img, desc, cat, msg, prenotaLabel, prenotaWa }: {
  name: string; img: string; desc: string; cat: string; msg: string; prenotaLabel: string; prenotaWa: string;
}) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className={`hc-wrapper${flipped ? " is-flipped" : ""}`}
      onClick={() => setFlipped((f) => !f)}
    >
      <div className="hc-front">
        <div className="hc-front__img">
          <Image src={img} alt={name} fill sizes="(max-width: 768px) 50vw, 25vw" style={{ objectFit: "cover" }} />
        </div>
        <div className="hc-front__overlay" />
        <div className="hc-front__body">
          <span className="hc-front__name">{name}</span>
          <span className="hc-front__btn">{prenotaLabel}</span>
        </div>
      </div>
      <div className="hc-back">
        <span className="hc-back__cat">{cat}</span>
        <span className="hc-back__name">{name}</span>
        <p className="hc-back__desc">{desc}</p>
        <a
          href={`${WA}${encodeURIComponent(msg)}`}
          target="_blank" rel="noopener noreferrer"
          className="hc-back__btn"
          onClick={(e) => e.stopPropagation()}
        >
          {prenotaWa}
        </a>
      </div>
    </div>
  );
}

// Stesso linguaggio del carosello "All'interno di EQB" in home (SectionInterno):
// header con frecce prev/next + slide numerate. Un'istanza per gruppo di servizi.
function ServiceGroup({ group, images, prenotaLabel, prenotaWa, serviziCountLabel }: {
  group: Group; images: string[]; prenotaLabel: string; prenotaWa: string; serviziCountLabel: string;
}) {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const { label, services } = group;

  return (
    <div>
      <div className="vb-group__header">
        <div className="vb-group__heading">
          <h3 className="vb-group__title">{label}</h3>
          <span className="vb-group__count">{services.length} {serviziCountLabel}</span>
        </div>
        <div className="vb-carousel-nav">
          <button ref={prevRef} className="vb-nav-btn vb-nav-btn--prev" aria-label="Precedente">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M2.19571 8.57143L8.81543 15.1911L8 16L0 8L8 0L8.81543 0.808857L2.19571 7.42857L16 7.42857V8.57143L2.19571 8.57143Z" fill="currentColor"/></svg>
          </button>
          <button ref={nextRef} className="vb-nav-btn vb-nav-btn--next" aria-label="Successivo">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.8043 7.42857L7.18457 0.808857L8 0L16 8L8 16L7.18457 15.1911L13.8043 8.57143H0V7.42857L13.8043 7.42857Z" fill="currentColor"/></svg>
          </button>
        </div>
      </div>
      <div className="vb-carousel-wrap">
        <Swiper
          modules={[Navigation, Mousewheel]}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onBeforeInit={(swiper) => {
            if (typeof swiper.params.navigation === "object" && swiper.params.navigation) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          slidesPerView={1.3}
          spaceBetween={16}
          breakpoints={{
            640: { slidesPerView: 2.3, spaceBetween: 16 },
            1024: { slidesPerView: Math.min(services.length, 4) + 0.15, spaceBetween: 20 },
          }}
          mousewheel={{ forceToAxis: true }}
          grabCursor
          className="vb-swiper"
        >
          {services.map((s, i) => (
            <SwiperSlide key={s.name} className="vb-slide">
              <span className="vb-slide__number">{String(i + 1).padStart(2, "0")}</span>
              <HoverCard {...s} img={images[i] ?? images[0]} cat={label} prenotaLabel={prenotaLabel} prenotaWa={prenotaWa} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

function BenVideoPlayer({ src, poster }: { src: string; poster: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hovering, setHovering] = useState(false);

  const toggle = () => {
    const v = videoRef.current!;
    if (playing) { v.pause(); setPlaying(false); }
    else { v.play(); setPlaying(true); }
  };

  const onTimeUpdate = () => {
    const v = videoRef.current!;
    if (v.duration) setProgress((v.currentTime / v.duration) * 100);
  };

  const onSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = videoRef.current!;
    if (v.duration) v.currentTime = (Number(e.target.value) / 100) * v.duration;
    setProgress(Number(e.target.value));
  };

  const showUI = hovering || !playing;

  return (
    <div
      className="ben-video-wrap"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* preload="none": il video parte al click, non va scaricato (19MB) prima */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        preload="none"
        playsInline
        onTimeUpdate={onTimeUpdate}
        onEnded={() => setPlaying(false)}
      />
      <div className={`ben-video-overlay${playing ? " is-hidden" : ""}`} />
      <div className={`ben-video-ui${showUI ? " is-visible" : ""}`}>
        <button className="ben-video-play" onClick={toggle} aria-label={playing ? "Pausa" : "Play"}>
          {playing
            ? <svg width="28" height="28" viewBox="0 0 16 16" fill="none"><rect x="2" y="1" width="4" height="14" rx="1.5" fill="currentColor"/><rect x="10" y="1" width="4" height="14" rx="1.5" fill="currentColor"/></svg>
            : <svg width="28" height="28" viewBox="0 0 16 16" fill="none"><path d="M4 2l11 6-11 6V2z" fill="currentColor"/></svg>
          }
        </button>
      </div>
      <div className={`ben-vb${showUI ? " is-visible" : ""}`}>
        <button className="ben-vb__btn" onClick={toggle} aria-label={playing ? "Pausa" : "Play"}>
          {playing
            ? <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="1" width="4" height="14" rx="1.5" fill="currentColor"/><rect x="10" y="1" width="4" height="14" rx="1.5" fill="currentColor"/></svg>
            : <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 2l11 6-11 6V2z" fill="currentColor"/></svg>
          }
        </button>
        <input
          type="range" min="0" max="100" step="0.1"
          value={progress}
          onChange={onSeek}
          onClick={e => e.stopPropagation()}
          className="ben-vb__range"
          style={{ "--p": `${progress}%` } as React.CSSProperties}
        />
        <button className="ben-vb__btn" onClick={e => { e.stopPropagation(); videoRef.current?.requestFullscreen?.(); }} aria-label="Schermo intero">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>
        </button>
      </div>
    </div>
  );
}

function BenTiltCard({ children, variant = "dark" }: { children: React.ReactNode; variant?: "dark" | "gradient" | "cream" }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current!;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transition = "transform 0.08s, box-shadow 0.08s";
    el.style.transform = `perspective(700px) rotateX(${-y * 14}deg) rotateY(${x * 14}deg) scale(1.03)`;
    el.style.boxShadow = `${x * -20}px ${y * -20}px 48px rgba(50,37,35,0.14), 0 8px 32px rgba(50,37,35,0.07)`;
  };
  const onLeave = () => {
    const el = ref.current!;
    el.style.transition = "transform 0.55s cubic-bezier(0.22,1,0.36,1), box-shadow 0.55s cubic-bezier(0.22,1,0.36,1)";
    el.style.transform = "";
    el.style.boxShadow = "";
  };
  return (
    <div ref={ref} className={`ben-tilt-card ben-tilt-card--${variant}`} onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </div>
  );
}

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

function AccIcon({ i }: { i: number }) {
  const common = {
    viewBox: "0 0 24 24", fill: "none", stroke: "currentColor",
    strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
  };
  if (i === 0)
    return (<svg {...common}><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>);
  if (i === 1)
    return (<svg {...common}><circle cx="6" cy="17" r="2.5" /><circle cx="18" cy="7" r="2.5" /><path d="M8 15.5l8-7" /></svg>);
  return (<svg {...common}><path d="M3 17l6-6 4 4 7-7" /><path d="M17 7h4v4" /></svg>);
}

function BenAccompagna({ eyebrow, title, intro, pillars }: { eyebrow: string; title: string; intro: string; pillars: AccPillar[] }) {
  const { ref, visible } = useVisible("-15%");
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className={`ben-acc${visible ? " is-on" : ""}`}>
      <div className="ben-acc__head">
        <span className="ben-acc__eyebrow ben-acc-rise ben-acc-rise--0">{eyebrow}</span>
        <h2 className="ben-acc__title ben-acc-rise ben-acc-rise--1">{title}</h2>
        <p className="ben-acc__intro ben-acc-rise ben-acc-rise--2">
          {intro}
        </p>
      </div>
      <div className="ben-acc__row">
        {pillars.map((p, i) => (
          <Reveal key={p.t} className="reveal-cell" delay={i * 90}>
            <div className="ben-acc__pill">
              <span className="ben-acc__k">{String(i + 1).padStart(2, "0")}</span>
              <span className="ben-acc__icon"><AccIcon i={i} /></span>
              <h3 className="ben-acc__t">{p.t}</h3>
              <p className="ben-acc__d">{p.d}</p>
              <span className="ben-acc__underline" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export const BenesserePageV2: React.FC = () => {
  const t = useTranslations("benessere");
  const locale = usePathname().split("/")[1] || "it";

  const accPillars = t.raw("accPillars") as AccPillar[];
  const features = t.raw("features") as Feature[];
  const groups = t.raw("groups") as Group[];
  const [openingTitle1, openingTitle2, openingTitle3] = t("openingTitle").split("\n");
  const [closingTitle1, closingTitle2, closingTitle3] = t("closingTitle").split("\n");

  const s0   = useVisible("-20px");
  const s7   = useVisible("-60px");
  const sf1  = useVisible("-60px");
  const sf2  = useVisible("-60px");
  const sf3  = useVisible("-60px");
  const sf4  = useVisible("-60px");
  const ssec = useVisible("-40px");

  const [showSticky, setShowSticky] = useState(false);
  const closingRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const onScroll = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.9;
      const closing = closingRef.current;
      const beforeClosing = !closing || closing.getBoundingClientRect().top > window.innerHeight * 0.85;
      setShowSticky(pastHero && beforeClosing);
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
    <div className="ben-page ben-page--v2">

      {/* ── 1. Opening ── */}
      <section
        ref={s0.ref as React.RefObject<HTMLElement>}
        className={`ben-opening${s0.visible ? " is-on" : ""}`}
        data-navbar-hero
      >
        <Image
          src="/assets/Dettagli-accoglienza.png"
          alt="EQB Milano — benessere"
          fill priority sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 60%" }}
        />
        <div className="ben-opening__overlay" />
        <div className="ben-opening__content">
          <span className="ben-opening__label ben-fade ben-fade--1">{t("openingLabel")}</span>
          <h1 className="ben-opening__title ben-fade ben-fade--2">
            {openingTitle1}<br />{openingTitle2}<br />{openingTitle3}
          </h1>
          <p className="ben-opening__sub ben-fade ben-fade--3">
            <Multiline text={t("openingSub")} />
          </p>
        </div>
        <div className="ben-opening__scroll" aria-hidden="true">
          <div className="ben-opening__scroll-line" />
        </div>
      </section>

      {/* ── 1b. Il nostro modo di accompagnarti ── */}
      <BenAccompagna eyebrow={t("accEyebrow")} title={t("accTitle")} intro={t("accIntro")} pillars={accPillars} />

      {/* ── 2. Valutazione Posturale — Federico ── */}
      <section
        ref={s7.ref as React.RefObject<HTMLElement>}
        className={`ben-section ben-ad-section${s7.visible ? " is-on" : ""}`}
      >
        <div className="ben-ad-section__inner">
          <div className="ben-ad-section__video ben-up ben-up--1">
            <BenVideoPlayer src="/assets/Campagna-Fede-1.mp4" poster="/assets/poster-Campagna-Fede-1.jpg" />
          </div>
          <div className="ben-ad-section__content">
            <span className="ben-label ben-up ben-up--1">{t("postura.eyebrow")}</span>
            <h2 className="ben-ad-section__title ben-up ben-up--2">
              <Multiline text={t("postura.title")} />
            </h2>
            <div className="ben-ad-section__body ben-up ben-up--3">
              <p>{t("postura.body1")}</p>
              <p>{t("postura.body2")}</p>
            </div>
            <p className="ben-ad-section__firma ben-up ben-up--4">
              {t("postura.firmaName")}<br />
              <span>{t("postura.firmaRole")}</span>
            </p>
            <BenTiltCard variant="dark">
              <p className="ben-tilt-card__sub">{t("postura.tiltSub")}</p>
              <a href="https://tinyurl.com/valutazioneposturale" target="_blank" rel="noopener noreferrer" className="ben-tilt-card__btn">{t("postura.tiltBtn")}</a>
            </BenTiltCard>
          </div>
        </div>
      </section>

      {/* ── 3. Featured: Percorso Posturale ── */}
      <section
        ref={sf1.ref as React.RefObject<HTMLElement>}
        className={`ben-feature ben-feature--shade${sf1.visible ? " is-on" : ""}`}
      >
        <div className="ben-feature__inner">
          <div className="ben-feature__image ben-up ben-up--1">
            <LazyVideo src="/assets/Feature-Pilates-v2.mp4" poster="/assets/poster-Feature-Pilates-v2.jpg" />
          </div>
          <div className="ben-feature__content">
            <span className="ben-feature__num">{features[0].num}</span>
            <span className="ben-label ben-up ben-up--1">{features[0].label}</span>
            <h2 className="ben-feature__title ben-up ben-up--2">
              <Multiline text={features[0].title} />
            </h2>
            <p className="ben-feature__micro ben-up ben-up--3">
              {features[0].micro}
            </p>
            <div className="ben-feature__tags ben-up ben-up--4">
              {features[0].tags.map((tag) => <span key={tag} className="ben-feature__tag">{tag}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Featured: Pilates Reformer ── */}
      <section
        ref={sf2.ref as React.RefObject<HTMLElement>}
        className={`ben-feature ben-feature--reverse${sf2.visible ? " is-on" : ""}`}
      >
        <div className="ben-feature__inner">
          <div className="ben-feature__content">
            <span className="ben-feature__num">{features[1].num}</span>
            <span className="ben-label ben-up ben-up--1">{features[1].label}</span>
            <h2 className="ben-feature__title ben-up ben-up--2">
              <Multiline text={features[1].title} />
            </h2>
            <p className="ben-feature__micro ben-up ben-up--3">
              {features[1].micro}
            </p>
            <div className="ben-feature__tags ben-up ben-up--4">
              {features[1].tags.map((tag) => <span key={tag} className="ben-feature__tag">{tag}</span>)}
            </div>
          </div>
          <div className="ben-feature__image ben-up ben-up--1">
            <LazyVideo src="/assets/Feature-Posturale-v2.mp4" poster="/assets/poster-Feature-Posturale-v2.jpg" />
          </div>
        </div>
      </section>

      {/* ── 5. Featured: Recupero & Benessere ── */}
      <section
        ref={sf3.ref as React.RefObject<HTMLElement>}
        className={`ben-feature ben-feature--shade${sf3.visible ? " is-on" : ""}`}
      >
        <div className="ben-feature__inner">
          <div className="ben-feature__image ben-up ben-up--1">
            <LazyVideo src="/assets/Feature-Relax.mp4" poster="/assets/poster-Feature-Relax.jpg" />
          </div>
          <div className="ben-feature__content">
            <span className="ben-feature__num">{features[2].num}</span>
            <span className="ben-label ben-up ben-up--1">{features[2].label}</span>
            <h2 className="ben-feature__title ben-up ben-up--2">
              <Multiline text={features[2].title} />
            </h2>
            <p className="ben-feature__micro ben-up ben-up--3">
              {features[2].micro}
            </p>
            <div className="ben-feature__tags ben-up ben-up--4">
              {features[2].tags.map((tag) => <span key={tag} className="ben-feature__tag">{tag}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Featured: Nutrizione & Forma ── */}
      <section
        ref={sf4.ref as React.RefObject<HTMLElement>}
        className={`ben-feature ben-feature--reverse${sf4.visible ? " is-on" : ""}`}
      >
        <div className="ben-feature__inner">
          <div className="ben-feature__content">
            <span className="ben-feature__num">{features[3].num}</span>
            <span className="ben-label ben-up ben-up--1">{features[3].label}</span>
            <h2 className="ben-feature__title ben-up ben-up--2">
              <Multiline text={features[3].title} />
            </h2>
            <p className="ben-feature__micro ben-up ben-up--3">
              {features[3].micro}
            </p>
            <div className="ben-feature__tags ben-up ben-up--4">
              {features[3].tags.map((tag) => <span key={tag} className="ben-feature__tag">{tag}</span>)}
            </div>
          </div>
          <div className="ben-feature__image ben-up ben-up--1">
            <Image
              src="/assets/Nutrizione-Forma-v2.jpg"
              alt="Nutrizione e forma — EQB Milano"
              fill sizes="50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* ── Parallax Divider ── */}
      <ParallaxDivider
        src="/assets/Osteopatia-cranio.jpg"
        text={t("divider")}
      />

      {/* ── 7. La nostra offerta ── */}
      <section
        ref={ssec.ref as React.RefObject<HTMLElement>}
        className={`ben-offerta${ssec.visible ? " is-on" : ""}`}
      >
        <div className="ben-offerta__inner">
          <div className="ben-offerta__header">
            <span className="ben-label ben-up ben-up--1">{t("offertaLabel")}</span>
            <h2 className="ben-offerta__title ben-up ben-up--2">{t("offertaTitle")}</h2>
          </div>
          <div className="vb-groups">
            {groups.map((g) => (
              <ServiceGroup
                key={g.label}
                group={g}
                images={GROUP_IMAGES[g.label] ?? ["/assets/Pilates.jpg"]}
                prenotaLabel={t("prenotaCta")}
                prenotaWa={t("prenotaWhatsapp")}
                serviziCountLabel={t("serviziCount")}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Closing CTA ── */}
      <section className="ben-closing" ref={closingRef}>
        <div className="ben-closing__text">
          <span className="ben-closing__label">{t("closingLabel")}</span>
          <h2 className="ben-closing__title">
            {closingTitle1}<br />{closingTitle2}<br />{closingTitle3}
          </h2>
          <p className="ben-closing__body">
            <Multiline text={t("closingBody")} />
          </p>
          <a
            href={`${WA}${encodeURIComponent(t("waGenerico"))}`}
            target="_blank" rel="noopener noreferrer"
            className="ben-closing__cta"
          >
            {t("closingCta")}
          </a>
        </div>
        <div className="ben-closing__photo">
          <Image
            src="/assets/Federico-osteopatia-closing.jpg"
            alt="EQB Milano — osteopatia con Federico"
            fill sizes="50vw"
            style={{ objectFit: "cover", objectPosition: "center 25%" }}
          />
        </div>
        <div className="ben-closing__mosaic">
          <div className="ben-closing__mosaic-grid">
            <div className="ben-closing__mosaic-item ben-closing__mosaic-item--tall">
              <Image src="/assets/Federico-osteopatia-closing.jpg" alt="" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="ben-closing__mosaic-item">
              <Image src="/assets/Pilates.jpg" alt="" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="ben-closing__mosaic-item">
              <Image src="/assets/Massaggi-Rilassanti-v2.jpg" alt="" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="ben-closing__mosaic-item">
              <Image src="/assets/Nutrizione-BIA-v3.jpg" alt="" fill style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Sticky CTA generale ── */}
      <div className={`ben-sticky${showSticky ? " is-shown" : ""}`}>
        <span className="ben-sticky__text">{t("stickyText")}</span>
        <a
          href={`${WA}${encodeURIComponent(t("waGenerico"))}`}
          target="_blank" rel="noopener noreferrer"
          className="ben-sticky__btn"
        >
          {t("stickyCta")}
        </a>
      </div>

    </div>
  );
};
