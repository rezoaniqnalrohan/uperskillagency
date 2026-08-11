import { WordPressPromo } from "@/components/site/WordPressPromo";
import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Boxes,
  Check,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Globe2,
  MessageCircle,
  Rocket,
  PenTool,
  Layers,
  LifeBuoy,
  ShoppingBag,
  Sparkles,
  Star,
  TrendingUp,
  User,
  Users,
  Zap,
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { useLang } from "@/hooks/use-language";
import sectionEcommerce from "@/assets/section-ecommerce.webp";
import sectionStock from "@/assets/section-stock.webp";
import productStock from "@/assets/product-stock.webp";
import sectionPortfolio from "@/assets/section-portfolio.webp";
import sectionWordpress from "@/assets/section-wordpress.webp";
import pluginElementor from "@/assets/plugin-elementor.webp";
import pluginWoo from "@/assets/plugin-woocommerce.webp";
import pluginRocket from "@/assets/plugin-wprocket.webp";
import pluginRankMath from "@/assets/plugin-rankmath.webp";
import pluginYoast from "@/assets/plugin-yoast.webp";
import pluginWpforms from "@/assets/plugin-wpforms.webp";
import heroPerson from "@/assets/hero-person.webp";
import workAgency from "@/assets/work-agency-website.png.asset.json";
import workEcom from "@/assets/work-ecommerce.png.asset.json";
import workCgpa from "@/assets/work-Custom-cgpa-calculator.png.asset.json";
import workMulti from "@/assets/work-Multivendor-store.png.asset.json";
import workPortfolio from "@/assets/work-basic-portfolio.png.asset.json";
import workMarket from "@/assets/work-Marketplace-ecommerce.png.asset.json";
import workErp from "@/assets/work-Agency-Management.png.asset.json";
import workPortfolioDesign from "@/assets/work-portfolio-design.png.asset.json";
import workPos from "@/assets/work-pos-system.png.asset.json";
import workStockDash from "@/assets/work-stock-dashboard.png.asset.json";

const recentProjects: { name: { bn: string; en: string }; url?: string; image: string }[] = [
  { name: { bn: "নেক্সোরা ই-কমার্স স্টোর", en: "Nexora E-Commerce Store" }, image: "/assets/work-nexora.jpg" },
  { name: { bn: "মেডস্টক ইনভেন্টরি সিস্টেম", en: "MedStock Inventory System" }, image: "/assets/work-medstock.png" },
  { name: { bn: "ফ্রেশস্টক কোল্ড-চেইন সিস্টেম", en: "FreshStock Cold-Chain" }, image: "/assets/work-freshstock.jpg" },
  { name: { bn: "ইলেক্ট্রোস্টক পিওএস সিস্টেম", en: "ElectroStock POS System" }, image: "/assets/work-electrostock.png" },
  { name: { bn: "ফুডস্টক ম্যানেজমেন্ট সিস্টেম", en: "FoodStock Management System" }, image: "/assets/work-foodstock.jpg" },
  { name: { bn: "এজেন্সি ওয়েবসাইট", en: "Agency Website" }, url: "https://agency-uperskill.lovable.app", image: workAgency.url },
  { name: { bn: "ই-কমার্স স্টোর", en: "E-commerce" }, url: "https://uperskillecommerce.lovable.app", image: workEcom.url },
  { name: { bn: "কাস্টম সিজিপিএ ক্যালকুলেটর", en: "Custom CGPA Calculator" }, url: "https://cgpacalculator-uperskill.lovable.app/", image: workCgpa.url },
  { name: { bn: "মাল্টি ভেন্ডর স্টোর", en: "Multi Vendor Store" }, url: "https://uperskill.lovable.app", image: workMulti.url },
  { name: { bn: "বেসিক পোর্টফোলিও", en: "Basic Portfolio" }, url: "https://rezoaniqbalrohan.lovable.app/", image: workPortfolio.url },
  { name: { bn: "মার্কেটপ্লেস ই-কমার্স", en: "Market Place Ecommerce" }, url: "https://marketplace-uperskill.lovable.app/", image: workMarket.url },
  { name: { bn: "এজেন্সি ম্যানেজমেন্ট", en: "Agency Management" }, url: "https://uperskillproject.lovable.app", image: workErp.url },
  { name: { bn: "পোর্টফোলিও ওয়েবসাইট", en: "Portfolio" }, image: workPortfolioDesign.url },
  { name: { bn: "পিওএস সিস্টেম", en: "POS" }, image: workPos.url },
  { name: { bn: "স্টক ম্যানেজমেন্ট সিস্টেম", en: "Stock Management System" }, image: workStockDash.url },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Uperskill Agency — Website & E-Commerce Development BD" },
      {
        name: "description",
        content:
          "Uperskill Agency builds premium e-commerce, stock management and portfolio websites, plus WordPress plugins and themes. এক নিমিষেই ডিজিটাল সমাধান — বাংলাদেশের জন্য.",
      },
      { property: "og:title", content: "Uperskill Agency — Website & E-Commerce Development BD" },
      {
        property: "og:description",
        content:
          "Uperskill Agency builds premium e-commerce, stock management and portfolio websites, plus WordPress plugins and themes. এক নিমিষেই ডিজিটাল সমাধান — বাংলাদেশের জন্য.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://uperskillagency.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://uperskillagency.lovable.app/" },
      { rel: "preload", as: "image", href: heroPerson },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Uperskill Agency",
          url: "https://uperskillagency.lovable.app/",
          inLanguage: ["bn", "en"],
        }),
      },
    ],
  }),
  component: Index,
});

