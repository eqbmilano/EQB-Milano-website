"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { Reveal } from "./Reveal";
import "./Hero.css";

// px di "sforzo" scroll per andare da hero puro a bivio completamente a riposo
const SCROLL_DISTANCE = 900;
// Tempo minimo di blocco fermo al bivio prima che un ulteriore scroll in avanti
// sblocchi. Un solo timer assoluto dal momento del blocco, senza richiedere
// anche una "pausa reale" tra un evento e il successivo: con le tacche di una
// rotellina normale il tempo tra una tacca e l'altra è spesso sotto ai 200ms
// (a volte anche scrollando con calma), quindi un requisito di pausa rendeva
// il rilascio quasi impossibile finché non si aspettava svariati secondi —
// sembrava un blocco rotto durante uno scroll del tutto normale.
const LOCK_MIN = 700;

export const Hero: React.FC = () => {
  const stageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const bivioRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrimRef = useRef<HTMLDivElement>(null);
  const scrollLineRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Finché "engaged" è true, lo scroll nativo è intercettato e prevenuto: tutta
  // l'animazione hero->bivio è guidata a mano dal progresso accumulato in JS,
  // non dalla posizione di scroll reale (che con un fling veloce arriverebbe
  // "in anticipo" rispetto a quando il JS riesce a reagire).
  //
  // INVARIANTE: engaged è legittimo SOLO con la pagina in cima (scrollY ~ 0),
  // perché l'intercettazione ha senso solo con l'hero sotto il viewport.
  // Il valore iniziale viene deciso al mount (vedi useEffect) e applyDelta
  // rilascia da solo se trova lo stato incoerente: senza questo controllo,
  // tornare alla home con la freccia indietro del browser (che RIPRISTINA lo
  // scroll a metà pagina) rimontava l'hero engaged e congelava tutto lo
  // scroll finché non si accumulavano 900px di progresso invisibile.
  const engagedRef = useRef(false);
  const progressRef = useRef(0); // 0..1
  const lockedRef = useRef(false);
  const lockSinceRef = useRef(0);

  const release = () => {
    engagedRef.current = false;
    lockedRef.current = false;
    if (stageRef.current) stageRef.current.style.touchAction = "auto";
  };

  const render = () => {
    const hero = heroRef.current, bivio = bivioRef.current;
    if (!hero || !bivio) return;
    const p = progressRef.current;
    const tHero = Math.min(1, p / 0.45);
    hero.style.opacity = String(1 - tHero);
    hero.style.transform = `translateY(${-tHero * 60}px)`;
    if (scrollRef.current) scrollRef.current.style.opacity = String(Math.max(0, 1 - tHero * 2));
    const tB = Math.max(0, Math.min(1, (p - 0.25) / 0.75));
    bivio.style.opacity = String(tB);
    bivio.style.transform = `translateY(${(1 - tB) * 26}px)`;
    bivio.style.pointerEvents = tB > 0.5 ? "auto" : "none";
    if (scrimRef.current) scrimRef.current.style.opacity = String(tB * 0.38);
  };

  // Autoplay video hero robusto: iOS in Risparmio Energetico (o con la
  // Riproduzione automatica disattivata in Safari) blocca l'autoplay muted e
  // mostra il tasto play. Fallback: tentiamo play() al mount e, se ancora
  // fermo, al PRIMO gesto dell'utente (tocco/scroll/click), quando iOS lo
  // consente. I listener sono "once", si rimuovono da soli.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const kick = () => { v.play().catch(() => {}); };
    kick();
    const opts = { once: true, passive: true } as AddEventListenerOptions;
    window.addEventListener("touchstart", kick, opts);
    window.addEventListener("scroll", kick, opts);
    window.addEventListener("click", kick, opts);
    return () => {
      window.removeEventListener("touchstart", kick);
      window.removeEventListener("scroll", kick);
      window.removeEventListener("click", kick);
    };
  }, []);

  useEffect(() => {
    // Su mobile lo scroll-hijack non si attiva affatto: il gesto touch nativo
    // non si presta bene alle soglie pensate per le tacche della rotellina
    // (momentum/inertia diversi tra iOS/Android, preventDefault incoerente).
    // Il bivio su mobile è la sezione statica in flusso normale qui sotto
    // (.bivio-mobile): lo scroll nativo resta sempre libero, nessun blocco.
    if (window.matchMedia("(max-width: 767px)").matches) return;

    // Si parte "engaged" solo se la pagina è davvero in cima: al ritorno con
    // la freccia indietro o dopo un reload il browser ripristina lo scroll a
    // metà pagina, e lì l'hero non deve intercettare niente.
    engagedRef.current = window.scrollY <= 2;
    if (!engagedRef.current && stageRef.current) stageRef.current.style.touchAction = "auto";
    render();

    // Applica un delta di scroll (positivo = in avanti). Ritorna true se va
    // intercettato (preventDefault), false se va lasciato passare al browser.
    const applyDelta = (deltaY: number) => {
      if (!engagedRef.current) return false;
      // Autodifesa sull'invariante: se lo scroll reale si è mosso mentre
      // eravamo engaged (anchor link, scrollTo programmatico, ripristino del
      // browser dopo il mount), l'hero è fuori vista ma stiamo bloccando la
      // pagina: rilascia subito e lascia passare l'evento al browser.
      if (window.scrollY > 2) {
        release();
        return false;
      }
      const forward = deltaY > 0;

      if (forward && lockedRef.current) {
        if (performance.now() - lockSinceRef.current < LOCK_MIN) return true; // resta bloccato
        // passato il tempo minimo di blocco: il prossimo scroll in avanti
        // rilascia il controllo allo scroll nativo
        release();
        return false;
      }

      progressRef.current = Math.max(0, Math.min(1, progressRef.current + deltaY / SCROLL_DISTANCE));
      render();

      if (forward && progressRef.current >= 1 && !lockedRef.current) {
        lockedRef.current = true;
        lockSinceRef.current = performance.now();
      }
      if (!forward && progressRef.current < 1) {
        lockedRef.current = false;
      }
      return true;
    };

    // Se si torna in cima con un vero gesto verso l'alto dopo il rilascio, il
    // testo hero deve ricomparire com'era all'inizio (senza questo, restava
    // fermo sull'ultimo stato inline lasciato da render() al momento del
    // rilascio). Legato al gesto (deltaY<0) e non al solo valore di scrollY:
    // un reflow di layout (es. un video che carica più giù nella pagina) può
    // clampare scrollY a 0 e generare un evento "scroll" senza nessun gesto
    // dell'utente — se si riattiva l'intercettazione anche in quel caso, la
    // pagina resta bloccata perché l'hero (position: sticky) è ormai fuori
    // vista, ma window continua a prevenire ogni scroll in attesa di 900px
    // di progresso mai raggiungibile.
    const tryReengage = (deltaY: number) => {
      if (!engagedRef.current && deltaY < 0 && window.scrollY <= 0) {
        engagedRef.current = true;
        progressRef.current = 0;
        lockedRef.current = false;
        if (stageRef.current) stageRef.current.style.touchAction = "none";
        render();
      }
    };

    const onWheel = (e: WheelEvent) => {
      tryReengage(e.deltaY);
      if (applyDelta(e.deltaY)) e.preventDefault();
    };
    let touchY = 0;
    const onTouchStart = (e: TouchEvent) => { touchY = e.touches[0]?.clientY ?? 0; };
    const onTouchMove = (e: TouchEvent) => {
      const y = e.touches[0]?.clientY ?? touchY;
      const delta = touchY - y; // trascinare verso l'alto = scroll in avanti
      touchY = y;
      tryReengage(delta);
      if (applyDelta(delta)) e.preventDefault();
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp" || e.key === "PageUp") tryReengage(-120);
      if (!engagedRef.current) return;
      if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") {
        if (applyDelta(120)) e.preventDefault();
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        if (applyDelta(-120)) e.preventDefault();
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  // Safari a volte "congela" un'animazione CSS infinite dopo un reload
  // (tipicamente legato al bfcache) — la lineetta che pulsa sotto l'hero
  // resta ferma sull'ultimo frame invece di continuare a battere. Forza un
  // reflow per riavviarla ad ogni mount e ad ogni pageshow (incluso il
  // ripristino da bfcache, che non rimonta il componente).
  useEffect(() => {
    const restartPulse = () => {
      const el = scrollLineRef.current;
      if (!el) return;
      el.style.animation = "none";
      void el.offsetWidth; // forza il reflow
      el.style.animation = "";
    };
    restartPulse();
    window.addEventListener("pageshow", restartPulse);
    return () => window.removeEventListener("pageshow", restartPulse);
  }, []);

  const continua = (e: React.MouseEvent) => {
    e.preventDefault();
    release(); // click diretto sulla card: sblocca comunque lo scroll per il resto della pagina
    document.getElementById("ecosistema")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
    <div className="phh-stage" ref={stageRef}>
      <div className="phh-pin">
        <section className="hero" data-navbar-hero>
          <video ref={videoRef} className="hero__video" autoPlay loop muted playsInline preload="auto" poster="/assets/Hero-Poster.jpg">
            <source src="/assets/Video-Home.mp4" type="video/mp4" />
          </video>
          <div className="hero__overlay" />
          <div className="phh-scrim" ref={scrimRef} />

          {/* Testo hero */}
          <div className="hero__content" ref={heroRef}>
            <span className="hero__label hero__anim hero__anim--1">MILANO</span>
            <h1 className="hero__title hero__anim hero__anim--2">Wellness &amp; Fitness Coworking</h1>
            <p className="hero__vision">
              <span className="hero__vision-word hero__vision-word--1">Spazio</span>
              <span className="hero__vision-sep hero__vision-sep--1" />
              <span className="hero__vision-word hero__vision-word--2">Relazioni</span>
              <span className="hero__vision-sep hero__vision-sep--2" />
              <span className="hero__vision-word hero__vision-word--3">Crescita</span>
            </p>
          </div>

          {/* Bivio glassy — compare nella stessa posizione del testo */}
          <div className="phh-bivio" ref={bivioRef}>
            <span className="phh-bivio__eyebrow">A chi è dedicato EQB?</span>
            <div className="phh-bivio__cards">
              <a href="#ecosistema" onClick={continua} className="phh-card">
                <span className="phh-card__kicker">Sei un professionista?</span>
                <p className="phh-card__text">Scopri come EQB può diventare il tuo spazio di lavoro.</p>
                <span className="phh-card__cta">Continua a scoprire ↓</span>
              </a>
              <Link href="/benessere" className="phh-card">
                <span className="phh-card__kicker">Cerchi un professionista?</span>
                <p className="phh-card__text">Trova il percorso, l'attività e la persona più adatta a te.</p>
                <span className="phh-card__cta">Scopri i servizi →</span>
              </Link>
            </div>
          </div>

          <div className="hero__scroll" ref={scrollRef} aria-hidden="true">
            <div className="hero__scroll-line" ref={scrollLineRef} />
          </div>
        </section>
      </div>
    </div>

    {/* Bivio statico per mobile: stesso contenuto, ma in flusso normale,
        niente crossfade JS. Nascosto su desktop (vedi Hero.css). */}
    <section className="bivio-mobile">
      <Reveal as="span" className="bivio-mobile__eyebrow">A chi è dedicato EQB?</Reveal>
      <div className="bivio-mobile__cards">
        <Reveal delay={100}>
          <a href="#ecosistema" onClick={continua} className="bivio-mobile__card">
            <span className="bivio-mobile__kicker">Sei un professionista?</span>
            <p className="bivio-mobile__text">Scopri come EQB può diventare il tuo spazio di lavoro.</p>
            <span className="bivio-mobile__cta">Continua a scoprire ↓</span>
          </a>
        </Reveal>
        <Reveal delay={180}>
          <Link href="/benessere" className="bivio-mobile__card">
            <span className="bivio-mobile__kicker">Cerchi un professionista?</span>
            <p className="bivio-mobile__text">Trova il percorso, l&apos;attività e la persona più adatta a te.</p>
            <span className="bivio-mobile__cta">Scopri i servizi →</span>
          </Link>
        </Reveal>
      </div>
    </section>
    </>
  );
};
