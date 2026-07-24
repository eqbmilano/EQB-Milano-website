import type { Metadata } from "next";
import "./preview-sticky.css";

export const metadata: Metadata = {
  title: "Preview sticky CTA — EQB Milano",
  robots: { index: false, follow: false },
};

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <path d="M13.8043 7.42857L7.18457 0.808857L8 0L16 8L8 16L7.18457 15.1911L13.8043 8.57143H0V7.42857L13.8043 7.42857Z" fill="currentColor" />
  </svg>
);
const WaIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1zm0 0a5 5 0 0 0 5 5m0 0h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1z" />
  </svg>
);

function Demo({ label, dark, children }: { label: string; dark?: boolean; children: React.ReactNode }) {
  return (
    <div className={`ps-demo${dark ? " ps-demo--dark" : ""}`}>
      <span className="ps-demo__label">{label}</span>
      <p className="ps-demo__filler">Contenuto di pagina, per vedere lo sticky sopra uno sfondo {dark ? "scuro" : "chiaro"}.</p>
      {children}
    </div>
  );
}

export default function PreviewSticky() {
  return (
    <div className="ps-page">
      <header className="ps-header">
        <h1>Preview sticky CTA — 4 varianti</h1>
        <p>Ogni variante è mostrata su sfondo chiaro e scuro, ferma (non a scomparsa) così si vede subito. Dimmi quale ti convince, o mescoliamo elementi di più varianti.</p>
      </header>

      {/* A — Pillola minimal, larghezza sul contenuto */}
      <section className="ps-section">
        <h2>A — Pillola minimal (si stringe sul contenuto)</h2>
        <p className="ps-note">Stesso stile di oggi, ma la larghezza segue il testo/bottone invece di restare fissa — risolve il "vuoto storto" quando il testo è nascosto su mobile.</p>
        <Demo label="Su chiaro">
          <div className="ps-sticky ps-a">
            <a className="ps-a__btn">Candidati <ArrowIcon /></a>
          </div>
        </Demo>
        <Demo label="Su scuro" dark>
          <div className="ps-sticky ps-a">
            <a className="ps-a__btn">Candidati <ArrowIcon /></a>
          </div>
        </Demo>
      </section>

      {/* B — Barra intera in basso */}
      <section className="ps-section">
        <h2>B — Barra intera (non fluttuante)</h2>
        <p className="ps-note">Bordo a bordo, ancorata in basso, testo + bottone sempre entrambi visibili. Più presenza, meno "leggera".</p>
        <Demo label="Su chiaro">
          <div className="ps-sticky-bar ps-b">
            <span className="ps-b__text">Pronto a renderlo tuo?</span>
            <a className="ps-b__btn">Candidati <ArrowIcon /></a>
          </div>
        </Demo>
        <Demo label="Su scuro" dark>
          <div className="ps-sticky-bar ps-b">
            <span className="ps-b__text">Pronto a renderlo tuo?</span>
            <a className="ps-b__btn">Candidati <ArrowIcon /></a>
          </div>
        </Demo>
      </section>

      {/* C — FAB rotondo in basso a destra */}
      <section className="ps-section">
        <h2>C — Bottone rotondo (stile chat)</h2>
        <p className="ps-note">Minimo ingombro, in un angolo, come un pulsante WhatsApp. Meno invadente, ma comunica meno del "Candidati".</p>
        <Demo label="Su chiaro">
          <div className="ps-sticky ps-c">
            <button className="ps-c__btn" aria-label="Candidati"><WaIcon /></button>
          </div>
        </Demo>
        <Demo label="Su scuro" dark>
          <div className="ps-sticky ps-c">
            <button className="ps-c__btn" aria-label="Candidati"><WaIcon /></button>
          </div>
        </Demo>
      </section>

      {/* D — Card chiara flottante */}
      <section className="ps-section">
        <h2>D — Pillola chiara (invertita)</h2>
        <p className="ps-note">Sfondo bianco/crema invece di marrone scuro: si legge sempre, su chiaro E su scuro, senza bisogno del bordo di contrasto.</p>
        <Demo label="Su chiaro">
          <div className="ps-sticky ps-d">
            <span className="ps-d__text">Pronto a renderlo tuo?</span>
            <a className="ps-d__btn">Candidati <ArrowIcon /></a>
          </div>
        </Demo>
        <Demo label="Su scuro" dark>
          <div className="ps-sticky ps-d">
            <span className="ps-d__text">Pronto a renderlo tuo?</span>
            <a className="ps-d__btn">Candidati <ArrowIcon /></a>
          </div>
        </Demo>
      </section>
    </div>
  );
}
