import { Navbar, Footer } from "@/components";
import "./privacy.css";

export const metadata = {
  title: "Privacy Policy — EQB Milano",
  description:
    "Informativa sul trattamento dei dati personali del sito eqbmilano.it, ai sensi del Regolamento (UE) 2016/679 (GDPR).",
};

export default function PrivacyPage() {
  return (
    <main className="w-full relative">
      <Navbar />

      <section className="priv-hero">
        <div className="priv-hero__inner">
          <span className="priv-label">Privacy</span>
          <h1 className="priv-hero__title">Informativa sulla privacy</h1>
          <p className="priv-hero__sub">
            Come trattiamo i dati di chi visita eqbmilano.it. In breve: questo sito
            non usa cookie di profilazione e non conserva i dati che scrivi nel form.
          </p>
        </div>
      </section>

      <section className="priv-body">
        <div className="priv-body__inner">

          <h2>Titolare del trattamento</h2>
          <p>
            EQB Milano di Adinolfi Marco — impresa individuale<br />
            Sede legale: Via Caravaggio 2, 20054 Segrate (MI)<br />
            Sede operativa: Viale Regina Margherita 43, 20122 Milano<br />
            P.IVA 14601140966 · C.F. DNLMRC02A11F205W · REA MI-2794459<br />
            Email: <a href="mailto:info@eqbmilano.it">info@eqbmilano.it</a>
          </p>

          <h2>Quali dati trattiamo e perché</h2>

          <h3>1. Dati di navigazione</h3>
          <p>
            Il sito è ospitato su Vercel Inc. (Stati Uniti). Come ogni servizio di
            hosting, Vercel registra log tecnici (indirizzo IP, orario della
            richiesta, pagina visitata) necessari al funzionamento e alla sicurezza
            del servizio. Base giuridica: legittimo interesse del Titolare al
            corretto funzionamento del sito (art. 6.1.f GDPR). I trasferimenti
            extra-UE avvengono sulla base delle garanzie previste dal GDPR
            (clausole contrattuali standard).
          </p>

          <h3>2. Statistiche di utilizzo</h3>
          <p>
            Usiamo Vercel Analytics, un servizio di statistica <strong>senza
            cookie</strong>: i dati raccolti sono aggregati e anonimi, non
            consentono di identificare i singoli visitatori e non vengono
            utilizzati per profilazione o pubblicità. Per questo motivo il sito
            non richiede un banner di consenso.
          </p>

          <h3>3. Dati che ci comunichi tu</h3>
          <p>
            Il form nella pagina Contatti non invia nulla ai nostri server: prepara
            un messaggio WhatsApp sul tuo dispositivo, che decidi tu se inviare.
            Se ci contatti via telefono, email o WhatsApp, i dati che ci fornisci
            (nome, recapito, contenuto del messaggio) vengono usati solo per
            risponderti e gestire la tua richiesta. Base giuridica: esecuzione di
            misure precontrattuali richieste dall&rsquo;interessato (art. 6.1.b GDPR).
            Conserviamo queste comunicazioni per il tempo necessario a gestire la
            richiesta e gli eventuali obblighi che ne derivano.
          </p>

          <h3>4. Mappa di Google</h3>
          <p>
            Nella pagina Contatti la mappa di Google Maps non si carica
            automaticamente: compare solo se scegli di attivarla. Attivandola,
            Google può installare propri cookie e trattare dati secondo la sua{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              informativa privacy
            </a>.
          </p>

          <h2>Cookie</h2>
          <p>
            Il sito non utilizza cookie di profilazione né cookie analitici di
            terze parti. Gli unici cookie eventualmente presenti sono tecnici,
            necessari al funzionamento, oppure quelli di Google Maps se decidi di
            attivare la mappa (vedi sopra).
          </p>

          <h2>Comunicazione dei dati</h2>
          <p>
            I dati non vengono venduti né ceduti a terzi. Possono venirne a
            conoscenza solo i soggetti che collaborano con il Titolare alla
            gestione del sito e dell&rsquo;attività (fornitori tecnici, consulenti),
            nominati responsabili del trattamento ove necessario.
          </p>

          <h2>I tuoi diritti</h2>
          <p>
            Ai sensi degli artt. 15-22 GDPR puoi chiedere in ogni momento
            l&rsquo;accesso ai tuoi dati, la rettifica, la cancellazione, la
            limitazione del trattamento, la portabilità, oppure opporti al
            trattamento. Basta scrivere a{" "}
            <a href="mailto:info@eqbmilano.it">info@eqbmilano.it</a>. Se ritieni
            che il trattamento violi la normativa, puoi proporre reclamo al{" "}
            <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">
              Garante per la protezione dei dati personali
            </a>.
          </p>

          <h2>Aggiornamenti</h2>
          <p>
            Questa informativa può essere aggiornata: la versione pubblicata su
            questa pagina è quella vigente.<br />
            Ultimo aggiornamento: 13 luglio 2026.
          </p>

        </div>
      </section>

      <Footer />
    </main>
  );
}
