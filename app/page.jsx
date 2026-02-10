export default function Home() {
  return (
    <main className="landing">
      <section className="hero fade-up">
        <div className="hero-left">
          <div className="hero-top">
            <div className="eqb-wordmark">EQB</div>
            <div className="hero-line" aria-hidden="true"></div>
            <div className="hero-year">2026</div>
          </div>
          <div className="hero-center">
            <p className="hero-approach">
              Il nostro approccio si basa su tre principi chiave
            </p>
          </div>
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

      <section className="manifesto fade-up">
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

      <section className="contacts fade-up">
        <div className="contacts-top">
          <div className="contacts-left">Contatti</div>
          <div className="contacts-center">
            <a href="mailto:info@eqbmilano.it">info@eqbmilano.it</a>
            <span>39 3751845590</span>
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
