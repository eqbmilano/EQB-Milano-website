"use client";
import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { FixedBackground, Navbar, SectionEcosistema, SectionSpazio } from "@/components";
import "./Hero.css";
import "./PreviewHero.css";

export const PreviewHero: React.FC = () => {
  const bivioRef = useRef<HTMLElement>(null);
  const [bivioOn, setBivioOn] = useState(false);

  // Attiva lo scroll-snap SOLO mentre questa pagina è montata (non tocca le altre pagine)
  useEffect(() => {
    document.documentElement.classList.add("phh-snap-active");
    return () => document.documentElement.classList.remove("phh-snap-active");
  }, []);

  // Rivela il bivio quando il suo schermo è arrivato a riposo (post-snap)
  useEffect(() => {
    const el = bivioRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setBivioOn(entry.isIntersecting && entry.intersectionRatio > 0.6),
      { threshold: [0, 0.6, 1] }
    );
    obs.observe(el);
    return () => obs.disconnect();
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

        {/* Video fisso condiviso dai due schermi (hero + bivio) */}
        <div className="phh-video-layer">
          <video className="hero__video" autoPlay loop muted playsInline preload="auto" poster="/assets/Hero-Poster.jpg">
            <source src="/assets/Video-Home.mp4" type="video/mp4" />
          </video>
          <div className="hero__overlay" />
        </div>

        {/* Schermo 1: hero testuale — scroll-snap si ferma qui */}
        <section className="phh-screen phh-screen--hero">
          <div className="hero__content">
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
          <div className="hero__scroll" aria-hidden="true">
            <div className="hero__scroll-line" />
          </div>
        </section>

        {/* Schermo 2: bivio — scroll-snap mandatory ci ferma anche qui, serve una seconda scrollata per proseguire */}
        <section
          ref={bivioRef as React.RefObject<HTMLElement>}
          className={`phh-screen phh-screen--bivio${bivioOn ? " is-on" : ""}`}
        >
          <div className="phh-scrim" />
          <div className="phh-bivio">
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
        </section>

        <SectionEcosistema />
        <SectionSpazio />
      </main>
    </>
  );
};
