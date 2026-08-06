import { useLang } from "@/hooks/use-language";

function BrandMarkFooter() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className="h-9 w-9">
      <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <path d="M13 14v9a7 7 0 0 0 14 0v-9" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M20 22V10m0 0l-3.5 3.5M20 10l3.5 3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const gateways = [
  { name: "bKash", color: "#E2136E" },
  { name: "Nagad", color: "#F6891F" },
  { name: "Rocket", color: "#8C3494" },
  { name: "Visa", color: "#1A1F71" },
  { name: "COD", color: "#4C4640" },
];

export function Footer() {
  const { t } = useLang();
  return (
    <footer
      id="contact"
      className="mt-24 bg-hero-surface text-hero-foreground"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2 max-w-md">
          <div className="flex items-center gap-3 text-hero-foreground">
            <BrandMarkFooter />
            <span className="font-display font-bold text-xl tracking-tight">Uperskill</span>
          </div>
          <p className={t("font-shiri text-lg", "text-base") + " mt-4 leading-relaxed text-hero-foreground/90"}>
            {t(
              "এক নিমিষেই ডিজিটাল সমাধান। বাংলাদেশের জন্য প্রিমিয়াম ওয়েবসাইট, প্লাগইন ও থিম।",
              "Digital solutions in an instant. Premium websites, plugins & themes built for Bangladesh."
            )}
          </p>

          <p className="mt-8 text-[11px] font-semibold uppercase tracking-widest text-hero-muted">
            {t("গ্রহণযোগ্য পেমেন্ট", "We accept")}
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {gateways.map((g) => (
              <li
                key={g.name}
                className="rounded-full border px-3 py-1 text-xs font-semibold"
                style={{ borderColor: g.color, color: g.color }}
              >
                {g.name}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display font-semibold mb-4 text-hero-foreground">
            <span className={t("font-shiri", "")}>{t("প্রোডাক্ট", "Products")}</span>
          </p>
          <ul className="space-y-2.5 text-sm text-hero-muted">
            <li className={"hover:text-hero-foreground transition-colors cursor-pointer " + t("font-shiri", "")}>{t("ই-কমার্স ওয়েবসাইট", "E-Commerce Websites")}</li>
            <li className={"hover:text-hero-foreground transition-colors cursor-pointer " + t("font-shiri", "")}>{t("স্টক ম্যানেজমেন্ট", "Stock Management")}</li>
            <li className={"hover:text-hero-foreground transition-colors cursor-pointer " + t("font-shiri", "")}>{t("পোর্টফোলিও ওয়েবসাইট", "Portfolio Websites")}</li>
            <li className={"hover:text-hero-foreground transition-colors cursor-pointer " + t("font-shiri", "")}>{t("ওয়ার্ডপ্রেস প্লাগইন ও থিম", "WordPress Plugins & Themes")}</li>
          </ul>
        </div>
        <div>
          <p className="font-display font-semibold mb-4 text-hero-foreground">
            <span className={t("font-shiri", "")}>{t("যোগাযোগ", "Contact")}</span>
          </p>
          <ul className="space-y-2.5 text-sm text-hero-muted">
            <li>hello@uperskill.com</li>
            <li>WhatsApp · Messenger</li>
            <li className={t("font-shiri", "")}>{t("ঢাকা, বাংলাদেশ", "Dhaka, Bangladesh")}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-hero-foreground/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-hero-muted">
          <span>© {new Date().getFullYear()} Uperskill. {t("সর্বস্বত্ব সংরক্ষিত।", "All rights reserved.")}</span>
          <span className={t("font-shiri", "")}>{t("পরিচ্ছন্ন · প্রিমিয়াম · সিস্টেমেটিক · নির্ভরযোগ্য", "Clean · Premium · Systematic · Trustworthy")}</span>
        </div>
      </div>
    </footer>
  );
}