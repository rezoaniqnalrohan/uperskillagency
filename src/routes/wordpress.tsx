import { createFileRoute } from "@tanstack/react-router";
import { Globe2, ShieldCheck, Smartphone, PenTool, Rocket, LifeBuoy, Layers, Zap } from "lucide-react";
import { ServiceLanding } from "@/components/site/ServiceLanding";
import { useLang } from "@/hooks/use-language";
import heroWordpress from "@/assets/hero-wordpress.webp";
import wpShotStore from "@/assets/wp-shot-store.webp";
import wpShotAdmin from "@/assets/wp-shot-admin.webp";
import wpShotBuilder from "@/assets/wp-shot-builder.webp";
import wpDemoFashion from "@/assets/wp-demo-fashion.webp";
import wpDemoElectronics from "@/assets/wp-demo-electronics.webp";
import wpDemoFurniture from "@/assets/wp-demo-furniture.webp";
import wpDemoCosmetics from "@/assets/wp-demo-cosmetics.webp";
import wpDemoGrocery from "@/assets/wp-demo-grocery.webp";
import wpDemoJewellery from "@/assets/wp-demo-jewellery.webp";

function WpTitle() {
  const { lang } = useLang();
  if (lang === "bn") {
    return (
      <>
        ওয়ার্ডপ্রেস ওয়েবসাইট <span className="text-gradient">প্রিমিয়াম মানে তৈরি।</span>
      </>
    );
  }
  return (
    <>
      WordPress websites <span className="text-gradient">built the premium way.</span>
    </>
  );
}

