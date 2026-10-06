// I video del sito con la filigrana EQB, come le foto (scripts/foto-per-il-web.mjs).
//
// PERCHE' ESISTE
// Mattia, 06/10/2026: dopo le foto, anche i video del sito, "cosi' siamo estremamente
// protetti". I video erano gia' a risoluzione da web (1080x1920 e 1280x720), quindi qui la
// protezione e' il logo: un video scaricato porta EQB sopra.
//
// COSA FA
// Ogni .mp4 di public/assets riceve il logo EQB piccolo e semitrasparente in ALTO a destra
// (in basso ci sono i comandi del lettore, e in alto e' dove i reel lo portano gia'), e viene
// ricompresso per il web (H.264, avvio veloce). Stessa risoluzione, stesso nome, audio
// invariato. Le versioni trattate stanno nello stesso registro delle foto, quindi rilanciarlo
// non mette un secondo logo.
//
// Serve ffmpeg: nel PATH, oppure FFMPEG=/percorso/ffmpeg node scripts/video-per-il-web.mjs

import sharp from "sharp";
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync, readdirSync, renameSync, existsSync, unlinkSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";

const FFMPEG = process.env.FFMPEG || "ffmpeg";
const RADICE = new URL("../public/assets/", import.meta.url).pathname;
const REGISTRO = join(RADICE, ".foto-web.json");
const registro = existsSync(REGISTRO) ? JSON.parse(readFileSync(REGISTRO, "utf8")) : {};
const logo = readFileSync(join(RADICE, "Logo-Bianco.svg"), "utf8");
const impronta = (buf) => createHash("sha256").update(buf).digest("hex").slice(0, 16);

function dimensioni(file) {
  let info = "";
  try { execFileSync(FFMPEG, ["-hide_banner", "-i", file], { stdio: "pipe" }); }
  catch (e) { info = String(e.stderr); }
  const m = info.match(/Video:.*?(\d{3,5})x(\d{3,5})/);
  return { w: Number(m[1]), h: Number(m[2]), audio: /Audio:/.test(info) };
}

// Logo bianco al 60% con un'ombra sfumata, in un solo PNG con il margine per l'ombra
async function filigrana(larghezza) {
  const svg = (colore, opacita) =>
    Buffer.from(logo.replace(/fill:\s*#fff/i, `fill: ${colore}; fill-opacity: ${opacita}`));
  const chiaro = await sharp(svg("#fff", 0.6), { density: 300 }).resize({ width: larghezza }).png().toBuffer();
  const ombra = await sharp(svg("#000", 0.35), { density: 300 }).resize({ width: larghezza }).blur(2).png().toBuffer();
  const { height } = await sharp(chiaro).metadata();
  return sharp({ create: { width: larghezza + 6, height: height + 6, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
    .composite([{ input: ombra, left: 2, top: 3 }, { input: chiaro, left: 1, top: 1 }]).png().toBuffer();
}

let trattati = 0, saltati = 0;
for (const nome of readdirSync(RADICE).filter((n) => n.toLowerCase().endsWith(".mp4"))) {
  const file = join(RADICE, nome);
  const buf = readFileSync(file);
  if (registro[nome] === impronta(buf)) { saltati++; continue; }

  const { w, h, audio } = dimensioni(file);
  const corto = Math.min(w, h);
  const png = join(tmpdir(), `eqb-logo-${corto}.png`);
  writeFileSync(png, await filigrana(Math.max(70, Math.round(corto * 0.11))));
  const margine = Math.round(corto * 0.04);
  const uscita = join(tmpdir(), `eqb-${nome}`);

  execFileSync(FFMPEG, [
    "-hide_banner", "-loglevel", "error", "-y", "-i", file, "-i", png,
    "-filter_complex", `[0:v][1:v]overlay=W-w-${margine}:${margine}`,
    "-c:v", "libx264", "-preset", "slow", "-crf", "23", "-pix_fmt", "yuv420p",
    ...(audio ? ["-c:a", "copy"] : ["-an"]),
    "-movflags", "+faststart", uscita,
  ]);
  const prima = buf.length;
  renameSync(uscita, file);
  unlinkSync(png);
  const nuovo = readFileSync(file);
  registro[nome] = impronta(nuovo);
  trattati++;
  console.log(`${nome}: ${w}x${h}, ${Math.round(prima / 1024)} KB -> ${Math.round(nuovo.length / 1024)} KB`);
}

writeFileSync(REGISTRO, JSON.stringify(registro, null, 2) + "\n");
console.log(`\n${trattati} video trattati, ${saltati} gia' a posto.`);
