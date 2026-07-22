import { redirect } from "next/navigation";
import { DEFAULT_LOCALE } from "@/lib/i18n";

// Fallback di sicurezza: proxy.ts intercetta "/" e fa redirect in base a
// lingua browser/cookie prima che questa pagina venga raggiunta.
export default function Home() {
  redirect(`/${DEFAULT_LOCALE}`);
}
