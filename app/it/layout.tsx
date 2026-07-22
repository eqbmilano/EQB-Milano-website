import { LocaleProvider } from "@/components/LocaleProvider";

export default function ItLayout({ children }: { children: React.ReactNode }) {
  return <LocaleProvider locale="it">{children}</LocaleProvider>;
}
