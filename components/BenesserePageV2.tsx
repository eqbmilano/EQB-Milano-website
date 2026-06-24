"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { ParallaxDivider } from "./ParallaxDivider";
import "./BenesserePageV2.css";

const WA = "https://wa.me/393755153273?text=";

const groups = [
  {
    label: "Trattamenti",
    services: [
      { name: "Osteopatia",            img: "/assets/Osteopatia.jpg",                  desc: "Per ritrovare equilibrio, libertà di movimento e affrontare la causa del problema, non solo il sintomo.",          msg: "Ciao! Vorrei info sull'osteopatia" },
      { name: "Fisioterapia",          img: "/assets/Federico-lavoro-2.jpg",            desc: "Un percorso personalizzato per recuperare funzionalità e tornare alle attività quotidiane con serenità.",          msg: "Ciao! Vorrei info sulla fisioterapia" },
      { name: "Massoterapia",          img: "/assets/Massaggio-decontratturante.jpg",   desc: "Per favorire il recupero muscolare, sciogliere le tensioni e ritrovare energia e libertà di movimento.",          msg: "Ciao! Vorrei info sulla massoterapia" },
      { name: "Osteopatia Pediatrica", img: "/assets/Osteopatia-pediatrica.jpg",         desc: "Un approccio delicato dedicato a neonati e bambini, per accompagnarne la crescita in modo armonioso.",            msg: "Ciao! Vorrei info sull'osteopatia pediatrica" },
    ],
  },
  {
    label: "Movimento",
    services: [
      { name: "Pilates",    img: "/assets/Pilates.jpg",             desc: "Un metodo che migliora forza, mobilità e controllo del movimento, con un approccio personalizzato.",     msg: "Ciao! Vorrei info sul Pilates" },
      { name: "Yoga",       img: "/assets/02_Pilates_e_Yoga.jpeg",  desc: "Una pratica che unisce respiro, movimento e presenza per ritrovare equilibrio e benessere.",            msg: "Ciao! Vorrei info sullo Yoga" },
      { name: "Posturale",  img: "/assets/Federico-lavoro-1.jpg",   desc: "Esercizi mirati per migliorare la postura, ridurre i compensi e muoversi con più libertà.",             msg: "Ciao! Vorrei info sul percorso posturale" },
      { name: "Funzionale", img: "/assets/Sala-Allenamento.jpg",    desc: "Un allenamento costruito intorno a te per sviluppare forza, mobilità e resistenza.",                    msg: "Ciao! Vorrei info sull'allenamento funzionale" },
    ],
  },
  {
    label: "Recupero & Benessere",
    services: [
      { name: "Linfodrenante",          img: "/assets/Massaggi-7.jpg",     desc: "Per alleggerire il corpo, ridurre gonfiore e favorire una piacevole sensazione di leggerezza.",          msg: "Ciao! Vorrei info sul linfodrenante" },
      { name: "Riflessologia Plantare", img: "/assets/Riflessologia.jpg",  desc: "Una pratica che favorisce il rilassamento profondo e aiuta il corpo a ritrovare equilibrio.",            msg: "Ciao! Vorrei info sulla riflessologia plantare" },
      { name: "Coppettazione",          img: "/assets/Conchiglie.jpg",     desc: "Per sciogliere le tensioni, migliorare la circolazione e favorire il recupero dei tessuti.",            msg: "Ciao! Vorrei info sulla coppettazione" },
      { name: "Massaggi Rilassanti",    img: "/assets/Bambu-1.jpg",        desc: "Un momento dedicato a rallentare, recuperare energie e concedersi uno spazio per sé.",                  msg: "Ciao! Vorrei prenotare un massaggio rilassante" },
    ],
  },
  {
    label: "Consulenza",
    services: [
      { name: "Nutrizione",   img: "/assets/Nutrizionista.jpg",   desc: "Un percorso personalizzato per costruire abitudini sostenibili e raggiungere obiettivi concreti.",      msg: "Ciao! Vorrei prenotare una consulenza nutrizionale" },
      { name: "Mental Coach", img: "/assets/Noemi.jpg",           desc: "Per acquisire maggiore consapevolezza, definire obiettivi e sviluppare nuove risorse personali.",        msg: "Ciao! Vorrei info sul mental coaching" },
      { name: "Counselor",    img: "/assets/Roberta-Boara.jpg",   desc: "Uno spazio di ascolto e supporto per affrontare momenti di cambiamento o difficoltà.",                  msg: "Ciao! Vorrei info sul counseling" },
    ],
  },
];