export const Route = createFileRoute("/wordpress")({
  head: () => ({
    meta: [
      { title: "WordPress Website Development — Uperskill Agency" },
      {
        name: "description",
        content:
          "Custom WordPress & WooCommerce websites for Bangladesh. 1 year domain + hosting, full custom landing pages in Bangla & English — starting at ৳9,999.",
      },
      { property: "og:title", content: "WordPress Website Development — Uperskill Agency" },
      {
        property: "og:description",
        content:
          "Custom WordPress & WooCommerce builds with 1 year domain + hosting included. Bangla + English landing pages, from ৳9,999.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://uperskillagency.lovable.app/wordpress" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://uperskillagency.lovable.app/wordpress" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "WordPress Website Development",
          provider: { "@type": "Organization", name: "Uperskill Agency" },
          areaServed: "BD",
          url: "https://uperskillagency.lovable.app/wordpress",
          offers: { "@type": "Offer", price: "9999", priceCurrency: "BDT" },
        }),
      },
    ],
  }),
  component: () => (
    <ServiceLanding
      eyebrow={{ bn: "ওয়ার্ডপ্রেস ওয়েবসাইট 🌐", en: "WordPress Website 🌐" }}
      title={<WpTitle />}
      subtitle={{
        bn: "সম্পূর্ণ কাস্টম ওয়ার্ডপ্রেস ও WooCommerce ওয়েবসাইট — বাংলা ও ইংরেজি ল্যান্ডিং পেজ, ১ বছর ডোমেইন + হোস্টিং, এবং লঞ্চ ও সেল করার জন্য সব ফিচার।",
        en: "Fully custom WordPress & WooCommerce websites — Bangla & English landing pages, 1 year domain + hosting, and every feature you need to launch and sell.",
      }}
      heroImage={heroWordpress}
      heroTheme="wordpress"
      heroImageAlt="Animated WordPress dashboard preview"
      stats={[
        { value: "150+", label: { bn: "ডেলিভার্ড ওয়ার্ডপ্রেস সাইট", en: "WP Sites Delivered" } },
        { value: "1 Yr", label: { bn: "ডোমেইন + হোস্টিং", en: "Domain + Hosting" } },
        { value: "7 Days", label: { bn: "গড় লঞ্চ টাইম", en: "Avg. Launch" } },
        { value: "4.9★", label: { bn: "ক্লায়েন্ট রেটিং", en: "Client Rating" } },
      ]}
      features={[
        {
          icon: Globe2,
          title: { bn: "বাংলা + ইংরেজি রেডি", en: "Bangla + English ready" },
          desc: { bn: "বাংলাদেশি অডিয়েন্সের জন্য বাইলিঙ্গুয়াল ল্যান্ডিং পেজ — শিরি বাংলা + হেলভেটিকা ইংরেজি টাইপোগ্রাফি।", en: "Bilingual landing pages tuned for Bangladeshi audiences — Shiri Bangla + Helvetica English typography." },
        },
        {
          icon: Layers,
          title: { bn: "WooCommerce বা কাস্টম", en: "WooCommerce or custom" },
          desc: { bn: "বিকাশ · নগদ · COD সহ ফুল ই-কমার্স, অথবা Elementor / Bricks দিয়ে কাস্টম মার্কেটিং সাইট।", en: "Full e-commerce with bKash · Nagad · COD, or a bespoke marketing site with Elementor / Bricks." },
        },
        {
          icon: Smartphone,
          title: { bn: "সবসময় মোবাইল-ফার্স্ট", en: "Mobile-first, always" },
          desc: { bn: "সস্তা অ্যান্ড্রয়েড ফোনেও পিক্সেল-পারফেক্ট — যেখানে ৯০% কাস্টমার ব্রাউজ করে।", en: "Pixel-perfect on cheap Android phones — where 90% of your customers actually browse." },
        },
        {
          icon: ShieldCheck,
          title: { bn: "সিকিউর ও ব্যাকআপ", en: "Secure & backed-up" },
          desc: { bn: "প্রথম দিন থেকেই SSL, ম্যালওয়্যার প্রোটেকশন ও অটোমেটেড ব্যাকআপ কনফিগার করা।", en: "SSL, malware protection and automated backups configured on day one." },
        },
        {
          icon: Zap,
          title: { bn: "স্পিড অপ্টিমাইজড", en: "Speed-optimized" },
          desc: { bn: "3G-তেও Core Web Vitals পাস — ক্যাশিং, ইমেজ CDN ও লেজি-লোডিং টিউনড।", en: "Core Web Vitals passing on 3G — caching, image CDN and lazy-loading dialed in." },
        },
        {
          icon: LifeBuoy,
          title: { bn: "৩০ দিন ফ্রি সাপোর্ট", en: "30-day free support" },
          desc: { bn: "লঞ্চের পর WhatsApp-এ রিয়েল সাপোর্ট — বাগ ফিক্স, টুইক ও ট্রেনিং ইনক্লুডেড।", en: "Real post-launch help on WhatsApp — bug fixes, tweaks and training included." },
        },
      ]}
      showcase={[
        { image: wpShotStore, title: { bn: "WooCommerce স্টোরফ্রন্ট", en: "WooCommerce Storefront" }, desc: { bn: "বিকাশ, নগদ ও COD চেকআউট সহ ফুল প্রোডাক্ট ক্যাটালগ।", en: "Full product catalog with bKash, Nagad and COD checkout." } },
        { image: wpShotAdmin, title: { bn: "ওয়ার্ডপ্রেস অ্যাডমিন ড্যাশবোর্ড", en: "WordPress Admin Dashboard" }, desc: { bn: "নিজেই পোস্ট, প্রোডাক্ট ও পেজ ম্যানেজ করুন — ফুল অ্যাক্সেস আপনার হাতে।", en: "Manage posts, products and pages yourself — full admin access." } },
        { image: wpShotBuilder, title: { bn: "Elementor পেজ বিল্ডার", en: "Elementor Page Builder" }, desc: { bn: "ড্র্যাগ-এন্ড-ড্রপে যেকোনো সেকশন এডিট — কোড ছাড়াই।", en: "Drag-and-drop editing for any section — no code needed." } },
      ]}
      demos={{
        heading: { bn: "উডমার্ট প্রি-বিল্ট ডেমো", en: "Woodmart Prebuilt Demos" },
        subheading: {
          bn: "৮০+ রেডিমেড ডিজাইন থেকে বেছে নিন — আমরা আপনার ব্র্যান্ডে কাস্টমাইজ করে দেব।",
          en: "Choose from 80+ ready-made layouts — we customise it to your brand.",
        },
        note: {
          bn: "প্রিমিয়াম Woodmart থিম লাইসেন্স, ডেমো ইম্পোর্ট, বাংলা ফন্ট ও বিকাশ/নগদ চেকআউট — সবই আপনার প্যাকেজে ইনক্লুডেড।",
          en: "Premium Woodmart theme licence, one-click demo import, Bangla fonts and bKash/Nagad checkout — all included in your package.",
        },
        items: [
          { image: wpDemoFashion, name: { bn: "ফ্যাশন স্টোর", en: "Fashion Store" }, category: { bn: "পোশাক", en: "Apparel" } },
          { image: wpDemoElectronics, name: { bn: "ইলেকট্রনিক্স মেগাশপ", en: "Electronics Megashop" }, category: { bn: "গ্যাজেট", en: "Gadgets" } },
          { image: wpDemoFurniture, name: { bn: "ফার্নিচার ও হোম ডেকর", en: "Furniture & Decor" }, category: { bn: "ইন্টেরিয়র", en: "Interior" } },
          { image: wpDemoCosmetics, name: { bn: "কসমেটিকস ও স্কিনকেয়ার", en: "Cosmetics & Skincare" }, category: { bn: "বিউটি", en: "Beauty" } },
          { image: wpDemoGrocery, name: { bn: "অর্গানিক গ্রোসারি", en: "Organic Grocery" }, category: { bn: "ফ্রেশ ফুড", en: "Fresh Food" } },
          { image: wpDemoJewellery, name: { bn: "জুয়েলারি বুটিক", en: "Jewellery Boutique" }, category: { bn: "লাক্সারি", en: "Luxury" } },
        ],
      }}
      process={[
        { step: "01", title: { bn: "ডিসকভার", en: "Discover" }, desc: { bn: "৩০ মিনিটের কলে আপনার পেজ, ফিচার ও কনটেন্ট স্কোপ করি।", en: "Scope your pages, features and content in a 30-min call." } },
        { step: "02", title: { bn: "ডিজাইন", en: "Design" }, desc: { bn: "৩ দিনে ব্র্যান্ড-টিউনড মকআপ, এক রাউন্ড রিভিউ।", en: "Brand-tuned mockups in 3 days with one review round." } },
        { step: "03", title: { bn: "বিল্ড", en: "Build" }, desc: { bn: "ওয়ার্ডপ্রেস + প্লাগইন + WooCommerce এন্ড-টু-এন্ড ওয়্যার্ড।", en: "WordPress + plugins + WooCommerce wired end-to-end." } },
        { step: "04", title: { bn: "লঞ্চ", en: "Launch" }, desc: { bn: "ডোমেইন লাইভ, SSL অন, ৩০ দিন সাপোর্ট শুরু।", en: "Domain live, SSL on, 30-day support starts." } },
      ]}
      testimonials={[
        { quote: { bn: "উপারস্কিল ৮ দিনে আমাদের ওয়ার্ডপ্রেস স্টোর বানিয়েছে — লঞ্চ থেকেই বিকাশ কাজ করছে এবং সাপোর্ট দুর্দান্ত।", en: "Uperskill built our WordPress store in 8 days — bKash worked from launch and support has been rock solid." }, name: "Rafiq Hasan", role: { bn: "প্রতিষ্ঠাতা, স্বপ্নীল BD", en: "Founder, Shopnil BD" } },
        { quote: { bn: "বাইলিঙ্গুয়াল ল্যান্ডিং পেজ আমাদের পুরনো ইংরেজি-অনলি সাইটের চেয়ে দ্বিগুণ কনভার্ট করে।", en: "The bilingual landing page converts twice as well as our old English-only site." }, name: "Maisha Alam", role: { bn: "মার্কেটিং লিড, প্রত্যয়", en: "Marketing Lead, Prottoy" } },
        { quote: { bn: "সব কিছু ইনক্লুডেড — ডোমেইন, হোস্টিং, SSL, WooCommerce। কোনো সারপ্রাইজ নেই।", en: "Everything included — domain, hosting, SSL, WooCommerce. Zero surprises." }, name: "Imran Chowdhury", role: { bn: "মালিক, Bengal Threads", en: "Owner, Bengal Threads" } },
      ]}
      plans={[
        {
          name: "WordPress Website",
          tagline: { bn: "লঞ্চ করতে যা যা লাগে সব", en: "Everything you need to launch" },
          price: "৳9,999",
          featured: true,
          features: [
            { bn: "১ বছর ডোমেইন + হোস্টিং", en: "1 Year Domain + Hosting" },
            { bn: "কাস্টম ওয়ার্ডপ্রেস / WooCommerce বিল্ড", en: "Custom WordPress / WooCommerce Build" },
            { bn: "বাংলা + ইংরেজি ল্যান্ডিং পেজ", en: "Bangla + English Landing Pages" },
            { bn: "সম্পূর্ণ রেসপন্সিভ ও SEO-রেডি", en: "Fully Responsive & SEO-ready" },
            { bn: "SSL, ব্যাকআপ ও সিকিউরিটি", en: "SSL, Backups & Security" },
            { bn: "পেমেন্ট গেটওয়ে (বিকাশ · নগদ · COD)", en: "Payment Gateway (bKash · Nagad · COD)" },
            { bn: "ইনস্টলেশন + ৩০ দিন সাপোর্ট", en: "Installation + 30-day Support" },
          ],
          cta: { bn: "অর্ডার করুন", en: "Order Now" },
        },
        {
          name: "WordPress + E-Commerce",
          tagline: { bn: "WooCommerce সহ ফুল স্টোর", en: "Full store with WooCommerce" },
          price: "৳14,999",
          features: [
            { bn: "ওয়ার্ডপ্রেস ওয়েবসাইটের সব কিছু", en: "Everything in WordPress Website" },
            { bn: "৫০০ পর্যন্ত প্রোডাক্ট", en: "Up to 500 Products" },
            { bn: "অ্যাডভান্সড WooCommerce সেটআপ", en: "Advanced WooCommerce Setup" },
            { bn: "কাস্টম প্রোডাক্ট পেজ", en: "Custom Product Pages" },
            { bn: "অর্ডার ও ইনভেন্টরি ড্যাশবোর্ড", en: "Order & Inventory Dashboard" },
          ],
        },
        {
          name: "Enterprise WordPress",
          tagline: { bn: "সম্পূর্ণ কোড মালিকানা", en: "Full-code ownership" },
          price: "Custom",
          cta: { bn: "সেলসের সাথে কথা বলুন", en: "Talk to Sales" },
          features: [
            { bn: "আনলিমিটেড প্রোডাক্ট ও পেজ", en: "Unlimited Products & Pages" },
            { bn: "কাস্টম প্লাগইন ও থিম", en: "Custom Plugins & Themes" },
            { bn: "মাল্টি-ল্যাঙ্গুয়েজ / মাল্টি-সাইট", en: "Multi-language / Multi-site" },
            { bn: "প্রায়োরিটি রিয়েলটাইম সাপোর্ট", en: "Priority Realtime Support" },
            { bn: "সম্পূর্ণ কোড ফাইল ইনক্লুডেড", en: "Full Code Files Included" },
          ],
        },
      ]}
      faq={[
        {
          q: { bn: "ডোমেইন ও হোস্টিং কি সত্যিই ১ বছর ফ্রি?", en: "Is the domain and hosting really free for a year?" },
          a: { bn: "হ্যাঁ। প্রতিটি ৳৯,৯৯৯ ওয়ার্ডপ্রেস বিল্ডে ১ বছরের ডোমেইন ও ম্যানেজড হোস্টিং ইনক্লুডেড। রিনিউয়াল অপশনাল ও স্বচ্ছ।", en: "Yes. Every ৳9,999 WordPress build includes a 1-year domain and managed hosting. Renewal is optional and transparent." },
        },
        {
          q: { bn: "সাইট কি বাংলা ও ইংরেজি দুটোতেই থাকতে পারে?", en: "Can the site be in both Bangla and English?" },
          a: { bn: "অবশ্যই। আমরা ডিফল্টভাবে বাইলিঙ্গুয়াল ল্যান্ডিং পেজ তৈরি করি — বাংলা-ফার্স্ট, ইংরেজি সুইচ সহ, অথবা উল্টো।", en: "Absolutely. We build bilingual landing pages by default — Bangla-first with an English switch, or vice versa." },
        },
        {
          q: { bn: "WooCommerce ও লোকাল পেমেন্ট সাপোর্ট করেন?", en: "Do you support WooCommerce and local payments?" },
          a: { bn: "হ্যাঁ — বিকাশ, নগদ, রকেট, SSLCOMMERZ ও ক্যাশ অন ডেলিভারি হ্যান্ডওভারের আগেই কনফিগার ও টেস্ট করা হয়।", en: "Yes — bKash, Nagad, Rocket, SSLCOMMERZ and Cash on Delivery are configured and tested before handover." },
        },
        {
          q: { bn: "একটি ওয়ার্ডপ্রেস সাইট বানাতে কতদিন লাগে?", en: "How long does a WordPress site take?" },
          a: { bn: "কনটেন্ট রেডি হওয়ার পর বেশিরভাগ কাস্টম ওয়ার্ডপ্রেস বিল্ড ৭–১০ দিনে লঞ্চ হয়।", en: "Most custom WordPress builds launch within 7–10 days after content is ready." },
        },
      ]}
    />
  ),
});