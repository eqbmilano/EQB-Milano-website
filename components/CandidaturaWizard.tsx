"use client";
import React, { useState, useRef } from "react";
import "./CandidaturaWizard.css";

const STEPS = [
  "intro",
  "categoria",
  "esperienza",
  "clienti",
  "ore",
  "acquisizione",
  "perche",
  "contatto",
  "done",
] as const;
type Step = typeof STEPS[number];
const TOTAL_QUESTIONS = 7;

const CATEGORIE = [
  { value: "Osteopatia", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><circle cx="9" cy="9" r="5" /><circle cx="15" cy="15" r="5" /></svg> },
  { value: "Fisioterapia", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 17 9 11 13 15 21 6" /><polyline points="15 6 21 6 21 12" /></svg> },
  { value: "Pilates & Movimento", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="8" /><line x1="12" y1="4" x2="12" y2="20" strokeLinecap="round" /></svg> },
  { value: "Massoterapia", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M3 15c2-3 4-3 6 0s4 3 6 0 4-3 6 0" /><path d="M3 9c2-3 4-3 6 0s4 3 6 0 4-3 6 0" /></svg> },
  { value: "Nutrizione", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21c-4 0-7-3.5-7-8 0-3.5 2-6 4-8 .5 2 1 3 2 3 1.5 0 1-2.5 1-4 3 2 6 5.5 6 9 0 4.5-3 8-6 8z" /></svg> },
  { value: "Psicologia & Psicoterapia", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4-1L3 20l1-5.5a8.38 8.38 0 0 1-1-4A8.5 8.5 0 0 1 11.5 3a8.38 8.38 0 0 1 8.5 8.5z" /></svg> },
  { value: "Altro", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg> },
];

const ESPERIENZA = ["Meno di 1 anno", "Da 1 a 3 anni", "Da 3 a 7 anni", "Più di 7 anni"];
const CLIENTI = ["Sto iniziando ora", "Fino a 5", "Da 6 a 15", "Più di 15"];
const ORE = ["5 - 10 ore", "10 - 20 ore", "20 - 40 ore", "40+ ore (full time)"];
const ACQUISIZIONE = [
  "Con i miei canali social",
  "Passaparola e referral",
  "Da uno studio o collaborazione attuale",
  "Non ho ancora un metodo stabile",
];

const EqbLogo: React.FC = () => (
  <svg viewBox="0 0 1920 771.78" role="img" aria-label="EQB">
    <path fill="currentColor" d="M10.72,354.6C10.72,241.6,7.14,123.4,0,0h458.84v43.84c-109.76-18.18-227.64-27.28-353.63-27.28-5.84,103.26-8.77,206.86-8.77,310.76,51.95,0,94.98-.97,129.08-2.92,34.1-1.95,66.73-7.46,97.91-16.56v55.53c-31.17-8.43-64.46-13.79-99.85-16.07-35.41-2.27-77.78-3.41-127.13-3.41v43.84c0,101.97,2.92,203.6,8.77,304.92,131.83,0,250.03-9.09,354.6-27.28v43.84H0c7.14-124.69,10.72-242.89,10.72-354.6Z" />
    <path fill="currentColor" d="M1075.15,665.59c-54.37,29.08-112.83,43.61-175.41,43.61-66.37,0-127.05-15.96-182.04-47.88-54.99-31.91-98.61-75.05-130.84-129.42-32.24-54.35-48.36-113.78-48.36-178.25s15.79-123.73,47.41-177.78c31.6-54.04,75.05-96.86,130.37-128.47C771.59,15.81,832.74,0,899.75,0s127.2,15.81,182.52,47.41c55.3,31.61,98.92,74.43,130.84,128.47,31.91,54.04,47.88,113.3,47.88,177.78s-15.17,122.47-45.51,175.88c-30.34,53.42-71.75,95.92-124.21,127.52,31.6,37.3,67.63,75.53,108.09,114.72h-39.82c-25.93-36.03-54.04-71.44-84.38-106.19ZM1060.93,649.47c-25.93-28.44-53.73-57.2-83.44-86.28h37.93c13.89,18.34,34.44,44.25,61.63,77.75,32.86-20.22,57.98-48.35,75.38-84.38,17.38-36.03,26.08-75.85,26.08-119.47,0-61.94-14.7-124.04-44.09-186.31-29.39-62.25-69.54-113.45-120.42-153.6-50.89-40.13-106.66-60.21-167.35-60.21-48.04,0-89.12,10.59-123.26,31.76-34.13,21.18-59.89,49.47-77.27,84.86-17.39,35.41-26.07,74.59-26.07,117.57,0,61.95,14.7,124.21,44.09,186.78,29.39,62.58,69.53,114.1,120.41,154.55,50.87,40.46,106.98,60.68,168.29,60.68,40.44,0,76.47-7.9,108.09-23.7Z" />
    <path fill="currentColor" d="M1396.86,354.6c0-113-3.58-231.2-10.72-354.6h218.21C1658.26,0,1703.07,7.79,1738.8,23.38c35.71,15.59,61.86,36.21,78.42,61.86,16.56,25.66,24.84,54.07,24.84,85.24s-11.21,62.83-33.61,91.08c-22.41,28.25-55.38,49.2-98.88,62.83,70.14,5.84,122.75,26.47,157.82,61.86,35.07,35.41,52.61,79.4,52.61,132-.65,34.43-9.74,66.09-27.28,94.98-17.54,28.91-44.66,52.12-81.35,69.65-36.7,17.53-82.32,26.3-136.87,26.3h-288.36c7.14-124.69,10.72-242.89,10.72-354.6ZM1566.37,322.45c64.3,0,110.89-13.64,139.79-40.92,28.89-27.28,43.35-64.3,43.35-111.06,0-50.66-15.27-88.97-45.79-114.95-30.54-25.97-78.91-38.97-145.15-38.97h-67.22c-5.84,101.97-8.77,203.94-8.77,305.89h83.78ZM1633.59,692.64c62.99,0,110.08-15.91,141.26-47.73,31.18-31.81,46.76-74.04,46.76-126.64,0-57.8-16.07-102.12-48.22-132.98-32.15-30.84-80.71-46.27-145.64-46.27h-145.15v43.84c0,103.26,2.92,206.53,8.77,309.79h142.23Z" />
  </svg>
);

const CheckIcon: React.FC = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
);

function OptionGroup({
  options,
  narrow,
  selected,
  onSelect,
}: {
  options: { value: string; icon?: React.ReactNode }[];
  narrow?: boolean;
  selected?: string;
  onSelect: (value: string) => void;
}) {
  return (
    <div className={`cand-options${narrow ? " cand-options--narrow" : ""}`}>
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          className={`cand-option${selected === o.value ? " is-selected" : ""}`}
          onClick={() => onSelect(o.value)}
        >
          {o.icon}
          {o.value}
        </button>
      ))}
    </div>
  );
}

