import { useLang } from "@/hooks/use-language";

/** A string, or a Bangla/English pair. */
export type L = string | { bn: string; en: string };

/** Hook returning a resolver for bilingual values. */
export function useL() {
  const { t } = useLang();
  return (v: L) => (typeof v === "string" ? v : t(v.bn, v.en));
}

/** Stable react key for a bilingual value. */
export const lkey = (v: L) => (typeof v === "string" ? v : v.en);