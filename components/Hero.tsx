"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import "./Hero.css";

// px di "sforzo" scroll per andare da hero puro a bivio completamente a riposo
const SCROLL_DISTANCE = 900;
// Il blocco si rilascia quando SONO VERE ENTRAMBE: è passato almeno LOCK_MIN
// dal momento in cui ci si è fermati al bivio, E c'è stata una pausa reale
// (IDLE_GAP) prima dell'input corrente — così un fling lunghissimo non basta
// da solo, serve un momento di stacco. LOCK_MAX è una rete di sicurezza: oltre
// quel tempo si sblocca comunque, per non restare bloccati per sempre se lo
// scroll inerziale del dispositivo continua a mandare eventi senza mai fermarsi.
const LOCK_MIN = 500;
const IDLE_GAP = 200;
const LOCK_MAX = 2200;

export const Hero: React.FC = () => {
  const stageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const bivioRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrimRef = useRef<HTMLDivElement>(null);

  // Finché "engaged" è true, lo scroll nativo è intercettato e prevenuto: tutta
  // l'animazione hero->bivio è guidata a mano dal progresso accumulato in JS,
  // non dalla posizione di scroll reale (che con un fling veloce arriverebbe
  // "in anticipo" rispetto a quando il JS riesce a reagire).
  const engagedRef = useRef(true);
  const progressRef = useRef(0); // 0..1
  const lockedRef = useRef(false);
  const lockSinceRef = useRef(0);
  const lastInputAtRef = useRef(0);

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

  useEffect(() => {
    render();

    // Applica un delta di scroll (positivo = in avanti). Ritorna true se va
    // intercettato (preventDefault), false se va lasciato passare al browser.
    const applyDelta = (deltaY: number) => {
      if (!engagedRef.current) return false;
      const now = performance.now();
      const gapSinceLastInput = now - lastInputAtRef.current;
      lastInputAtRef.current = now;
      const forward = deltaY > 0;

      if (forward && lockedRef.current) {
        const sinceLock = now - lockSinceRef.current;
        const pausedEnough = sinceLock >= LOCK_MIN && gapSinceLastInput >= IDLE_GAP;
        if (!pausedEnough && sinceLock < LOCK_MAX) return true; // resta bloccato
        // "seconda scrollata" deliberata (o rete di sicurezza oltre LOCK_MAX):
        // rilascia il controllo allo scroll nativo
        release();
        return false;
      }

      progressRef.current = Math.max(0, Math.min(1, progressRef.current + deltaY / SCROLL_DISTANCE));
      render();

      if (forward && progressRef.current >= 1 && !lockedRef.current) {
        lockedRef.current = true;
        lockSinceRef.current = now;
      }
      if (!forward && progressRef.current < 1) {
        lockedRef.current = false;
      }
      return true;
    };

    const onWheel = (e: WheelEvent) => {
      if (applyDelta(e.deltaY)) e.preventDefault();
    };
    let touchY = 0;
    const onTouchStart = (e: TouchEvent) => { touchY = e.touches[0]?.clientY ?? 0; };
    const onTouchMove = (e: TouchEvent) => {
      const y = e.touches[0]?.clientY ?? touchY;
      const delta = touchY - y; // trascinare verso l'alto = scroll in avanti
      touchY = y;
      if (applyDelta(delta)) e.preventDefault();
    };
    const onKeyDown = (e: KeyboardEvent) => {
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

  const continua = (e: React.MouseEvent) => {
    e.preventDefault();
    release(); // click diretto sulla card: sblocca comunque lo scroll per il resto della pagina
    document.getElementById("ecosistema")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="phh-stage" ref={stageRef}>
      <div className="phh-pin">
        <section className="hero">
          <video className="hero__video" autoPlay loop muted playsInline preload="auto" poster="/assets/Hero-Poster.jpg">
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
                <p className="phh-card__text">Trova il percorso e la persona più adatta a te.</p>
                <span className="phh-card__cta">Scopri i servizi →</span>
              </Link>
            </div>
          </div>

          <div className="hero__scroll" ref={scrollRef} aria-hidden="true">
            <div className="hero__scroll-line" />
          </div>
        </section>
      </div>
    </div>
  );
};