const products = [
  {
    image: pluginElementor,
    tag: "Page Builder",
    name: "Elementor Pro",
    desc: "Drag-and-drop builder with 90+ Pro widgets, theme builder & popups.",
    price: "৳1,499",
  },
  {
    image: pluginWoo,
    tag: "eCommerce",
    name: "WooCommerce",
    desc: "Full online store engine — products, checkout, bKash/Nagad gateways.",
    price: "৳2,999",
  },
  {
    image: pluginRocket,
    tag: "Performance",
    name: "WP Rocket",
    desc: "Caching, lazy-load & critical CSS for 90+ Core Web Vitals scores.",
    price: "৳2,499",
  },
  {
    image: pluginRankMath,
    tag: "SEO",
    name: "Rank Math SEO Pro",
    desc: "Schema, keyword tracking & on-page analysis with Google integration.",
    price: "৳1,999",
  },
  {
    image: pluginYoast,
    tag: "SEO",
    name: "Yoast SEO Premium",
    desc: "Readability checks, internal linking suggestions & redirect manager.",
    price: "৳1,799",
  },
  {
    image: pluginWpforms,
    tag: "Forms",
    name: "WPForms Pro",
    desc: "Drag-and-drop forms — order, booking & payment forms in minutes.",
    price: "৳1,299",
  },
];

const sections = [
  {
    to: "/ecommerce",
    tag: { en: "01 · Storefront", bn: "০১ · স্টোরফ্রন্ট" },
    icon: ShoppingBag,
    title: "E-Commerce Website",
    titleBn: "ই-কমার্স ওয়েবসাইট",
    tagline: "Sell online with bKash, Nagad & COD",
    taglineBn: "বিকাশ, নগদ ও ক্যাশ অন ডেলিভারিতে বিক্রি করুন",
    desc: {
      en: "Productized stores that don't break. Three transparent plans — from a ৳3,999 managed launch to fully custom code with realtime customization.",
      bn: "সহজে চলে যাওয়া মজবুত অনলাইন স্টোর। তিনটি স্বচ্ছ প্ল্যান — ৳৩,৯৯৯ ম্যানেজড লঞ্চ থেকে শুরু করে সম্পূর্ণ কাস্টম কোড পর্যন্ত।",
    },
    bullets: [
      { en: "Basic ৳3,999 · Business ৳8,999 · Enterprise custom", bn: "বেসিক ৳৩,৯৯৯ · বিজনেস ৳৮,৯৯৯ · এন্টারপ্রাইজ কাস্টম" },
      { en: "Up to unlimited products, fully responsive", bn: "আনলিমিটেড প্রোডাক্ট, সম্পূর্ণ রেসপন্সিভ" },
      { en: "Installation & post-launch support included", bn: "ইন্সটলেশন ও লঞ্চ-পরবর্তী সাপোর্ট অন্তর্ভুক্ত" },
      { en: "Order, coupon & delivery-charge management built in", bn: "অর্ডার, কুপন ও ডেলিভারি চার্জ ম্যানেজমেন্ট বিল্ট-ইন" },
      { en: "SMS/WhatsApp order alerts + Facebook Pixel ready", bn: "এসএমএস/হোয়াটসঅ্যাপ অর্ডার অ্যালার্ট + ফেসবুক পিক্সেল রেডি" },
    ],
    image: sectionEcommerce,
  },
  {
    to: "/stock",
    tag: { en: "02 · Operations", bn: "০২ · অপারেশনস" },
    icon: Boxes,
    title: "Stock Management",
    titleBn: "স্টক ম্যানেজমেন্ট",
    tagline: "Realtime inventory, POS & reports",
    taglineBn: "রিয়েলটাইম ইনভেন্টরি, পিওএস ও রিপোর্ট",
    desc: {
      en: "Track SKUs, purchases and sales across outlets. Dashboards your ops team will actually open — with low-stock alerts on WhatsApp.",
      bn: "একাধিক আউটলেটে SKU, ক্রয় ও বিক্রয় ট্র্যাক করুন। WhatsApp-এ লো-স্টক অ্যালার্টসহ এমন ড্যাশবোর্ড যা আপনার টিম সত্যিই ব্যবহার করবে।",
    },
    bullets: [
      { en: "Basic ৳2,999 · Business ৳6,999 · Enterprise custom", bn: "বেসিক ৳২,৯৯৯ · বিজনেস ৳৬,৯৯৯ · এন্টারপ্রাইজ কাস্টম" },
      { en: "Multi-outlet, barcode & variant support", bn: "মাল্টি-আউটলেট, বারকোড ও ভ্যারিয়েন্ট সাপোর্ট" },
      { en: "Role-based accounts and offline-first POS", bn: "রোল-বেজড অ্যাকাউন্ট ও অফলাইন-ফার্স্ট POS" },
      { en: "Purchase, supplier & due-payment tracking", bn: "ক্রয়, সাপ্লায়ার ও বাকি-পেমেন্ট ট্র্যাকিং" },
      { en: "Daily profit/loss and export to Excel", bn: "দৈনিক লাভ-ক্ষতি রিপোর্ট ও এক্সেল এক্সপোর্ট" },
    ],
    image: sectionStock,
  },
  {
    to: "/portfolio",
    tag: { en: "03 · Personal Brand", bn: "০৩ · পার্সোনাল ব্র্যান্ড" },
    icon: User,
    title: "Portfolio Website",
    titleBn: "পোর্টফোলিও ওয়েবসাইট",
    tagline: "A personal brand that closes clients",
    taglineBn: "যে পার্সোনাল ব্র‍্যান্ড ক্লায়েন্ট আনে",
    desc: {
      en: "For creators, freelancers and consultants. A polished personal website with real typography craft, subtle motion and dark mode from day one.",
      bn: "ক্রিয়েটর, ফ্রিল্যান্সার ও কনসালট্যান্টদের জন্য। প্রথম দিন থেকেই সূক্ষ্ম মোশন, ডার্ক মোড ও পরিপাটি টাইপোগ্রাফিসহ পলিশড পার্সোনাল ওয়েবসাইট।",
    },
    bullets: [
      { en: "Basic ৳1,999 · Business ৳4,999 · Enterprise custom", bn: "বেসিক ৳১,৯৯৯ · বিজনেস ৳৪,৯৯৯ · এন্টারপ্রাইজ কাস্টম" },
      { en: "Case studies, blog and contact form ready", bn: "কেস স্টাডি, ব্লগ ও কন্টাক্ট ফর্ম রেডি" },
      { en: "Core Web Vitals-optimized for 3G Android", bn: "৩জি অ্যান্ড্রয়েডের জন্য Core Web Vitals অপ্টিমাইজড" },
      { en: "Custom typography, motion & light/dark themes", bn: "কাস্টম টাইপোগ্রাফি, মোশন ও লাইট/ডার্ক থিম" },
      { en: "Google-indexed SEO setup with your own domain", bn: "নিজের ডোমেইনসহ গুগল-ইনডেক্সড SEO সেটআপ" },
    ],
    image: sectionPortfolio,
  },
  {
    to: "/wordpress",
    tag: { en: "04 · WordPress", bn: "০৪ · ওয়ার্ডপ্রেস" },
    icon: Globe2,
    title: "WordPress Website",
    titleBn: "ওয়ার্ডপ্রেস ওয়েবসাইট",
    tagline: "Custom WordPress & WooCommerce builds",
    taglineBn: "কাস্টম ওয়ার্ডপ্রেস ও উকমার্স বিল্ড",
    desc: {
      en: "Full custom WordPress websites — WooCommerce, bilingual landing pages, and 1 year domain + hosting included. Everything you need to launch a premium brand.",
      bn: "সম্পূর্ণ কাস্টম ওয়ার্ডপ্রেস ওয়েবসাইট — উকমার্স, বাংলা ও ইংরেজি ল্যান্ডিং পেজ, এবং ১ বছরের ডোমেইন + হোস্টিং অন্তর্ভুক্ত।",
    },
    bullets: [
      { en: "৳9,999 · 1 Year Domain + Hosting included", bn: "৳৯,৯৯৯ · ১ বছরের ডোমেইন + হোস্টিং অন্তর্ভুক্ত" },
      { en: "Bangla + English landing pages, any kind of custom design", bn: "বাংলা + ইংরেজি ল্যান্ডিং, যেকোনো কাস্টম ডিজাইন" },
      { en: "WooCommerce, bKash · Nagad · COD, all features included", bn: "উকমার্স, বিকাশ · নগদ · COD, সব ফিচার অন্তর্ভুক্ত" },
      { en: "Premium plugins, themes & security hardening", bn: "প্রিমিয়াম প্লাগইন, থিম ও সিকিউরিটি হার্ডেনিং" },
      { en: "Free training + 30 days after-sales support", bn: "ফ্রি ট্রেনিং + ৩০ দিনের আফটার-সেলস সাপোর্ট" },
    ],
    image: sectionWordpress,
  },
];

