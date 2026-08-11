import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Star, Check } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { useLang } from "@/hooks/use-language";

import pluginElementor from "@/assets/plugin-elementor.webp";
import pluginWoo from "@/assets/plugin-woocommerce.webp";
import pluginRocket from "@/assets/plugin-wprocket.webp";
import pluginRankMath from "@/assets/plugin-rankmath.webp";
import pluginYoast from "@/assets/plugin-yoast.webp";
import pluginWpforms from "@/assets/plugin-wpforms.webp";

export const Route = createFileRoute("/plugins")({
  head: () => ({
    meta: [
      { title: "WordPress Plugins & Themes BD — Uperskill" },
      {
        name: "description",
        content:
          "বিকাশ, নগদ ও বাংলা টাইপোগ্রাফি টিউনড ওয়ার্ডপ্রেস প্রিমিয়াম প্লাগইন ও থিম। Premium WordPress plugins and themes built for Bangladesh — bKash, Nagad, Bengali typography and Core Web Vitals baked in.",
      },
      { property: "og:title", content: "WordPress Plugins & Themes BD — Uperskill" },
      {
        property: "og:description",
        content:
          "বিকাশ, নগদ ও বাংলা টাইপোগ্রাফি টিউনড ওয়ার্ডপ্রেস প্রিমিয়াম প্লাগইন ও থিম। Premium WordPress plugins and themes built for Bangladesh.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://uperskillagency.lovable.app/plugins" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://uperskillagency.lovable.app/plugins" }],
  }),
  component: PluginsPage,
});

const items: {
  image: string;
  tag: { bn: string; en: string };
  name: { bn: string; en: string };
  desc: { bn: string; en: string };
  price: { bn: string; en: string };
  features: { bn: string; en: string }[];
}[] = [
  {
    image: pluginElementor,
    tag: { bn: "পেজ বিল্ডার", en: "Page Builder" },
    name: { bn: "এলিমেন্টর প্রো", en: "Elementor Pro" },
    desc: {
      bn: "থিম বিল্ডার, পপআপ এবং ৯০+ প্রো উইজেটসহ ড্র্যাগ-এন্ড-ড্রপ পেজ বিল্ডার।",
      en: "Drag-and-drop page builder with theme builder, popups and 90+ Pro widgets."
    },
    price: { bn: "৳১,৪৯৯", en: "৳1,499" },
    features: [
      { bn: "৯০+ প্রো উইজেটস", en: "90+ Pro widgets" },
      { bn: "থিম ও পপআপ বিল্ডার", en: "Theme & popup builder" },
      { bn: "সম্পূর্ণ বাংলা ফন্ট সাপোর্ট", en: "Bangla font support" }
    ]
  },
  {
    image: pluginWoo,
    tag: { bn: "ই-কমার্স", en: "eCommerce" },
    name: { bn: "WooCommerce গেটওয়ে", en: "WooCommerce Gateway" },
    desc: {
      bn: "বিকাশ ও নগদ অটো পেমেন্ট এবং অর্ডার ট্র্যাকিং ইঞ্জিন।",
      en: "The complete WordPress store engine with automated local payment gateways."
    },
    price: { bn: "৳২,৯৯৯", en: "৳2,999" },
    features: [
      { bn: "বিকাশ + নগদ অটো পেমেন্ট", en: "bKash + Nagad gateway" },
      { bn: "পাঠাও/স্টিডফাস্ট কুরিয়ার সিঙ্ক", en: "Courier API auto sync" },
      { bn: "বাংলায় অর্ডার কাস্টমার SMS", en: "Order SMS in Bangla" }
    ]
  },
  {
    image: pluginRocket,
    tag: { bn: "স্পিড অপ্টিমাইজেশন", en: "Performance" },
    name: { bn: "ডব্লিউপি রকেট", en: "WP Rocket" },
    desc: {
      bn: "মোবাইলে ১ সেকেন্ডে সাইট লোড করার জন্য ফাইল ক্যাশিং ও ক্লাউডফেয়ার অপ্টিমাইজেশন।",
      en: "One-click caching and Core Web Vitals fixes for Android-heavy traffic."
    },
    price: { bn: "৳২,৪৯৯", en: "৳2,499" },
    features: [
      { bn: "পেজ ক্যাশিং ও ডিরেক্ট প্রিলোড", en: "Page caching & preload" },
      { bn: "স্মার্ট ইমেজ লেজি লোডিং", en: "Lazy loading" },
      { bn: "ক্রিটিক্যাল সিএসএস মিনিফাই", en: "Critical CSS generation" }
    ]
  },
  {
    image: pluginRankMath,
    tag: { bn: "এসইও", en: "SEO" },
    name: { bn: "র‍্যাংক ম্যাথ এসইও প্রো", en: "Rank Math SEO Pro" },
    desc: {
      bn: "স্কিমা মার্কআপ, কিওয়ার্ড র্যাঙ্ক ট্র্যাকার ও গুগল সার্চ কনসোল রিপোর্ট সরাসরি অ্যাডমিন প্যানেলে।",
      en: "Schema markup, keyword rank tracking and Google Search Console insights."
    },
    price: { bn: "৳১,৯৯৯", en: "৳1,999" },
    features: [
      { bn: "অ্যাডভান্সড রিচ স্কিমা", en: "Rich schema markup" },
      { bn: "কিওয়ার্ড পজিশন ট্র্যাকিং", en: "Keyword rank tracking" },
      { bn: "৪০৪ ইরর এবং রিডাইরেক্ট ম্যানেজার", en: "404 & redirect manager" }
    ]
  },
  {
    image: pluginYoast,
    tag: { bn: "এসইও", en: "SEO" },
    name: { bn: "ইয়োস্ট এসইও প্রিমিয়াম", en: "Yoast SEO Premium" },
    desc: {
      bn: "কনটেন্ট রিডাবিলিটি এনালাইসিস, ইন্টারনাল লিঙ্কিং সাজেশন ও সোশ্যাল মিডিয়া প্রিভিউ।",
      en: "Readability analysis, internal linking suggestions and redirect manager."
    },
    price: { bn: "৳১,৭৯৯", en: "৳1,799" },
    features: [
      { bn: "কনটেন্ট ও রিডাবিলিটি স্কোর", en: "Content & readability score" },
      { bn: "ইন্টারনাল লিংক সাজেশন্স", en: "Internal link suggestions" },
      { bn: "সোশ্যাল শেয়ার কাস্টম প্রিভিউ", en: "Social previews" }
    ]
  },
  {
    image: pluginWpforms,
    tag: { bn: "ফর্ম বিল্ডার", en: "Forms" },
    name: { bn: "ডব্লিউপিফর্মস প্রো", en: "WPForms Pro" },
    desc: {
      bn: "অর্ডার ফর্ম, লিড জেনারেশন, বুকিং ও কাস্টম পেমেন্ট ইন্টিগ্রেশন ফর্ম।",
      en: "Drag-and-drop form builder for order, booking and payment forms."
    },
    price: { bn: "৳১,২৯৯", en: "৳1,299" },
    features: [
      { bn: "সহজ ড্র্যাগ-এন্ড-ড্রপ বিল্ডার", en: "Drag & drop builder" },
      { bn: "অর্ডার ও সার্ভিস বুকিং ফর্ম", en: "Order & booking forms" },
      { bn: "ইমেইল ও ইনস্ট্যান্ট SMS এলার্ট", en: "Email + SMS notifications" }
    ]
  }
];

function PluginsPage() {
  const { t, lang } = useLang();
  const bn = lang === "bn";

  return (
    <div className={"min-h-screen " + (bn ? "font-shiri" : "")}>
      <Nav />
      <section className="border-b border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            WordPress · Plugins &amp; Themes
          </p>
          <h1 className="mt-3 text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1]">
            {bn ? (
              <>
                প্রিমিয়াম <span className="text-gradient">প্লাগইন ও থিম</span>
              </>
            ) : (
              <>
                Premium <span className="text-gradient">Plugins &amp; Themes</span>
              </>
            )}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(
              "বিকাশ, নগদ ও বাংলা টাইপোগ্রাফি টিউনড ওয়ার্ডপ্রেস প্লাগইন ও থিম — ৩জি নেটওয়ার্কেও রকেটের মত স্পিড।",
              "Premium WordPress plugins and themes — built for Bangladesh, tuned for bKash, Nagad and 3G Android."
            )}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <article
              key={p.name.en}
              className="card-3d group flex flex-col rounded-2xl border border-border bg-card overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={p.image}
                  alt={bn ? p.name.bn : p.name.en}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground">
                    {bn ? p.tag.bn : p.tag.en}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Star className="h-3 w-3 fill-current text-accent" /> 4.9
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-semibold">{bn ? p.name.bn : p.name.en}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{bn ? p.desc.bn : p.desc.en}</p>
                <ul className="mt-4 space-y-2 flex-1">
                  {p.features.map((f) => (
                    <li key={f.en} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span>{bn ? f.bn : f.en}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <span className="font-extrabold text-xl text-gradient">{bn ? p.price.bn : p.price.en}</span>
                  <button className="inline-flex items-center gap-1 rounded-lg bg-gradient-primary text-primary-foreground px-4 py-2 text-sm font-semibold hover:scale-[1.03] transition-all shadow-glow">
                    {t("অর্ডার করুন", "Order Now")} <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}