import { useLang } from "@/hooks/use-language";

export function LanguageToggle() {
  const { lang, toggle, mounted } = useLang();
  const isBn = mounted ? lang === "bn" : true;
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isBn ? "Switch to English" : "বাংলায় দেখুন"}
      className="relative inline-flex h-9 items-center gap-1 rounded-full border border-border bg-card px-1 text-xs font-semibold text-foreground transition-all hover:bg-secondary"
    >
      <span
        className={
          "px-2.5 py-1 rounded-full transition-all " +
          (isBn ? "bg-brand text-brand-foreground shadow-sm" : "text-muted-foreground")
        }
      >
        <span className="font-shiri">বাং</span>
      </span>
      <span
        className={
          "px-2.5 py-1 rounded-full transition-all " +
          (!isBn ? "bg-brand text-brand-foreground shadow-sm" : "text-muted-foreground")
        }
      >
        EN
      </span>
    </button>
  );
}