"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { ParallaxDivider } from "./ParallaxDivider";
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
  const s0 = useVisible("-20px");
  const s1 = useVisible("-60px");
  const s2 = useVisible("-60px");
  const s3 = useVisible("-60px");
  const s5 = useVisible("-60px");
  const s6 = useVisible("-60px");
  const s7 = useVisible("-60px");
  const s8 = useVisible("-60px");

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
          <span className="spazio-opening__label spazio-fade spazio-fade--1">Lo spazio</span>
          <h1 className="spazio-opening__title spazio-fade spazio-fade--2">
            Un appartamento<br />del '900 milanese.
          </h1>
          <p className="spazio-opening__sub spazio-fade spazio-fade--3">
            {/* TODO: da confermare con Marco (opzioni proposte in chat) */}
            Restaurato per chi lavora sul corpo.
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
              <span>Accoglienza e Reception</span>
              <span>EQB Milano</span>
            </div>
          </div>
          <div className="spazio-v4__text spazio-up spazio-up--2">
            <span className="spazio-label">L'ingresso</span>
            <h2 className="spazio-section__title">
              {/* TODO: titolo da confermare con Marco (opzioni proposte in chat) */}
              La prima impressione<br />è già vinta.
            </h2>
            <p className="spazio-section__body">
              La reception accoglie i tuoi clienti, la sala d'attesa li mette a proprio agio. Il biglietto da visita perfetto, prima ancora che entrino nella tua stanza.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. Aree comuni ── */}
      <section ref={s7.ref as React.RefObject<HTMLElement>} className={`spazio-section spazio-comuni${s7.visible ? " is-on" : ""}`}>
        <div className="spazio-comuni__inner">
          <div className="spazio-comuni__gallery spazio-up spazio-up--1">
            <div className="spazio-comuni__main">
              <Image src="/assets/Spazi-relax-corner.jpg" alt="Area snack e relax EQB Milano" fill
                sizes="(max-width: 900px) 100vw, 45vw"
                style={{ objectFit: "cover", objectPosition: "center" }} />
              <div className="spazio-photo-caption">
                <span>Area Snack</span>
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
          <div className="spazio-comuni__text spazio-up spazio-up--2">
            <span className="spazio-label">Aree comuni</span>
            <h2 className="spazio-section__title">
              Tutto quello che serve,<br />a portata di mano.
            </h2>
            <p className="spazio-section__body">
              Un angolo snack per una pausa tra un cliente e l'altro. Bagni con doccia per chi arriva di corsa o si allena prima di lavorare.
            </p>
            <TiltCard className="spazio-card spazio-card--featured spazio-up spazio-up--3">
              <span className="spazio-label">Caratteristiche</span>
              <ul>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Area snack e relax
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  2 spogliatoi
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  2 bagni con doccia
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Pulizie incluse
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Asciugamani brandizzati (grandi, medi, piccoli)
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Rotolo lettino incluso
                </li>
              </ul>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* ── 4. Intermezzo Piano Nobile ── */}
      <ParallaxDivider src="/assets/Spazi-ingresso-frontale.jpg" text="PIANO NOBILE — TERAPIA E ALLENAMENTO" />

      {/* ── 5. Sala Allenamento ── */}
      <section ref={s2.ref as React.RefObject<HTMLElement>} className={`spazio-section spazio-sala${s2.visible ? " is-on" : ""}`}>
        <div className="spazio-sala__inner">
          <div className="spazio-sala__text">
            <span className="spazio-label spazio-up spazio-up--1">Piano nobile</span>
            <h2 className="spazio-section__title spazio-up spazio-up--2">
              45 mq per<br />il lavoro sul corpo.
            </h2>
            <p className="spazio-section__body spazio-up spazio-up--3">
              Rack a muro in ferro, 2 Reformer Merrithew con spalliera, 2 Chair, dischi e manubri liberi, panca in legno. Luce naturale da tre finestre, parquet a lisca di pesce.
            </p>
            <TiltCard className="spazio-card spazio-up spazio-up--4">
              <span className="spazio-label">Caratteristiche</span>
              <ul>
                <li>Sala da 45 mq</li>
                <li>Rack a muro in ferro</li>
                <li>2 Reformer + 2 Chair Merrithew</li>
                <li>Dischi e manubri liberi, panca</li>
                <li>Attrezzatura pilates e corpo libero</li>
              </ul>
            </TiltCard>
          </div>
          <div className="spazio-sala__image spazio-up spazio-up--2">
            <Image src="/assets/Sala-Allenamento.jpg" alt="Sala allenamento EQB Milano" fill
              sizes="(max-width: 900px) 100vw, 55vw"
              style={{ objectFit: "cover", objectPosition: "center" }} />
          </div>
        </div>
      </section>

      {/* ── 4. Stanza Terra ── */}
      <section ref={s3.ref as React.RefObject<HTMLElement>} className={`spazio-section spazio-terra${s3.visible ? " is-on" : ""}`}>
        <div className="spazio-terra__inner">
          <div className="spazio-terra__image spazio-up spazio-up--1">
            <Image src="/assets/Stanza Terra.jpg" alt="Stanza Terra EQB Milano" fill
              sizes="(max-width: 900px) 100vw, 55vw"
              style={{ objectFit: "cover", objectPosition: "center" }} />
            <div className="spazio-photo-caption">
              <span>Stanza Terra</span>
              <span>EQB Milano</span>
            </div>
          </div>
          <div className="spazio-terra__text spazio-up spazio-up--2">
            <span className="spazio-label">Piano nobile</span>
            <h2 className="spazio-section__title">
              Ordine.<br />Chiarezza.<br />Energia.
            </h2>
            <p className="spazio-section__body">
              {/* TODO: ultima frase da confermare con Marco (opzioni proposte in chat) */}
              20 mq luminosi con lettino regolabile, spalliera a muro e ampia scrivania. Lo spazio ideale per chi lavora con struttura e ha bisogno di silenzio per concentrarsi.
            </p>
            <TiltCard className="spazio-card spazio-up spazio-up--3">
              <span className="spazio-label">Caratteristiche</span>
              <ul>
                <li>Stanza da 20 mq</li>
                <li>Lettino regolabile + spalliera a muro</li>
                <li>Scrivania, sedie, sgabelli</li>
              </ul>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* ── 6. Intermezzo: la foto ora vive nel FixedBackground della pagina,
             qui c'è solo il varco trasparente che la rivela (come in home) ── */}
      <ParallaxDivider text="PIANO INFERIORE — RELAX & RECOVERY" />

      {/* ── 6. Stanza Sole ── */}
      <section ref={s5.ref as React.RefObject<HTMLElement>} className={`spazio-section spazio-sole${s5.visible ? " is-on" : ""}`}>
        <div className="spazio-sole__inner">
          <div className="spazio-sole__image spazio-up spazio-up--1">
            <Image src="/assets/Spazi-sole-2.jpg" alt="Stanza Sole EQB Milano" fill
              sizes="(max-width: 900px) 100vw, 55vw"
              style={{ objectFit: "cover", objectPosition: "center" }} />
            <div className="spazio-photo-caption">
              <span>Stanza Sole</span>
              <span>EQB Milano</span>
            </div>
          </div>
          <div className="spazio-sole__text spazio-up spazio-up--2">
            <span className="spazio-label">Piano inferiore · Relax &amp; Recovery</span>
            <h2 className="spazio-section__title">
              Luce che<br />accompagna<br />il lavoro.
            </h2>
            <p className="spazio-section__body">
              {/* TODO: ultima frase da confermare con Marco (opzioni proposte in chat) */}
              15 mq luminosi con la propria carta da parati originale, lettino regolabile e scrivania. Pensata per chi lavora nella sfera del tatto, con calma e continuità.
            </p>
            <TiltCard className="spazio-card spazio-up spazio-up--3">
              <span className="spazio-label">Caratteristiche</span>
              <ul>
                <li>Stanza da 15 mq</li>
                <li>Lettino regolabile</li>
                <li>Scrivania con sgabelli</li>
              </ul>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* ── 7. Stanza Luna ── */}
      <section ref={s6.ref as React.RefObject<HTMLElement>} className={`spazio-section spazio-luna${s6.visible ? " is-on" : ""}`}>
        <div className="spazio-luna__inner">
          <div className="spazio-luna__text spazio-up spazio-up--1">
            <span className="spazio-label">Piano inferiore · Relax &amp; Recovery</span>
            <h2 className="spazio-section__title">
              Silenzio.<br />Intimità.<br />Ascolto.
            </h2>
            <p className="spazio-section__body">
              {/* TODO: ultima frase da confermare con Marco (opzioni proposte in chat) */}
              15 mq con la propria carta da parati originale, lettino regolabile e scrivania. Il rifugio ideale per chi lavora nella sfera dell'ascolto e ha bisogno di riservatezza.
            </p>
            <TiltCard className="spazio-card spazio-up spazio-up--2">
              <span className="spazio-label">Caratteristiche</span>
              <ul>
                <li>Stanza da 15 mq</li>
                <li>Lettino regolabile</li>
                <li>Scrivania con sgabelli</li>
              </ul>
            </TiltCard>
          </div>
          <div className="spazio-luna__image spazio-up spazio-up--3">
            <Image src="/assets/Spazi-luna-2.jpg" alt="Stanza Luna EQB Milano" fill
              sizes="(max-width: 900px) 100vw, 55vw"
              style={{ objectFit: "cover", objectPosition: "center" }} />
            <div className="spazio-photo-caption">
              <span>Stanza Luna</span>
              <span>EQB Milano</span>
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
            <h2 className="spazio-cta__title">Scopri come rendere tuo<br />questo spazio.</h2>
            <p className="spazio-cta__body">
              Zero costi fissi e un ambiente pensato per farti lavorare al meglio, ogni giorno.
            </p>
            <a href="/coworking" className="spazio-cta__btn">Scopri il coworking →</a>
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
        <span className="sp-sticky__text">Vuoi lavorare in questo spazio?</span>
        <a href="/coworking" className="sp-sticky__btn">Scopri il coworking →</a>
      </div>

    </div>
  );
};
