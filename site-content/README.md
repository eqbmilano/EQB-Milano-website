# Site Content — Archivio immagini e contenuti del sito EQB Milano

Archivio organizzato di tutte le immagini/contenuti usati nel sito.
Scopo: se si perde il collegamento ai file originali sul Mac di Marco, **il sito non perde nulla** — qui c'è una copia master di tutto.

## Struttura (per pagina, es. `benessere/`)
- `originali/` → **master del file pieno**, framing originale (max 2400px, JPG q85). Backup.
- `ritagli/` → **versione finale ritagliata** effettivamente usata sul sito (max 2400px, q85). Dove non serve crop, è uguale all'originale.
- Le versioni **web ottimizzate** caricate dal sito stanno in `public/assets/` (max 1600px, q72), generate dal *ritaglio*.

Pipeline: **originale → ritaglio → asset web**.

## Convenzione
- Asset web della V2 benessere: suffisso `-v2` in `public/assets/` (non tocca la V1).
- Nuova immagine: 1) master in `originali/`, 2) finale in `ritagli/` (crop se serve), 3) web in `public/assets/`, 4) riga in tabella.

---

## Pagina /benessere-v2 — mappa immagini

| Servizio / Uso | Originale (`originali/`) | Ritaglio finale (`ritagli/`) | Asset web (`public/assets/`) | Sorgente originale (Mac di Marco) |
|---|---|---|---|---|
| Osteopatia | `Osteopatia.jpg` | = originale | `Osteopatia-v2.jpg` | `…/04 - Gestione Social/Federico/Instagram/Caroselli/1 - Federico/EQB - Post 4 Osteopatia-04.jpg` |
| Osteopatia Pediatrica | `Osteopatia-Pediatrica.jpg` | = originale | `Osteopatia-pediatrica-v2.jpg` | `…/03 - Shooting/01 - Shooting Originali/Altre foto per sito/baby-massage-close-up-hands-baby-back-top-view.jpg` |
| Fisioterapia | `Fisioterapia.jpg` | `Fisioterapia.jpg` (**zoom leggero, meno pavimento**) | `Fisioterapia-v4.jpg` | `~/Downloads/ChatGPT Image 24 giu 2026, 17_02_36.png` |
| Massaggio Decontratturante Sportivo | `Massaggio-Decontratturante-Sportivo.jpg` | = originale | `Massaggio-Decontratturante-Sportivo-v2.jpg` | `~/Downloads/ChatGPT Image 24 giu 2026, 15_58_28.png` |
| Rinforzo Posturale | `Rinforzo-Posturale.jpg` | = originale | `Rinforzo-Posturale-v2.jpg` | `…/03 - Attività/Training/Kinesioterapia.jpg` |
| Functional Training | `Functional-Training.jpg` | = originale | `Functional-Training-v3.jpg` | `…/03 - Attività/Training/Allenamento funzionale.jpg` |
| Linfodrenante | `Linfodrenante.jpg` | = originale | `Linfodrenante-v2.jpg` | `…/03 - Attività/Massaggi/Immagine.png` |
| Riflessologia Plantare | `Riflessologia.jpg` | = originale | `Riflessologia-v2.jpg` | `…/03 - Attività/Riflessologia/Riflessologia plantare .jpg` |
| Coppettazione | `Coppettazione.jpg` | = originale | `Coppettazione-v2.jpg` | `…/03 - Attività/Massaggi/@EQB_Massaggi-11.jpg` |
| Massaggi Rilassanti | `Massaggi-Rilassanti.jpg` | = originale | `Massaggi-Rilassanti-v2.jpg` | `…/03 - Attività/Massaggi/Massaggio decontratturante.jpg` |
| Nutrizione & Forma (focus Feature 04) | `Nutrizione-Forma.jpg` | = originale | `Nutrizione-Forma-v2.jpg` | `…/03 - Attività/Nutrizione/@EQB_Nutrizionista-13.jpg` |
| Nutrizione e Analisi BIA (servizio) | `Nutrizione-BIA.jpg` | = originale (verticale, niente volto) | `Nutrizione-BIA-v3.jpg` | `…/03 - Attività/Nutrizione/C5ED3853-9746-4C2F-8B11-46E77D83705E_1_201_a.jpeg` |
| Mental Coach | `Mental-Coach.jpg` | = originale | `Mental-Coach-v2.jpg` | `…/03 - Attività/Nutrizione/@EQB_Nutrizionista-7.jpg` |
| Sezione di chiusura ("Il tuo percorso…") | `Closing-Federico-osteopatia.jpg` | = originale | `Federico-osteopatia-closing.jpg` | `…/04 - Gestione Social/Federico/Instagram/Caroselli/1 - Federico/EQB - Post 4 Osteopatia-02.jpg` |

> Prefisso cartelle EQB: `~/Desktop/EQB/03 - EQB MARKETING/`
> Ritagli "veri" finora: **Fisioterapia** (zoom leggero). Gli altri ritagli sono identici all'originale (il crop fine avviene via CSS object-fit sul sito).

### Note
- **Fisioterapia**: alternativa disponibile non usata → `~/Downloads/IMG_4238.HEIC` (se Marco la preferisce, va convertita e sostituita).

## Pagina /coworking — testimonianze

| Servizio / Uso | Originale (`originali/`) | Ritaglio finale (`ritagli/`) | Asset web (`public/assets/`) | Sorgente originale |
|---|---|---|---|---|
| Testimonianza Loris Bonacina | `coworking/originali/Loris-Testimonianza.jpg` | `Loris-Testimonianza.jpg` (**crop 4:5 centrato**) | `testi-loris.jpg` | Foto inviata da Marco via chat, 2026-07-13 |

## Pagina /visione — fondatori

| Servizio / Uso | Originale (`originali/`) | Ritaglio finale (`ritagli/`) | Asset web (`public/assets/`) | Sorgente originale |
|---|---|---|---|---|
| Fondatore Marco Adinolfi | `visione/originali/Marco-Fondatore.jpg` | `Marco-Fondatore.jpg` (**crop 1:1 zoom, box 75,530-1425,1880 dal master: mani sulla gamba visibili, rifatto 13/07 su richiesta Marco**) | `visione-marco.jpg` | Foto inviata da Marco via chat, 2026-07-13 |
| Fondatore Federico Mondin | `visione/originali/Federico-Fondatore.jpg` | = originale (già 1:1) | `visione-federico.jpg` | Foto inviata da Marco via chat, 2026-07-13 |

## Home — hero

| Servizio / Uso | Originale | Ritaglio | Asset web (`public/assets/`) | Sorgente |
|---|---|---|---|---|
| Poster video hero (primo frame) | — (derivato dal video) | — | `Hero-Poster.jpg` | Estratto con ffmpeg da `Video-Home.mp4` (frame 0), 2026-07-13 |
| Favicon | — | — | `app/icon.svg` + `app/favicon.ico` | Ricostruita in vettoriale dal brand asset `~/Desktop/EQB/03 - EQB MARKETING/00 - Brand Asset/01 - Logo/Exp/DEF/1x/EQB-Logo-su-Bianco-1(x1).jpg` (marchio #322523 su bianco), 2026-07-13 |
