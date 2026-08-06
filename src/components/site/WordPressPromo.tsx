import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, LayoutTemplate, Image as ImageIcon, ShoppingCart, Type, Star, CreditCard, RotateCcw, Sparkles } from "lucide-react";
import { useLang } from "@/hooks/use-language";

type Block = {
  id: string;
  icon: typeof Type;
  bn: string;
  en: string;
  /** relative height of the block once placed on the canvas */
  h: number;
};

const BLOCKS: Block[] = [
  { id: "header", icon: LayoutTemplate, bn: "হেডার", en: "Header", h: 12 },
  { id: "hero", icon: ImageIcon, bn: "হিরো ব্যানার", en: "Hero Banner", h: 34 },
  { id: "products", icon: ShoppingCart, bn: "প্রোডাক্ট গ্রিড", en: "Product Grid", h: 26 },
  { id: "reviews", icon: Star, bn: "রিভিউ", en: "Reviews", h: 14 },
  { id: "checkout", icon: CreditCard, bn: "বিকাশ চেকআউট", en: "bKash Checkout", h: 14 },
];

export function WordPressPromo() {
  const { lang } = useLang();
  const bn = lang === "bn";
  const t = (b: string, e: string) => (bn ? b : e);
  const f = bn ? "font-shiri" : "";

  const [placed, setPlaced] = useState<string[]>([]);
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const done = placed.length === BLOCKS.length;
  const progress = Math.round((placed.length / BLOCKS.length) * 100);

  useEffect(() => {
    if (running && !done) {
      timer.current = setInterval(() => setSeconds((s) => s + 1), 1000);
    }
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [running, done]);

  const place = (id: string) => {
    if (placed.includes(id)) return;
    if (!running) setRunning(true);
    setPlaced((p) => [...p, id]);
  };

  const reset = () => {
    setPlaced([]);
    setSeconds(0);
    setRunning(false);
  };

  const stack = useMemo(
    () => placed.map((id) => BLOCKS.find((b) => b.id === id)!).filter(Boolean),
    [placed],
  );

  return (
    <section id="wordpress-promo" className="mx-auto max-w-[1500px] px-6 py-20">
      <div className="relative overflow-hidden rounded-[2rem] border border-wp-line bg-wp-hero">
        {/* admin grid + rotating WP mark */}
        <div className="pointer-events-none absolute inset-0 bg-wp-grid opacity-[0.3]" />
        <svg
          viewBox="0 0 122.5 122.5"
          aria-hidden="true"
          fill="currentColor"
          className="pointer-events-none absolute -right-20 -top-24 h-[420px] w-[420px] text-wp-mark opacity-[0.10] animate-spin-slow"
        >
          <path d="M8.7 61.3c0 20.8 12.1 38.7 29.6 47.3L13.2 39.9a52 52 0 0 0-4.5 21.4zm88 -2.7c0-6.5-2.3-11-4.3-14.5-2.7-4.3-5.2-8-5.2-12.3 0-4.8 3.7-9.3 8.9-9.3h.7a52.4 52.4 0 0 0-79.3 9.9h3.4c5.5 0 14-.7 14-.7 2.8-.2 3.2 4 .4 4.3 0 0-2.9.4-6 .5l19 56.6 11.5-34.3-8.2-22.3c-2.8-.2-5.5-.5-5.5-.5-2.8-.2-2.5-4.5.3-4.3 0 0 8.7.7 13.9.7 5.5 0 14-.7 14-.7 2.8-.2 3.2 4 .4 4.3 0 0-2.9.4-6 .5l18.9 56.2 5.2-17.4c2.3-7.2 4-12.4 4-16.7zm-34.4 7.2-15.7 45.6a52.4 52.4 0 0 0 32.2-.8 4.6 4.6 0 0 1-.4-.7L62.3 65.8zm44.9-29.6a40.3 40.3 0 0 1 .4 5.4c0 5.3-1 11.3-4 18.8l-16 46.3a52.4 52.4 0 0 0 19.6-70.5zM61.3 0a61.3 61.3 0 1 0 .1 122.7A61.3 61.3 0 0 0 61.3 0zm0 119.7a58.5 58.5 0 1 1 .1-117 58.5 58.5 0 0 1-.1 117z" />
        </svg>

        <div className="relative grid gap-12 p-8 md:p-14 lg:grid-cols-2 lg:items-center">
          {/* Copy */}
          <div data-reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-wp-line bg-card/70 px-4 py-1.5 text-xs font-semibold backdrop-blur">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-wp-mark" />
              <span className={f}>{t("ওয়ার্ডপ্রেস স্পেশাল", "WordPress Special")}</span>
            </span>
            <h2 className={"mt-5 text-4xl font-medium tracking-tight md:text-5xl " + (bn ? "font-shiri" : "font-display")}>
              {bn ? (
                <>
                  ৬০ সেকেন্ডে <em className="not-italic text-gradient">ওয়েবসাইট বানান।</em>
                </>
              ) : (
                <>
                  Build a website <em className="not-italic text-gradient">in 60 seconds.</em>
                </>
              )}
            </h2>
            <p className={"mt-4 max-w-md text-muted-foreground " + f}>
              {t(
                "ব্লকগুলো ক্লিক করে নিজের সাইট সাজান — যেভাবে আমরা আপনার আসল ওয়ার্ডপ্রেস সাইট বানাই। ডোমেইন, হোস্টিং, WooCommerce ও বিকাশ চেকআউট সব ইনক্লুডেড।",
                "Click the blocks and assemble your site — exactly how we build your real WordPress store. Domain, hosting, WooCommerce and bKash checkout all included.",
              )}
            </p>

            <div className="mt-7 flex flex-wrap items-end gap-x-6 gap-y-3">
              <div>
                <div className={"text-xs uppercase tracking-widest text-muted-foreground " + f}>
                  {t("শুরু মাত্র", "Starting at")}
                </div>
                <div className="font-display text-4xl font-medium text-gradient">৳9,999</div>
              </div>
              <ul className="space-y-1.5">
                {[
                  { bn: "১ বছর ডোমেইন + হোস্টিং", en: "1 year domain + hosting" },
                  { bn: "৮০+ রেডি ডিজাইন", en: "80+ ready-made designs" },
                  { bn: "৩০ দিন ফ্রি সাপোর্ট", en: "30 days free support" },
                ].map((x) => (
                  <li key={x.en} className={"flex items-center gap-2 text-sm " + f}>
                    <Check className="h-4 w-4 shrink-0 text-accent" />
                    {t(x.bn, x.en)}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/wordpress"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-transform duration-300 hover:scale-105"
              >
                <span className={f}>{t("ওয়ার্ডপ্রেস প্যাকেজ দেখুন", "Explore WordPress packages")}</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </Link>
              <Link
                to="/wordpress"
                hash="demos"
                className="inline-flex items-center gap-2 rounded-full border border-wp-line bg-card/70 px-7 py-3.5 text-sm font-semibold backdrop-blur transition-colors hover:bg-secondary"
              >
                <span className={f}>{t("লাইভ ডেমো", "Live demos")}</span>
              </Link>
            </div>
          </div>

          {/* Mini game */}
          <div data-reveal style={{ transitionDelay: "120ms" }}>
            <div className="rounded-3xl border border-wp-line bg-card/80 p-5 shadow-card-3d backdrop-blur">
              {/* browser chrome */}
              <div className="flex items-center gap-2 border-b border-wp-line/70 pb-3">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-wp-mark/70" />
                <div className="ml-2 flex-1 truncate rounded-full bg-secondary px-3 py-1 text-[11px] text-muted-foreground">
                  yourshop.com.bd/wp-admin
                </div>
                <span className="tabular-nums text-[11px] font-semibold text-muted-foreground">
                  {String(Math.floor(seconds / 60)).padStart(2, "0")}:{String(seconds % 60).padStart(2, "0")}
                </span>
              </div>

              {/* canvas */}
              <div className="relative mt-4 min-h-[220px] overflow-hidden rounded-2xl border border-dashed border-wp-line bg-background/60 p-3">
                {stack.length === 0 && (
                  <div className={"grid h-[200px] place-items-center text-center text-sm text-muted-foreground " + f}>
                    {t("নিচের ব্লকে ক্লিক করে সাইট বানানো শুরু করুন", "Click a block below to start building")}
                  </div>
                )}
                <div className="space-y-2">
                  {stack.map((b, i) => (
                    <div
                      key={b.id}
                      className="animate-scale-in rounded-xl border border-wp-line/70 bg-secondary/70 px-3 py-2"
                      style={{ height: `${b.h * 2}px`, animationDelay: `${i * 40}ms` }}
                    >
                      <div className="flex items-center gap-2 text-[11px] font-semibold text-muted-foreground">
                        <b.icon className="h-3.5 w-3.5 text-wp-mark" />
                        <span className={f}>{t(b.bn, b.en)}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {done && (
                  <div className="absolute inset-0 grid animate-fade-in place-items-center bg-background/85 p-6 text-center backdrop-blur-sm">
                    <div>
                      <Sparkles className="mx-auto h-8 w-8 animate-pulse text-accent" />
                      <p className={"mt-3 text-lg font-semibold " + f}>
                        {t(`সাইট রেডি — ${seconds} সেকেন্ডে!`, `Site ready in ${seconds}s!`)}
                      </p>
                      <p className={"mt-1 text-sm text-muted-foreground " + f}>
                        {t("আসল সাইট আমরা ৭ দিনে ডেলিভার করি।", "We deliver the real one in 7 days.")}
                      </p>
                      <div className="mt-4 flex flex-wrap justify-center gap-2">
                        <Link
                          to="/wordpress"
                          className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-transform hover:scale-105"
                        >
                          <span className={f}>{t("৳9,999-এ অর্ডার করুন", "Order at ৳9,999")}</span>
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                        <button
                          type="button"
                          onClick={reset}
                          className="inline-flex items-center gap-2 rounded-full border border-wp-line px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary"
                        >
                          <RotateCcw className="h-4 w-4" />
                          <span className={f}>{t("আবার খেলুন", "Play again")}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* progress */}
              <div className="mt-4">
                <div className="flex items-center justify-between text-[11px] font-semibold text-muted-foreground">
                  <span className={f}>{t("সাইট প্রোগ্রেস", "Site progress")}</span>
                  <span className="tabular-nums">{progress}%</span>
                </div>
                <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-gradient-primary transition-[width] duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* palette */}
              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {BLOCKS.map((b) => {
                  const used = placed.includes(b.id);
                  return (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => place(b.id)}
                      disabled={used}
                      aria-label={t(b.bn, b.en)}
                      className={
                        "group flex min-h-11 items-center gap-2 rounded-xl border px-3 py-2.5 text-left text-xs font-semibold transition-all duration-300 " +
                        (used
                          ? "cursor-default border-wp-line/50 bg-secondary/40 text-muted-foreground opacity-50"
                          : "border-wp-line bg-secondary/70 hover:-translate-y-0.5 hover:border-accent hover:shadow-glow active:scale-95")
                      }
                    >
                      <b.icon className={"h-4 w-4 shrink-0 " + (used ? "" : "text-wp-mark transition-transform group-hover:scale-110")} />
                      <span className={"truncate " + f}>{t(b.bn, b.en)}</span>
                      {used && <Check className="ml-auto h-3.5 w-3.5 text-accent" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
