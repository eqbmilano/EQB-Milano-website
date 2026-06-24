# Site Content — Archivio immagini e contenuti del sito EQB Milano

Questa cartella è l'**archivio organizzato** di tutte le immagini e i contenuti usati nel sito.
Scopo: se si perde il collegamento ai file originali sul Mac di Marco, **il sito non perde nulla** — qui c'è una copia master di tutto.

## Come è organizzata
- `benessere/originali/` → **master ad alta qualità** (max 2400px, JPG q85) delle immagini usate nella pagina `/benessere-v2`. Sono la copia di sicurezza: ottime per qualsiasi uso web/sito.
- Le versioni **web ottimizzate** effettivamente caricate dal sito stanno in `public/assets/` (max 1600px, q72).
- I **raw originali** restano nelle cartelle di Marco (vedi colonna "Sorgente originale"): qui teniamo master compressi per non gonfiare il repo git.

## Convenzione
- Asset web della V2 benessere: suffisso `-v2` in `public/assets/` (così non toccano la V1).
- Ogni nuova immagine aggiunta al sito va: 1) master in `site-content/<pagina>/originali/`, 2) versione web in `public/assets/`, 3) riga in questa tabella.

---

## Pagina /benessere-v2 — mappa immagini

| Servizio / Uso | Master archivio (`site-content/benessere/originali/`) | Asset web (`public/assets/`) | Sorgente originale (Mac di Marco) |
|---|---|---|---|
| Osteopatia | `Osteopatia.jpg` | `Osteopatia-v2.jpg` | `…/04 - Gestione Social/Federico/Instagram/Caroselli/1 - Federico/EQB - Post 4 Osteopatia-04.jpg` |
| Osteopatia Pediatrica | `Osteopatia-Pediatrica.jpg` | `Osteopatia-pediatrica-v2.jpg` | `…/03 - Shooting/01 - Shooting Originali/Altre foto per sito/baby-massage-close-up-hands-baby-back-top-view.jpg` |
| Massaggio Decontratturante Sportivo (ex Massoterapia) | `Massaggio-Decontratturante-Sportivo.jpg` | `Massaggio-Decontratturante-Sportivo-v2.jpg` | `~/Downloads/ChatGPT Image 24 giu 2026, 15_58_28.png` |
| Rinforzo Posturale (ex Posturale) | `Rinforzo-Posturale.jpg` | `Rinforzo-Posturale-v2.jpg` | `…/03 - Shooting/00 - EQB Studio/Foto/03 - Attività/Training/Kinesioterapia.jpg` |
| Functional Training (ex Funzionale) | `Functional-Training.jpg` | `Functional-Training-v2.jpg` | `…/03 - Shooting/00 - EQB Studio/Foto/03 - Attività/Training/Allenamento funzionale.jpg` |
| Linfodrenante | `Linfodrenante.jpg` | `Linfodrenante-v2.jpg` | `…/03 - Shooting/00 - EQB Studio/Foto/03 - Attività/Massaggi/Immagine.png` |
| Coppettazione | `Coppettazione.jpg` | `Coppettazione-v2.jpg` | `…/03 - Shooting/00 - EQB Studio/Foto/03 - Attività/Massaggi/@EQB_Massaggi-11.jpg` |
| Massaggi Rilassanti | `Massaggi-Rilassanti.jpg` | `Massaggi-Rilassanti-v2.jpg` | `…/03 - Shooting/00 - EQB Studio/Foto/03 - Attività/Massaggi/Massaggio decontratturante.jpg` |
| Sezione di chiusura ("Il tuo percorso…") | `Closing-Federico-osteopatia.jpg` | `Federico-osteopatia-closing.jpg` | `…/04 - Gestione Social/Federico/Instagram/Caroselli/1 - Federico/EQB - Post 4 Osteopatia-02.jpg` |

> Prefisso cartelle EQB: `~/Desktop/EQB/03 - EQB MARKETING/`

### Da completare
- **Riflessologia Plantare**: immagine nuova richiesta da Marco ma non ancora fornita → usa ancora l'asset V1 `Riflessologia.jpg`. Da sostituire appena arriva la foto.
