import { createFileRoute } from "@tanstack/react-router";
import { Camera, Sparkles, Type, Search, Moon, Gauge } from "lucide-react";
import { ServiceLanding } from "@/components/site/ServiceLanding";
import heroPortfolio from "@/assets/hero-portfolio.webp";
import sectionPortfolio from "@/assets/section-portfolio.webp";
import productTheme from "@/assets/product-theme.webp";
import productSpeed from "@/assets/product-speed.webp";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio Websites — Uperskill" },
      {
        name: "description",
        content:
          "Beautiful personal portfolio websites for creators, freelancers and consultants. From ৳1,999.",
      },
      { property: "og:title", content: "Portfolio Websites — Uperskill" },
      {
        property: "og:description",
        content:
          "A personal brand that closes clients. Basic, Business & Enterprise plans.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://uperskillagency.lovable.app/portfolio" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://uperskillagency.lovable.app/portfolio" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Portfolio Website Development",
          provider: { "@type": "Organization", name: "Uperskill Agency" },
          areaServed: "BD",
          url: "https://uperskillagency.lovable.app/portfolio",
        }),
      },
    ],
  }),
  component: () => (
    <ServiceLanding
      eyebrow="Portfolio Website 💼"
      title={
        <>
          A personal brand that <span className="text-gradient">closes clients.</span>
        </>
      }
      subtitle="For creators, freelancers and consultants — a polished personal website that ranks on Google and looks premium on the phone your client actually opens it on."
      heroImage={heroPortfolio}
      heroImageAlt="Animated portfolio website preview"
      stats={[
        { value: "200+", label: "Portfolios Shipped" },
        { value: "98/100", label: "Lighthouse Score" },
        { value: "3×", label: "Avg Inquiry Lift" },
        { value: "7 Days", label: "Turnaround" },
      ]}
      features={[
        {
          icon: Type,
          title: "Typography that sings",
          desc: "Hind Siliguri + Noto Serif or a global pair — real type craft, not template defaults.",
        },
        {
          icon: Camera,
          title: "Case-study ready",
          desc: "Project layouts, image galleries and testimonials wired up from day one.",
        },
        {
          icon: Sparkles,
          title: "Motion & polish",
          desc: "Subtle 3D animations, hover states and dark mode included — no upsells.",
        },
        {
          icon: Search,
          title: "SEO baked in",
          desc: "Structured data, sitemap, og-images — you rank for your own name.",
        },
        {
          icon: Moon,
          title: "Dark mode default",
          desc: "Beautiful in both themes, remembered per visitor.",
        },
        {
          icon: Gauge,
          title: "Blazing fast",
          desc: "Core Web Vitals green out of the box — LCP < 2s on 4G.",
        },
      ]}
      showcase={[
        { image: sectionPortfolio, title: "Editorial Case Study", desc: "Long-form project pages that tell the story." },
        { image: productTheme, title: "Photography Gallery", desc: "Full-bleed lightbox with lazy-loaded stills." },
        { image: productSpeed, title: "Consultant One-Pager", desc: "Above-the-fold pitch + booking CTA in one scroll." },
      ]}
      process={[
        { step: "01", title: "Voice", desc: "30-min discovery — your story, tone and goals." },
        { step: "02", title: "Structure", desc: "Wireframes for hero, projects, about, contact." },
        { step: "03", title: "Craft", desc: "Design and build with real content, not lorem ipsum." },
        { step: "04", title: "Launch", desc: "Domain live, analytics wired, indexed on Google." },
      ]}
      testimonials={[
        { quote: "Amar portfolio site launch-er por prothom mash-ei tin-ta client peyechhi.", name: "Rasel Mahmud", role: "Freelance Designer" },
        { quote: "The typography and motion make it feel expensive — clients notice.", name: "Ayesha Chowdhury", role: "Brand Consultant" },
        { quote: "Best money I've spent on my personal brand. Ranked #1 for my name in a week.", name: "Kamrul Islam", role: "Product Photographer" },
      ]}
      plans={[
        {
          name: "Basic",
          tagline: "Launch a one-pager fast",
          price: "৳1,999",
          features: [
            "Lovable Host + Cloud Pro",
            "No Watermark",
            "Fully Responsive",
            "Unlimited Hosting Time",
            "Up to 6 Sections",
          ],
        },
        {
          name: "Business",
          tagline: "Multi-page personal site",
          price: "৳4,999",
          featured: true,
          features: [
            "Domain + Hosting (1 Year)",
            "Custom React / Vue.js Code",
            "Fully Responsive",
            "Up to 15 Case Studies",
            "Blog + Contact Form",
          ],
        },
        {
          name: "Enterprise",
          tagline: "Signature brand site",
          price: "Custom",
          cta: "Talk to Sales",
          features: [
            "Domain + Hosting (1 Year)",
            "Full Code Customisation",
            "With Code Files",
            "Unlimited Pages & Case Studies",
            "Ongoing Design Retainer",
          ],
        },
      ]}
      faq={[
        {
          q: "Do you write my copy?",
          a: "Business and Enterprise include Bengali or English copy polishing. Basic ships with a proven copy template you fill in.",
        },
        {
          q: "Can I update it myself?",
          a: "Yes — you get a simple CMS on Business and Enterprise so you can edit projects and blog posts without us.",
        },
        {
          q: "How fast will it load on 3G?",
          a: "Every portfolio is Core Web Vitals-optimized — LCP under 2.5s on typical Android + 3G is the standard.",
        },
      ]}
    />
  ),
});