export const CandidaturaWizard: React.FC = () => {
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [why, setWhy] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [ig, setIg] = useState("");
  const advanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const key = STEPS[idx];
  const questionNumber = idx; // categoria=1 ... contatto=7

  const next = () => setIdx((i) => Math.min(i + 1, STEPS.length - 1));
  const back = () => setIdx((i) => Math.max(i - 1, 0));

  const select = (group: string, value: string) => {
    setAnswers((a) => ({ ...a, [group]: value }));
    if (advanceTimer.current) clearTimeout(advanceTimer.current);
    advanceTimer.current = setTimeout(next, 420);
  };

  const showBack = key !== "intro" && key !== "done";
  const progressPct =
    key === "intro" ? 0 : key === "done" ? 100 : Math.round((questionNumber / TOTAL_QUESTIONS) * 100);

  return (
    <div className="cand-app">
      <div className="cand-chrome">
        <div className="cand-chrome__brand">
          <EqbLogo />
        </div>
        <button className="cand-chrome__back" aria-label="Torna indietro" hidden={!showBack} onClick={back}>
          &#8592;
        </button>
        <div className="cand-chrome__progress">
          <div className="cand-chrome__progress-fill" style={{ width: `${progressPct}%` }} />
        </div>
        <span className="cand-chrome__step">
          {key !== "intro" && key !== "done" ? `${questionNumber} / ${TOTAL_QUESTIONS}` : ""}
        </span>
        <a className="cand-chrome__exit" href="/coworking" aria-label="Esci" title="Torna al coworking">
          &#10005;
        </a>
      </div>

      <main className="cand-stage">
        <section className={`cand-step cand-step--intro${key === "intro" ? " is-active" : ""}`}>
          <p className="cand-step__eyebrow">Candidatura</p>
          <h1 className="cand-step__title">Raccontaci di te.</h1>
          <p className="cand-step__sub">
            Non è un modulo da compilare. Leggiamo ogni candidatura di persona: se il tuo profilo è in linea
            con EQB, ti chiamiamo noi.
          </p>
          <button className="cand-btn" onClick={next}>
            Inizia <span aria-hidden="true">&#8594;</span>
          </button>
          <p className="cand-step__foot">5 minuti, nessun impegno.</p>
        </section>

        <section className={`cand-step${key === "categoria" ? " is-active" : ""}`}>
          <p className="cand-step__eyebrow">1 di 7</p>
          <h2 className="cand-step__title">Di cosa ti occupi?</h2>
          <OptionGroup options={CATEGORIE} selected={answers.categoria} onSelect={(v) => select("categoria", v)} />
        </section>

        <section className={`cand-step${key === "esperienza" ? " is-active" : ""}`}>
          <p className="cand-step__eyebrow">2 di 7</p>
          <h2 className="cand-step__title">Da quanto tempo eserciti?</h2>
          <OptionGroup
            narrow
            options={ESPERIENZA.map((v) => ({ value: v }))}
            selected={answers.esperienza}
            onSelect={(v) => select("esperienza", v)}
          />
        </section>

        <section className={`cand-step${key === "clienti" ? " is-active" : ""}`}>
          <p className="cand-step__eyebrow">3 di 7</p>
          <h2 className="cand-step__title" style={{ maxWidth: "16ch" }}>
            Quanti clienti segui oggi, in una settimana normale?
          </h2>
          <p className="cand-step__sub">Ci interessa il tuo punto di partenza, non un numero perfetto.</p>
          <OptionGroup
            narrow
            options={CLIENTI.map((v) => ({ value: v }))}
            selected={answers.clienti}
            onSelect={(v) => select("clienti", v)}
          />
        </section>

        <section className={`cand-step${key === "ore" ? " is-active" : ""}`}>
          <p className="cand-step__eyebrow">4 di 7</p>
          <h2 className="cand-step__title">Quante ore a settimana ti servirebbero da noi?</h2>
          <OptionGroup
            narrow
            options={ORE.map((v) => ({ value: v }))}
            selected={answers.ore}
            onSelect={(v) => select("ore", v)}
          />
        </section>

        <section className={`cand-step${key === "acquisizione" ? " is-active" : ""}`}>
          <p className="cand-step__eyebrow">5 di 7</p>
          <h2 className="cand-step__title" style={{ maxWidth: "15ch" }}>
            Oggi, come trovi i tuoi clienti?
          </h2>
          <OptionGroup
            options={ACQUISIZIONE.map((v) => ({ value: v }))}
            selected={answers.acquisizione}
            onSelect={(v) => select("acquisizione", v)}
          />
        </section>

        <section className={`cand-step${key === "perche" ? " is-active" : ""}`}>
          <p className="cand-step__eyebrow">6 di 7</p>
          <h2 className="cand-step__title">Perché EQB?</h2>
          <p className="cand-step__sub">Una riga basta, se dice la cosa giusta.</p>
          <div className="cand-fields">
            <div className="cand-field">
              <textarea
                value={why}
                onChange={(e) => setWhy(e.target.value)}
                placeholder="Es. Cerco un ambiente dove crescere insieme ad altri professionisti seri, non solo una stanza in affitto."
              />
            </div>
          </div>
          <button className="cand-btn" disabled={why.trim().length === 0} onClick={next}>
            Continua <span aria-hidden="true">&#8594;</span>
          </button>
        </section>

        <section className={`cand-step${key === "contatto" ? " is-active" : ""}`}>
          <p className="cand-step__eyebrow">7 di 7</p>
          <h2 className="cand-step__title">Come ti troviamo?</h2>
          <div className="cand-fields">
            <div className="cand-field">
              <label htmlFor="cand-name">Nome e cognome</label>
              <input id="cand-name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Il tuo nome" />
            </div>
            <div className="cand-field">
              <label htmlFor="cand-contact">Email o telefono</label>
              <input id="cand-contact" type="text" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Dove ti raggiungiamo" />
            </div>
            <div className="cand-field">
              <label htmlFor="cand-ig">
                Instagram o sito <span className="cand-field__optional">(facoltativo)</span>
              </label>
              <input id="cand-ig" type="text" value={ig} onChange={(e) => setIg(e.target.value)} placeholder="@tuoprofilo" />
            </div>
          </div>
          <button className="cand-btn" disabled={!(name.trim() && contact.trim())} onClick={next}>
            Invia candidatura <span aria-hidden="true">&#8594;</span>
          </button>
        </section>

        <section className={`cand-step cand-step--done${key === "done" ? " is-active" : ""}`}>
          <div className="cand-done-mark">
            <CheckIcon />
          </div>
          <p className="cand-step__eyebrow">Fatto</p>
          <h2 className="cand-step__title">La tua candidatura è arrivata.</h2>
          <p className="cand-step__sub">
            Leggiamo ogni candidatura di persona. Se il tuo profilo è in linea con EQB, ti chiamiamo noi entro
            pochi giorni.
          </p>
          <a className="cand-link-quiet" href="/coworking">
            Torna al coworking
          </a>
        </section>
      </main>
    </div>
  );
};