const stats = [
  { value: "200+", label: "Businesses launched", labelBn: "চালু হওয়া ব্যবসা" },
  { value: "4.9/5", label: "Average client rating", labelBn: "গড় ক্লায়েন্ট রেটিং" },
  { value: "48h", label: "Avg. first draft", labelBn: "প্রথম ড্রাফট সময়" },
  { value: "100%", label: "On time delivery", labelBn: "অন টাইম ডেলিভারি" },
];

const process = [
  {
    icon: MessageCircle,
    title: "Discovery call",
    titleBn: "ডিসকভারি কল",
    desc: "A 20-minute call in Bengali or English to scope your project.",
  },
  {
    icon: PenTool,
    title: "Design sprint",
    titleBn: "ডিজাইন স্প্রিন্ট",
    desc: "Wireframes, brand tokens and Figma preview inside a week.",
  },
  {
    icon: Layers,
    title: "Build & QA",
    titleBn: "বিল্ড ও কিউএ",
    desc: "Hand-crafted code, tested on real Android devices on 3G.",
  },
  {
    icon: Rocket,
    title: "Launch & grow",
    titleBn: "লঞ্চ ও গ্রোথ",
    desc: "We ship, migrate and support on WhatsApp — no ghosting.",
  },
];

const testimonials = [
  {
    quote:
      "Uperskill Agency rebuilt our storefront and stock system in 3 weeks. Sales up 42% and my staff finally love the dashboard.",
    quoteBn: "মাত্র ৩ সপ্তাহে আমাদের দোকান ও স্টক সিস্টেম দাঁড় করিয়ে দিয়েছে Uperskill Agency।",
    name: "Rifat Hossain",
    role: "Founder, Dhaka Threads",
  },
  {
    quote:
      "The most professional Bangladeshi studio I've worked with. Clean code, real design system, replies within hours.",
    quoteBn: "বাংলাদেশে এত প্রফেশনাল টিম আগে দেখিনি — কোড, ডিজাইন ও সাপোর্ট সব ফার্স্ট ক্লাস।",
    name: "Nusrat Jahan",
    role: "Creative Director, Studio Neel",
  },
  {
    quote:
      "Our portfolio site from Uperskill Agency loads instantly on cheap Android phones. That alone doubled our leads.",
    quoteBn: "সস্তা অ্যান্ড্রয়েডেও সাইট চোখের পলকে খোলে — লিড দ্বিগুণ হয়ে গেছে।",
    name: "Tanvir Rahman",
    role: "Freelance Consultant",
  },
];

