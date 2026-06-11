# EQB Milano — Coworker Profiles & Skill System
> Documento per il sistema Claude Code di Mattia. Contiene i profili strutturati di ogni professionista EQB e le skill per i task ricorrenti.
> Aggiornato: giugno 2026

---

## INDICE

1. [Struttura consigliata dei file](#struttura)
2. [Company overview EQB](#overview)
3. [Profili professionisti](#profili)
   - [Federico Mondin](#federico-mondin)
   - [Irene](#irene)
   - [Roberta Boara](#roberta-boara)
   - [Cristiana Curioni](#cristiana-curioni)
   - [Sebastian Parolini](#sebastian-parolini)
   - [Loris](#loris)
   - [Mattia (osteopata)](#mattia-osteopata)
   - [Rajveer Kaur](#rajveer-kaur)
   - [Francielle Bernar](#francielle-bernar)
   - [Giulia (nutrizionista)](#giulia)
5. [Gestione operativa studio](#operativa)
   - [Struttura organizzativa](#struttura-org)
   - [Tariffario e conteggio ore](#tariffario)
   - [Onboarding collaboratore](#onboarding)
   - [Contratti e documenti legali](#contratti)
   - [Pendenze legali e admin](#pendenze)
   - [Personaggi chiave esterni](#personaggi)
4. [Skill — Task ricorrenti](#skill)
   - [SKILL_01 — Campagna Meta Ads](#skill_01)
   - [SKILL_02 — Bio Instagram](#skill_02)
   - [SKILL_03 — 3 Post Pinnati](#skill_03)
   - [SKILL_04 — Script Reel Pinnato](#skill_04)
   - [SKILL_05 — Generazione PDF documenti](#skill_05)
   - [SKILL_06 — Sostituzione sfondo foto profilo](#skill_06)
   - [SKILL_07 — Push sito GitHub](#skill_07)
   - [SKILL_08 — Conteggio ore fine mese](#skill_08)
   - [SKILL_09 — Onboarding nuovo collaboratore](#skill_09)
   - [SKILL_10 — Genera email outreach medici](#skill_10)
   - [SKILL_11 — Aggiorna CRM outreach](#skill_11)
   - [SKILL_12 — Messaggio ads a coworker](#skill_12)

---

## STRUTTURA CONSIGLIATA DEI FILE {#struttura}

```
EQB_SYSTEM/
├── CLAUDE.md                          ← contesto master EQB
├── professionisti/
│   ├── federico_mondin.md
│   ├── irene.md
│   ├── roberta_boara.md
│   ├── cristiana_curioni.md
│   └── sebastian_parolini.md
└── skills/
    ├── SKILL_01_campagna_meta.md
    ├── SKILL_02_bio_instagram.md
    ├── SKILL_03_post_pinnati.md
    ├── SKILL_04_script_reel.md
    ├── SKILL_05_genera_pdf.md
    ├── SKILL_06_sfondo_foto.md
    └── SKILL_07_push_github.md
```

---

## COMPANY OVERVIEW EQB {#overview}

**Nome:** EQB Milano  
**Sede:** Viale Regina Margherita 43, Milano (zona Piazza Cinque Giornate)  
**Email:** eqbmilano@gmail.com  
**P.IVA:** 14601140966 (Ditta Individuale Marco Adinolfi)

### Co-fondatori
- **Federico Mondin** — Osteopata, co-fondatore, firma le comunicazioni esterne
- **Marco Adinolfi** — Co-fondatore, CEO, gestione operativa, sviluppo digitale

### Servizi offerti al pubblico
- Terapia manuale (osteopatia, massoterapia)
- Lavoro posturale e allenamento funzionale
- Pilates (reformer + chair)
- Riflessologia plantare
- Linfodrenaggio
- Nutrizione
- Coworking professionale per operatori salute/benessere
- [In valutazione] Tecar therapy in collaborazione con specialisti esterni

### Spazi e attrezzature
- 4 postazioni allenamento libero
- 3 sale trattamento/massaggi
- 2 Reformer Pilates
- 2 Chair Pilates
- Power Rack, pesi, manubri, elastici, rulli, palline
- WiFi, sala d'attesa, distributore acqua, asciugamani, TNT
- Desk reception + sistema prenotazione online

### Modello di business
1. **Sessioni con i professionisti del team** (Federico, Irene, ecc.) — clienti pagano EQB
2. **Coworking a ore** per professionisti esterni — dal 1° settembre pagano affitto mensile
3. **[In sviluppo] Piattaforma digitale** per gestione clienti e prenotazioni
4. **[In valutazione] Tecar therapy** — referral con fisiatri/ortopedici della zona

### Struttura societaria
- **Ditta Individuale** — Marco Adinolfi (operativa, titolare EQB Milano)
- **Organizziamoeventi.it srl** (Angelo) — società precedente, emette fatture affitto spazio nella fase di transizione
- Transizione in corso verso gestione completa ditta individuale

### Strategia social 2026
- **Mag–ago 2026:** campagne Meta orientate ai clienti finali (parlano dei singoli professionisti)
- **Da set 2026:** riaprire comunicazione verso coworker/professionisti del settore

### Archivio file
- **Materiale storico:** `/Desktop/EQB/`
- **Workspace Claude:** `/Desktop/Claude Code/EQB Workspace/`
- **Sito web:** `/Desktop/Claude Code/EQB-Milano-website-main`
- **Piattaforma gestionale:** `/Desktop/Claude Code/03 Progetti EQB/EQB PIATTAFORMA`
- **Script outreach:** `/Desktop/Claude Code/EQB/`

---

## PROFILI PROFESSIONISTI {#profili}

---

### FEDERICO MONDIN {#federico-mondin}

**Ruolo:** Osteopata | Co-fondatore EQB Milano  
**Account IG:** @eqbmilano (profilo studio condiviso)

#### Chi è
Co-fondatore di EQB insieme a Marco Adinolfi. Osteopata con approccio focalizzato sulla causa del dolore, non sul sintomo. Lavora in sala trattamenti nello studio.

#### Metodo comunicativo
- Hook ricorrente: *"Ti hanno trattato il sintomo, ma nessuno ha lavorato sulla causa."*
- Approccio integrato: terapia manuale → valutazione posturale → invio trainer posturali (Irene, Loris, Marino)
- Tono: educativo/filosofico, autorevole, camice bianco in camera

#### Campagna Meta attiva (giugno 2026)
- **Offerta:** Valutazione posturale gratuita · Posti limitati · Fino al 30/06
- **Stato:** Statiche LIVE (€20 budget). Video in preparazione.
- **Formato video:** Talking head (camice, stessa postazione) + b-roll · verticale · sottotitoli dinamici · musica piano sottofondo
- **Budget video:** €10 Federico + €10 Irene

#### Script video attivo — 3 varianti hook, corpo+CTA identici

**CORPO + CTA (comune alle 3 varianti):**
> "In studio analizzo come il tuo corpo si muove: dove accumula tensioni, dove compensa, dove alla lunga può creare problemi. Non è una visita generica — uscirai con un quadro preciso e un percorso concreto.
> Perché la valutazione è il punto di partenza, non il punto di arrivo. Da lì costruiamo insieme il lavoro correttivo in sala con i nostri trainer posturali — è così che i miglioramenti diventano duraturi.
> Posti limitati, fino al 30 giugno. Clicca qui sotto — ti ricontatto io direttamente."

**V1 — Problema personale:**
> "Se un dolore ti torna sempre nello stesso punto, il problema non è il dolore. Per questo ho aperto le valutazioni posturali gratuite, fino al 30 giugno."

**V2 — Echo dalla statica:**
> "Non trattiamo il sintomo. Lavoriamo sulla sua causa. Per questo ho aperto le valutazioni posturali gratuite, fino al 30 giugno."

**V3 — Domanda retorica:**
> "Perché certi dolori non passano mai definitivamente? Perché il problema non è dove fa male. Per questo ho aperto le valutazioni posturali gratuite, fino al 30 giugno."

#### Note operative
- Federico ricontatta personalmente i lead
- I trainer posturali vengono citati genericamente nel video — Federico indirizza poi alla persona giusta
- B-roll disponibile: trattamenti Federico + clip Loris/Marino (cliente reale percorso integrato)

---

### IRENE {#irene}

**Ruolo:** Trainer — allenamento funzionale e posturale  
**Account IG:** (da confermare)

#### Chi è
Trainer in sala EQB. Lavora principalmente con i clienti inviati da Federico dopo la valutazione posturale. Il suo ruolo nella comunicazione è quello di rappresentare il secondo step del percorso integrato: diagnosi osteopatica → correzione in sala.

#### Posizionamento nel funnel
- Riceve i clienti da Federico per il lavoro correttivo e posturale in sala
- Non ha una campagna autonoma — compare nel racconto del percorso integrato EQB

#### Campagna Meta (giugno 2026)
- Budget: €10 aggiuntivi come supporto alla campagna Federico
- Compare nella narrativa integrata "valutazione → allenamento correttivo"

---

### ROBERTA BOARA {#roberta-boara}

**Ruolo:** Riflessologa plantare  
**Account IG:** ~6.000 follower (pubblico caldo)

#### Chi è
Professionista di riflessologia plantare. Forte seguito IG già caldo. Non è una terapeuta del dolore fisico — lavora sul sistema nervoso, sullo stress e sull'equilibrio generale attraverso i piedi.

#### Target
Donne 35–65 anni, Milano. Già consapevoli di lei, non hanno ancora prenotato.

#### Campagna Meta attiva (giugno 2026)
- **Tipo:** BOF su pubblico caldo (custom audience IG interazioni 12–18 mesi)
- **Stato:** LIVE da fine maggio 2026
- **Offerta:** Prima seduta 50€ invece di 70€ · Solo nuovi clienti · Fino al 30/06
- **Budget:** €15/giorno

#### 5 varianti creative (cartella: `/Desktop/EQB/03 - EQB MARKETING/04 - Gestione Social/Robi/Ads/DEF/`)

| File | Hook | Bridge |
|------|------|--------|
| Robi-V1-Sonno.jpg | Dormi, ma non riposi. | La riflessologia lavora dove la testa non riesce ad arrivare da sola. Anche nel sonno. |
| Robi-V2-Colpa.jpg | Da quando sei diventata l'ultima della lista? | Non devi guadagnartelo. Un'ora per ritrovare il tuo ritmo. |
| Robi-V3-Volta ⚠️ | (variante permesso/volta) | manca estensione .jpg — rinominare prima di caricare |
| Robi-V4-Un'ora.jpg | Un'ora senza richieste. Solo tu. | Per fermarti, finalmente. |
| Robi-V5-Momento.jpg | Pensi sempre a tutti. Quando arriva il tuo momento? | Un'ora per te. Senza dover giustificare niente a nessuno. |

#### Form lead gen
- Campi pre-compilati Meta: Nome + Telefono
- Domanda custom: "Per cosa vorresti supporto?" (Stress/tensioni · Sonno difficile · Stanchezza cronica · Altro)

---

### CRISTIANA CURIONI {#cristiana-curioni}

**Ruolo:** Insegnante di Pilates e ChinesioPilates  
**Account IG:** @cristiana.pilates (727 follower)

> ⚠️ Usare sempre **ChinesioPilates** — "Kinesiopilates" è registrato in USA sotto "Kinesio"

#### Chi è
Specialista in ChinesioPilates — tecnica posturale appresa e adattata (NON "mio metodo"). Integra tecniche manuali al pilates per lavorare in profondità. Ha sviluppato il suo approccio partendo dalla propria lombalgia cronica (origin story autentica).

#### Termini corretti
- ✅ ChinesioPilates / ❌ Kinesiopilates
- ✅ Riequilibrio / ❌ Riaccensione
- ✅ Valutazione posturale / ❌ Valutazione funzionale
- ✅ Tecnica appresa e adattata / ❌ "Mio metodo"
- ✅ Test come strumento / ❌ Test come chiave del metodo
- ✅ Donne / ❌ "Donne consapevoli"

#### Bio Instagram (definitiva)
```
Aiuto donne a ritrovare la libertà di movimento e ad eliminare la rigidità cronica attraverso il ChinesioPilates
Prenota la valutazione posturale 👇
```

#### Target
Donne 35–60 anni · Milano zona Cinque Giornate, Porta Romana, Navigli, Crocetta, Lodi · Status medio-alto · Mentalità orientata al benessere

#### Il metodo (sequenza)
1. Visione della persona nel suo insieme (kinesiologia applicata)
2. Anamnesi e ascolto
3. Valutazione posturale (come si muove, come respira, come sta in piedi)
4. Test muscolari (strumento di lettura — NON la chiave del metodo)
5. Terapia manuale
6. Automassaggio (insegnato alla cliente)
7. Lavoro sui muscoli ipotonici

#### 3 Post Pinnati

**Post 1 — Chi Sono** ✅ *registrato e editato*
> "Prima di curare i miei clienti, ho curato me stessa. Questa è la mia storia."

Trascrizione definitiva:
> "Prima di curare i miei clienti ho curato me stessa e questa è la mia storia. Per anni ho sofferto di lombalgia e sono andata dal medico e poi mi ha prescritto farmaci, cerotti. Poi ho provato lo yoga, il pilates fai da te, insomma tutte cose che purtroppo non hanno funzionato, anzi hanno anche un po' peggiorato la situazione. Grazie al mio passato che ho avuto nella danza ho sempre saputo che nel movimento c'era la risposta al mio problema, ma non sapevo che ci volesse il professionista giusto e l'ambiente giusto. Studiando ChinesioPilates ho scoperto che la mia lombalgia non dipendeva dalla schiena, ma da una piccola diastasi e da una disfunzione del pavimento pelvico. Mi hanno sempre detto che per curare il mal di schiena bisognava guardare la schiena e invece io ho fatto un lavoro molto profondo sul core, sul diaframma e sul pavimento pelvico e in questa maniera ho risolto. Ed è proprio questo l'approccio che uso con le donne che vengono qui in studio da me. Ha funzionato con me ha funzionato con molte delle mie clienti. Manchi solo tu."

**Post 2 — Cosa Faccio** ✅ *registrato e editato*
> "Qual è la differenza tra Pilates e ChinesioPilates? Vuoi saperlo?"

Trascrizione definitiva:
> "Molte persone mi chiedono qual è la differenza tra Pilates e ChinesioPilates? Vuoi saperlo? Il Pilates è movimento e controllo, ma se il corpo non è in equilibrio, gli esercizi non potranno essere svolti in maniera corretta. Il ChinesioPilates nasce proprio per rimettere in equilibrio il corpo. Iniziamo con una valutazione posturale qua in studio: guardo come ti muovi, ascolto la tua storia e facciamo dei test muscolari, e poi decidiamo insieme qual è il percorso più adatto per te. Da qui capiamo come integrare la terapia manuale, l'automassaggio, gli esercizi preparatori per preparare delle solide basi per il pilates. E quando il corpo ritorna in equilibrio ti muovi bene davvero, non solamente sul reformer, ma anche nella vita di tutti i giorni. Scrivi ChinesioPilates nei commenti per saperne di più."

**Post 3 — Autorità/Risultati** ⏳ *da girare*
> Il caso studio della diastasi: come una cliente ha evitato l'operazione chirurgica grazie al suo percorso.

#### Campagna Meta (da lanciare)
- **Offerta:** Valutazione Posturale · 30 minuti · 30€ · EQB Milano
- **Lancio:** Variante C (emotiva/cold ads)
- **Test A/B:** Variante B (autentica)
- **Organico:** Variante A (educativa)

**Variante A — Educativa:**
- Gancio: "Fai già qualcosa per il tuo corpo — pilates, yoga, palestra. Eppure c'è ancora qualcosa che non torna."
- Problema: "Non è l'età. È che finora nessuno ha guardato il tuo corpo nel suo insieme. Si lavora sul sintomo, migliora un po', poi ricomincia. Il riequilibrio vero richiede qualcuno che sappia dove guardare davvero."
- Soluzione: "Io lavoro con il ChinesioPilates — una tecnica posturale che parte dall'analisi globale del tuo corpo: come ti muovi, dove hai perso l'equilibrio, cosa non si attiva. Da lì costruisco un percorso preciso, manuale, su di te."
- CTA: "Prenota la tua valutazione posturale in studio. 30 minuti, 30 euro. Link qui sotto."

**Variante B — Autentica:**
- Gancio: "Sono tutta rotta, rimettimi a posto. Me lo dicono spesso. E di solito hanno ragione — ma il punto non è dove si sente."
- Problema: "Il corpo trova sempre un modo per andare avanti — sposta, compensa, si adatta. Finché non si ferma. Il dolore che senti è quasi sempre l'ultimo segnale di qualcosa che andava avanti da tempo."
- Soluzione: "Io lavoro con il ChinesioPilates — non è pilates standard. Leggo il corpo dall'inizio, non dal sintomo. Trovo dove si è perso l'equilibrio e lavoro lì, con le mani, con precisione, con un percorso che ha una logica chiara."
- CTA: "Inizia da una valutazione posturale. 30 minuti, 30 euro. Link in bio."

**Variante C — Emotiva ⭐ LANCIO:**
- Gancio: "Pensi sempre a tutto. A tutti. E il tuo corpo è l'ultima cosa a cui riesci a dedicare del tempo."
- Problema: "Quando finalmente ci pensi, vuoi qualcosa che funzioni davvero — non un'altra cosa da gestire. Se non ha ancora funzionato, è perché mancava qualcuno che leggesse il tuo corpo nel suo insieme."
- Soluzione: "Questo è quello che faccio io con il ChinesioPilates. Analisi posturale precisa, lavoro manuale costruito su di te, un percorso con una direzione chiara. Non ti chiedo di rivoluzionare la tua settimana — ti chiedo 30 minuti."
- CTA: "Prenota la tua valutazione posturale in studio. 30 minuti, 30 euro. Link qui sotto."

#### Documenti (cartella locale)
`/Desktop/EQB/03 - EQB MARKETING/04 - Gestione Social/Cristiana/Profile/`
- `COWORKER_PROFILE_CRISTIANA_CURIONI_v4.pdf`
- `DIREZIONE_SOCIAL_CRISTIANA_CURIONI_v4.pdf`
- `SCRIPT_CAMPAGNA_CRISTIANA_CURIONI_v3.pdf`

#### Testimonianza potente (caso diastasi)
> "Ho incontrato Cristiana circa 2 anni fa. Avevo un dolore cronico alla bassa schiena e una diastasi importante. Ho girato non so quanti specialisti da osteopati a fisioterapisti. [...] Oggi è sparito e tornando da un chirurgo che mi aveva visto un paio di anni fa per chiudere la diastasi, mi dice che è talmente migliorata che non la opererebbe più."

---

### SEBASTIAN PAROLINI {#sebastian-parolini}

**Ruolo:** Massoterapista sportivo  
**Account IG:** @sebastian_massoterapista (307 follower) — da connettere a Meta Business Manager da zero

#### Chi è
26 anni, solare, carismatico, fisico — asset comunicativo forte. Massoterapista specializzato in tecniche manipolative muscolo-scheletriche sportive. NON massaggiatore olistico/rilassante/tantrico.

#### Bio Instagram
```
Massoterapista sportivo. Aiuto chi si allena a recuperare meglio, muoversi meglio e rendere di più.
Prenota il tuo check-up muscolare qui 👇
```

#### Target
Sportivi amatoriali 25–55 anni · palestra, running, padel, ciclismo, nuoto · si allenano con costanza ma trascurano il recupero · principalmente amatoriali, non agonisti

#### Origin story
Pratica sport da sempre (nuoto, rugby, pallavolo, basket). Ha vissuto in prima persona il problema del recupero trascurato. Ha capito che il problema non era allenarsi di più, ma recuperare meglio.

#### Il metodo
Lettura globale del movimento (non solo dove fa male) → tecniche manuali e strumentali integrate. Il problema non nasce quasi mai dove si manifesta.

#### 3 Post Pinnati

**Post 1 — Identità** ⚠️ apertura da scegliere tra:
1. "Ho fatto sport per anni con il freno tirato. Finché ho capito l'importanza del recupero."
2. "Per anni mi sono allenato senza mai stare davvero bene. Finché ho capito l'importanza del recupero."
3. "Per anni mi sono allenato sempre con qualcosa che tirava. Finché ho capito che il problema non era l'allenamento."

Corpo fisso:
> "Ciao, sono Sebastian, e questa è la mia storia. Ho fatto sport da quando ho memoria. Nuoto, rugby, pallavolo, basket. Per anni ho fatto quello che fanno tutti: mi allenavo, accumulavo qualche acciacco, aspettavo che passasse, ricominciavo. Finché ho capito una cosa. Il problema non era allenarmi di più. Era che non stavo recuperando per niente. Quando ho preso sul serio il recupero, è cambiato tutto. Mi muovevo meglio, rendevo di più, mi fermavo molto meno. Da lì ho deciso di farne il mio lavoro. Oggi lavoro con sportivi come me — gente che si allena con costanza, ma a cui nessuno ha mai insegnato a recuperare davvero."

**Post 2 — Metodo** ✅ *definitivo*
> "Non è un semplice massaggio. Per anni ho studiato svariate tecniche di terapia manuale e strumentale, fino a creare il mio metodo. Quando arrivi da me con un dolore, la prima cosa che faccio non è andare lì dove fa male. Guardo come ti muovi, come scarichi il peso, dove il corpo compensa senza che tu te ne accorga. Perché il problema non nasce quasi mai dove lo senti. Un corridore con il ginocchio dolorante, nove volte su dieci ha qualcosa che non funziona all'anca o al piede. Il mio lavoro è leggere tutto il movimento, trovare l'origine vera e intervenire lì — con le mani, con gli strumenti, con le tecniche giuste per te. Così non aspettiamo che diventi un infortunio. Lo fermiamo prima."

**Post 3 — Risultato/Hook** ⏳ *da sviluppare (serve caso studio reale)*

#### Campagna Meta
- **Offerta:** Prima seduta 50€ invece di 70€ · EQB Milano
- **Lancio:** Variante B (origin story — umanizza Sebastian)
- **Test A/B:** Variante C (bacino più largo)
- **Organico:** Variante A

**Variante A — Educativa:**
- Gancio: "Ti alleni con costanza. Tre, quattro volte a settimana. Eppure il corpo fa fatica a stare dietro."
- Problema: "Non è l'allenamento il problema. È che nessuno ti ha mai insegnato a recuperare davvero. Accumuli tensioni, rigidità, compensazioni — e vai avanti finché qualcosa ti ferma."
- Soluzione: "Io lavoro con la massoterapia sportiva — non un massaggio rilassante, ma un trattamento mirato sul tuo apparato muscolo-scheletrico. Leggo come ti muovi, trovo dove il corpo compensa e lavoro lì, con tecniche manuali e strumentali."
- CTA: "Prenota la tua prima seduta in studio. 50€ invece di 70€. Link qui sotto."

**Variante B — Autentica ⭐ LANCIO:**
- Gancio: "Ho fatto sport tutta la vita. E per anni ho fatto lo stesso errore che fanno tutti."
- Problema: "Mi allenavo, avevo qualche acciacco, aspettavo che passasse, ricominciavo. Finché ho capito che il problema non era allenarsi di più. Era che non stavo recuperando per niente."
- Soluzione: "Oggi lavoro con sportivi che hanno lo stesso problema. Con la massoterapia sportiva intervengo dove il corpo accumula tensioni e compensazioni — prima che diventino un infortunio vero."
- CTA: "Prenota la tua prima seduta in studio. 50€ invece di 70€. Link in bio."

**Variante C — Frustrazione/Performance:**
- Gancio: "Ti alleni, mangi bene, dormi. Eppure il corpo non risponde come vorresti."
- Problema: "Recuperi lento, hai sempre qualcosa che tira, le prestazioni non migliorano. Non è normale — anche se ci siamo abituati a trattarlo come normale."
- Soluzione: "Lavoro con la massoterapia sportiva esattamente su questo. Leggo come si muove il tuo corpo, trovo dove accumula tensione e intervengo prima che diventi un problema vero."
- CTA: "Prenota la tua prima seduta. 50€ invece di 70€. Link qui sotto."

#### Pending
- Scegliere apertura definitiva Post 1
- Sviluppare Post 3 (caso studio reale)
- Re-registrare video (prima ripresa non naturale)
- Connettere @sebastian_massoterapista a Meta Business Manager

---

---

### LORIS {#loris}

**Ruolo:** Trainer posturale  
**Stato campagna:** ✅ Primo a firmare — usato come social proof per gli altri coworker

#### Ruolo in EQB
Riceve clienti dalle valutazioni posturali di Federico e Mattia osteopata. Non ha una campagna propria — è il prodotto del percorso integrato EQB (valutazione → lavoro correttivo in sala).

#### Risultati (da usare come social proof nei messaggi ad altri coworker)
- Ha chiuso 3 pacchetti da 10 sedute
- Rientrava nell'investimento in 5–6 sedute
- Questi numeri vengono citati per convincere gli altri collaboratori ad aderire

---

### MATTIA OSTEOPATA {#mattia-osteopata}

> ⚠️ Disambiguazione: questo Mattia è l'amico di Federico (osteopata). NON è Mattia il collaboratore di Marco (il sistema Claude Code).

**Ruolo:** Osteopata  
**Stato campagna:** ✅ Secondo a firmare — convinto dalla social proof di Loris

#### Ruolo in EQB
Osteopata, collabora con Federico nei percorsi posturali. Pubblicizza la stessa cosa di Federico (valutazione posturale).

#### Piano campagna
- Fase 1 (1–10 maggio): osserva come Federico gestisce i lead, impara il processo
- Fase 2 (~10 maggio): parte la sua campagna quando il CPL di Federico è stabile
- Budget: €30/giorno condivisi sulla campagna di Federico nella fase 1
- Il messaggio lo manda Federico a suo nome (sono amici)

---

### RAJVEER KAUR {#rajveer-kaur}

**Ruolo:** Trainer di Pilates | 31 anni  
**Stato campagna:** ⏳ Da contattare (dopo Sebastian)

#### Carattere
Solare, coinvolta in mille progetti, molto social. Crea ottimi rapporti con i clienti. Amica prima che coworker. Un po' in dubbio perché impegnata in tanti progetti paralleli.

#### Situazione critica
- Era la migliore in studio per ore, faceva più di tutti
- Sta perdendo clienti mese dopo mese
- Ora fa poche ore → trend negativo da invertire
- L'estate è la sua finestra

#### Strategia messaggio
- Leva: non la scarsità di EQB — ma la sua situazione personale
- Frame: *"non voglio che tu perda questa stagione"* (non "accettiamo solo chi investe")
- Il messaggio 2 (se non risponde) va come verità amichevole tra amici, non ultimatum commerciale

---

### FRANCIELLE BERNAR {#francielle-bernar}

**Ruolo:** Massaggiatrice specializzata in linfodrenante | 45 anni | Brasiliana  
**In EQB da:** 3 mesi  
**Stato campagna:** ⚠️ In stallo — resistenza culturale al concetto di prova gratuita

#### Carattere
Emotiva e impulsiva → usare a favore facendola sentire parte di qualcosa di più grande. Molto dedita al lavoro. Si è commossa per aver trovato EQB — forte senso di appartenenza. Propensa a organizzare eventi. Si fida di EQB completamente.

#### Asset comunicativo forte
**Prima/dopo fenomenale:** pancia piatta di una cliente in un mese e mezzo → creatività principale per eventuali ads.

#### Proposta ads (in stallo)
- Servizio: massaggio linfodrenante
- Hook: il prima/dopo + prova gratuita 30 min
- Stagionalità: maggio–estate (top per linfodrenante)

#### Obiezione: identitaria, non logistica
Ha risposto due volte in 5 minuti in modo definitivo: *"non ho voglia di dare niente gratis, so del mio valore, non ho bisogno di mettere una prova gratis per convincere la gente"* — *"Mettendo qualcosa gratis sembra che sono disperata"*.

Non è un malinteso sul meccanismo — è un blocco identitario radicato.

#### Strategia
- Nessun follow-up sul tema ads per almeno 1 mese
- Se i risultati di Sebastian sono buoni, menzionarli in modo naturale dopo 4–6 settimane
- Non forzare
- Per l'incontro: non spiegare il meccanismo — farle visualizzare il risultato (*"arriva una persona, fa 30 min con te, prenota 10 sedute"*)

#### Nota strategica
Francielle ha resistenza culturale ai meccanismi promozionali — potrebbe essere un ostacolo anche nella conversione lead e nel proporre pacchetti ai clienti.

---

### GIULIA (NUTRIZIONISTA) {#giulia}

**Ruolo:** Nutrizionista  
**Connessione:** Rotary (amicizia/rete comune)  
**Stato campagna:** ⏳ Da contattare (fase successiva, dopo Sebastian e Rajveer)

#### Note messaggio
- Aprire con riferimento personale al Rotary
- Frame: *"a partire da te per la nutrizione"* → prima scelta, non una tra tante
- Usare il template stile Giulia (vedi sezione Template messaggi coworker)

---

## OUTREACH MEDICI E TECAR THERAPY {#outreach}

### Obiettivo
Avviare collaborazioni con fisiatri, ortopedici e centri medici per:
- Introduzione Tecar therapy allo studio EQB
- Referral reciproci di pazienti

### File operativi
**Path:** `/Users/marcoadinolfi/Desktop/Claude Code/EQB/`

| File | Funzione |
|------|----------|
| `crea_crm_outreach.py` | Genera Excel CRM strutturato |
| `genera_email_eqb.py` | Genera documento Word con email personalizzate |
| `EQB_Outreach_CRM.xlsx` | CRM attuale (aggiornare manualmente) |
| `EQB_Outreach_Email_Medici.docx` | Bozze email generate |
| `fisiatri_ortopedici_eqb.xlsx` | Lista contatti originale |

### Contatti in lista (42 totali)
- Fisiatri: 14
- Ortopedici: 21
- Centri medici: 7

### Stati CRM
| Stato | Significato |
|-------|-------------|
| DA TROVARE | Nessun contatto — ricercare |
| DA INVIARE | Email pronta, non inviata |
| DA CHIAMARE | Solo telefono |
| COPERTO DA CENTRO | Coperto da email del centro |
| EMAIL INVIATA | Inviata — follow-up dopo 5–7 giorni |
| RISPOSTA RICEVUTA | Ha risposto — da qualificare |
| SEGUITO TEL | Email senza risposta — contattato per telefono |
| CHIAMATO | Chiamata effettuata — annotare esito |
| NON INTERESSATO | Ha declinato |
| IN TRATTATIVA | Interesse confermato — termini in definizione |
| ACCORDO | Collaborazione avviata |

### Priorità contatti
- **Alta:** Isokinetic, OASI, Specialists Shock Waves, Physioclinic, Smart Clinic GSD, CMVM, Usuelli (stesso viale, n.39), Maccario, Tassi, Messineo, Forin Valvecchi, Scalese
- **Media:** maggior parte degli altri
- **Bassa:** solo Doctolib/MioDottore, ospedale pubblico

### Template email disponibili
- `TEMPLATE_DOTTORE` — per medici individuali (nome e titolo)
- `TEMPLATE_STAFF` — per strutture/centri medici
- `TEMPLATE_USUELLI` — personalizzato per vicinanza geografica

### ⚠️ Note tecniche
I path di output negli script Python sono ancora Windows (`C:\Users\luana\...`).  
**Da aggiornare con path Mac** prima di eseguire:
```
/Users/marcoadinolfi/Desktop/Claude Code/EQB/EQB_Outreach_CRM.xlsx
/Users/marcoadinolfi/Desktop/Claude Code/EQB/EQB_Outreach_Email_Medici.docx
```

### Pendenze
- [ ] Aggiornare stati CRM per contatti già contattati
- [ ] Completare email mancanti per "DA TROVARE"
- [ ] Aggiornare path output negli script da Windows a Mac

---

## PROGETTI DIGITALI {#progetti}

### Sito Web EQB {#sito-web}

**Path locale:** `/Desktop/Claude Code/EQB-Milano-website-main`  
**Repo GitHub:** `eqbmilano/EQB-Milano-website` (branch main)  
**Stack:** Next.js · Tailwind CSS · Framer Motion

**Pagine:**
| Pagina | Route |
|--------|-------|
| Home | `/` |
| Benessere | `/benessere` |
| Coworking | `/coworking` |
| Lo Spazio | `/spazio` |
| Visione | `/visione` |
| Contatti | `/contatti` |

**Stato:** codice su GitHub, NON ancora live. Video esclusi dal repo (troppo grandi).

**Video da hostare (prima di andare live):**
| File | Dimensione |
|------|-----------|
| Campagna-Fede-1.mov | 141 MB |
| Feature-Posturale.mov | 197 MB |
| Feature-Posturale-SDR.mp4 | 78 MB |
| Feature-Pilates-v2.mov | 90 MB |
| Feature-Pilates.mov | 52 MB |
| Feature-Relax.mov | 53 MB |

**Prossimi passi:**
1. Scegliere piattaforma hosting video (Cloudinary / Bunny.net / Vercel Blob)
2. Caricare video e aggiornare path nel codice
3. Deploy su Vercel (consigliato per Next.js)
4. Collegare repo GitHub → deploy automatico

---

### Piattaforma Gestionale EQB {#piattaforma}

**Path locale:** `/Desktop/Claude Code/03 Progetti EQB/EQB PIATTAFORMA`  
**Stack:** Next.js · TypeScript · monorepo (`apps/web/`)

**Routing attuale:**
| Route | Funzione |
|-------|----------|
| `(auth)/login` | Login |
| `(auth)/signup` | Registrazione |
| `(dashboard)/admin` | Pannello admin |
| `(dashboard)/admin/users/new` | Creazione nuovo utente |
| `(dashboard)/backlog` | Backlog attività |
| `(dashboard)/clients` | Gestione clienti |

**Stato:** in sviluppo — % completamento da aggiornare.

---

## GESTIONE OPERATIVA STUDIO {#operativa}

---

### Struttura organizzativa {#struttura-org}

**Modello:** Studio in affitto a ore — dal 1° settembre (operativo con periodo di transizione).

Lo studio non gestisce più i clienti dei collaboratori direttamente. Ogni professionista:
- Gestisce i propri clienti in autonomia
- Prenota lo spazio tramite reception
- Emette fattura propria al cliente
- Paga EQB per le ore di spazio usate (fattura da organizziamoeventi.it)

**Riferimenti operativi studio:**
- **Roberto Catalano** — gestione amministrativa e organizzativa
- **Carolina** — reception
- **Marco** — supporto in reception nel primo periodo di transizione

**Clienti con pacchetti già aperti (transizione):**
- Vengono ricontattati da EQB
- I percorsi attivi si concludono con pagamento a EQB + compenso allo specialista
- Al termine: cliente passa direttamente allo specialista (appuntamenti e pagamenti diretti)

---

### Tariffario e conteggio ore {#tariffario}

**Tariffe affitto spazio (IVA esclusa):**

| Volume mensile | Tariffa/ora | Tariffa con IVA |
|---------------|-------------|-----------------|
| 1–19 ore | €20,50/h | €25/h |
| 20–39 ore | €18,00/h | €22/h |
| Oltre 40 ore | €15,50/h | €19/h |
| Coppia | €24,50/h | €30/h |
| Gruppi 3+ persone | €28,60/h | €35/h |

**Logica conteggio fine mese:**
1. Sommare le ore effettivamente utilizzate nel mese
2. Applicare la tariffa corrispondente allo scaglione raggiunto
3. Le sedute di durata diversa da 1 ora vengono comunque conteggiate nel totale
4. La fattura per l'affitto è emessa da **organizziamoeventi.it** (gestita da Angelo)

**Cancellazioni:** devono essere comunicate almeno 24h prima — altrimenti l'ora viene addebitata.

---

### Onboarding collaboratore {#onboarding}

**Requisiti obbligatori per collaborare:**
1. Attestato/diploma di abilitazione alla professione
2. Assicurazione personale valida
3. Partita IVA (obbligatoria per chi lavora con continuità)

**Documenti da far firmare (cartella `DEFINITIVI/Generici/`):**
1. `Contratto_Condivisione_Spazi_EQB.docx`
2. `Liberatoria_Coworker_EQB.docx`
3. `Regolamento_Interno_EQB.docx`
4. `Tariffario_EQB.docx`

> ⚠️ Per **Stella Passalacqua**: usare `DEFINITIVI/Stella_Passalacqua/` — ha Art.14 aggiuntivo (garanzia EQB da pretese di soggetti terzi, incluse società precedenti).

**Liberatorie clienti** (da consegnare al collaboratore per uso con i propri clienti):
- `Liberatoria_Adulti_EQB.docx`
- `Liberatoria_Minorenni_EQB.docx` (doppio consenso genitoriale)
- `Liberatoria_FotoVideo_EQB.docx` (consenso immagini, sezione minori inclusa)
- Il collaboratore può usare la propria liberatoria personale in alternativa
- Una copia scansionata va inviata via WhatsApp a EQB

**Cauzione:** importo pattuito nel contratto, infruttifero, restituito a fine collaborazione.

---

### Contratti e documenti legali {#contratti}

**Avvocato di riferimento:** Avv. Tredici  
**Cartella:** `01_AMMINISTRAZIONE/Avvocato/`

**Stato contratti coworker (al 08/05/2026):**
| Serie | Stato |
|-------|-------|
| 01.09.2025–31.12.2025 | ✅ Scaduti naturalmente — nessuna azione |
| 01.01.2026–31.12.2026 | ⚠️ Ancora intestati a Organizziamoeventi.it — sostituire progressivamente |
| Nuovi contratti EQB | 📋 Pronti in `DEFINITIVI/` — avviare alla prossima firma |

**Documenti definitivi pronti:**
- `DEFINITIVI/Generici/` — 4 template per tutti i nuovi collaboratori
- `DEFINITIVI/Stella_Passalacqua/` — versione con Art.14 garanzia

**Accordo attrezzature (Security Job Srl):**
- Documento con inventario inviato all'avvocato il 07/05/2026
- In attesa conferma formato
- Mancano: firma Angelo (Security Job), firma Marco, firma Federico

**Dati Marco per documenti legali:**
- CF: DNLMRC02A11F205W
- P.IVA: 14601140966
- Indirizzo sede legale: Via Caravaggio 2, 20054 Segrate (MI)
- Sede operativa: Viale Regina Margherita 43, Milano

---

### Pendenze legali e admin {#pendenze}

**Urgenti:**
- [ ] **Angelo — Addendum attrezzature:** concordare data firma (aspettare conferma avvocato sul formato)
- [ ] **Angelo — Polizza assicurativa:** valutare subentro polizza n. 450457280 con nuova denominazione EQB (evitare RC ex novo)
- [ ] **Angelo — Conformità strutturale:** verificare scala e piano inferiore (D.Lgs. 81/2008 + normativa edilizia)
- [ ] **Dina Kildeeva — Google My Business:** chiedere ad Angelo di mediare per trasferimento scheda (disponibili a pagare)
- [ ] **Sicurezza sul lavoro:** trovare esperto esterno per DVR, piano evacuazione, conformità locali, obblighi INAIL
- [ ] **Contratti coworker:** sostituire progressivamente quelli intestati a Organizziamoeventi.it

**Da decidere (non urgenti):**
- [ ] **Sede operativa ditta individuale:** aggiungere studio alla ditta (€250 una tantum + €70/anno)
- [ ] **Marchio EQB:** registrazione "EQB" o "EQB Milano" — chiedere all'avvocato quando pronti

**Liberatorie clienti:** bozze create il 29/05/2026 — revisione interna → poi invio Avv. Tredici.

---

### Personaggi chiave esterni {#personaggi}

| Nome | Ruolo | Riferimento |
|------|-------|-------------|
| **Avv. Tredici** | Avvocato di riferimento EQB | Consulenza legale |
| **Angelo** | Proprietario/gestore precedente (Security Job Srl) | Addendum, polizza, conformità, Google My Business |
| **Giuseppe Cocivera** | Amministratore Organizziamoeventi.it srl | Subentro polizza n. 450457280 — deve controfirmare |
| **Dina Kildeeva** | Ex gestore EQB Studio | Controlla scheda Google My Business da trasferire |
| **Roberto Catalano** | Gestione amministrativa e organizzativa studio | Operativo quotidiano |
| **Carolina** | Reception | Prenotazioni e accoglienza |
| **Stella Passalacqua** | Coworker con contratto speciale | Art.14 garanzia EQB |

---

## SKILL — TASK RICORRENTI {#skill}

---

### SKILL_01 — Campagna Meta Ads {#skill_01}

**Trigger:** nuovo professionista da lanciare su Meta, o nuova offerta da promuovere.

**Input richiesti:**
- Nome professionista e ruolo
- Offerta (cosa, prezzo, scadenza)
- Target (età, interessi, area)
- Tipo campagna: TOF (freddo) / MOF / BOF (caldo)
- Tono: educativo / autentico / emotivo

**Output:**
- 3 varianti script (A/B/C), ciascuna con: Gancio · Problema · Soluzione · CTA
- Durata target: 45 secondi parlati
- Raccomandazione lancio + test A/B + organico

**Struttura fissa:**
```
GANCIO (5-7 sec) — aggancia il problema o la condizione di vita
PROBLEMA (10-15 sec) — espande il pain point, spiega perché non ha ancora funzionato
SOLUZIONE (15-20 sec) — presenta il professionista/metodo come risposta specifica
CTA (5-7 sec) — azione chiara, offerta con scadenza, link
```

**Regole:**
- CTA sempre dirette, senza condizionali ("se vuoi", "puoi")
- Il nome del metodo/tecnica va nella sezione Soluzione, non nel Gancio
- Offerta con scadenza crea urgenza — usarla sempre se presente
- BOF: target già caldo, gancio più specifico/tecnico
- TOF: gancio emotivo/universale, barriera d'ingresso bassa

---

### SKILL_02 — Bio Instagram {#skill_02}

**Trigger:** nuovo profilo da impostare, o bio esistente da ottimizzare.

**Limite:** 150 caratteri (contare con attenzione le lettere accentate)

**Struttura consigliata:**
```
[Cosa faccio] + [per chi] + [risultato/beneficio] attraverso [metodo]
[CTA] + [emoji link] 👇
```

**Regole:**
- Niente condizionali o domande retoriche nella bio
- CTA deve includere cosa prenotare (non solo "link in bio")
- Emoji: max 1, usata solo come indicatore link (👇)
- Evitare: aggettivi autodescrittivi ("appassionata", "esperta"), slogan generici
- Il metodo/tecnica va nominato esplicitamente se è un differenziatore

**Formato verifica conteggio:**
```python
bio = "testo bio completo"
print(len(bio))  # deve essere <= 150
```

---

### SKILL_03 — 3 Post Pinnati {#skill_03}

**Trigger:** impostare il profilo di un nuovo professionista su Instagram.

**Struttura fissa (sempre questa sequenza):**

| Posizione | Tema | Obiettivo |
|-----------|------|-----------|
| Post 1 | Identità / Chi sono | Origin story — credibilità umana |
| Post 2 | Metodo / Cosa faccio | Educazione — differenziazione |
| Post 3 | Autorità / Risultati | Social proof — caso studio reale |

**Regole:**
- Post 1: sempre in prima persona, mai teorico — "questa è la mia storia"
- Post 2: spiegare il metodo in linguaggio cliente, non tecnico
- Post 3: caso studio reale con risultato concreto e misurabile (es. intervento evitato, dolore risolto)
- Formato consigliato: video parlato frontale per tutti e 3
- Lunghezza: 45–60 secondi ciascuno

---

### SKILL_04 — Script Reel Pinnato {#skill_04}

**Trigger:** produrre lo script per un reel di presentazione del professionista.

**Input richiesti:**
- Profilo professionista (da file MD)
- Tipo post: Chi Sono / Cosa Faccio / Caso Studio
- Eventuali frasi reali del professionista da conservare

**Regole critiche:**
- NON riscrivere se il professionista ha già registrato il video — usare la trascrizione reale
- NON aggiungere frasi non dette dal professionista
- Se il video non è ancora girato: scrivere in prima persona, tono parlato naturale
- Lunghezza target: 45–60 secondi (circa 100–130 parole)
- Evitare: linguaggio da copywriter, metafore elaborate, parole complesse

**Struttura Chi Sono:**
```
Hook personale (problema vissuto in prima persona)
→ Tentativi falliti
→ Svolta / scoperta
→ Metodo attuale
→ Promessa al cliente: "Ha funzionato con me. Può funzionare con te."
```

**Struttura Cosa Faccio:**
```
Domanda che riceve spesso
→ Risposta educativa (differenziazione dal generico)
→ Descrizione pratica della sessione
→ Risultato concreto
→ CTA soft (commenta / scrivi)
```

---

### SKILL_05 — Generazione PDF documenti {#skill_05}

**Trigger:** creare o aggiornare i documenti ufficiali di un professionista.

**3 documenti standard per ogni professionista:**

| Documento | Contenuto | Versione |
|-----------|-----------|---------|
| `COWORKER_PROFILE_[NOME]_v[N].pdf` | Profilo completo: cliente ideale, metodo, posizionamento, frasi madre | Aggiorna quando cambia il profilo strategico |
| `DIREZIONE_SOCIAL_[NOME]_v[N].pdf` | Bio, post pinnati, script concetti, note shooting | Aggiorna quando cambia la direzione social |
| `SCRIPT_CAMPAGNA_[NOME]_v[N].pdf` | 3 varianti script ads, raccomandazione strategica | Aggiorna ad ogni nuova campagna |

**Libreria:** `reportlab` (Python)

**Percorso locale:**
`/Desktop/EQB/03 - EQB MARKETING/04 - Gestione Social/[Nome]/Profile/`

**Comando base:**
```python
from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate, Paragraph
# ... vedi script generate_pdf.py nel repo
```

**Regole:**
- Incrementare sempre il numero di versione (non sovrascrivere)
- Mantenere i vecchi file per storico
- Footer sempre con: data · versione · uso previsto

---

### SKILL_06 — Sostituzione sfondo foto profilo {#skill_06}

**Trigger:** foto profilo del professionista su sfondo non coerente con il brand EQB.

**Sfondo standard EQB:** `#C8BDB0` — greige (beige-grigio caldo, tortora caldo)

**Libreria:** `rembg` + `Pillow` (Python)

**Script base:**
```python
from rembg import remove
from PIL import Image
import io

def replace_background(input_path, output_path, bg_hex="#C8BDB0"):
    r = int(bg_hex[1:3], 16)
    g = int(bg_hex[3:5], 16)
    b = int(bg_hex[5:7], 16)
    
    with open(input_path, "rb") as f:
        output_data = remove(f.read())
    
    img = Image.open(io.BytesIO(output_data)).convert("RGBA")
    background = Image.new("RGBA", img.size, (r, g, b, 255))
    background.paste(img, mask=img.split()[3])
    background.convert("RGB").save(output_path, "PNG", quality=95)
```

**Note:**
- Al primo avvio scarica il modello u2net (~176MB)
- Sfondo bianco + soggetto in bianco = bordi difficili, ma rembg gestisce bene
- Salvare sempre in PNG per preservare qualità
- Output consigliato: `[Nome]_profilo_greige.png`

---

### SKILL_07 — Push sito GitHub {#skill_07}

**Trigger:** aggiornamento al sito EQB Milano (Next.js) da pubblicare nel repo.

**Repo:** `eqbmilano/EQB-Milano-website` (branch main)  
**Percorso locale:** `/Users/marcoadinolfi/Desktop/Claude Code/EQB-Milano-website-main`

**⚠️ File video esclusi dal repo** (troppo grandi per GitHub, max 100MB):
- `*.mov` e `*.mp4` sono in `.gitignore`
- I video vanno hostati separatamente (Cloudinary / Bunny.net / Vercel Blob)

**Workflow standard:**
```bash
cd /path/to/EQB-Milano-website-main
git add [file specifici]
git commit -m "descrizione modifica"
git push origin main
```

**Autenticazione:** tramite `gh auth login` (account: eqbmilano)

**Prossimi passi per andare live:**
1. Scegliere piattaforma hosting video
2. Caricare video e aggiornare path nel codice
3. Deploy su Vercel (consigliato per Next.js) collegato al repo GitHub

---

### SKILL_08 — Conteggio ore fine mese {#skill_08}

**Trigger:** fine mese — calcolare quanto deve pagare ogni collaboratore per le ore di spazio usate.

**Input richiesti:**
- Nome collaboratore
- Lista sedute del mese (data, durata, tipo: singolo / coppia / gruppo)

**Logica di calcolo:**
```
1. Sommare tutte le ore (anche sedute < 1h contano nel totale)
2. Determinare lo scaglione:
   - 1–19h  → €20,50/h (+ IVA = €25/h)
   - 20–39h → €18,00/h (+ IVA = €22/h)
   - 40h+   → €15,50/h (+ IVA = €19/h)
3. Applicare tariffa speciale se coppia (€24,50/h + IVA) o gruppo 3+ (€28,60/h + IVA)
4. Totale = ore × tariffa scaglione
```

**Output:** riepilogo ore per tipo + totale da fatturare (IVA esclusa + IVA inclusa)

**Note:**
- La fattura è emessa da organizziamoeventi.it (Angelo), non da EQB direttamente
- Cancellazioni < 24h = ora addebitata comunque

---

### SKILL_09 — Onboarding nuovo collaboratore {#skill_09}

**Trigger:** nuovo professionista che inizia a lavorare in studio.

**Checklist:**

```
□ Verificare requisiti:
  □ Attestato/diploma abilitazione professionale
  □ Assicurazione personale valida
  □ Partita IVA attiva

□ Documenti da far firmare (DEFINITIVI/Generici/):
  □ Contratto_Condivisione_Spazi_EQB.docx
  □ Liberatoria_Coworker_EQB.docx
  □ Regolamento_Interno_EQB.docx
  □ Tariffario_EQB.docx
  (se Stella Passalacqua → usare DEFINITIVI/Stella_Passalacqua/)

□ Consegnare liberatorie clienti:
  □ Liberatoria_Adulti_EQB.docx
  □ Liberatoria_Minorenni_EQB.docx
  □ Liberatoria_FotoVideo_EQB.docx

□ Comunicare:
  □ Come prenotare lo spazio (reception / online)
  □ Regola cancellazione 24h
  □ Procedura invio liberatorie clienti (scan WhatsApp a EQB)
  □ Fasce orarie preferite

□ Creare profilo professionista (se fa comunicazione EQB):
  □ File MD in professionisti/[nome].md
  □ Foto profilo con sfondo greige #C8BDB0 (SKILL_06)
  □ Bio Instagram (SKILL_02)
  □ 3 post pinnati (SKILL_03)
```

---

### SKILL_10 — Genera email outreach medici {#skill_10}

**Trigger:** contattare fisiatri, ortopedici o centri medici per proposta Tecar therapy o referral.

**Script:** `/Desktop/Claude Code/EQB/genera_email_eqb.py`

**Steps:**
1. Aprire lo script e aggiornare la lista `contacts` se necessario
2. Correggere il path di output (ancora Windows) con il path Mac
3. Eseguire → genera `.docx` con tutte le email personalizzate

**Template disponibili nello script:**
- `TEMPLATE_DOTTORE` — per medici individuali (usa nome e titolo dottore)
- `TEMPLATE_STAFF` — per strutture e centri medici
- `TEMPLATE_USUELLI` — personalizzato per vicinanza geografica (stesso viale)

**Path output corretto (Mac):**
```
/Users/marcoadinolfi/Desktop/Claude Code/EQB/EQB_Outreach_Email_Medici.docx
```

---

### SKILL_11 — Aggiorna CRM outreach {#skill_11}

**Trigger:** dopo ogni sessione di email o chiamate verso medici — aggiornare stati e note.

**Script:** `/Desktop/Claude Code/EQB/crea_crm_outreach.py`  
**CRM file:** `/Desktop/Claude Code/EQB/EQB_Outreach_CRM.xlsx`

**Steps:**
1. Aprire lo script e aggiornare la lista `contacts` (stati, note, follow-up)
2. Correggere il path di output con path Mac
3. Eseguire → rigenera l'Excel CRM

**Struttura colonne CRM:**
ID · Sezione · Nome · Email · Telefono · Template · Priorità · Stato · Data 1° contatto · Data follow-up · Canale prossimo contatto · Note CRM · Note chiamata

**Buone pratiche:**
- Aggiornare gli stati subito dopo ogni contatto, non a fine settimana
- Usare "Note chiamata" per info utili raccolte durante la telefonata
- Dopo ogni aggiornamento, rigenerare l'Excel per avere versione pulita

---

### SKILL_12 — Messaggio ads a coworker {#skill_12}

**Trigger:** proporre a un collaboratore di aderire alla campagna Meta gestita da EQB.

**Struttura in 2 fasi:**

**Fase 1 — Primo contatto (aprire la porta, non vendere):**
```
Ciao [Nome], [apertura personale specifica].

Stiamo gestendo le campagne pubblicitarie per alcuni professionisti di EQB 
per portare loro nuovi clienti in modo costante — partendo dai buoni risultati 
con la campagna di Fede. Diverse persone hanno già aderito e partiamo in questi giorni.

Volevo chiederti se ti potrebbe interessare ricevere qualche info a riguardo.
```
- Personalizzare sempre l'apertura (evento recente, connessione comune, contesto)
- Nessun prezzo, nessun impegno — solo apre la porta

**Fase 2 — Messaggio completo (dopo risposta positiva):**
1. Prova concreta (Federico → porta clienti con costanza)
2. Social proof con numeri reali (Loris: 3 pacchetti da 10 sedute, rientro in 5–6 sedute)
3. Meccanismo: EQB gestisce tutto · sessione gratuita 30 min · EQB copre la stanza · professionista converte
4. Budget: min €5/giorno (€150/mese) · ideale €10/giorno (€300/mese)
5. Anchoring: *"Gli altri stanno partendo tutti con 10€/giorno — potrebbe essere un buon punto di partenza anche per te?"*
6. Pagamento spezzato se serve (€150 + €150 a distanza di una settimana)
7. CTA: *"Vuoi partire o preferisci aspettare?"*

**Messaggio 2 — se non risponde o vuole aspettare:**
- **Tutti tranne Rajveer:** *"Ok perfetto, EQB è sempre aperta quando vuoi. Questo momento è ottimale quindi voglio essere trasparente: accetteremo richieste da coworker pronti a investire sul loro lavoro in EQB."*
- **Rajveer:** verità amichevole, non ultimatum: *"Non voglio che tu perda questa stagione."*

**Per Giulia (nutrizionista):**
- Aprire con riferimento al Rotary
- Frame: *"a partire da te per la nutrizione"* — prima scelta, non una tra tante

---

## NOTE GENERALI EQB

**Studio:** EQB Milano · Viale Regina Margherita 43 · Milano  
**Account IG principale:** @eqbmilano  
**Email:** eqbmilano@gmail.com

**Strategia social 2026:**
- Mag–ago 2026: bio e campagne orientate ai clienti finali
- Da set 2026: riaprire comunicazione verso coworker/professionisti

**Tono EQB:**
- Caldo, competente, autentico
- Mai da clinica asettica, mai da influencer del benessere
- Parla al cliente come un pari competente

**Offerte con scadenza 30/06/2026:**
- Roberta: prima seduta 50€ invece di 70€
- Federico: valutazione posturale gratuita
- Sebastian: prima seduta 50€ invece di 70€
