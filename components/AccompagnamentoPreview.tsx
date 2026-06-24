"use client";
import React, { useState, useEffect } from "react";
import "./AccompagnamentoPreview.css";

const EYEBROW = "Il nostro modo di accompagnarti";
const TITLE = "Non esiste un percorso uguale per tutti.";
const INTRO =
  "In EQB trovi professionisti, percorsi e attività che lavorano insieme per aiutarti a prenderti cura di te nel modo più adatto alle tue esigenze. Che tu abbia un obiettivo preciso o non sappia ancora da dove partire, ti aiutiamo a trovare la soluzione più adatta a te.";
const PHRASE =
  "Non sei tu a dover capire cosa ti serve. Ti aiutiamo a trovare il professionista, il percorso o l'attività più adatta alle tue esigenze.";

const PILLARS = [
  { k: "01", t: "Comprendere", d: "Capire le tue esigenze e individuare il punto di partenza." },
  { k: "02", t: "Accompagnare", d: "Costruire un percorso personalizzato intorno a te." },
  { k: "03", t: "Evolvere", d: "Aiutarti a trasformare il benessere in una parte della tua quotidianità." },
];

function Icon({ i }: { i: number }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (i === 0)
    return (
      <svg {...common}>
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" />
      </svg>
    );
  if (i === 1)
    return (
      <svg {...common}>
        <circle cx="6" cy="17" r="2.5" />
        <circle cx="18" cy="7" r="2.5" />
        <path d="M8 15.5l8-7" />
      </svg>
    );
  return (
    <svg {...common}>
      <path d="M3 17l6-6 4 4 7-7" />
      <path d="M17 7h4v4" />
    </svg>
  );
}

/* ── Variante 1 — Stepper connesso (auto-avanza + hover) ── */
function Variant1() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % 3), 2600);
    return () => clearInterval(id);
  }, [paused]);
  return (
    <div className="acc acc1">
      <div className="acc__head acc__head--center">
        <span className="acc__eyebrow">{EYEBROW}</span>
        <h2 className="acc__title">{TITLE}</h2>
        <p className="acc__intro">{INTRO}</p>
      </div>
      <div className="acc1__row" onMouseLeave={() => setPaused(false)}>
        <div className="acc1__line">
          <span className="acc1__line-fill" style={{ width: `${active * 50}%` }} />
        </div>
        {PILLARS.map((p, i) => (
          <button
            key={p.k}
            className={`acc1__pill${i === active ? " is-active" : ""}`}
            onMouseEnter={() => { setActive(i); setPaused(true); }}
            onFocus={() => { setActive(i); setPaused(true); }}
          >
            <span className="acc1__dot"><span className="acc1__icon"><Icon i={i} /></span></span>
            <span className="acc1__k">{p.k}</span>
            <span className="acc1__t">{p.t}</span>
            <span className="acc1__d">{p.d}</span>
          </button>
        ))}
      </div>
      <p className="acc__phrase">{PHRASE}</p>
    </div>
  );
}

/* ── Variante 2 — Tab interattivi (click per cambiare) ── */
function Variant2() {
  const [active, setActive] = useState(0);
  return (
    <div className="acc acc2">
      <div className="acc2__left">
        <span className="acc__eyebrow">{EYEBROW}</span>
        <h2 className="acc__title">{TITLE}</h2>
        <p className="acc__intro">{INTRO}</p>
        <p className="acc__phrase acc__phrase--left">{PHRASE}</p>
      </div>
      <div className="acc2__right">
        <div className="acc2__tabs" style={{ ["--active" as string]: active } as React.CSSProperties}>
          {PILLARS.map((p, i) => (
            <button
              key={p.k}
              className={`acc2__tab${i === active ? " is-active" : ""}`}
              onClick={() => setActive(i)}
            >
              <span className="acc2__tab-k">{p.k}</span>
              {p.t}
            </button>
          ))}
          <span className="acc2__ind" />
        </div>
        <div className="acc2__panel" key={active}>
          <span className="acc2__icon"><Icon i={active} /></span>
          <p className="acc2__d">{PILLARS[active].d}</p>
        </div>
      </div>
    </div>
  );
}

/* ── Variante 3 — Card con sweep + icona che si disegna (hover) ── */
function Variant3() {
  return (
    <div className="acc acc3">
      <div className="acc__head acc__head--center">
        <span className="acc__eyebrow">{EYEBROW}</span>
        <h2 className="acc__title">{TITLE}</h2>
        <p className="acc__intro">{INTRO}</p>
      </div>
      <div className="acc3__grid">
        {PILLARS.map((p, i) => (
          <div key={p.k} className="acc3__card">
            <span className="acc3__sweep" />
            <span className="acc3__k">{p.k}</span>
            <span className="acc3__icon"><Icon i={i} /></span>
            <h3 className="acc3__t">{p.t}</h3>
            <p className="acc3__d">{p.d}</p>
          </div>
        ))}
      </div>
      <p className="acc__phrase">{PHRASE}</p>
    </div>
  );
}

/* ── Variante 4 — Timeline che si auto-riproduce (barra di progresso, pausa su hover) ── */
function Variant4() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % 3), 3200);
    return () => clearInterval(id);
  }, [paused]);
  return (
    <div className="acc acc4" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="acc4__left">
        <span className="acc__eyebrow">{EYEBROW}</span>
        <h2 className="acc__title">{TITLE}</h2>
        <p className="acc__intro">{INTRO}</p>
        <p className="acc__phrase acc__phrase--left">{PHRASE}</p>
      </div>
      <div className="acc4__right">
        {PILLARS.map((p, i) => (
          <button
            key={p.k}
            className={`acc4__step${i === active ? " is-active" : ""}`}
            onClick={() => setActive(i)}
          >
            <span className="acc4__node"><Icon i={i} /></span>
            <span className="acc4__body">
              <span className="acc4__t">{p.t}</span>
              <span className="acc4__d">{p.d}</span>
            </span>
            {i === active && !paused && <span className="acc4__bar" key={active} />}
          </button>
        ))}
      </div>
    </div>
  );
}

const VARIANTS = [
  { n: 1, label: "Stepper connesso — auto-avanza + hover", C: Variant1 },
  { n: 2, label: "Tab interattivi — click per cambiare", C: Variant2 },
  { n: 3, label: "Card con sweep + icona animata (hover)", C: Variant3 },
  { n: 4, label: "Timeline auto-play — barra di progresso, pausa su hover", C: Variant4 },
];

export const AccompagnamentoPreview: React.FC = () => {
  return (
    <div className="acc-page">
      <header className="acc-page__top">
        <span className="acc-page__kicker">Preview — non è la pagina vera</span>
        <h1 className="acc-page__h1">Il nostro modo di accompagnarti</h1>
        <p className="acc-page__sub">4 visualizzazioni della stessa sezione. Stesso testo, diversa impaginazione e diverso elemento interattivo nei 3 pillar.</p>
      </header>
      {VARIANTS.map(({ n, label, C }) => (
        <section key={n} className="acc-slot">
          <div className="acc-slot__tag"><b>Variante {n}</b> · {label}</div>
          <C />
        </section>
      ))}
    </div>
  );
};
