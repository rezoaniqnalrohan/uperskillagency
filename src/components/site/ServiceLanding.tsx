import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Hero3D } from "./Hero3D";
import { PricingCard, type Plan } from "./PricingCard";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Star, Quote, Sparkles } from "lucide-react";
import { useLang } from "@/hooks/use-language";
import { useL, lkey as k, type L } from "@/lib/i18n-text";

export type ServiceLandingProps = {
  eyebrow: L;
  title: React.ReactNode;
  subtitle: L;
  plans: Plan[];
  features: { icon: LucideIcon; title: L; desc: L }[];
  faq: { q: L; a: L }[];
  heroImage?: string;
  heroImageAlt?: string;
  heroTheme?: "default" | "wordpress";
  stats?: { value: string; label: L }[];
  showcase?: { image: string; title: L; desc: L }[];
  testimonials?: { quote: L; name: string; role: L }[];
  process?: { step: string; title: L; desc: L }[];
  demos?: {
    heading?: L;
    subheading?: L;
    note?: L;
    items: { image: string; name: L; category: L }[];
  };
};

export function ServiceLanding({
  eyebrow,
  title,
  subtitle,
  plans,
  features,
  faq,
  heroImage,
  heroImageAlt,
  heroTheme,
  stats,
  showcase,
  testimonials,
  process,
  demos,
}: ServiceLandingProps) {
  const l = useL();
  const { t, lang } = useLang();
  const bn = lang === "bn";
  return (
    <div className={"min-h-screen " + (bn ? "font-shiri" : "")}>
      <Nav />
      <Hero3D eyebrow={l(eyebrow)} title={title} subtitle={l(subtitle)} theme={heroTheme}>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-transform"
          >
            {t("প্ল্যান দেখুন", "See Plans")} <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#showcase"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/60 backdrop-blur px-6 py-3 text-sm font-semibold hover:bg-card transition-colors"
          >
            {t("শোকেস দেখুন", "View Showcase")}
          </a>
        </div>
        {heroImage && (
          <div className="mt-12 mx-auto max-w-5xl relative">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-primary opacity-20 blur-3xl animate-pulse" />
            <div className="relative rounded-3xl border border-border bg-card/40 backdrop-blur-xl p-4 shadow-card-3d overflow-hidden">
              <div className="flex items-center gap-1.5 px-2 pb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
                <span className="ml-3 text-[10px] text-muted-foreground tracking-widest uppercase">
                  {t("লাইভ · উপারস্কিল", "live · uperskill")}
                </span>
              </div>
              <img
                src={heroImage}
                alt={heroImageAlt ?? "Dashboard preview"}
                className="w-full h-auto rounded-2xl animate-float"
                loading="eager"
              />
            </div>
          </div>
        )}
      </Hero3D>

      {/* Stats strip */}
      {stats && stats.length > 0 && (
        <section className="border-y border-border bg-card/30">
          <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={k(s.label)} className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-gradient">
                  {s.value}
                </div>
                <div className="mt-1 text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
                  {l(s.label)}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-accent">{t("কেন উপারস্কিল", "Why Uperskill")}</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight">
            {t("প্রতিটি ডিটেইল ভেবে তৈরি।", "Built with the details that matter.")}
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={k(f.title)}
              data-reveal
              style={{ transitionDelay: `${features.indexOf(f) * 60}ms` }}
              className="card-3d group rounded-2xl border border-border bg-card p-8 shadow-card-3d transition-all duration-500 hover:-translate-y-1 hover:shadow-glow hover:border-accent/40"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-primary grid place-items-center shadow-glow transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                <f.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="mt-5 text-lg font-bold transition-colors duration-300 group-hover:text-accent">{l(f.title)}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{l(f.desc)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Showcase */}
      {showcase && showcase.length > 0 && (
        <section id="showcase" className="mx-auto max-w-7xl px-6 py-24 border-t border-border">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-accent">{t("শোকেস", "Showcase")}</p>
            <h2 className="mt-2 text-4xl font-bold tracking-tight">
              {t("আসল স্ক্রিন, আসল পলিশ।", "Real screens, real polish.")}
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {showcase.map((s) => (
              <div
                key={k(s.title)}
                data-reveal
                style={{ transitionDelay: `${showcase.indexOf(s) * 80}ms` }}
                className="card-3d group rounded-2xl overflow-hidden border border-border bg-card shadow-card-3d transition-all duration-500 hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={s.image}
                    alt={l(s.title)}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110 group-hover:rotate-1"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold transition-colors duration-300 group-hover:text-accent">{l(s.title)}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{l(s.desc)}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Prebuilt demo gallery */}
      {demos && demos.items.length > 0 && (
        <section id="demos" className="relative overflow-hidden border-t border-border">
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35] [background-image:linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                <Sparkles className="w-3.5 h-3.5" />
                {demos.heading ? l(demos.heading) : t("প্রি-বিল্ট ডেমো", "Prebuilt Demos")}
              </span>
              <h2 className="mt-4 text-4xl font-bold tracking-tight">
                {demos.subheading
                  ? l(demos.subheading)
                  : t("রেডি ডিজাইন বেছে নিন, আমরা কাস্টমাইজ করে দেব।", "Pick a ready design — we customise it for you.")}
              </h2>
              {demos.note && (
                <p className="mt-4 text-muted-foreground">{l(demos.note)}</p>
              )}
            </div>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {demos.items.map((d, i) => (
                <div
                  key={k(d.name)}
                  data-reveal
                  style={{ transitionDelay: `${i * 70}ms` }}
                  className="card-3d group relative rounded-2xl border border-border bg-card/70 backdrop-blur p-3 shadow-card-3d transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-glow"
                >
                  <div className="relative overflow-hidden rounded-xl bg-muted">
                    <img
                      src={d.image}
                      alt={l(d.name)}
                      loading="lazy"
                      width={1200}
                      height={900}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.08]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <span className="absolute left-3 top-3 rounded-full bg-background/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-foreground backdrop-blur">
                      {l(d.category)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3 px-2 py-4">
                    <h3 className="text-sm font-bold transition-colors duration-300 group-hover:text-accent">
                      {l(d.name)}
                    </h3>
                    <ArrowRight className="w-4 h-4 text-accent transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      {process && process.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 py-24 border-t border-border">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-accent">{t("প্রসেস", "Process")}</p>
            <h2 className="mt-2 text-4xl font-bold tracking-tight">
              {t("ব্রিফ থেকে লঞ্চ — কয়েক সপ্তাহে।", "From brief to launch in weeks.")}
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {process.map((p) => (
              <div
                key={k(p.title)}
                data-reveal
                style={{ transitionDelay: `${process.indexOf(p) * 80}ms` }}
                className="card-3d group rounded-2xl border border-border bg-card p-6 shadow-card-3d transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow"
              >
                <div className="text-xs font-bold text-accent tracking-widest transition-transform duration-300 group-hover:translate-x-1">
                  {p.step}
                </div>
                <h3 className="mt-2 text-lg font-bold">{l(p.title)}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{l(p.desc)}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-7xl px-6 py-24 border-t border-border">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-accent">{t("প্রাইসিং", "Pricing")}</p>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight">
            {t("আপনার প্ল্যান বেছে নিন", "Choose your plan")}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {t(
              "স্বচ্ছ, সব-কিছু-সহ প্রাইসিং। বিকাশ · নগদ · কার্ড গ্রহণযোগ্য।",
              "Transparent, all-in pricing. bKash · Nagad · Card accepted."
            )}
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {plans.map((p, i) => (
            <div key={p.name} data-reveal style={{ transitionDelay: `${i * 100}ms` }} className="transition-transform duration-500 hover:-translate-y-2">
              <PricingCard plan={p} />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      {testimonials && testimonials.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 py-24 border-t border-border">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-accent">{t("ক্লায়েন্ট রিভিউ", "Client Reviews")}</p>
            <h2 className="mt-2 text-4xl font-bold tracking-tight">
              {t("বাংলাদেশজুড়ে টিমগুলোর প্রিয়।", "Loved by teams across Bangladesh.")}
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                data-reveal
                style={{ transitionDelay: `${i * 80}ms` }}
                className="card-3d group rounded-2xl border border-border bg-card p-8 shadow-card-3d transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow"
              >
                <Quote className="w-6 h-6 text-accent transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-6" />
                <p className="mt-4 text-sm leading-relaxed">{l(t.quote)}</p>
                <div className="mt-6 flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current transition-transform duration-300 group-hover:scale-110" style={{ transitionDelay: `${i * 40}ms` }} />
                  ))}
                </div>
                <div className="mt-3">
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{l(t.role)}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-24 border-t border-border">
        <h2 className="text-3xl font-bold tracking-tight text-center">
          {t("সাধারণ প্রশ্নাবলি", "Frequently asked")}
        </h2>
        <div className="mt-10 space-y-4">
          {faq.map((f, i) => (
            <details
              key={k(f.q)}
              data-reveal
              style={{ transitionDelay: `${i * 60}ms` }}
              className="group rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-accent/40 hover:shadow-md open:border-accent/40"
            >
              <summary className="cursor-pointer font-semibold flex items-center justify-between">
                {l(f.q)}
                <span className="text-accent transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{l(f.a)}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-primary p-10 md:p-16 text-center shadow-glow">
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
          <h2 className="relative text-3xl md:text-4xl font-bold text-primary-foreground">
            {t("উপারস্কিলের সাথে শুরু করতে প্রস্তুত?", "Ready to build with Uperskill?")}
          </h2>
          <p className="relative mt-3 text-primary-foreground/80 max-w-xl mx-auto">
            {t(
              "১৫ মিনিটের ফ্রি কল বুক করুন। আমরা আপনার প্রজেক্ট স্কোপ করে স্বচ্ছভাবে কোট দেব।",
              "Book a free 15-minute call. We'll scope your project and quote transparently."
            )}
          </p>
          <a
            href="#contact"
            className="relative mt-8 inline-flex items-center gap-2 rounded-lg bg-background px-6 py-3 text-sm font-semibold text-foreground hover:scale-105 transition-transform"
          >
            {t("প্রজেক্ট শুরু করুন", "Start Your Project")} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}