function HoverCard({ name, img, desc, cat, msg }: {
  name: string; img: string; desc: string; cat: string; msg: string;
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
        <span className="hc-front__cat">{cat}</span>
        <div className="hc-front__body">
          <span className="hc-front__name">{name}</span>
          <span className="hc-front__btn">Prenota →</span>
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
          Prenota su WhatsApp
        </a>
      </div>
    </div>
  );
}

function BenVideoPlayer({ src }: { src: string }) {
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
      <video ref={videoRef} src={src} playsInline onTimeUpdate={onTimeUpdate} onEnded={() => setPlaying(false)} />
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

export const BenesserePageV2: React.FC = () => {
  const s0   = useVisible("-20px");
  const s7   = useVisible("-60px");
  const sf1  = useVisible("-60px");
  const sf2  = useVisible("-60px");
  const sf3  = useVisible("-60px");
  const sf4  = useVisible("-60px");
  const ssec = useVisible("-40px");

  return (
    <div className="ben-page ben-page--v2">

      {/* ── 1. Opening ── */}
      <section
        ref={s0.ref as React.RefObject<HTMLElement>}
        className={`ben-opening${s0.visible ? " is-on" : ""}`}
      >
        <Image
          src="/assets/Dettagli-accoglienza.png"
          alt="EQB Milano — benessere"
          fill priority sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 60%" }}
        />
        <div className="ben-opening__overlay" />
        <div className="ben-opening__content">
          <span className="ben-opening__label ben-fade ben-fade--1">Benessere</span>
          <h1 className="ben-opening__title ben-fade ben-fade--2">
            Cura.<br />Movimento.<br />Equilibrio.
          </h1>
          <p className="ben-opening__sub ben-fade ben-fade--3">
            Trova il professionista, il percorso o l&apos;attività<br />più adatta alle tue esigenze.
          </p>
        </div>
        <div className="ben-opening__scroll" aria-hidden="true">
          <div className="ben-opening__scroll-line" />
        </div>
      </section>

      {/* ── 2. Valutazione Posturale — Federico ── */}
      <section
        ref={s7.ref as React.RefObject<HTMLElement>}
        className={`ben-section ben-ad-section${s7.visible ? " is-on" : ""}`}
      >
        <div className="ben-ad-section__inner">
          <div className="ben-ad-section__video ben-up ben-up--1">
            <BenVideoPlayer src="/assets/Campagna-Fede-1.mov" />
          </div>
          <div className="ben-ad-section__content">
            <span className="ben-label ben-up ben-up--1">Hai un obiettivo ma non sai da dove partire?</span>
            <h2 className="ben-ad-section__title ben-up ben-up--2">
              Valutazione<br />Posturale
            </h2>
            <div className="ben-ad-section__body ben-up ben-up--3">
              <p>Un primo incontro per capire <strong>da dove nasce il tuo problema</strong> — non solo dove fa male.</p>
              <p>Se il dolore continua a tornare, di solito <strong>non è sfortuna</strong>: finora si è agito sul sintomo, <strong>non sulla causa</strong>. Insieme leggiamo la tua situazione e ne usciamo con <strong>una direzione chiara su cosa fare</strong> — non con l&apos;ennesimo trattamento da provare.</p>
            </div>
            <p className="ben-ad-section__firma ben-up ben-up--4">
              Federico Mondin<br />
              <span>Osteopata · Co-fondatore EQB Milano</span>
            </p>
            <BenTiltCard variant="dark">
              <p className="ben-tilt-card__sub">Dalla prima visita capisci perché finora non ha funzionato.</p>
              <a href="https://tinyurl.com/valutazioneposturale" target="_blank" rel="noopener noreferrer" className="ben-tilt-card__btn">Prenota subito</a>
            </BenTiltCard>
          </div>
        </div>
      </section>

      {/* ── 3. Featured: Percorso Posturale ── */}
      <section
        ref={sf1.ref as React.RefObject<HTMLElement>}
        className={`ben-feature${sf1.visible ? " is-on" : ""}`}
      >
        <div className="ben-feature__inner">
          <div className="ben-feature__image ben-up ben-up--1">
            <video src="/assets/Feature-Pilates-v2.mov" autoPlay muted loop playsInline />
          </div>
          <div className="ben-feature__content">
            <span className="ben-feature__num">01</span>
            <span className="ben-label ben-up ben-up--1">Comprendere</span>
            <h2 className="ben-feature__title ben-up ben-up--2">
              Percorso<br />Posturale
            </h2>
            <p className="ben-feature__micro ben-up ben-up--3">
              Per chi è stanco di ripartire da capo ogni volta. Andiamo alla causa del dolore che torna — non al sintomo — fino a renderti autonomo nel gestirlo.
            </p>
            <div className="ben-feature__tags ben-up ben-up--4">
              <span className="ben-feature__tag">Osteopatia</span>
              <span className="ben-feature__tag">Fisioterapia</span>
              <span className="ben-feature__tag">Riabilitazione Posturale</span>
            </div>
            <a
              href={`${WA}${encodeURIComponent("Ciao! Vorrei sapere di più sul percorso posturale")}`}
              target="_blank" rel="noopener noreferrer"
              className="ben-feature__link ben-up ben-up--5"
            >
              Scopri il percorso →
            </a>
          </div>
        </div>
      </section>

      {/* ── 4. Featured: Pilates Reformer ── */}
      <section
        ref={sf2.ref as React.RefObject<HTMLElement>}
        className={`ben-feature ben-feature--shade ben-feature--reverse${sf2.visible ? " is-on" : ""}`}
      >
        <div className="ben-feature__inner">
          <div className="ben-feature__content">
            <span className="ben-feature__num">02</span>
            <span className="ben-label ben-up ben-up--1">Muoversi</span>
            <h2 className="ben-feature__title ben-up ben-up--2">
              Pilates<br />Reformer
            </h2>
            <p className="ben-feature__micro ben-up ben-up--3">
              Per chi cerca un modo più consapevole, personalizzato e sostenibile di muoversi.
            </p>
            <div className="ben-feature__tags ben-up ben-up--4">
              <span className="ben-feature__tag">One to One</span>
              <span className="ben-feature__tag">Duetto</span>
              <span className="ben-feature__tag">Chair Pilates</span>
            </div>
            <a
              href={`${WA}${encodeURIComponent("Ciao! Vorrei info sul Reformer Pilates")}`}
              target="_blank" rel="noopener noreferrer"
              className="ben-feature__link ben-up ben-up--5"
            >
              Scopri le lezioni →
            </a>
          </div>
          <div className="ben-feature__image ben-up ben-up--1">
            <video src="/assets/Feature-Posturale-v2.mov" autoPlay muted loop playsInline />
          </div>
        </div>
      </section>

      {/* ── 5. Featured: Recupero & Benessere ── */}
      <section
        ref={sf3.ref as React.RefObject<HTMLElement>}
        className={`ben-feature${sf3.visible ? " is-on" : ""}`}
      >
        <div className="ben-feature__inner">
          <div className="ben-feature__image ben-up ben-up--1">
            <video src="/assets/Feature-Relax.mp4" autoPlay muted loop playsInline />
          </div>
          <div className="ben-feature__content">
            <span className="ben-feature__num">03</span>
            <span className="ben-label ben-up ben-up--1">Recupero & Benessere</span>
            <h2 className="ben-feature__title ben-up ben-up--2">
              Recuperare<br />è parte<br />della cura.
            </h2>
            <p className="ben-feature__micro ben-up ben-up--3">
              Per chi si allena, lavora intensamente o sente il bisogno di rallentare e ritrovare energie.
            </p>
            <div className="ben-feature__tags ben-up ben-up--4">
              <span className="ben-feature__tag">Massoterapia</span>
              <span className="ben-feature__tag">Massaggi</span>
              <span className="ben-feature__tag">Riflessologia</span>
            </div>
            <a
              href={`${WA}${encodeURIComponent("Ciao! Vorrei prenotare un trattamento di recupero e benessere")}`}
              target="_blank" rel="noopener noreferrer"
              className="ben-feature__link ben-up ben-up--5"
            >
              Scopri i trattamenti →
            </a>
          </div>
        </div>
      </section>

      {/* ── 6. Featured: Nutrizione & Forma ── */}
      <section
        ref={sf4.ref as React.RefObject<HTMLElement>}
        className={`ben-feature ben-feature--shade ben-feature--reverse${sf4.visible ? " is-on" : ""}`}
      >
        <div className="ben-feature__inner">
          <div className="ben-feature__content">
            <span className="ben-feature__num">04</span>
            <span className="ben-label ben-up ben-up--1">Costruire</span>
            <h2 className="ben-feature__title ben-up ben-up--2">
              Nutrizione<br />&amp; Forma
            </h2>
            <p className="ben-feature__micro ben-up ben-up--3">
              Per chi vuole costruire nuove abitudini e rimettersi in forma con una direzione chiara.
            </p>
            <div className="ben-feature__tags ben-up ben-up--4">
              <span className="ben-feature__tag">Nutrizione</span>
              <span className="ben-feature__tag">Allenamento Funzionale</span>
              <span className="ben-feature__tag">Linfodrenante</span>
            </div>
            <a
              href={`${WA}${encodeURIComponent("Ciao! Vorrei info sul percorso di nutrizione e forma")}`}
              target="_blank" rel="noopener noreferrer"
              className="ben-feature__link ben-up ben-up--5"
            >
              Inizia il percorso →
            </a>
          </div>
          <div className="ben-feature__image ben-up ben-up--1">
            <Image
              src="/assets/Nutrizionista-dettaglio.jpg"
              alt="Nutrizione EQB Milano"
              fill sizes="50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* ── Parallax Divider ── */}
      <ParallaxDivider
        src="/assets/Osteopatia-cranio.jpg"
        text="Tutti i percorsi sono personalizzati e seguiti da professionisti certificati, per accompagnarti nel modo più adatto alle tue esigenze."
      />

      {/* ── 7. La nostra offerta ── */}
      <section
        ref={ssec.ref as React.RefObject<HTMLElement>}
        className={`ben-offerta${ssec.visible ? " is-on" : ""}`}
      >
        <div className="ben-offerta__inner">
          <div className="ben-offerta__header">
            <span className="ben-label ben-up ben-up--1">Professionisti, percorsi e attività</span>
            <h2 className="ben-offerta__title ben-up ben-up--2">Tutto quello che trovi in EQB</h2>
          </div>
          <div className="vb-groups">
            {groups.map((g) => (
              <div key={g.label}>
                <div className="vb-group__header">
                  <h3 className="vb-group__title">{g.label}</h3>
                  <span className="vb-group__count">{g.services.length} servizi</span>
                </div>
                <div className="vb-group__cards">
                  {g.services.map((s) => (
                    <HoverCard key={s.name} {...s} cat={g.label} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Closing CTA ── */}
      <section className="ben-closing">
        <div className="ben-closing__text">
          <span className="ben-closing__label">Inizia da qui</span>
          <h2 className="ben-closing__title">
            Il tuo percorso<br />inizia con una<br />conversazione.
          </h2>
          <p className="ben-closing__body">
            Raccontaci di cosa hai bisogno<br />e ti aiuteremo a capire da dove partire.
          </p>
          <a
            href={`${WA}${encodeURIComponent("Ciao! Vorrei sapere di più su EQB Milano")}`}
            target="_blank" rel="noopener noreferrer"
            className="ben-closing__cta"
          >
            Scrivici su WhatsApp
          </a>
        </div>
        <div className="ben-closing__photo">
          <Image
            src="/assets/Federico-trattamento.jpg"
            alt="EQB Milano — trattamento"
            fill sizes="50vw"
            style={{ objectFit: "cover", objectPosition: "center 30%" }}
          />
        </div>
      </section>

    </div>
  );
};