const faqs = [
  {
    q: "Do you work with Bangladeshi payment gateways?",
    qBn: "আপনারা কি বাংলাদেশি পেমেন্ট গেটওয়ে সাপোর্ট করেন?",
    a: "Yes — bKash, Nagad, Rocket, SSLCommerz and Cash on Delivery come pre-wired on every Uperskill Agency store.",
  },
  {
    q: "How long does a full website take?",
    qBn: "একটি ফুল ওয়েবসাইট বানাতে কতদিন লাগে?",
    a: "Most Basic and Business plans go live in 1–3 weeks. Enterprise builds are scoped after a discovery call.",
  },
  {
    q: "Can you write content in Bangla?",
    qBn: "আপনারা কি বাংলায় কনটেন্ট লিখতে পারবেন?",
    a: "Absolutely. Our team writes, designs and supports fully in Bengali using our custom Shiri (Hind Siliguri) type system.",
  },
  {
    q: "What happens after launch?",
    qBn: "লঞ্চের পর কী হবে?",
    a: "You get a named account manager on WhatsApp, monthly Core Web Vitals reports and priority bug fixes.",
  },
];

function Index() {
  return IndexBody();
}

function FloatChip({
  className = "",
  icon,
  title,
  sub,
}: {
  className?: string;
  icon: ReactNode;
  title: string;
  sub: string;
}) {
  return (
    <div
      className={
        "flex items-center gap-2.5 rounded-2xl border border-border bg-card px-3.5 py-2.5 shadow-card-3d animate-float " +
        className
      }
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-soft">
        {icon}
      </span>
      <span className="leading-tight">
        <span className="block text-[13px] font-semibold text-foreground">{title}</span>
        <span className="block font-shiri text-[11px] text-muted-foreground">{sub}</span>
      </span>
    </div>
  );
}

