import Link from "next/link";
import "./PreviewInizia.css";

const Tag = ({ title, note }: { title: string; note: string }) => (
  <div className="pi-tag">
    <span className="pi-tag__title">{title}</span>
    <span className="pi-tag__note">{note}</span>
  </div>
);

const MockNav = ({ children, strip }: { children?: React.ReactNode; strip?: React.ReactNode }) => (
  <div className="pi-nav">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src="/assets/Logo-Bianco.svg" alt="EQB" width={80} height={40} />
    <div className="pi-nav__right">
      <div className="pi-anchor">
        <span className="pi-pill">INIZIA</span>
        {children}
      </div>
      <span className="pi-burger" aria-hidden="true">
        <span />
        <span />
      </span>
    </div>
    {strip}
  </div>
);

export const PreviewInizia: React.FC = () => {
  return (
    <div className="pi-page">
      {/* ============ A — Attuale ============ */}
      <section className="pi-section">
        <Tag title="A — Attuale" note="pannello bianco, domanda piccola + azione grande" />
        <MockNav>
          <div className="pi-pop pi-popA">
            <Link href="/candidatura" className="pi-popA__item">
              <span className="pi-popA__kicker">Sei un professionista?</span>
              <span className="pi-popA__label">Candidati &#8594;</span>
            </Link>
            <Link href="/contatti" className="pi-popA__item">
              <span className="pi-popA__kicker">Sei un cliente?</span>
              <span className="pi-popA__label">Scrivici &#8594;</span>
            </Link>
          </div>
        </MockNav>
      </section>

      {/* ============ B — Scura ============ */}
      <section className="pi-section">
        <Tag title="B — Scura" note="stesso pannello ma nella lingua del menu: fondo brand, testi bianchi" />
        <MockNav>
          <div className="pi-pop pi-popB">
            <Link href="/candidatura" className="pi-popB__item">
              <span className="pi-popB__kicker">Sei un professionista?</span>
              <span className="pi-popB__label">Candidati &#8594;</span>
            </Link>
            <Link href="/contatti" className="pi-popB__item">
              <span className="pi-popB__kicker">Sei un cliente?</span>
              <span className="pi-popB__label">Scrivici &#8594;</span>
            </Link>
          </div>
        </MockNav>
      </section>

      {/* ============ C — Compatta ============ */}
      <section className="pi-section">
        <Tag title="C — Compatta" note="solo le due azioni, niente domanda: la più leggera" />
        <MockNav>
          <div className="pi-pop pi-popC">
            <Link href="/candidatura" className="pi-popC__item">
              Candidati <span className="pi-popC__arrow">&#8594;</span>
            </Link>
            <Link href="/contatti" className="pi-popC__item">
              Scrivici <span className="pi-popC__arrow">&#8594;</span>
            </Link>
          </div>
        </MockNav>
      </section>

      {/* ============ D — Con descrizione ============ */}
      <section className="pi-section">
        <Tag title="D — Con descrizione" note="una riga in più per orientare chi non sa ancora cosa scegliere" />
        <MockNav>
          <div className="pi-pop pi-popD">
            <Link href="/candidatura" className="pi-popD__item">
              <span className="pi-popD__kicker">Sei un professionista?</span>
              <span className="pi-popD__label">Candidati &#8594;</span>
              <span className="pi-popD__desc">Spazio a ore, community e clienti: scopri se EQB fa per te.</span>
            </Link>
            <Link href="/contatti" className="pi-popD__item">
              <span className="pi-popD__kicker">Sei un cliente?</span>
              <span className="pi-popD__label">Scrivici &#8594;</span>
              <span className="pi-popD__desc">Raccontaci di cosa hai bisogno, ti mettiamo in contatto.</span>
            </Link>
          </div>
        </MockNav>
      </section>

      {/* ============ E — Fascia a tutta larghezza ============ */}
      <section className="pi-section">
        <Tag title="E — Fascia a tutta larghezza" note="si apre una barra sotto tutta la navbar, divisa in due" />
        <MockNav
          strip={
            <div className="pi-popE">
              <Link href="/candidatura" className="pi-popE__cell">
                <span className="pi-popE__kicker">Sei un professionista?</span>
                <span className="pi-popE__label">Candidati &#8594;</span>
              </Link>
              <Link href="/contatti" className="pi-popE__cell">
                <span className="pi-popE__kicker">Sei un cliente?</span>
                <span className="pi-popE__label">Scrivici &#8594;</span>
              </Link>
            </div>
          }
        />
      </section>
    </div>
  );
};
