// Le foto del sito in versione da web, con la filigrana EQB.
//
// PERCHE' ESISTE
// Fino al 06/10/2026 public/assets conteneva gli originali dei fotografi: fino a 6016x4016
// pixel e 19 MB a foto, scaricabili da chiunque in qualita' da stampa a un indirizzo
// pubblico. Mattia: "sul sito e' possibile scaricare le nostre foto, non ci va bene".
// Impedire il download del tutto non si puo' (quello che si vede si fotografa), quindi si
// toglie il valore a quello che si scarica: massimo 1920 pixel e il logo EQB sopra.
//
// COSA FA
// Ogni foto di public/assets (anche nelle sottocartelle) viene ridotta a 1920 pixel sul lato
// lungo, con il logo EQB piccolo e semitrasparente in basso a destra, e salvata con lo
// stesso nome: le pagine non cambiano. Gli originali restano nella storia del repository.
//
// Si puo' rilanciare: le foto gia' trattate sono in .foto-web.json con la loro impronta,
// e non prendono una seconda filigrana. Una foto nuova va trattata prima di pubblicarla:
//   node scripts/foto-per-il-web.mjs

import sharp from "sharp";
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative, extname } from "node:path";

const RADICE = new URL("../public/assets/", import.meta.url).pathname;
const REGISTRO = join(RADICE, ".foto-web.json");
const LATO_MAX = 1920;
const ESTENSIONI = new Set([".jpg", ".jpeg", ".png", ".webp"]);

const registro = existsSync(REGISTRO) ? JSON.parse(readFileSync(REGISTRO, "utf8")) : {};
const logo = readFileSync(join(RADICE, "Logo-Bianco.svg"), "utf8");
const impronta = (buf) => createHash("sha256").update(buf).digest("hex").slice(0, 16);

function* foto(dir) {
  for (const nome of readdirSync(dir)) {
    const p = join(dir, nome);
    if (statSync(p).isDirectory()) yield* foto(p);
    else if (ESTENSIONI.has(extname(nome).toLowerCase())) yield p;
  }
}

// Il logo in bianco al 60%, con un'ombra scura sfumata sotto: si legge sui fondi chiari e
// su quelli scuri senza diventare una macchia.
async function filigrana(larghezza) {
  const svg = (colore, opacita) =>
    Buffer.from(logo.replace(/fill:\s*#fff/i, `fill: ${colore}; fill-opacity: ${opacita}`));
  const chiaro = await sharp(svg("#fff", 0.6), { density: 300 }).resize({ width: larghezza }).png().toBuffer();
  const ombra = await sharp(svg("#000", 0.35), { density: 300 }).resize({ width: larghezza }).blur(2).png().toBuffer();
  const { height } = await sharp(chiaro).metadata();
  return { chiaro, ombra, altezza: height };
}

let trattate = 0, saltate = 0, prima = 0, dopo = 0;
for (const p of foto(RADICE)) {
  const chiave = relative(RADICE, p);
  const buf = readFileSync(p);
  if (registro[chiave] === impronta(buf)) { saltate++; continue; }

  const img = sharp(buf).rotate(); // rispetta l'orientamento della fotocamera
  const { width, height } = await img.clone().resize({
    width: LATO_MAX, height: LATO_MAX, fit: "inside", withoutEnlargement: true,
  }).toBuffer({ resolveWithObject: true }).then((r) => r.info);

  const larghezzaLogo = Math.max(70, Math.round(Math.min(width, height) * 0.09));
  const { chiaro, ombra, altezza } = await filigrana(larghezzaLogo);
  const margine = Math.round(Math.min(width, height) * 0.035);
  const left = width - larghezzaLogo - margine, top = height - altezza - margine;

  let uscita = img
    .resize({ width: LATO_MAX, height: LATO_MAX, fit: "inside", withoutEnlargement: true })
    .composite([{ input: ombra, left: left + 1, top: top + 2 }, { input: chiaro, left, top }]);
  const est = extname(p).toLowerCase();
  uscita = est === ".png" ? uscita.png({ compressionLevel: 9, palette: true, quality: 90 })
    : est === ".webp" ? uscita.webp({ quality: 82 })
    : uscita.jpeg({ quality: 82, mozjpeg: true });

  const nuovo = await uscita.toBuffer();
  writeFileSync(p, nuovo);
  registro[chiave] = impronta(nuovo);
  trattate++; prima += buf.length; dopo += nuovo.length;
  console.log(`${chiave}: ${Math.round(buf.length / 1024)} KB -> ${Math.round(nuovo.length / 1024)} KB, ${width}x${height}`);
}

writeFileSync(REGISTRO, JSON.stringify(registro, null, 2) + "\n");
console.log(`\n${trattate} foto trattate, ${saltate} gia' a posto. ${Math.round(prima / 1048576)} MB -> ${Math.round(dopo / 1048576)} MB`);
