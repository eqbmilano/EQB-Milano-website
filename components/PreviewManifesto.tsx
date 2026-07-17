import "./PreviewManifesto.css";

const Claim = () => (
  <div className="pm-content">
    <h2 className="pm-claim">
      <span>Non è uno studio.</span>
      <span className="pm-claim-accent">È un ecosistema.</span>
    </h2>
    <p className="pm-subtext">
      Pensato per professionisti che cercano qualità, continuità e visione,
      all&rsquo;interno di uno spazio che supporta lavoro, crescita e relazioni.
    </p>
  </div>
);

export const PreviewManifesto: React.FC = () => {
  return (
    <div className="pm-page">
      <div className="pm-tag">
        <span className="pm-tag__title">Variante A — Respiro</span>
        <span className="pm-tag__note">glow radiale in chiaro, stesso linguaggio della sezione finale di /visione</span>
      </div>
      <section className="pm-section pm-a">
        <div className="pm-a__glow" />
        <Claim />
      </section>

      <div className="pm-tag">
        <span className="pm-tag__title">Variante B — Ambientazione fotografica</span>
        <span className="pm-tag__note">foto reale della Sala Allenamento sfumata dietro al testo</span>
      </div>
      <section className="pm-section pm-b">
        <div className="pm-b__img" />
        <div className="pm-b__scrim" />
        <Claim />
      </section>

      <div className="pm-tag">
        <span className="pm-tag__title">Variante C — Mosaico sotto al claim</span>
        <span className="pm-tag__note">foto reali dello spazio riempiono la parte bassa, come nella CTA finale di /spazio</span>
      </div>
      <section className="pm-section pm-c">
        <Claim />
        <div className="pm-c__mosaic">
          <div><img src="/assets/Spazi-ingresso-frontale.jpg" alt="" /></div>
          <div><img src="/assets/Sala-Allenamento.jpg" alt="" /></div>
          <div><img src="/assets/Stanza Terra.jpg" alt="" /></div>
          <div><img src="/assets/Spazi-relax-corner.jpg" alt="" /></div>
        </div>
      </section>

      <div className="pm-tag">
        <span className="pm-tag__title">Variante D — Compatto, niente schermo intero</span>
        <span className="pm-tag__note">torna all&apos;altezza originale; il &quot;taglio&quot; si risolve con una dissolvenza dal video dell&apos;hero invece che con il pieno schermo</span>
      </div>
      <div className="pm-d-wrap">
        <div className="pm-d__fade-in" />
        <section className="pm-section pm-d">
          <Claim />
        </section>
        <div className="pm-d__fade-out" />
      </div>

      <div className="pm-tag">
        <span className="pm-tag__title">Variante E — Sfondo fisso in bianco</span>
        <span className="pm-tag__note">stesso meccanismo del banner (background-attachment: fixed) di FixedBackground/ParallaxDivider, qui in chiaro. Le due fasce scure sopra e sotto simulano le sezioni vicine per mostrare l&apos;effetto &quot;finestra&quot;</span>
      </div>
      <div className="pm-e-spacer" />
      <section className="pm-section pm-e">
        <Claim />
      </section>
      <div className="pm-e-spacer" />
    </div>
  );
};
