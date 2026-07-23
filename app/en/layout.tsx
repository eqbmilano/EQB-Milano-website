import { LocaleProvider } from "@/components/LocaleProvider";

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <LocaleProvider locale="en">{children}</LocaleProvider>;
}
