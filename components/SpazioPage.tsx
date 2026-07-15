"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
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
  const s4 = useVisible("-40px");
  const s5 = useVisible("-60px");
  const s6 = useVisible("-60px");

  const [showSticky, setShowSticky] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
            Restaurato per chi lavora sul corpo.
          </p>
        </div>
        <div className="spazio-opening__scroll" aria-hidden="true">
          <div className="spazio-opening__scroll-line" />
        </div>
      </section>

      {/* ── 2. Accoglienza ── */}
      <section ref={s1.ref as React.RefObject<HTMLElement>} className={`spazio-section spazio-v4${s1.visible ? " is-on" : ""}`}>
        <div className="spazio-v4__inner spazio-up spazio-up--1">
          <div className="spazio-v4__main">
            <Image src="/assets/Spazi-ingresso-frontale.jpg" alt="Ingresso e reception EQB Milano, con la sala allenamento sullo sfondo" fill
              sizes="(max-width: 900px) 100vw, 60vw"
              style={{ objectFit: "cover", objectPosition: "center 40%" }} />
            <div className="spazio-photo-caption">
              <span>Accoglienza e Reception</span>
              <span>EQB Milano</span>
            </div>
          </div>
          <div className="spazio-v4__side">
            <div className="spazio-v4__side-img">
              <Image src="/assets/Spazi-reception-2.jpg" alt="Reception" fill
                sizes="(max-width: 900px) 100vw, 20vw"
                style={{ objectFit: "cover", objectPosition: "center" }} />
            </div>
            <div className="spazio-v4__side-img">
              <Image src="/assets/Spazi-attesa.jpg" alt="Sala attesa" fill
                sizes="(max-width: 900px) 100vw, 20vw"
                style={{ objectFit: "cover", objectPosition: "center top" }} />
            </div>
          </div>
        </div>
        <div className="spazio-v4__text spazio-up spazio-up--2">
          <span className="spazio-label">L'ingresso</span>
          <h2 className="spazio-section__title">
            La prima impressione<br />è già vinta.
          </h2>
          <p className="spazio-section__body">
            La reception accoglie i tuoi clienti, la sala d'attesa li mette a proprio agio. Il biglietto da visita perfetto, prima ancora che entrino nella tua stanza.
          </p>
        </div>
      </section>

      {/* ── 3. Sala Allenamento ── */}
      <section ref={s2.ref as React.RefObject<HTMLElement>} className={`spazio-section spazio-sala${s2.visible ? " is-on" : ""}`}>
        <div className="spazio-sala__inner">
          <div className="spazio-sala__text">
            <span className="spazio-label spazio-up spazio-up--1">Piano nobile</span>
            <h2 className="spazio-section__title spazio-up spazio-up--2">
              45 mq per<br />il lavoro sul corpo.
            </h2>
            <p className="spazio-section__body spazio-up spazio-up--3">
              Full rack professionale, scaffalatura attrezzata, 2 Reformer Merrithew, 2 Chair, spalliera a muro, kettlebell e pesi liberi. Luce naturale da tre finestre, parquet a lisca di pesce.
            </p>
            <TiltCard className="spazio-card spazio-up spazio-up--4">
              <span className="spazio-label">Caratteristiche</span>
              <ul>
                <li>45 mq</li>
                <li>Full rack + scaffalatura attrezzi</li>
                <li>2 Reformer + 2 Chair Merrithew</li>
                <li>Kettlebell, pesi liberi, spalliera</li>
                <li>Attrezzatura pilates, yoga, funzionale</li>
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
              <span>Stanza <u>Terra</u></span>
              <span>EQB Milano</span>
            </div>
          </div>
          <div className="spazio-terra__text spazio-up spazio-up--2">
            <span className="spazio-label">Piano nobile</span>
            <h2 className="spazio-section__title">
              Ordine.<br />Chiarezza.<br />Energia.
            </h2>
            <p className="spazio-section__body">
              20 mq luminosi con lettino regolabile, spalliera a muro e ampia scrivania. Lo spazio ideale per chi lavora con struttura e ha bisogno di silenzio per concentrarsi.
            </p>
            <TiltCard className="spazio-card spazio-up spazio-up--3">
              <span className="spazio-label">Caratteristiche</span>
              <ul>
                <li>20 mq</li>
                <li>Lettino regolabile + spalliera a muro</li>
                <li>Scrivania, sedie, sgabelli</li>
              </ul>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* ── 5. Intermezzo artwork ── */}
      <section ref={s4.ref as React.RefObject<HTMLElement>} className={`spazio-artwork${s4.visible ? " is-on" : ""}`}>
        <div className="spazio-artwork__image spazio-fade spazio-fade--1">
          <Image src="/assets/Spazi-sole-luna-ingresso.jpg" alt="Ingresso Stanza Sole e Stanza Luna"
            fill sizes="100vw" style={{ objectFit: "cover", objectPosition: "center" }} />
        </div>
        <div className="spazio-artwork__caption spazio-fade spazio-fade--2">
          Stanza Sole &nbsp;·&nbsp; Stanza Luna
        </div>
      </section>

      {/* ── 6. Stanza Sole ── */}
      <section ref={s5.ref as React.RefObject<HTMLElement>} className={`spazio-section spazio-sole${s5.visible ? " is-on" : ""}`}>
        <div className="spazio-sole__inner">
          <div className="spazio-sole__image spazio-up spazio-up--1">
            <Image src="/assets/Spazi-sole-2.jpg" alt="Stanza Sole EQB Milano" fill
              sizes="(max-width: 900px) 100vw, 55vw"
              style={{ objectFit: "cover", objectPosition: "center" }} />
            <div className="spazio-photo-caption">
              <span>Stanza <u>Sole</u></span>
              <span>EQB Milano</span>
            </div>
          </div>
          <div className="spazio-sole__text spazio-up spazio-up--2">
            <span className="spazio-label">Piano inferiore · Relax &amp; Recovery</span>
            <h2 className="spazio-section__title">
              Luce che<br />accompagna<br />il lavoro.
            </h2>
            <p className="spazio-section__body">
              15 mq luminosi con la propria carta da parati originale, lettino regolabile e scrivania. Pensata per chi lavora nella sfera del tatto, con calma e continuità.
            </p>
            <TiltCard className="spazio-card spazio-up spazio-up--3">
              <span className="spazio-label">Caratteristiche</span>
              <ul>
                <li>15 mq</li>
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
              15 mq con la propria carta da parati originale, lettino regolabile e scrivania. Il rifugio ideale per chi lavora nella sfera dell'ascolto e ha bisogno di riservatezza.
            </p>
            <TiltCard className="spazio-card spazio-up spazio-up--2">
              <span className="spazio-label">Caratteristiche</span>
              <ul>
                <li>15 mq</li>
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
              <span>Stanza <u>Luna</u></span>
              <span>EQB Milano</span>
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
