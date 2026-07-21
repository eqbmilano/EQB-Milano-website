"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { CTAButton } from "./CTAButton";
import "./CoworkingFunnel.css";

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current!;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transition = "transform 0.08s, box-shadow 0.08s";
    el.style.transform = `perspective(700px) rotateX(${-y * 20}deg) rotateY(${x * 20}deg) scale(1.04)`;
    el.style.boxShadow = `${x * -28}px ${y * -28}px 60px rgba(50,37,35,0.18), 0 8px 32px rgba(50,37,35,0.08)`;
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

function useVisible(rootMargin = "-100px") {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { rootMargin, threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [rootMargin]);
  return { ref, visible };
}

const pains = [
  {
    n: "01",
    title: "I clienti non sono mai davvero tuoi.",
    body: "Lavori nello studio di qualcun altro, e i suoi clienti restano suoi. Il giorno che cambi, riparti da zero. Stai costruendo il pacchetto di un altro, non il tuo.",
  },
  {
    n: "02",
    title: "Lavori tanto, ti resta poco.",
    body: "Percentuali sullo studio, trattenute su ogni seduta, condizioni decise da qualcun altro. Più clienti porti, più grande è la fetta che lasci sul tavolo.",
  },
  {
    n: "03",
    title: "Rincorri spazi, non costruisci una base.",
    body: "Un po' a domicilio, un po' in una stanzina, un po' in un centro freddo. Nessun posto che senti tuo, nessuna identità professionale stabile.",
  },
  {
    n: "04",
    title: "Da solo, resti invisibile.",
    body: "Niente colleghi con cui confrontarti, niente referral spontanei, niente collaborazioni. Il professionista più bravo, isolato, non cresce.",
  },
];

const pillars = [
  {
    n: "01",
    title: "I clienti sono tuoi. Punto.",
    body: "Costruisci il tuo pacchetto, sotto il tuo nome. Ti diamo spazio e strumenti per farlo crescere, non ci prendiamo i tuoi clienti.",
  },
  {
    n: "02",
    title: "Quello che guadagni, resta tuo.",
    body: "Niente percentuali sulle tue sedute: ogni cliente vale per intero, per te. E il modello premia chi lavora: più ore fai, meno paghi l'ora.",
  },
  {
    n: "03",
    title: "Una base, finalmente tua.",
    body: "Spazio professionale e curato, sempre pronto: reception che accoglie i tuoi clienti, zero utenze, zero pulizie. Un indirizzo vero, non una stanza a ore.",
  },
  {
    n: "04",
    title: "Visibile, dal primo giorno.",
    body: "Uno spazio riconoscibile nel cuore di Milano e un nome che ti dà credibilità prima ancora di parlare. Chi entra qui si fida di te dal primo istante.",
  },
];

const steps = [
  {
    n: "01",
    title: "Prenota",
    body: "Scegli gli spazi e gli orari che ti servono, con un giorno di anticipo o in tempo reale.",
  },
  {
    n: "02",
    title: "Lavori",
    body: "Trovi tutto pronto. Spazio attrezzato, ambienti curati. Tu pensi solo ai tuoi clienti.",
  },
  {
    n: "03",
    title: "Paghi",
    body: "A fine mese, solo le ore che hai usato. Nessun anticipo: prima lavori e incassi, poi paghi.",
  },
];

// NOTA: le citazioni sono BOZZE — da sostituire con le frasi reali dei professionisti.
const testimonials = [
  {
    name: "Cristiana Curioni",
    role: "Istruttrice di Pilates e ChinesioPilates",
    img: "/assets/testi-cristiana.jpg",
    quote: "Qui non affitto una stanza: ho costruito il mio nome. I clienti sono miei, e per la prima volta lo sento davvero.",
  },
  {
    name: "Roberta Boara",
    role: "Riflessologa Plantare",
    img: "/assets/testi-roberta.jpg",
    quote: "Sono entrata che lavoravo da sola. Oggi collaboro, ricevo referral, e il mio lavoro è cresciuto insieme allo spazio.",
  },
  {
    name: "Loris Bonacina",
    role: "Chinesiologo",
    img: "/assets/testi-loris.jpg",
    quote: "Alleno i miei clienti in uno spazio curato, e le collaborazioni con gli altri professionisti nascono da sole.",
  },
];

const objections = [
  {
    q: "«E se non riesco a portarmi i clienti?»",
    a: "È proprio qui che ti aiutiamo: personal brand, contenuti e campagne per farti trovare. E intanto sei in uno spazio dove i clienti già girano, tra colleghi che si scambiano referral.",
  },
  {
    q: "«Ho paura a lasciare lo studio dove lavoro ora.»",
    a: "Non devi lasciare tutto di colpo. Paghi solo le ore che usi: inizi con poche, tieni il resto, e sposti il tuo lavoro qui con il tuo ritmo.",
  },
  {
    q: "«Adesso non ho il budget per un altro spazio.»",
    a: "Non è un altro costo fisso: paghi solo quando lavori, e più cresci meno paghi l'ora. Si parte piccoli: l'investimento segue i tuoi clienti, non li precede.",
  },
];

function PracticeTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const seen = vh - r.top;
      setP(Math.max(0, Math.min(1, seen / (r.height + vh * 0.6))));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return (
    <div ref={ref} className="cw-timeline">
      <div className="cw-timeline__track" aria-hidden="true">
        <span className="cw-timeline__fill" style={{ transform: `scaleX(${p})` }} />
      </div>
      <div className="cw-timeline__steps">
        {steps.map((s, i) => (
          <div key={s.n} className={`cw-tstep${s.n === "03" ? " cw-tstep--climax" : ""}${p >= i / 3 + 0.04 ? " is-active" : ""}`}>
            <div className="cw-tstep__node">{s.n}</div>
            <h4 className="cw-tstep__title">{s.title}</h4>
            <p className="cw-tstep__body">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export const CoworkingFunnel: React.FC = () => {
  const sOpen  = useVisible("-40px");
  const sPain  = useVisible("-80px");
  const sSol   = useVisible("-80px");
  const sDiff  = useVisible("-80px");
  const sTesti = useVisible("-80px");
  const sComm  = useVisible("-80px");
  const sObj   = useVisible("-80px");
  const sCta   = useVisible("-60px");

  const [showSticky, setShowSticky] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.9;
      const closing = sCta.ref.current;
      const beforeClosing = !closing || closing.getBoundingClientRect().top > window.innerHeight * 0.85;
      setShowSticky(pastHero && beforeClosing);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      {/* ── 1. Opening ── */}
      <section ref={sOpen.ref as React.RefObject<HTMLElement>} className={`cw-opening${sOpen.visible ? " is-on" : ""}`}>
        <div className="cw-opening__inner">
          <h2 className="cw-opening__title cw-anim cw-anim--1">
            Hai costruito la tua<br />professionalità per anni.
            <em>Ma non è ancora davvero tua.</em>
          </h2>
        </div>
        <div className="cw-opening__scroll" aria-hidden="true">
          <div className="cw-opening__scroll-line" />
        </div>
      </section>

      {/* ── 2. Pain points ── */}
      <section ref={sPain.ref as React.RefObject<HTMLElement>} className={`cw-pain${sPain.visible ? " is-on" : ""}`}>
        <div className="cw-pain__inner">
          <div className="cw-pain__header cw-anim cw-anim--1">
            <span className="cw-label cw-label--dark">Il problema</span>
            <h2 className="cw-pain__title">Lo sai già.</h2>
            <p className="cw-pain__intro">
              Chi vuole lavorare in proprio, nel benessere, finisce sempre
              nelle stesse quattro trappole. Ogni giorno.
            </p>
          </div>
          <div className="cw-pain__grid">
            {pains.map((p, i) => (
              <TiltCard key={p.n} className={`cw-pain__card cw-anim cw-anim--${i + 2}`}>
                <span className="cw-pain__n">{p.n}</span>
                <h3 className="cw-pain__card-title">{p.title}</h3>
                <p className="cw-pain__card-body">{p.body}</p>
              </TiltCard>
            ))}
          </div>
          <p className="cw-pain__close cw-anim cw-anim--6">
            Non è colpa tua. È un sistema che ti tiene dipendente.
          </p>
        </div>
      </section>

      {/* ── 3. Solution — 4 pilastri specchio dei pain ── */}
      <section ref={sSol.ref as React.RefObject<HTMLElement>} className={`cw-solution${sSol.visible ? " is-on" : ""}`}>
        <div className="cw-sol__inner">
          <div className="cw-sol__header">
            <span className="cw-label cw-anim cw-anim--1">La soluzione</span>
            <h2 className="cw-sol__title cw-anim cw-anim--2">C&apos;è un altro modo.</h2>
            <p className="cw-sol__intro cw-anim cw-anim--3">
              EQB è un ecosistema pensato per renderti autonomo, non per ospitarti.
              Una risposta precisa per ognuno dei tuoi problemi.
            </p>
          </div>
          <div className="cw-sol__pillars">
            {pillars.map((p, i) => (
              <TiltCard key={p.n} className={`cw-pillar cw-anim cw-anim--${Math.min(i + 2, 6)}`}>
                <span className="cw-pillar__n">{p.n}</span>
                <h3 className="cw-pillar__title">{p.title}</h3>
                <p className="cw-pillar__body">{p.body}</p>
              </TiltCard>
            ))}
          </div>
          <div className="cw-practice">
            <span className="cw-practice__label cw-anim cw-anim--1">E in pratica funziona così</span>
            <PracticeTimeline />
          </div>
        </div>
      </section>

      {/* ── 4. Il differenziatore (climax) ── */}
      <section ref={sDiff.ref as React.RefObject<HTMLElement>} className={`cw-diff${sDiff.visible ? " is-on" : ""}`}>
        <div className="cw-diff__glow" aria-hidden="true" />
        <div className="cw-diff__inner">
          <span className="cw-label cw-anim cw-anim--1">Il nostro tratto distintivo</span>
          <h2 className="cw-diff__title cw-anim cw-anim--2">
            Non ti diamo solo uno spazio.<br />Ti aiutiamo a riempirlo.
          </h2>
          <p className="cw-diff__body cw-anim cw-anim--3">
            Personal brand, contenuti, campagne: mettiamo le nostre competenze
            di marketing al servizio della tua crescita, per farti trovare dai
            clienti giusti. Tu porti il talento, noi l&apos;amplificatore.
          </p>
          <p className="cw-diff__proof cw-anim cw-anim--4">
            Chi è entrato in questo percorso è cresciuto. È così che nasce un nome.
          </p>
        </div>
      </section>

      {/* ── 5. Testimonianze ── */}
      <section ref={sTesti.ref as React.RefObject<HTMLElement>} className={`cw-testi${sTesti.visible ? " is-on" : ""}`}>
        <div className="cw-testi__inner">
          <div className="cw-testi__header cw-anim cw-anim--1">
            <span className="cw-label">Chi è già dentro</span>
            <h2 className="cw-testi__title">Nomi, non numeri.</h2>
          </div>
          <div className="cw-testi__grid">
            {testimonials.map((t, i) => (
              <div key={t.name} className={`cw-testi__card cw-anim cw-anim--${i + 2}`}>
                <div className="cw-testi__photo">
                  <Image src={t.img} alt={t.name} fill sizes="(max-width: 768px) 100vw, 320px" style={{ objectFit: "cover" }} />
                </div>
                <p className="cw-testi__quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="cw-testi__person">
                  <span className="cw-testi__name">{t.name}</span>
                  <span className="cw-testi__role">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Community — la vita dello spazio ── */}
      <section ref={sComm.ref as React.RefObject<HTMLElement>} className={`cw-community${sComm.visible ? " is-on" : ""}`}>
        <div className="cw-community__inner">
          <div className="cw-community__text">
            <span className="cw-label cw-label--dark cw-anim cw-anim--1">La rete</span>
            <h2 className="cw-community__title cw-anim cw-anim--2">
              Non sei un ospite.<br />Sei parte di qualcosa.
            </h2>
            <p className="cw-community__body cw-anim cw-anim--3">
              In EQB lavorano fisioterapisti, trainer, osteopati, nutrizionisti,
              psicologi. Professionisti che si conoscono, si referenziano,
              costruiscono percorsi integrati per i propri clienti.
            </p>
            <p className="cw-community__body cw-anim cw-anim--4">
              Non è un vantaggio secondario. È il cuore del modello.
              Il cliente del tuo collega è il tuo cliente potenziale,
              e viceversa. La rete vale quanto lo spazio.
            </p>
          </div>
          <div className="cw-community__image">
            <Image
              src="/assets/Workshop-Rinascere.jpg"
              alt="Workshop EQB Milano"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        </div>
      </section>

      {/* ── 7. Objections ── */}
      <section ref={sObj.ref as React.RefObject<HTMLElement>} className={`cw-obj${sObj.visible ? " is-on" : ""}`}>
        <div className="cw-obj__inner">
          <h2 className="cw-obj__title cw-anim cw-anim--1">
            Ci siamo già sentiti dire:
          </h2>
          <div className="cw-obj__list">
            {objections.map((o, i) => (
              <div key={i} className={`cw-obj__item cw-anim cw-anim--${i + 2}`}>
                <p className="cw-obj__q">{o.q}</p>
                <p className="cw-obj__a">{o.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Final CTA ── */}
      <section ref={sCta.ref as React.RefObject<HTMLElement>} className={`cw-cta${sCta.visible ? " is-on" : ""}`}>
        <div className="cw-cta__inner">
          <span className="cw-label cw-anim cw-anim--1">Il prossimo passo</span>
          <h2 className="cw-cta__title cw-anim cw-anim--2">
            Raccontaci di te.<br />Al resto pensiamo noi.
          </h2>
          <p className="cw-cta__sub cw-anim cw-anim--3">
            Cinque minuti per la tua candidatura.
            <br />La leggiamo di persona, poi ti chiamiamo noi.
          </p>
          <div className="cw-scarcity cw-anim cw-anim--4">
            <span className="cw-scarcity__rule" aria-hidden="true" />
            <span>Lo spazio è fisico: i posti non sono infiniti.</span>
          </div>
          <div className="cw-cta__actions cw-anim cw-anim--5">
            <CTAButton href="/candidatura" variant="filled">
              Candidati per lavorare in EQB →
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ── Sticky CTA ── */}
      <div className={`cw-sticky${showSticky ? " is-shown" : ""}`}>
        <span className="cw-sticky__text">Pronto a renderlo tuo?</span>
        <a href="/candidatura" className="cw-sticky__btn">Candidati →</a>
      </div>
    </>
  );
};
