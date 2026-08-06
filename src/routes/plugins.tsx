import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Star, Check } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import pluginElementor from "@/assets/plugin-elementor.webp";
import pluginWoo from "@/assets/plugin-woocommerce.webp";
import pluginRocket from "@/assets/plugin-wprocket.webp";
import pluginRankMath from "@/assets/plugin-rankmath.webp";
import pluginYoast from "@/assets/plugin-yoast.webp";
import pluginWpforms from "@/assets/plugin-wpforms.webp";

export const Route = createFileRoute("/plugins")({
  head: () => ({
    meta: [
      { title: "WordPress Plugins & Themes — Uperskill Agency" },
      {
        name: "description",
        content:
          "Premium WordPress plugins and themes built for Bangladesh — bKash, Nagad, Bengali typography and Core Web Vitals baked in.",
      },
      { property: "og:title", content: "WordPress Plugins & Themes — Uperskill Agency" },
      {
        property: "og:description",
        content:
          "Premium WordPress plugins and themes built for Bangladesh — bKash, Nagad, Bengali typography and Core Web Vitals baked in.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://uperskillagency.lovable.app/plugins" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://uperskillagency.lovable.app/plugins" }],
  }),
  component: PluginsPage,
});

const items = [
  {
    image: pluginElementor,
    tag: "Page Builder",
    name: "Elementor Pro",
    nameBn: "এলিমেন্টর প্রো",
    desc: "Drag-and-drop page builder with theme builder, popups and 90+ Pro widgets.",
    price: "৳1,499",
    features: ["90+ Pro widgets", "Theme & popup builder", "Bangla font support"],
  },
  {
    image: pluginWoo,
    tag: "eCommerce",
    name: "WooCommerce",
    nameBn: "উওকমার্স",
    desc: "The complete WordPress store engine — products, cart, checkout and orders.",
    price: "৳2,999",
    features: ["bKash + Nagad gateway", "COD workflow", "Order SMS in Bangla"],
  },
  {
    image: pluginRocket,
    tag: "Performance",
    name: "WP Rocket",
    nameBn: "ডব্লিউপি রকেট",
    desc: "One-click caching and Core Web Vitals fixes for Android-heavy traffic.",
    price: "৳2,499",
    features: ["Page caching & preload", "Lazy loading", "Critical CSS"],
  },
  {
    image: pluginRankMath,
    tag: "SEO",
    name: "Rank Math SEO Pro",
    nameBn: "র‍্যাংক ম্যাথ এসইও প্রো",
    desc: "Schema markup, keyword rank tracking and Google Search Console insights.",
    price: "৳1,999",
    features: ["Rich schema markup", "Keyword rank tracking", "404 & redirect manager"],
  },
  {
    image: pluginYoast,
    tag: "SEO",
    name: "Yoast SEO Premium",
    nameBn: "ইয়োস্ট এসইও প্রিমিয়াম",
    desc: "Readability analysis, internal linking suggestions and redirect manager.",
    price: "৳1,799",
    features: ["Content & readability score", "Internal link suggestions", "Social previews"],
  },
  {
    image: pluginWpforms,
    tag: "Forms",
    name: "WPForms Pro",
    nameBn: "ডব্লিউপিফর্মস প্রো",
    desc: "Drag-and-drop form builder for order, booking and payment forms.",
    price: "৳1,299",
    features: ["Drag & drop builder", "Order & booking forms", "Email + SMS notifications"],
  },
];

function PluginsPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand">
            WordPress · Plugins &amp; Themes
          </p>
          <h1 className="font-shiri mt-3 text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1]">
            প্রিমিয়াম <span className="text-brand">প্লাগইন ও থিম</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Premium WordPress plugins and themes — built for Bangladesh, tuned for
            bKash, Nagad and 3G Android.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <article
              key={p.name}
              className="card-3d group flex flex-col rounded-2xl border border-border bg-card overflow-hidden"
            >
              <div className="aspect-square overflow-hidden bg-secondary">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground">
                    {p.tag}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Star className="h-3 w-3 fill-current text-brand" /> 4.9
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-semibold">{p.name}</h3>
                <p className="font-shiri text-sm text-muted-foreground">{p.nameBn}</p>
                <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
                <ul className="mt-4 space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-brand shrink-0 mt-0.5" /> {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <span className="font-semibold text-lg">{p.price}</span>
                  <button className="inline-flex items-center gap-1 rounded-full bg-brand text-brand-foreground px-4 py-2 text-sm font-semibold hover:scale-[1.03] transition-transform">
                    Buy now <ArrowRight className="h-3.5 w-3.5" />
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