import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, PackageSearch, Warehouse, Bell, Users, Cloud } from "lucide-react";
import { ServiceLanding } from "@/components/site/ServiceLanding";
import heroStock from "@/assets/hero-stock.webp";
import sectionStock from "@/assets/section-stock.webp";
import productPlugin from "@/assets/product-plugin.webp";
import productSpeed from "@/assets/product-speed.webp";

export const Route = createFileRoute("/stock")({
  head: () => ({
    meta: [
      { title: "Stock Management Systems — Uperskill" },
      {
        name: "description",
        content:
          "Realtime inventory, POS and reporting built for Bangladeshi retailers. Plans from ৳2,999.",
      },
      { property: "og:title", content: "Stock Management — Uperskill" },
      {
        property: "og:description",
        content: "Track SKUs, purchases and sales across outlets. Basic, Business & Enterprise.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://uperskillagency.lovable.app/stock" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://uperskillagency.lovable.app/stock" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Stock Management System Development",
          provider: { "@type": "Organization", name: "Uperskill Agency" },
          areaServed: "BD",
          url: "https://uperskillagency.lovable.app/stock",
        }),
      },
    ],
  }),
  component: () => (
    <ServiceLanding
      eyebrow="Stock Management 💼"
      title={
        <>
          Inventory that <span className="text-gradient">runs itself.</span>
        </>
      }
      subtitle="A modern stock management system for shops, warehouses and F-commerce sellers — realtime SKUs, low-stock alerts and reports your ops team will actually open."
      heroImage={heroStock}
      heroImageAlt="Animated stock management dashboard preview"
      stats={[
        { value: "80+", label: "Shops Running" },
        { value: "2.1M", label: "SKUs Tracked" },
        { value: "99.9%", label: "Uptime" },
        { value: "24/7", label: "Sync" },
      ]}
      features={[
        {
          icon: PackageSearch,
          title: "SKUs & variants",
          desc: "Track every product, size, color and batch — with barcode support and quick search.",
        },
        {
          icon: Warehouse,
          title: "Multi-outlet ready",
          desc: "Move stock between warehouses and shops with full audit trail and transfer notes.",
        },
        {
          icon: BarChart3,
          title: "Reports & alerts",
          desc: "Daily sales, profit, low-stock and expiry alerts on WhatsApp and email.",
        },
        {
          icon: Bell,
          title: "Smart notifications",
          desc: "Low-stock, expiry and reorder pings sent to the right person automatically.",
        },
        {
          icon: Users,
          title: "Role-based access",
          desc: "Cashier, manager and owner see only what they need — nothing more.",
        },
        {
          icon: Cloud,
          title: "Cloud + offline",
          desc: "Point-of-sale keeps working offline and syncs when internet returns.",
        },
      ]}
      showcase={[
        { image: sectionStock, title: "Realtime Dashboard", desc: "Sales, profit and stock health at a glance." },
        { image: productPlugin, title: "Barcode POS", desc: "Scan, sell and print receipts in under 3 seconds." },
        { image: productSpeed, title: "Multi-outlet Sync", desc: "Move stock between shops with one tap." },
      ]}
      process={[
        { step: "01", title: "Audit", desc: "We map your current stock flow and pain points." },
        { step: "02", title: "Import", desc: "Existing SKUs migrated from Excel or another tool." },
        { step: "03", title: "Train", desc: "Team trained in Bangla — cashier to owner." },
        { step: "04", title: "Go-live", desc: "System live with 30-day hand-holding support." },
      ]}
      testimonials={[
        { quote: "Ekhon amader tin-ta shop-er stock ekjaigate dekhi. Age Excel-e chilo, ekhon realtime.", name: "Mahbub Alam", role: "Owner, Alam Store" },
        { quote: "Low-stock alert ashe WhatsApp-e. Reorder miss hoy na ar.", name: "Rifat Hossain", role: "Ops Lead, Fresh Mart" },
        { quote: "Offline mode ta life-saver. Net na thakleo bikri cholte thake.", name: "Shirin Akter", role: "Manager, Chittagong Bazaar" },
      ]}
      plans={[
        {
          name: "Basic",
          tagline: "Managed system for small shops",
          price: "৳2,999",
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
          tagline: "Custom-coded on your domain",
          price: "৳6,999",
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
          tagline: "Full ownership & customization",
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
          q: "Can it run offline?",
          a: "The Business plan includes offline-first POS that syncs when back online — perfect for spotty internet.",
        },
        {
          q: "Do you migrate my existing stock data?",
          a: "Yes — CSV or Excel imports are included in Business and Enterprise plans.",
        },
        {
          q: "Can multiple staff log in?",
          a: "Role-based accounts for cashier, manager and owner are included from Basic upward.",
        },
      ]}
    />
  ),
});