"use client";
import React, { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import "./CandidaturaWizard.css";

const STEPS = [
  "intro",
  "categoria",
  "portabili",
  "appuntamenti",
  "aspettative",
  "inizio",
  "perche",
  "contatto",
  "done",
] as const;
type Step = typeof STEPS[number];
const TOTAL_QUESTIONS = 7;

const CATEGORIA_ICONS = [
  <svg key="0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><circle cx="9" cy="9" r="5" /><circle cx="15" cy="15" r="5" /></svg>,
  <svg key="1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 17 9 11 13 15 21 6" /><polyline points="15 6 21 6 21 12" /></svg>,
  <svg key="2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="8" /><line x1="12" y1="4" x2="12" y2="20" strokeLinecap="round" /></svg>,
  <svg key="3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="8" x2="4" y2="16" /><line x1="20" y1="8" x2="20" y2="16" /><line x1="7" y1="9" x2="7" y2="15" /><line x1="17" y1="9" x2="17" y2="15" /></svg>,
  <svg key="4" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="4" r="2" /><path d="M12 6c-1 3 2 4 1 7s-3 3-2 7" /></svg>,
  <svg key="5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M3 15c2-3 4-3 6 0s4 3 6 0 4-3 6 0" /><path d="M3 9c2-3 4-3 6 0s4 3 6 0 4-3 6 0" /></svg>,
  <svg key="6" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="3" /><circle cx="12" cy="12" r="7.5" opacity=".5" /></svg>,
  <svg key="7" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3c4 3 7 7 7 11a7 7 0 0 1-14 0c0-4 3-8 7-11z" /></svg>,
  <svg key="8" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21c-4 0-7-3.5-7-8 0-3.5 2-6 4-8 .5 2 1 3 2 3 1.5 0 1-2.5 1-4 3 2 6 5.5 6 9 0 4.5-3 8-6 8z" /></svg>,
];

export const EqbLogo: React.FC = () => (
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
  selected?: string | string[];
  onSelect: (value: string) => void;
}) {
  const isSelected = (v: string) => (Array.isArray(selected) ? selected.includes(v) : selected === v);
  return (
    <div className={`cand-options${narrow ? " cand-options--narrow" : ""}`}>
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          className={`cand-option${isSelected(o.value) ? " is-selected" : ""}`}
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
  const t = useTranslations("candidatura");
  const locale = usePathname().split("/")[1] || "it";
  const categorieOptions = (t.raw("categorie") as string[]).map((value, i) => ({ value, icon: CATEGORIA_ICONS[i] }));
  const portabiliOptions = t.raw("portabili") as string[];
  const appuntamentiOptions = t.raw("appuntamenti") as string[];
  const aspettativeOptions = t.raw("aspettative") as string[];
  const inizioOptions = t.raw("inizio") as string[];

  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [categorie, setCategorie] = useState<string[]>([]);
  const [categoriaAltro, setCategoriaAltro] = useState("");
  const [why, setWhy] = useState("");
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [numero, setNumero] = useState("");
  const [email, setEmail] = useState("");
  const [ig, setIg] = useState("");
  const [sito, setSito] = useState("");
  const [cv, setCv] = useState<File | null>(null);
  const [honeypot, setHoneypot] = useState("");
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);
  const advanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (advanceTimer.current) clearTimeout(advanceTimer.current);
    };
  }, []);

  const key = STEPS[idx];
  const questionNumber = idx; // categoria=1 ... contatto=7

  const next = () => setIdx((i) => Math.min(i + 1, STEPS.length - 1));
  const back = () => setIdx((i) => Math.max(i - 1, 0));

  const select = (group: string, value: string) => {
    setAnswers((a) => ({ ...a, [group]: value }));
    if (advanceTimer.current) clearTimeout(advanceTimer.current);
    advanceTimer.current = setTimeout(next, 420);
  };

  // domanda 1: selezione multipla, si avanza col bottone, non in automatico
  const toggleCategoria = (value: string) => {
    setCategorie((c) => (c.includes(value) ? c.filter((v) => v !== value) : [...c, value]));
  };

  const submitCandidatura = async () => {
    setSending(true);
    setSendError(null);
    try {
      const fd = new FormData();
      fd.append("categorie", categorie.join(", "));
      fd.append("categoriaAltro", categoriaAltro);
      fd.append("portabili", answers.portabili ?? "");
      fd.append("appuntamenti", answers.appuntamenti ?? "");
      fd.append("aspettative", answers.aspettative ?? "");
      fd.append("inizio", answers.inizio ?? "");
      fd.append("perche", why);
      fd.append("nome", nome);
      fd.append("cognome", cognome);
      fd.append("numero", numero);
      fd.append("email", email);
      fd.append("ig", ig);
      fd.append("sito", sito);
      fd.append("website", honeypot);
      if (cv) fd.append("cv", cv);

      const res = await fetch("/api/candidatura", { method: "POST", body: fd });
      const data = await res.json().catch(() => ({ ok: false }));
      if (!res.ok || !data.ok) {
        throw new Error(data.error || t("contatto.erroreGenerico"));
      }
      next();
    } catch (err) {
      setSendError(err instanceof Error ? err.message : t("contatto.erroreGenerico"));
    } finally {
      setSending(false);
    }
  };

  const showBack = key !== "intro" && key !== "done";
  const progressPct =
    key === "intro" ? 0 : key === "done" ? 100 : Math.round((questionNumber / TOTAL_QUESTIONS) * 100);

  // Freccia avanti nell'header: attiva solo se lo step corrente è completo
  // (i campi facoltativi non bloccano). Sull'ultimo step resta solo il bottone
  // "Invia candidatura", per rendere l'invio un gesto esplicito.
  const canAdvance = (() => {
    switch (key) {
      case "categoria": return categorie.length > 0 || categoriaAltro.trim().length > 0;
      case "portabili": return !!answers.portabili;
      case "appuntamenti": return !!answers.appuntamenti;
      case "aspettative": return !!answers.aspettative;
      case "inizio": return !!answers.inizio;
      case "perche": return why.trim().length > 0;
      default: return false;
    }
  })();
  const showFwd = key !== "intro" && key !== "contatto" && key !== "done";

  return (
    <div className="cand-app cand-app--dark">
      <div className="cand-chrome">
        <div className="cand-chrome__brand">
          <EqbLogo />
        </div>
        <button className="cand-chrome__back" aria-label={t("back")} hidden={!showBack} onClick={back}>
          &#8592;
        </button>
        <div className="cand-chrome__progress">
          <div className="cand-chrome__progress-fill" style={{ width: `${progressPct}%` }} />
        </div>
        <button
          className="cand-chrome__back cand-chrome__fwd"
          aria-label={t("fwd")}
          hidden={!showFwd}
          disabled={!canAdvance}
          onClick={next}
        >
          &#8594;
        </button>
        <a className="cand-chrome__exit" href={`/${locale}/coworking`} aria-label={t("exit")} title={t("exitTitle")}>
          &#10005;
        </a>
      </div>

      <main className="cand-stage">
        <section className={`cand-step cand-step--intro${key === "intro" ? " is-active" : ""}`}>
          <p className="cand-step__eyebrow">{t("intro.eyebrow")}</p>
          <h1 className="cand-step__title">{t("intro.title")}</h1>
          <p className="cand-step__sub">
            {t("intro.sub")}
          </p>
          <div className="cand-scarcity">
            <span className="cand-scarcity__rule" aria-hidden="true" />
            <span>{t("intro.scarcity")}</span>
          </div>
          <button className="cand-btn" onClick={next}>
            {t("intro.cta")} <span aria-hidden="true">&#8594;</span>
          </button>
          <p className="cand-step__foot">{t("intro.foot")}</p>
        </section>

        <section className={`cand-step cand-step--categoria${key === "categoria" ? " is-active" : ""}`}>
          <p className="cand-step__eyebrow">{t("categoria.eyebrow")}</p>
          <h2 className="cand-step__title">{t("categoria.title")}</h2>
          <p className="cand-step__sub">{t("categoria.sub")}</p>
          <OptionGroup options={categorieOptions} selected={categorie} onSelect={toggleCategoria} />
          <div className="cand-fields" style={{ marginTop: "1.1rem" }}>
            <div className="cand-field" style={{ maxWidth: "420px" }}>
              <label htmlFor="cand-categoria-altro">{t("categoria.altroLabel")}</label>
              <input
                id="cand-categoria-altro"
                type="text"
                value={categoriaAltro}
                onChange={(e) => setCategoriaAltro(e.target.value)}
                placeholder={t("categoria.altroPlaceholder")}
              />
            </div>
          </div>
          <button
            className="cand-btn"
            disabled={categorie.length === 0 && categoriaAltro.trim().length === 0}
            onClick={next}
          >
            {t("categoria.cta")} <span aria-hidden="true">&#8594;</span>
          </button>
        </section>

        <section className={`cand-step${key === "portabili" ? " is-active" : ""}`}>
          <p className="cand-step__eyebrow">{t("portabiliStep.eyebrow")}</p>
          <h2 className="cand-step__title" style={{ maxWidth: "18ch" }}>
            {t("portabiliStep.title")}
          </h2>
          <p className="cand-step__sub">{t("portabiliStep.sub")}</p>
          <OptionGroup
            narrow
            options={portabiliOptions.map((v) => ({ value: v }))}
            selected={answers.portabili}
            onSelect={(v) => select("portabili", v)}
          />
        </section>

        <section className={`cand-step${key === "appuntamenti" ? " is-active" : ""}`}>
          <p className="cand-step__eyebrow">{t("appuntamentiStep.eyebrow")}</p>
          <h2 className="cand-step__title" style={{ maxWidth: "16ch" }}>
            {t("appuntamentiStep.title")}
          </h2>
          <p className="cand-step__sub">{t("appuntamentiStep.sub")}</p>
          <OptionGroup
            narrow
            options={appuntamentiOptions.map((v) => ({ value: v }))}
            selected={answers.appuntamenti}
            onSelect={(v) => select("appuntamenti", v)}
          />
        </section>

        <section className={`cand-step${key === "aspettative" ? " is-active" : ""}`}>
          <p className="cand-step__eyebrow">{t("aspettativeStep.eyebrow")}</p>
          <h2 className="cand-step__title">{t("aspettativeStep.title")}</h2>
          <p className="cand-step__sub">{t("aspettativeStep.sub")}</p>
          <OptionGroup
            options={aspettativeOptions.map((v) => ({ value: v }))}
            selected={answers.aspettative}
            onSelect={(v) => select("aspettative", v)}
          />
        </section>

        <section className={`cand-step${key === "inizio" ? " is-active" : ""}`}>
          <p className="cand-step__eyebrow">{t("inizioStep.eyebrow")}</p>
          <h2 className="cand-step__title">{t("inizioStep.title")}</h2>
          <p className="cand-step__sub">{t("inizioStep.sub")}</p>
          <OptionGroup
            narrow
            options={inizioOptions.map((v) => ({ value: v }))}
            selected={answers.inizio}
            onSelect={(v) => select("inizio", v)}
          />
        </section>

        <section className={`cand-step${key === "perche" ? " is-active" : ""}`}>
          <p className="cand-step__eyebrow">{t("perche.eyebrow")}</p>
          <h2 className="cand-step__title">{t("perche.title")}</h2>
          <p className="cand-step__sub">{t("perche.sub")}</p>
          <div className="cand-fields">
            <div className="cand-field">
              <textarea
                value={why}
                onChange={(e) => setWhy(e.target.value)}
                placeholder={t("perche.placeholder")}
              />
            </div>
          </div>
          <button className="cand-btn" disabled={why.trim().length === 0} onClick={next}>
            {t("perche.cta")} <span aria-hidden="true">&#8594;</span>
          </button>
        </section>

        <section className={`cand-step${key === "contatto" ? " is-active" : ""}`}>
          <p className="cand-step__eyebrow">{t("contatto.eyebrow")}</p>
          <h2 className="cand-step__title">{t("contatto.title")}</h2>
          <div className="cand-fields cand-fields--grid">
            <div className="cand-field">
              <label htmlFor="cand-nome">{t("contatto.nome")}</label>
              <input id="cand-nome" type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder={t("contatto.nomePlaceholder")} />
            </div>
            <div className="cand-field">
              <label htmlFor="cand-cognome">{t("contatto.cognome")}</label>
              <input id="cand-cognome" type="text" value={cognome} onChange={(e) => setCognome(e.target.value)} placeholder={t("contatto.cognomePlaceholder")} />
            </div>
            <div className="cand-field">
              <label htmlFor="cand-numero">{t("contatto.numero")}</label>
              <input id="cand-numero" type="tel" value={numero} onChange={(e) => setNumero(e.target.value)} placeholder={t("contatto.numeroPlaceholder")} />
            </div>
            <div className="cand-field">
              <label htmlFor="cand-email">{t("contatto.email")}</label>
              <input id="cand-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t("contatto.emailPlaceholder")} />
            </div>
            <div className="cand-field">
              <label htmlFor="cand-ig">
                {t("contatto.instagram")} <span className="cand-field__optional">{t("contatto.facoltativo")}</span>
              </label>
              <input id="cand-ig" type="text" value={ig} onChange={(e) => setIg(e.target.value)} placeholder={t("contatto.instagramPlaceholder")} />
            </div>
            <div className="cand-field">
              <label htmlFor="cand-sito">
                {t("contatto.sito")} <span className="cand-field__optional">{t("contatto.facoltativo")}</span>
              </label>
              <input id="cand-sito" type="text" value={sito} onChange={(e) => setSito(e.target.value)} placeholder={t("contatto.sitoPlaceholder")} />
            </div>
            <div className="cand-field cand-field--full">
              <label htmlFor="cand-cv">
                {t("contatto.cv")} <span className="cand-field__optional">{t("contatto.facoltativo")}</span>
              </label>
              <label htmlFor="cand-cv" className="cand-file">
                <span>{cv ? cv.name : t("contatto.cvPlaceholder")}</span>
                <span className="cand-file__cta">{cv ? t("contatto.cvCambia") : t("contatto.cvSfoglia")}</span>
              </label>
              <input
                id="cand-cv"
                type="file"
                accept="application/pdf"
                className="cand-file__input"
                onChange={(e) => setCv(e.target.files?.[0] ?? null)}
              />
            </div>
          </div>
          <input
            type="text"
            name="website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="cand-hp"
          />
          <button
            className="cand-btn"
            disabled={!(nome.trim() && cognome.trim() && (numero.trim() || email.trim())) || sending}
            onClick={submitCandidatura}
          >
            {sending ? t("contatto.inviando") : <>{t("contatto.invia")} <span aria-hidden="true">&#8594;</span></>}
          </button>
          {sendError && <p className="cand-step__error">{sendError}</p>}
        </section>

        <section className={`cand-step cand-step--done${key === "done" ? " is-active" : ""}`}>
          <div className="cand-done-mark">
            <CheckIcon />
          </div>
          <p className="cand-step__eyebrow">{t("done.eyebrow")}</p>
          <h2 className="cand-step__title">{t("done.title")}</h2>
          <p className="cand-step__sub">
            {t("done.sub")}
          </p>
          <a className="cand-link-quiet" href={`/${locale}/coworking`}>
            {t("done.torna")}
          </a>
        </section>
      </main>
    </div>
  );
};
