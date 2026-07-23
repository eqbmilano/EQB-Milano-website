# Checklist go-live sito EQB Milano

Aggiornata 2026-07-21, verificata sul codice reale (branch v2).

## Priorità 1 — Bloccante, il sito non può andare live senza

| # | Cosa | Owner | Note |
|---|------|-------|------|
| 1 | Bottone "Invia candidatura" non salva/invia nulla | Mattia + io | Tocca il DB: serve decidere dove atterrano le candidature (gestionale/email/foglio), poi implemento |
| 2 | Recensioni home inventate (`SectionRecensioni`) | Marco | Servono recensioni reali o la sezione va tolta |
| 3 | Testimonianze `/coworking` (Cristiana, Roberta, Loris) sono bozze inventate | Marco | Foto vere, testi da sostituire con frasi reali dei 3 |
| 4 | Home bloccata su `master` (produzione) | Mattia | Deve essere lui a renderla ufficialmente pubblica quando tutto sopra è chiuso |

## Priorità 2 — Importante, da chiudere prima del lancio ma non blocca lo sviluppo

| # | Cosa | Owner | Note |
|---|------|-------|------|
| 5 | Copy placeholder `/aziende` (Eventi e Workshop, Partnership e Collaborazioni) | Marco + io | Discussione aperta da giorni, mai chiusa |
| 6 | Copy CTA finale `/coworking` non coerente ("vederlo di persona" vs candidatura) | Marco + io | Ti ho proposto una direzione, in attesa ok |
| 7 | Pagine di lavoro ancora indicizzabili (`/preview-manifesto`, `/preview-inizia`, `/preview-hero`) | Io | Basta noindex o rimozione, lavoro rapido |
| 8 | SEO base assente (niente `robots.ts`, `sitemap.ts`, `metadataBase`) | Io | Volutamente parcheggiato fino a testi definitivi, ma da fare prima del pubblico |
| 9 | Analytics non collegato | Marco (decisione) + io | Consigliato Vercel Analytics, cookieless |

## Priorità 3 — Rifinitura, non blocca nulla

| # | Cosa | Owner | Note |
|---|------|-------|------|
| 10 | Foto spogliatoi mancanti | Marco | Zero scatti in archivio, servono nuove foto |
| 11 | Mq reali Stanza Luna (nel codice è 15 come Sole) | Marco | TODO esplicito nel codice, numero mai fornito |
| 12 | 4 sezioni `/coworking` ancora nero vecchio invece del marrone brand | Marco (decisione) + io | Solo estetico, nessuna decisione presa se allineare |

---

**In sintesi**: i punti 1-4 sono gli unici veri bloccanti. Di questi, il 2 e il 3 sono raccolta contenuti (azione tua), l'1 e il 4 richiedono un allineamento con Mattia. I punti 5-9 valgono la pena chiuderli prima del lancio ma non fermano il lavoro. Il resto è rifinitura da fare con calma.

---

## Dopo il go-live — debito tecnico da recuperare (con Mattia)

| # | Cosa | Owner | Note |
|---|------|-------|------|
| T1 | Consolidare le animazioni di comparsa: **un solo hook condiviso + una sola CSS** al posto delle ~8 copie attuali (stesso `useVisible`/`useReveal` duplicato in 8 componenti, stessa CSS in 6 file) | Mattia + io | Deciso il 23/07 di rimandare qui: rischio inutile toccare 8 componenti a ridosso del lancio. **Momento naturale: migrazione Vercel → Hetzner.** L'uniformazione visibile (trigger, "once", buchi /contatti + griglie Coworking, eccezioni Coworking, blur mobile) è già stata fatta pre-lancio. |
