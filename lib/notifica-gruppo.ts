// Posta un messaggio nel gruppo WhatsApp interno EQB (Marco/Federico/Mattia)
// via il servizio services/openwa del gestionale (porta 3052, endpoint /send-gruppo).
// Best-effort: non deve mai far fallire il chiamante (form email già inviata).

const OPENWA_URL = process.env.OPENWA_URL ?? "http://127.0.0.1:3052";

export async function notificaGruppo(messaggio: string): Promise<void> {
  const token = process.env.OPENWA_INTERNAL_TOKEN;
  if (!token) return;
  try {
    const res = await fetch(`${OPENWA_URL}/send-gruppo`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-internal-token": token },
      body: JSON.stringify({ messaggio }),
    });
    if (!res.ok) {
      console.error(`[warn] invio gruppo WA fallito: HTTP ${res.status}`);
    }
  } catch (err) {
    console.error(`[warn] invio gruppo WA fallito: ${err instanceof Error ? err.message : String(err)}`);
  }
}
