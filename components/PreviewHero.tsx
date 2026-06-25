"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import "./PreviewHero.css";

export const PreviewHero: React.FC = () => {
  const stageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const bivioRef = useRef<HTMLDivElement>(null);

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
      // testo hero: svanisce e sale nella prima parte
      const tHero = Math.min(1, p / 0.55);
      hero.style.opacity = String(1 - tHero);
      hero.style.transform = `translateY(${-tHero * 60}px)`;
      // bivio: compare nella seconda parte
      const tB = Math.max(0, Math.min(1, (p - 0.35) / 0.55));
      bivio.style.opacity = String(tB);
      bivio.style.transform = `translateY(${(1 - tB) * 28}px)`;
      bivio.style.pointerEvents = tB > 0.5 ? "auto" : "none";
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
    document.getElementById("ph-after")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="ph">
      <div className="ph-stage" ref={stageRef}>
        <div className="ph-pin">
          <video className="ph-video" autoPlay loop muted playsInline preload="auto" poster="/assets/Sfondo-Menu-Hamburger.jpg">
            <source src="/assets/Video-Home.mp4" type="video/mp4" />
          </video>
          <div className="ph-overlay" />

          <div className="ph-layer">
            {/* Testo hero */}
            <div className="ph-hero" ref={heroRef}>
              <span className="ph-hero__label">MILANO</span>
              <h1 className="ph-hero__title">Wellness &amp; Fitness Coworking</h1>
              <p className="ph-hero__vision"><span>Spazio</span><i /><span>Relazioni</span><i /><span>Crescita</span></p>
            </div>

            {/* Bivio glassy */}
            <div className="ph-bivio" ref={bivioRef}>
              <span className="ph-bivio__eyebrow">A chi è dedicato EQB?</span>
              <div className="ph-bivio__cards">
                <a href="#ph-after" onClick={continua} className="ph-card">
                  <span className="ph-card__kicker">Sei un professionista?</span>
                  <p className="ph-card__text">Scopri come EQB può diventare il tuo spazio di lavoro.</p>
                  <span className="ph-card__cta">Continua a scoprire ↓</span>
                </a>
                <Link href="/benessere" className="ph-card">
                  <span className="ph-card__kicker">Cerchi un professionista?</span>
                  <p className="ph-card__text">Trova il percorso e la persona più adatta a te.</p>
                  <span className="ph-card__cta">Scopri i servizi →</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="ph-hint" aria-hidden="true">scorri</div>
        </div>
      </div>

      {/* Contenuto sotto: per provare lo sblocco dello scroll */}
      <section id="ph-after" className="ph-after">
        <h2>Non è uno studio.<br /><em>È un ecosistema.</em></h2>
        <p>Da qui in giù la home continua normalmente (manifesto, spazio, coworking, …).</p>
      </section>
      <section className="ph-after ph-after--2">
        <p>Sezione segnaposto — conferma che lo scroll è sbloccato. Scrolla su per riagganciare l’hero.</p>
      </section>
    </div>
  );
};
