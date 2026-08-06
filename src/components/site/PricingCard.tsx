import { Check } from "lucide-react";
import { useL, lkey, type L } from "@/lib/i18n-text";
import { useLang } from "@/hooks/use-language";

export type Plan = {
  name: string;
  price: string;
  tagline?: L;
  features: L[];
  featured?: boolean;
  cta?: L;
};

export function PricingCard({ plan }: { plan: Plan }) {
  const l = useL();
  const { t } = useLang();
  return (
    <div
      className={
        "card-3d relative rounded-2xl border p-8 bg-card shadow-card-3d " +
        (plan.featured
          ? "border-transparent bg-gradient-to-b from-primary/20 to-card ring-1 ring-primary/40 shadow-glow"
          : "border-border")
      }
    >
      {plan.featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
          {t("সবচেয়ে জনপ্রিয়", "Most Popular")}
        </span>
      )}
      <h3 className="text-xl font-bold">{plan.name}</h3>
      {plan.tagline && (
        <p className="mt-1 text-sm text-muted-foreground">{l(plan.tagline)}</p>
      )}
      <div className="mt-6 flex items-baseline gap-1">
        <span className="text-4xl font-extrabold text-gradient">{plan.price}</span>
      </div>
      <ul className="mt-6 space-y-3">
        {plan.features.map((f) => (
          <li key={lkey(f)} className="flex gap-2 text-sm">
            <Check className="w-5 h-5 shrink-0 text-accent mt-0.5" />
            <span>{l(f)}</span>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className={
          "mt-8 inline-flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-semibold transition-all hover:scale-[1.02] " +
          (plan.featured
            ? "bg-gradient-primary text-primary-foreground shadow-glow"
            : "bg-secondary text-secondary-foreground hover:bg-secondary/80")
        }
      >
        {plan.cta ? l(plan.cta) : t("অর্ডার করুন", "Order Now")}
      </a>
    </div>
  );
}