import Link from "next/link";
import "./PreviewInizia.css";

const Bg = () => (
  <div className="pi-bg" aria-hidden="true">
    <div className="pi-bg-ov" />
  </div>
);

const Tag = ({ title, note }: { title: string; note: string }) => (
  <div className="pi-tag">
    <span className="pi-tag__title">{title}</span>
    <span className="pi-tag__note">{note}</span>
  </div>
);

export const PreviewInizia: React.FC = () => {
  return (
    <div className="pi-page">
      {/* ============ A — Centrata (attuale) ============ */}
      <section className="pi-section">
        <Bg />
        <Tag title="A — Centrata (attuale)" note="due blocchi impilati al centro, regola sottile tra i due" />
        <div className="pi-a">
          <Link href="/candidatura" className="pi-a__row">
            <span className="pi-kicker">Sei un professionista?</span>
            <span className="pi-action">Candidati <span className="pi-arrow">&#8594;</span></span>
          </Link>
          <span className="pi-rule" aria-hidden="true" />
          <Link href="/contatti" className="pi-a__row">
            <span className="pi-kicker">Cerchi un percorso?</span>
            <span className="pi-action">Scrivici <span className="pi-arrow">&#8594;</span></span>
          </Link>
        </div>
      </section>

      {/* ============ B — Due colonne ============ */}
      <section className="pi-section">
        <Bg />
        <Tag title="B — Due colonne" note="lo split storico, ma tipografico: metà cliccabili divise da una linea verticale" />
        <div className="pi-b">
          <Link href="/candidatura" className="pi-b__half">
            <span className="pi-kicker">Sei un professionista?</span>
            <span className="pi-action">Candidati <span className="pi-arrow">&#8594;</span></span>
          </Link>
          <Link href="/contatti" className="pi-b__half">
            <span className="pi-kicker">Cerchi un percorso?</span>
            <span className="pi-action">Scrivici <span className="pi-arrow">&#8594;</span></span>
          </Link>
        </div>
      </section>

      {/* ============ C — Stile menu ============ */}
      <section className="pi-section">
        <Bg />
        <Tag title="C — Stile menu" note="allineata a sinistra, stessa gerarchia delle voci del menu hamburger" />
        <div className="pi-c">
          <div className="pi-c__group">
            <span className="pi-c__label">Sei un professionista?</span>
            <Link href="/candidatura" className="pi-c__item">Candidati <span className="pi-arrow">&#8594;</span></Link>
          </div>
          <div className="pi-c__group">
            <span className="pi-c__label">Cerchi un percorso?</span>
            <Link href="/contatti" className="pi-c__item">Scrivici <span className="pi-arrow">&#8594;</span></Link>
          </div>
        </div>
      </section>

      {/* ============ D — Card come il bivio ============ */}
      <section className="pi-section">
        <Bg />
        <Tag title="D — Card come il bivio" note="le stesse card glassy del bivio in home, qui sul fondo brand" />
        <div className="pi-d">
          <Link href="/candidatura" className="pi-d__card">
            <span className="pi-d__kicker">Sei un professionista?</span>
            <p className="pi-d__text">Spazio, community e clienti: scopri se EQB fa per te.</p>
            <span className="pi-d__cta">Candidati &#8594;</span>
          </Link>
          <Link href="/contatti" className="pi-d__card">
            <span className="pi-d__kicker">Cerchi un percorso?</span>
            <p className="pi-d__text">Raccontaci di cosa hai bisogno, ti mettiamo in contatto.</p>
            <span className="pi-d__cta">Scrivici &#8594;</span>
          </Link>
        </div>
      </section>

      {/* ============ E — Domanda e risposte ============ */}
      <section className="pi-section">
        <Bg />
        <Tag title="E — Domanda e risposte" note="una domanda sola, due risposte: il tono conversazionale di EQB" />
        <div className="pi-e">
          <h2 className="pi-e__q">Cosa ti porta qui?</h2>
          <div className="pi-e__answers">
            <Link href="/candidatura" className="pi-e__pill">
              Lavoro nel benessere e cerco uno spazio <span className="pi-arrow">&#8594;</span>
            </Link>
            <Link href="/contatti" className="pi-e__pill">
              Cerco un percorso per stare meglio <span className="pi-arrow">&#8594;</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
