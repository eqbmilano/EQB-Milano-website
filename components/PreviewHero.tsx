"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { FixedBackground, Navbar, SectionEcosistema, SectionSpazio } from "@/components";
import "./Hero.css";
import "./PreviewHero.css";

export const PreviewHero: React.FC = () => {
  const stageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const bivioRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrimRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const stage = stageRef.current, hero = heroRef.current, bivio = bivioRef.current;
      if (!stage || !hero || !bivio) return;
      const rect = stage.getBoundingClientRect();
      const dist = rect.height - window.innerHeight;
      let p = dist > 0 ? -rect.top / dist : 0;
      p = Math.max(0, Math.min(1, p));
      const tHero = Math.min(1, p / 0.55);
      hero.style.opacity = String(1 - tHero);
      hero.style.transform = `translateY(${-tHero * 60}px)`;
      if (scrollRef.current) scrollRef.current.style.opacity = String(Math.max(0, 1 - tHero * 2));
      const tB = Math.max(0, Math.min(1, (p - 0.35) / 0.55));
      bivio.style.opacity = String(tB);
      bivio.style.transform = `translateY(${(1 - tB) * 28}px)`;
      bivio.style.pointerEvents = tB > 0.5 ? "auto" : "none";
      if (scrimRef.current) scrimRef.current.style.opacity = String(tB * 0.6);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const continua = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("ecosistema")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <FixedBackground />
      <main className="w-full relative">
        <Navbar />

        <div className="phh-stage" ref={stageRef}>
          <div className="phh-pin">
            <section className="hero">
              <video className="hero__video" autoPlay loop muted playsInline preload="auto" poster="/assets/Sfondo-Menu-Hamburger.jpg">
                <source src="/assets/Video-Home.mp4" type="video/mp4" />
              </video>
              <div className="hero__overlay" />
              <div className="phh-scrim" ref={scrimRef} />

              {/* Testo hero — stessa posizione del reale (in basso) */}
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

        <SectionEcosistema />
        <SectionSpazio />
      </main>
    </>
  );
};
