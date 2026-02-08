import ContactForm from "../components/ContactForm";
import "./globals.css";

export default function Home() {
  return (
    <main className="landing">
      <section className="hero">
        <div className="hero-left">
          <div className="eqb-wordmark">EQB</div>
          <p className="hero-approach">
            Il nostro approccio si basa su tre principi chiave
          </p>
          <div className="hero-year">2026</div>
        </div>
        <div className="hero-right">
          <img src="/assets/hero.jpg" alt="Spazio EQB" className="hero-image" />
          <div className="principles-card">
            <div className="principle">
              <h3>Terapia</h3>
              <p>
                Ascolto, competenza e intervento mirato. Il corpo viene trattato,
                non forzato.
              </p>
            </div>
            <div className="principle">
              <h3>Movimento</h3>
              <p>
                Allenamento consapevole, costruito sulla persona. Funzione prima
                della performance.
              </p>
            </div>
            <div className="principle">
              <h3>Benessere</h3>
              <p>
                Equilibrio che dura nel tempo. Fisico, mente e stile di vita che
                dialogano.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="manifesto">
        <div className="manifesto-inner">
          <div className="manifesto-label">About</div>
          <div className="manifesto-copy">
            <p className="manifesto-quote">
              "EQB è un coworking dedicato al benessere e al movimento. Pensato
              per professionisti che cercano qualità, continuità e visione, in
              un ecosistema che supporta il lavoro, la crescita e le relazioni."
            </p>
            <p className="manifesto-signature">EQB Team</p>
          </div>
        </div>
        <div className="coming-soon">COMING SOON</div>
      </section>

      <section className="contacts">
        <div className="contacts-top">
          <div className="contacts-left">
            <h4>Contatti</h4>
            <a href="mailto:info@eqbmilano.it">info@eqbmilano.it</a>
            <a href="tel:+393751845590">+39 375 184 5590</a>
          </div>
          <div className="contacts-right">
            <div className="socials">
              <a
                className="social"
                href="https://www.instagram.com/eqbmilano/"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                IG
              </a>
              <a
                className="social"
                href="https://www.linkedin.com/company/eqbmilano"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                IN
              </a>
              <a
                className="social"
                href="https://api.whatsapp.com/send?phone=393755153273"
                aria-label="WhatsApp"
                target="_blank"
                rel="noreferrer"
              >
                WA
              </a>
            </div>
          </div>
        </div>

        <ContactForm />

        <div className="gallery">
          <img src="/assets/grid-1.jpg" alt="Pilates" />
          <img src="/assets/grid-2.jpg" alt="Massaggio" />
          <img src="/assets/grid-3.jpg" alt="Osteopatia" />
          <img src="/assets/grid-4.jpg" alt="Riflessologia" />
        </div>
      </section>
    </main>
  );
}