function IndexBody() {
  const { t, lang } = useLang();
  const bn = lang === "bn";
  const shiri = (extra = "") => (bn ? "font-shiri " : "") + extra;
  return (
    <div className="min-h-screen">
      <Nav />

      {/* Hero — VYBE-style split headline + inner blue card, person overlapping */}
      <section className="relative isolate overflow-hidden bg-background text-foreground pt-6 pb-10">
        <div className="reveal relative mx-auto w-[96%] max-w-[1600px] rounded-[40px] bg-white shadow-[0_25px_60px_-20px_rgba(15,82,255,0.18)] ring-1 ring-black/5">
          {/* Split headline row — person centered between */}
          <div className="relative pt-10 md:pt-14 px-6 md:px-14">
            <div className="grid grid-cols-2 items-center gap-4 md:gap-6">
              <h1 className={"font-display text-4xl md:text-6xl lg:text-[84px] font-extrabold leading-[0.95] tracking-tight text-neutral-900 " + (bn ? "font-shiri" : "")}>
                <span className="block text-2xl md:text-4xl lg:text-5xl font-semibold italic text-neutral-800">{t("তৈরি করুন", "Own the")}</span>
                <span className="block">{t("ব্র্যান্ড", "EDGE")}</span>
                <span className="mt-2 block h-1.5 w-24 rounded-full bg-[#0F52FF]/70" />
              </h1>
              <h1 className={"text-right font-display text-4xl md:text-6xl lg:text-[84px] font-extrabold leading-[0.95] tracking-tight text-neutral-900 " + (bn ? "font-shiri" : "")}>
                <span className="block text-2xl md:text-4xl lg:text-5xl font-semibold italic text-neutral-800">{t("সেলসে আনুন", "Keep the")}</span>
                <span className="block text-[#0F52FF]">{t("গতি", "VIBE")}</span>
              </h1>
            </div>

            {/* Mobile-only person — normal flow so it has a proper place */}
            <div className="md:hidden mt-6 flex justify-center">
              <img
                src={heroPerson}
                alt="Uperskill Agency Founders"
                width={928}
                height={1152}
                fetchPriority="high"
                decoding="async"
                className="h-64 w-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.25)]"
              />
            </div>
          </div>

          {/* Inner blue card + right column of features/product */}
          <div className="relative mt-6 px-4 md:px-6 pb-6">
            <div
              className="relative rounded-[32px] p-6 md:p-10 min-h-[420px] md:min-h-[460px]"
              style={{ background: "linear-gradient(135deg,#0F52FF 0%,#2563EB 45%,#3B82F6 100%)" }}
            >
              {/* Soft blobs — clipped to the card */}
              <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-[32px]">
                <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
                <div className="absolute right-10 -bottom-20 h-80 w-80 rounded-full bg-[#93C5FD]/40 blur-3xl" />
              </div>

              <div className="relative grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4">
                {/* LEFT copy */}
                <div className="md:col-span-5 text-white">
                  <p className={"text-[11px] font-semibold uppercase tracking-[0.22em] text-white/85 " + (bn ? "font-shiri" : "")}>
                    {t("New Arrivals", "New Arrivals")}
                  </p>
                  <h2 className={"mt-3 font-display text-2xl md:text-3xl lg:text-[32px] font-bold leading-tight " + (bn ? "font-shiri" : "")}>
                    {t("প্রিমিয়াম ওয়েবসাইট তৈরি করে", "Where Craft Meets")}<br />
                    {t("সেলস বাড়ান ১০গুণ", "your Brand")}
                  </h2>
                  <p className={"mt-3 max-w-sm text-sm text-white/85 " + (bn ? "font-shiri" : "")}>
                    {t("কাস্টম ওয়েবসাইট আপনার সেলস বাড়াবে কয়েক গুণ।", "Custom websites will boost your sales manifold.")}
                  </p>
                  <a
                    href="#services"
                    className="group mt-6 inline-flex items-center justify-between gap-4 rounded-full bg-[#EF4444] hover:bg-[#DC2626] px-8 py-3.5 text-base md:text-lg font-bold text-white shadow-[0_15px_30px_-10px_rgba(239,68,68,0.5)] transition-all hover:-translate-y-0.5 w-full sm:w-auto"
                  >
                    <span className={bn ? "font-shiri" : ""}>{t("এখনই শুরু", "Get Started")}</span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#EF4444] transition-transform group-hover:translate-x-1">
                      <ArrowRight className="h-5 w-5" />
                    </span>
                  </a>

                  {/* Feature bullets */}
                  <ul className="mt-6 grid gap-2">
                    {[
                      { icon: Check, label: t("বিকাশ, নগদ ও COD সাপোর্ট", "bKash, Nagad & COD ready") },
                      { icon: Zap, label: t("3G Android support", "3G Android support") },
                      { icon: LifeBuoy, label: t("২৪/৭ হোয়াটসঅ্যাপ সাপোর্ট", "24/7 WhatsApp support") },
                      { icon: Sparkles, label: t("বাংলা-ইংরেজি দ্বিভাষিক ডিজাইন", "Bilingual Bangla-English design") },
                    ].map((f, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-[13px] text-white/95">
                        <span className="grid h-6 w-6 flex-none place-items-center rounded-full bg-white/15 ring-1 ring-white/25">
                          <f.icon className="h-3.5 w-3.5" />
                        </span>
                        <span className={bn ? "font-shiri" : ""}>{f.label}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Mini stats */}
                  <div className="mt-5 grid grid-cols-3 gap-2 max-w-sm">
                    {[
                      { v: "114+", l: t("প্রজেক্ট", "Projects") },
                      { v: "4.9★", l: t("রেটিং", "Rating") },
                      { v: "48h", l: t("ডেলিভারি", "First draft") },
                    ].map((s, i) => (
                      <div key={i} className="rounded-xl bg-white/10 backdrop-blur px-2 py-2 text-center ring-1 ring-white/15">
                        <div className="font-display text-base font-extrabold text-white leading-none">{s.v}</div>
                        <div className={"mt-1 text-[9px] uppercase tracking-widest text-white/75 " + (bn ? "font-shiri" : "")}>{s.l}</div>
                      </div>
                    ))}
                  </div>

                  {/* Rating pill */}
                  <div className="mt-5 inline-flex items-center gap-3 rounded-2xl bg-white/15 backdrop-blur px-3 py-2 ring-1 ring-white/20">
                    <div className="flex -space-x-2">
                      {["#F87171","#F472B6","#A78BFA","#34D399"].map((c, i) => (
                        <span key={i} className="h-8 w-8 rounded-full ring-2 ring-white/80 grid place-items-center text-[10px] font-bold text-white" style={{ background: c }}>{"AKMS"[i]}</span>
                      ))}
                    </div>
                    <div className={"text-[11px] leading-tight text-white " + (bn ? "font-shiri" : "")}>
                      <div className="flex gap-0.5 text-amber-300">
                        {[0,1,2,3,4].map(i => <Star key={i} className="h-3 w-3 fill-current" />)}
                      </div>
                      <div className="mt-0.5 opacity-90">{t("৫০০০+ ক্লায়েন্ট রেটিং", "Rated 5 Stars by 5,000+")}</div>
                    </div>
                  </div>
                </div>

                {/* Spacer for the person to occupy */}
                <div className="hidden md:block md:col-span-3" />

                {/* RIGHT — product */}
                <div className="md:col-span-4 text-white">
                  <div className="rounded-3xl bg-white p-4 ring-1 ring-black/5 shadow-[0_25px_50px_-20px_rgba(0,0,0,0.35)]">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-400">
                      {t("ফিচার্ড প্রোডাক্ট", "Featured Product")}
                    </p>
                    <div className="mt-2 overflow-hidden rounded-2xl">
                      <img
                        src={workEcom.url}
                        alt="E-Commerce & Agency Store Dashboard"
                        width={1920}
                        height={1080}
                        loading="lazy"
                        className="aspect-square w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                      />
                    </div>
                    <div className={"mt-3 text-sm font-bold text-neutral-900 " + (bn ? "font-shiri" : "")}>
                      {t("ই-কমার্স ও এজেন্সি সাইট", "E-Commerce & Agency Store")}
                    </div>
                    <div className={"text-[11px] text-neutral-500 " + (bn ? "font-shiri" : "")}>
                      {t("উকমার্স, বিকাশ, নগদ ও পেমেন্ট গেটওয়ে সহ।", "WooCommerce, bKash & payment checkout ready.")}
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <button className="grid h-9 w-9 place-items-center rounded-full bg-[#0F52FF] text-white shadow hover:-translate-y-0.5 transition-transform">
                        <ShoppingBag className="h-4 w-4" />
                      </button>
                      <span className="text-base font-extrabold text-neutral-900">৳4,999</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Person — desktop only, overlaps the blue card */}
            <img
              src={heroPerson}
              alt="Uperskill Agency Founders"
              width={928}
              height={1152}
              fetchPriority="high"
              decoding="async"
              className="hidden md:block pointer-events-none absolute left-1/2 bottom-6 -translate-x-1/2 h-[125%] w-auto object-contain object-bottom drop-shadow-[0_30px_40px_rgba(0,0,0,0.35)] z-20"
            />
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-8 mx-auto w-[96%] max-w-[1600px] rounded-2xl border border-border bg-card/60 backdrop-blur">
          <div className="mx-auto flex flex-wrap items-center justify-between gap-x-8 gap-y-3 px-6 py-4 text-xs text-muted-foreground">
            <span className="font-semibold uppercase tracking-widest text-foreground/70">
              {t("বিশ্বস্ত স্ট্যাক", "Trusted stack")}
            </span>
            <span>WordPress</span>
            <span>WooCommerce</span>
            <span>React</span>
            <span>Laravel</span>
            <span>bKash</span>
            <span>Nagad</span>
            <span>SSLCommerz</span>
            <span className={shiri("text-foreground/70")}>{t("২০০+ ব্যবসা লঞ্চ", "200+ businesses launched")}</span>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto grid max-w-[1500px] grid-cols-2 gap-px overflow-hidden md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-background px-6 py-10 text-center">
              <div className="font-display text-4xl md:text-5xl font-medium text-gradient">
                {s.value}
              </div>
              <div className={"mt-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground " + (bn ? "font-shiri" : "")}>
                {t(s.labelBn, s.label)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WordPress interactive ad */}
      <div id="services">
        <WordPressPromo />
      </div>

      {/* Three dedicated sections */}
      {sections.map((s, i) => {
        const flipped = i % 2 === 1;
        return (
          <section
            key={s.to}
            className="mx-auto max-w-[1500px] px-6 py-16 border-t border-border first:border-t-0"
          >
            <div
              className={
                "grid lg:grid-cols-2 gap-12 items-center " +
                (flipped ? "lg:[&>*:first-child]:order-2" : "")
              }
            >
              <div className="reveal">
                <span className={"text-xs font-medium tracking-widest uppercase text-muted-foreground " + (bn ? "font-shiri" : "")}>
                  {t(s.tag.bn, s.tag.en)}
                </span>
                <h3 className={"mt-3 text-4xl md:text-5xl font-medium tracking-tight " + (bn ? "font-shiri" : "font-display")}>
                  {t(s.titleBn, s.title)}
                </h3>
                <p className={"mt-3 text-accent font-medium " + (bn ? "font-shiri" : "")}>{t(s.taglineBn, s.tagline)}</p>
                <p className={"mt-5 text-muted-foreground max-w-lg " + (bn ? "font-shiri" : "")}>{t(s.desc.bn, s.desc.en)}</p>
                <ul className="mt-6 space-y-3">
                  {s.bullets.map((b) => (
                    <li key={b.en} className={"flex items-start gap-2 text-sm " + (bn ? "font-shiri" : "")}>
                      <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>{t(b.bn, b.en)}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to={s.to}
                    className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-semibold transition-transform hover:scale-105"
                  >
                    <span className={bn ? "font-shiri" : ""}>{t("দেখুন " + s.titleBn, "View " + s.title)}</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                  </Link>
                  <Link
                    to={s.to}
                    hash="pricing"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-secondary transition-colors"
                  >
                    <span className={bn ? "font-shiri" : ""}>{t("প্ল্যান দেখুন", "See plans")}</span>
                  </Link>
                </div>
              </div>
              <Link to={s.to} className="group relative block reveal [animation-delay:150ms]">
                <div className="absolute -inset-4 bg-gradient-primary opacity-10 blur-2xl rounded-3xl group-hover:opacity-30 transition-opacity" />
                <div className="relative overflow-hidden rounded-3xl border border-border shadow-card-3d bg-card">
                  <img
                    src={s.image}
                    alt={`${s.title} preview`}
                    width={1400}
                    height={1000}
                    loading="lazy"
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-background/80 backdrop-blur border border-border px-3 py-1.5 text-xs font-medium">
                    <s.icon className="h-3.5 w-3.5" />
                    <span className={bn ? "font-shiri" : ""}>{t(s.titleBn, s.title)}</span>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        );
      })}

      {/* Recent Projects */}
      <section id="work" className="mx-auto max-w-[1500px] px-6 py-24 border-t border-border">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <p className={"text-sm font-medium text-accent " + (bn ? "font-shiri" : "")}>{t("সাম্প্রতিক কাজ", "Recent Work")}</p>
            <h2 className={"mt-2 text-4xl md:text-5xl font-medium tracking-tight " + (bn ? "font-shiri" : "font-display")}>
              {bn ? (<>আমাদের তৈরি <em className="not-italic text-gradient">সাম্প্রতিক প্রজেক্ট</em>।</>) : (<>Projects we <em className="not-italic text-gradient">recently shipped</em>.</>)}
            </h2>
          </div>
          <p className={"max-w-md text-muted-foreground " + (bn ? "font-shiri" : "")}>
            {t(
              "Uperskill Agency-র লাইভ প্রজেক্টগুলো দেখুন — এজেন্সি সাইট, ই-কমার্স, মার্কেটপ্লেস, ERP ও পোর্টফোলিও।",
              "Live projects built by Uperskill Agency — agency sites, e-commerce, marketplaces, ERP dashboards and portfolios."
            )}
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recentProjects.map((p, i) => {
            const Tag = p.url ? "a" : "div";
            return (
            <Tag
              key={p.name.en}
              {...(p.url ? { href: p.url, target: "_blank", rel: "noopener noreferrer" } : {})}
              data-reveal
              style={{ transitionDelay: `${i * 60}ms` }}
              className="card-3d group relative rounded-2xl border border-border bg-card overflow-hidden block"
            >
              <div className="aspect-[16/10] overflow-hidden bg-secondary">
                <img
                  src={p.image}
                  alt={`${p.name.en} — Uperskill Agency project screenshot`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between gap-4 p-6">
                <div>
                  <h3 className={"text-lg font-semibold " + (bn ? "font-shiri" : "")}>{bn ? p.name.bn : p.name.en}</h3>
                  <p className="mt-1 text-xs text-muted-foreground break-all">
                    {p.url ? p.url.replace(/^https?:\/\//, "").replace(/\/$/, "") : t("কেস স্টাডি", "Case study")}
                  </p>
                </div>
                {p.url ? (
                  <span className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <ArrowRight className="h-4 w-4 -rotate-45" />
                  </span>
                ) : null}
              </div>
            </Tag>
            );
          })}
        </div>
      </section>

      {/* Products */}
      <section id="products" className="mx-auto max-w-[1500px] px-6 py-24 border-t border-border">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <p className={"text-sm font-medium text-accent " + (bn ? "font-shiri" : "")}>{t("প্লাগইন ও থিম", "Plugins & Themes")}</p>
            <h2 className={"mt-2 text-4xl md:text-5xl font-medium tracking-tight " + (bn ? "font-shiri" : "font-display")}>
              {bn ? (<>রেডিমেড, <em className="not-italic text-gradient">বাংলাদেশের জন্য।</em></>) : (<>Ready-made, <em className="not-italic text-gradient">built for BD.</em></>)}
            </h2>
          </div>
          <p className={"max-w-md text-muted-foreground " + (bn ? "font-shiri" : "")}>
            {t(
              "Uperskill Agency-র ওয়ার্ডপ্রেস টুলকিট দিয়ে দ্রুত লঞ্চ করুন — পেমেন্ট গেটওয়ে, পারফরম্যান্স ও বাংলা টাইপোগ্রাফি অন্তর্ভুক্ত।",
              "Ship faster with the Uperskill Agency WordPress toolkit — payment gateways, performance and Bengali typography included."
            )}
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.name}
              className="card-3d group relative rounded-2xl border border-border bg-card overflow-hidden"
            >
              <div className="aspect-square overflow-hidden bg-secondary">
                <img
                  src={p.image}
                  alt={p.name}
                  width={900}
                  height={900}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground">
                    {p.tag}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Star className="h-3 w-3 fill-current text-accent" />
                    4.9
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-semibold">{p.name}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="font-semibold">{p.price}</span>
                  <button className={"inline-flex items-center gap-1 text-sm font-semibold hover:text-accent transition-colors " + (bn ? "font-shiri" : "")}>
                    {t("কার্টে যোগ করুন", "Add to cart")} <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-[1500px] px-6 py-24 border-t border-border">
        <div className="max-w-2xl">
          <p className={"text-sm font-medium text-accent " + (bn ? "font-shiri" : "")}>{t("কাজের ধাপ", "Our Process")}</p>
          <h2 className={"mt-2 text-4xl md:text-5xl font-medium tracking-tight " + (bn ? "font-shiri" : "font-display")}>
            {bn ? (<>আইডিয়া থেকে <em className="not-italic text-gradient">লঞ্চ মাত্র কয়েক সপ্তাহে</em>।</>) : (<>From idea to <em className="not-italic text-gradient">live in weeks</em>.</>)}
          </h2>
        </div>
        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <li
              key={p.title}
              className="card-3d relative rounded-2xl border border-border bg-card p-6"
            >
              <span className={"absolute -top-4 left-6 rounded-full bg-foreground px-3 py-1 text-xs font-medium text-background " + (bn ? "font-shiri" : "font-display")}>
                {t("ধাপ", "Step")} {String(i + 1).padStart(2, "0")}
              </span>
              <div className="mt-2 h-10 w-10 rounded-lg bg-secondary grid place-items-center">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className={"mt-5 text-xl font-medium " + (bn ? "font-shiri" : "font-display")}>{t(p.titleBn, p.title)}</h3>
              <p className={"mt-2 text-sm text-muted-foreground " + (bn ? "font-shiri" : "")}>{p.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Client Reviews — main, Bangla-first */}
      <section id="reviews" className="relative overflow-hidden border-t border-border bg-brand-soft">
        <div className="mx-auto max-w-[1500px] px-6 py-28">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              {t("ক্লায়েন্ট রিভিউ", "Client Reviews")}
            </p>
            <h2 className={"mt-3 text-5xl md:text-6xl font-semibold tracking-tight text-foreground leading-[1.1] " + (bn ? "font-shiri" : "font-display")}>
              {bn ? (<>বাংলাদেশের উদ্যোক্তাদের <span className="text-brand">ভরসার নাম</span></>) : (<>Trusted by <span className="text-brand">Bangladeshi founders</span></>)}
            </h2>
            <p className={"mt-4 text-lg text-muted-foreground " + (bn ? "font-shiri" : "")}>
              {t(
                "ঢাকা, চট্টগ্রাম, সিলেট ও সারা বাংলাদেশের Uperskill Agency ক্লায়েন্টদের বাস্তব রিভিউ।",
                "Real reviews from Uperskill Agency clients — Dhaka, Chattogram, Sylhet & beyond."
              )}
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="card-3d flex flex-col rounded-3xl border border-border bg-card p-8"
              >
                <div className="flex gap-0.5 text-brand">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <blockquote className={"mt-5 text-2xl font-medium leading-[1.45] text-foreground " + (bn ? "font-shiri" : "font-display italic")}>
                  “{bn ? t.quoteBn : t.quote}”
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3 pt-5 border-t border-border">
                  <div className="h-11 w-11 rounded-full bg-brand grid place-items-center text-base font-semibold text-brand-foreground">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Extra features */}
      <section className="mx-auto max-w-[1500px] px-6 py-24 border-t border-border">
        <div className="max-w-2xl">
          <p className={"text-sm font-medium text-brand " + (bn ? "font-shiri" : "")}>{t("আরও যা পাবেন", "More Features")}</p>
          <h2 className={"mt-2 text-4xl md:text-5xl font-semibold tracking-tight " + (bn ? "font-shiri" : "font-display")}>
            {bn ? (<>শুধু ওয়েবসাইট নয়, <span className="text-brand">সম্পূর্ণ সিস্টেম</span></>) : (<>More than a website — <span className="text-brand">a complete system</span></>)}
          </h2>
          <p className={"mt-3 text-lg text-muted-foreground " + (bn ? "font-shiri" : "")}>
            {t(
              "আপনার ডিজিটাল ব্যবসা লঞ্চ, গ্রো এবং সাপোর্ট করার জন্য যা যা দরকার।",
              "Everything you need to launch, grow and support your digital business."
            )}
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Sparkles, bn: "SEO অপটিমাইজেশন", en: "On-page SEO, schema markup and Core Web Vitals tuning included by default." },
            { icon: Zap, bn: "লাইটনিং-ফাস্ট হোস্টিং", en: "Managed hosting on edge networks with 99.9% uptime monitoring." },
            { icon: LifeBuoy, bn: "২৪/৭ হোয়াটসঅ্যাপ সাপোর্ট", en: "Real humans on WhatsApp — reply within hours, not days." },
            { icon: ShoppingBag, bn: "পেমেন্ট গেটওয়ে সেটআপ", en: "bKash, Nagad, Rocket, SSLCommerz & Cash on Delivery pre-wired." },
            { icon: Layers, bn: "মাল্টি-ল্যাঙ্গুয়েজ সাইট", en: "Bilingual Bangla/English with proper Shiri typography rendering." },
            { icon: Rocket, bn: "ফ্রি ডোমেইন + SSL", en: "First-year domain + SSL certificate on every Business plan." },
          ].map((f) => {
            const enTitle = f.bn.includes("SEO") ? "SEO Optimization"
              : f.bn.includes("লাইটনিং") ? "Lightning-Fast Hosting"
              : f.bn.includes("হোয়াটসঅ্যাপ") ? "24/7 WhatsApp Support"
              : f.bn.includes("পেমেন্ট") ? "Payment Gateway Setup"
              : f.bn.includes("মাল্টি") ? "Multi-language Site"
              : "Free Domain + SSL";
            return (
            <div key={f.bn} className="rounded-2xl border border-border bg-card p-6 card-3d">
              <div className="h-11 w-11 rounded-xl bg-brand-soft grid place-items-center">
                <f.icon className="h-5 w-5 text-brand" />
              </div>
              <h3 className={"mt-5 text-xl font-semibold " + (bn ? "font-shiri" : "font-display")}>{t(f.bn, enTitle)}</h3>
              <p className={"mt-1.5 text-sm text-muted-foreground leading-relaxed " + (bn ? "font-shiri" : "")}>{f.en}</p>
            </div>
            );
          })}
        </div>
      </section>

      {/* Why us */}
      <section className="mx-auto max-w-[1500px] px-6 py-24 border-t border-border">
        <div className="text-center max-w-2xl mx-auto">
          <p className={"text-sm font-medium text-accent " + (bn ? "font-shiri" : "")}>{t("কেন Uperskill Agency", "Why Uperskill Agency")}</p>
          <h2 className={"mt-2 text-4xl md:text-5xl font-medium tracking-tight " + (bn ? "font-shiri" : "font-display")}>
            {bn ? (<>ফ্রিল্যান্স বাজেটে, <em className="not-italic text-gradient">স্টুডিও-লেভেল কাজ।</em></>) : (<>Freelance prices, <em className="not-italic text-gradient">studio craft.</em></>)}
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            { icon: Sparkles, title: "Designed like a product", titleBn: "প্রোডাক্টের মতো ডিজাইন", desc: "Real design system from Uperskill Agency — not a rushed template." },
            { icon: Zap, title: "Fast on Android + 3G", titleBn: "৩জি অ্যান্ড্রয়েডেও দ্রুত", desc: "Core Web Vitals-first, tested where your customers browse." },
            { icon: LifeBuoy, title: "We don't disappear", titleBn: "আমরা হারিয়ে যাই না", desc: "Named Uperskill Agency team + real post-launch support on WhatsApp." },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border border-border bg-card p-6 card-3d">
              <div className="h-10 w-10 rounded-lg bg-secondary grid place-items-center">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className={"mt-5 text-xl font-medium " + (bn ? "font-shiri" : "font-display")}>{t(f.titleBn, f.title)}</h3>
              <p className={"mt-1.5 text-sm text-muted-foreground " + (bn ? "font-shiri" : "")}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-6 py-24 border-t border-border">
        <div className="text-center max-w-2xl mx-auto">
          <p className={"text-sm font-medium text-accent " + (bn ? "font-shiri" : "")}>{t("প্রশ্নোত্তর", "FAQ")}</p>
          <h2 className={"mt-2 text-4xl md:text-5xl font-medium tracking-tight " + (bn ? "font-shiri" : "font-display")}>
            {bn ? (<>যা যা <em className="not-italic text-gradient">জানতে চান</em>।</>) : (<>Everything you might <em className="not-italic text-gradient">wonder</em>.</>)}
          </h2>
        </div>
        <div className="mt-12 divide-y divide-border rounded-2xl border border-border bg-card">
          {faqs.map((f, i) => (
            <details key={i} className="group p-6 open:bg-secondary/40 transition-colors">
              <summary className="flex cursor-pointer items-start justify-between gap-6 list-none">
                <div>
                  <h3 className={"text-lg md:text-xl font-medium " + (bn ? "font-shiri" : "font-display")}>{t(f.qBn, f.q)}</h3>
                </div>
                <span className="mt-1 text-accent transition-transform group-open:rotate-45">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </summary>
              <p className={"mt-4 text-sm text-muted-foreground leading-relaxed " + (bn ? "font-shiri" : "")}>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1500px] px-6 py-24">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-soft p-12 md:p-16 text-center">
          <p className="text-sm font-medium text-accent">Uperskill Agency</p>
          <h2 className={"mt-3 text-4xl md:text-6xl font-medium tracking-tight " + (bn ? "font-shiri" : "font-display")}>
            {bn ? (<>শুরু করতে <em className="not-italic text-gradient">প্রস্তুত</em>?</>) : (<>Ready to <em className="not-italic text-gradient">launch</em>?</>)}
          </h2>
          <p className={"mt-5 text-muted-foreground max-w-xl mx-auto " + (bn ? "font-shiri" : "")}>
            {t(
              "WhatsApp বা Facebook-এ মেসেজ দিন। আমরা বাংলা বা ইংরেজিতে উত্তর দিই — এবং পেমেন্টের পর হারিয়ে যাই না।",
              "Message us on WhatsApp or Facebook. We reply in Bengali or English — and Uperskill Agency doesn't disappear after payment."
            )}
          </p>
          <a
            href="#contact"
            className={"mt-8 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-8 py-4 text-base font-semibold transition-transform hover:scale-105 " + (bn ? "font-shiri" : "")}
          >
            {t("প্রজেক্ট শুরু করুন", "Start a project")} <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
