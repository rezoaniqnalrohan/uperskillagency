import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { useLang } from "@/hooks/use-language";
import logoMark from "@/assets/uperskill-mark.png.asset.json";

export function Nav() {
  const { t } = useLang();
  const links = [
    { to: "/", label: "Home", bn: "হোম" },
    { to: "/ecommerce", label: "E-Commerce", bn: "ই-কমার্স" },
    { to: "/wordpress", label: "WordPress", bn: "ওয়ার্ডপ্রেস" },
    { to: "/stock", label: "Stock", bn: "স্টক" },
    { to: "/plugins", label: "Plugins & Themes", bn: "প্লাগইন ও থিম" },
    { to: "/portfolio", label: "Portfolio", bn: "পোর্টফোলিও" },
  ] as const;
  return (
    <header className="sticky top-0 z-50 pt-3 pb-2">
      <div className="mx-auto w-[96%] max-w-7xl">
        <div className="relative flex h-16 items-center justify-between rounded-full border border-border/60 bg-background/70 pl-3 pr-3 shadow-[0_10px_40px_-18px_rgba(15,82,255,0.25)] backdrop-blur-xl supports-[backdrop-filter]:bg-background/55">
          {/* Brand */}
          <Link
            to="/"
            className="group flex items-center gap-2.5 pl-1 pr-3 text-foreground"
            aria-label="Uperskill Agency"
          >
            <span className="relative grid h-10 w-10 place-items-center rounded-full ring-1 ring-border/70">
              <img src={logoMark.url} alt="" className="h-9 w-9 rounded-full" />
              <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-brand ring-2 ring-background" />
            </span>
            <span className="hidden sm:flex items-baseline gap-1 text-[15px] font-display font-semibold tracking-tight leading-none">
              Uperskill<span className="text-brand">.</span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Agency
              </span>
            </span>
          </Link>

          {/* Center pill nav */}
          <nav className="hidden md:flex items-center gap-0.5 rounded-full border border-border/60 bg-card/60 px-1.5 py-1 shadow-inner">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: true }}
                activeProps={{
                  className:
                    "text-brand-foreground bg-brand shadow-[0_6px_16px_-6px_rgba(15,82,255,0.55)]",
                }}
                inactiveProps={{
                  className: "text-muted-foreground hover:text-foreground hover:bg-muted",
                }}
                className="rounded-full px-3.5 py-1.5 text-[13px] font-medium tracking-tight transition-all"
              >
                <span className={t("font-shiri", "")}>{t(l.bn, l.label)}</span>
              </Link>
            ))}
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-1.5">
            <div className="hidden sm:flex items-center gap-1 rounded-full border border-border/60 bg-card/60 p-1">
              <LanguageToggle />
              <span className="h-5 w-px bg-border/70" />
              <ThemeToggle />
            </div>
            <div className="flex sm:hidden items-center gap-1">
              <LanguageToggle />
              <ThemeToggle />
            </div>
            <a
              href="#contact"
              className="group hidden sm:inline-flex items-center gap-1.5 rounded-full bg-brand pl-4 pr-1.5 py-1 text-[13px] font-semibold text-brand-foreground shadow-[0_10px_24px_-10px_rgba(15,82,255,0.65)] transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className={t("font-shiri", "")}>
                {t("এখনই শুরু করুন", "Start Now")}
              </span>
              <span className="grid h-7 w-7 place-items-center rounded-full bg-white/15 transition-transform group-hover:rotate-45">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}