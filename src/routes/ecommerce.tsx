import { createFileRoute } from "@tanstack/react-router";
import { CreditCard, ShieldCheck, Smartphone, PenTool, Code2, Rocket, LifeBuoy } from "lucide-react";
import { ServiceLanding } from "@/components/site/ServiceLanding";
import heroEcommerce from "@/assets/hero-ecommerce.webp";
import sectionEcommerce from "@/assets/section-ecommerce.webp";
import productPlugin from "@/assets/product-plugin.webp";
import productTheme from "@/assets/product-theme.webp";

export const Route = createFileRoute("/ecommerce")({
  head: () => ({
    meta: [
      { title: "E-Commerce Websites — Uperskill" },
      {
        name: "description",
        content:
          "Launch a premium online store with bKash, Nagad and COD. Three transparent plans from ৳3,999.",
      },
      { property: "og:title", content: "E-Commerce Websites — Uperskill" },
      {
        property: "og:description",
        content:
          "Productized e-commerce builds that don't break. Basic, Business & Enterprise plans.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://uperskillagency.lovable.app/ecommerce" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://uperskillagency.lovable.app/ecommerce" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "E-Commerce Website Development",
          provider: { "@type": "Organization", name: "Uperskill Agency" },
          areaServed: "BD",
          url: "https://uperskillagency.lovable.app/ecommerce",
        }),
      },
    ],
  }),
  component: () => (
    <ServiceLanding
      eyebrow="E-Commerce Website 💼"
      title={
        <>
          Online stores that <span className="text-gradient">actually sell.</span>
        </>
      }
      subtitle="Mobile-first stores tuned for Bangladesh — bKash, Nagad and COD out of the box, with the design polish of a global brand."
      heroImage={heroEcommerce}
      heroImageAlt="Animated e-commerce storefront dashboard preview"
      stats={[
        { value: "120+", label: "Stores Launched" },
        { value: "৳4.2Cr", label: "GMV Processed" },
        { value: "1.9s", label: "Avg LCP on 4G" },
        { value: "4.9★", label: "Client Rating" },
      ]}
      features={[
        {
          icon: Smartphone,
          title: "Mobile-first, always",
          desc: "Every store is designed on a phone first — the way 90% of Bangladeshi shoppers browse.",
        },
        {
          icon: CreditCard,
          title: "bKash · Nagad · COD",
          desc: "Local payment methods configured and tested. No surprise gateway fees.",
        },
        {
          icon: ShieldCheck,
          title: "We don't disappear",
          desc: "Real post-launch support with a named team — not a stranger from a Facebook DM.",
        },
        {
          icon: Rocket,
          title: "Ship in 7 days",
          desc: "Productized delivery — your Basic store goes live inside a week, guaranteed.",
        },
        {
           icon: PenTool,
          title: "Custom branding",
          desc: "Logo, typography and color system tuned to your brand — no template look.",
        },
        {
          icon: LifeBuoy,
          title: "30-day free support",
          desc: "Bug fixes, tweaks and training included after launch. No hidden invoices.",
        },
      ]}
      showcase={[
        { image: sectionEcommerce, title: "Fashion Storefront", desc: "Lookbook-style catalog with wishlist & size guide." },
        { image: productPlugin, title: "One-Click Checkout", desc: "bKash + Nagad + COD in a single mobile-first flow." },
        { image: productTheme, title: "Editorial Product Page", desc: "Story-driven PDPs that push AOV up by 22%." },
      ]}
      process={[
        { step: "01", title: "Discover", desc: "30-min call to scope catalog, brand and launch date." },
        { step: "02", title: "Design", desc: "Brand-tuned mockups in 3 days. One review round." },
        { step: "03", title: "Build", desc: "Store built, payments wired, catalog imported." },
        { step: "04", title: "Launch", desc: "Domain live, team trained, 30-day support starts." },
      ]}
      testimonials={[
        { quote: "Uperskill shipped our store in 6 days. bKash and COD worked from day one — sales came the same week.", name: "Nafisa Rahman", role: "Founder, Rongdhonu" },
        { quote: "The design honestly looks better than what our foreign agency proposed at 5× the price.", name: "Tanvir Ahmed", role: "Owner, Dhaka Denim" },
        { quote: "Their team answered on WhatsApp within an hour. Rare in this industry.", name: "Sadia Kabir", role: "Manager, Kacha Bazaar" },
      ]}
      plans={[
        {
          name: "Basic",
          tagline: "Launch fast on managed hosting",
          price: "৳3,999",
          features: [
            "Lovable Host + Cloud Pro",
            "No Watermark",
            "Fully Responsive",
            "Unlimited Hosting Time",
            "Up to 250 Products",
          ],
        },
        {
          name: "Business",
          tagline: "Custom-coded, your domain",
          price: "৳8,999",
          featured: true,
          features: [
            "Domain + Hosting (1 Year)",
            "Custom React / Vue.js Code",
            "Fully Responsive",
            "Up to 1000 Products",
            "Installation Support",
          ],
        },
        {
          name: "Enterprise",
          tagline: "Full-code ownership",
          price: "Custom",
          cta: "Talk to Sales",
          features: [
            "Domain + Hosting (1 Year)",
            "Full Code Customisation",
            "With Code Files",
            "Unlimited Products",
            "Customised Code, Realtime",
          ],
        },
      ]}
      faq={[
        {
          q: "Do I own the code and design?",
          a: "Business and Enterprise plans include full code files. Basic plans run on our managed Lovable hosting.",
        },
        {
          q: "How long does a store take to launch?",
          a: "Basic stores go live in 5–7 days. Business builds usually ship in 2–3 weeks depending on catalog size.",
        },
        {
          q: "Which payment methods are supported?",
          a: "bKash, Nagad, Rocket, Card (SSLCOMMERZ) and Cash on Delivery are all supported and tested before handover.",
        },
      ]}
    />
  ),
});