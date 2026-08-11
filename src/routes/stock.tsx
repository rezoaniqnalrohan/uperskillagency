import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, PackageSearch, Warehouse, Bell, Users, Cloud } from "lucide-react";
import { ServiceLanding } from "@/components/site/ServiceLanding";
import { useLang } from "@/hooks/use-language";

export const Route = createFileRoute("/stock")({
  head: () => ({
    meta: [
      { title: "Stock Management Systems BD — Uperskill" },
      {
        name: "description",
        content:
          "রিয়েলটাইম ইনভেন্টরি, POS এবং লাভ-ক্ষতির হিসাব। Track SKUs, purchases and sales across outlets. Basic, Business & Enterprise plans from ৳2,999.",
      },
      { property: "og:title", content: "Stock Management Systems BD — Uperskill" },
      {
        property: "og:description",
        content: "Track SKUs, purchases and sales across outlets. Basic, Business & Enterprise plans.",
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
  component: () => {
    const { lang } = useLang();
    const bn = lang === "bn";

    return (
      <ServiceLanding
        eyebrow={{ bn: "ইনভেন্টরি ও স্টক ম্যানেজমেন্ট 📊", en: "Inventory & Stock Management 📊" }}
        title={
          bn ? (
            <>
              রিয়েলটাইম স্টক, মোবাইল POS — <span className="text-gradient">ব্যবসা পরিচালনা হাতের মুঠোয়।</span>
            </>
          ) : (
            <>
              Inventory that <span className="text-gradient">runs itself.</span>
            </>
          )
        }
        subtitle={{
          bn: "দোকান, গুদাম বা রিটেইল চেইনের জন্য ডিজাইন করা বাংলা ইনভেন্টরি সফটওয়্যার। লো-স্টক নোটিফিকেশন, প্রফিট-লস রিপোর্ট ও অফলাইন POS সরাসরি ইন-বিল্ট।",
          en: "A modern stock management system for shops, warehouses, and retail brands — real-time SKUs, low-stock alerts, and reports your ops team will actually love to use."
        }}
        heroImage="/assets/work-foodstock.jpg"
        heroImageAlt="FoodStock Cafe POS & Inventory"
        stats={[
          { value: "৳৮.৫ কোটি+", label: { bn: "প্রসেসড ট্রানজিশন ভ্যালু", en: "Processed Sales Value" } },
          { value: "১২০+", label: { bn: "অ্যাক্টিভ রিটেইল আউটলেট", en: "Active Outlets" } },
          { value: "৫০ লাখ+", label: { bn: "ট্র্যাকড প্রোডাক্ট (SKUs)", en: "Tracked Products" } },
          { value: "৯৯.৯%", label: { bn: "সার্ভার আপটাইম", en: "Server Uptime" } }
        ]}
        features={[
          {
            icon: PackageSearch,
            title: { bn: "প্রোডাক্ট এবং ভেরিয়েন্ট ট্র্যাকিং", en: "Product & Variant Tracking" },
            desc: { bn: "যেকোনো সাইজ, কালার ও ব্যাচ সহজেই ট্র্যাক করুন। বারকোড স্ক্যানিং এবং কুইক সার্চ সাপোর্ট সরাসরি অন্তর্ভুক্ত।", en: "Track every product variant, size, color, and batch — with barcode support and quick search." }
          },
          {
            icon: Warehouse,
            title: { bn: "মাল্টি-আউটলেট ও গোডাউন সিঙ্ক", en: "Multi-Outlet & Warehouse Sync" },
            desc: { bn: "এক গোডাউন থেকে অন্য গোডাউন বা আউটলেটে স্টক ট্রান্সফার করুন ফুল অডিট ট্রেইল ও চালান ট্র্যাকিংয়ের মাধ্যমে।", en: "Move stock between warehouses and retail shops with full audit trail and transfer notes." }
          },
          {
            icon: BarChart3,
            title: { bn: "সেলস ও প্রফিট রিপোর্ট", en: "Analytics & Reports" },
            desc: { bn: "দৈনিক বিক্রি, খরচ এবং মোট লাভের স্বয়ংক্রিয় হিসাব। মোবাইল থেকেই রিয়েলটাইম ব্যবসার গ্রাফ দেখে নিন।", en: "Daily sales, costs, and net profits calculated automatically. View beautiful graphs right on your mobile." }
          },
          {
            icon: Bell,
            title: { bn: "লো-স্টক ও এক্সপায়ারি এলার্ট", en: "Low-Stock & Expiry Alerts" },
            desc: { bn: "স্টক ফুরিয়ে গেলে বা মেয়াদ শেষ হওয়ার আগে সরাসরি মোবাইল নোটিফিকেশন বা ইমেইলের মাধ্যমে সতর্কবার্তা।", en: "Low-stock, expiry, and reorder warnings sent to the owner or manager automatically." }
          },
          {
            icon: Users,
            title: { bn: "রোল-ভিত্তিক ক্যাশিয়ার অ্যাক্সেস", en: "Role-Based Access" },
            desc: { bn: "ক্যাশিয়ার, ম্যানেজার এবং ওনারের জন্য আলাদা আলাদা প্যানেল। নিরাপদ ও সুরক্ষিত ইউজার পারমিশন ম্যানেজমেন্ট।", en: "Cashier, manager, and owner see only what they need. Restrict actions and secure reports." }
          },
          {
            icon: Cloud,
            title: { bn: "অফলাইন পিওএস (POS)", en: "Cloud + Offline POS" },
            desc: { bn: "ইন্টারনেট না থাকলেও ক্যাশ কাউন্টারে বিক্রি চালু থাকবে। ইন্টারনেট ফিরে এলে ডাটা ব্যাকআপ অটোমেটিক সার্ভারে সিঙ্ক হয়ে যাবে।", en: "Point-of-sale keeps working offline during load shedding and syncs when internet returns." }
          }
        ]}
        showcase={[
          {
            image: "/assets/work-foodstock.jpg",
            title: { bn: "ফুডস্টক রেস্টুরেন্ট পিওএস", en: "FoodStock Cafe POS" },
            desc: { bn: "টাচস্ক্রিন-ফ্রেন্ডলি বিলিং, রেসিপি এবং কাঁচামালের স্টক কন্ট্রোল সিস্টেম।", en: "Touchscreen billing, recipe and raw ingredient stock control." }
          },
          {
            image: "/assets/work-medstock.png",
            title: { bn: "মেডস্টক মেডিকেল ওয়ারহাউস", en: "MedStock Pharmacy System" },
            desc: { bn: "ফার্মেসি বা ওষুধের মেয়াদের তারিখ (FEFO) এবং সেন্ট্রাল স্টক লেভেল ম্যানেজমেন্ট।", en: "FEFO medicine stock expiration management and invoice control." }
          },
          {
            image: "/assets/work-electrostock.png",
            title: { bn: "ইলেক্ট্রোস্টক মাল্টি-স্টোর ইনভেন্টরি", en: "ElectroStock Gadgets" },
            desc: { bn: "একাদিক রিটেইল ইলেকট্রনিক্স আউটলেটের সেন্ট্রাল স্টক এবং বিক্রি মনিটরিং ড্যাশবোর্ড।", en: "Consolidated stock level monitoring and sales metrics from multiple retail outlets." }
          }
        ]}
        demos={{
          heading: { bn: "প্রি-বিল্ট ডিজাইন ডেমো", en: "Pre-built Live Demos" },
          subheading: { bn: "আপনার বিজনেসের ধরণ অনুযায়ী ডেমো বেছে নিন", en: "Select a layout tuned for your retail industry" },
          note: { bn: "ফাস্ট ফুড রেস্টুরেন্ট, ফার্মেসি, সুপারশপ এবং ইলেকট্রনিক্স বিজনেসের জন্য স্পেশাল ডিজাইন।", en: "Tailored for food, pharmacy, retail superstores, and gadget businesses." },
          items: [
            { image: "/assets/work-foodstock.jpg", name: { bn: "ফুডস্টক ক্যাফে ড্যাশবোর্ড", en: "FoodStock Cafe POS" }, category: { bn: "রেস্টুরেন্ট ও ক্যাফে", en: "Restaurant" } },
            { image: "/assets/work-medstock.png", name: { bn: "মেডস্টক ফার্মা ড্যাশবোর্ড", en: "MedStock Inventory" }, category: { bn: "ফার্মেসি ও মেডিসিন", en: "Pharmacy" } },
            { image: "/assets/work-freshstock.jpg", name: { bn: "ফ্রেশস্টক সুপারশপ ড্যাশবোর্ড", en: "FreshStock Cold-Chain" }, category: { bn: "গ্রোসারি ও সুপারশপ", en: "Retail" } },
            { image: "/assets/work-electrostock.png", name: { bn: "ইলেক্ট্রোস্টক পিওএস ড্যাশবোর্ড", en: "ElectroStock POS" }, category: { bn: "গ্যাজেটস ও ইলেকট্রনিক্স", en: "Electronics" } }
          ]
        }}
        process={[
          { step: "01", title: { bn: "স্টক ফ্লো অডিট", en: "Audit & Scope" }, desc: { bn: "আপনার বিজনেসের বর্তমান ইনভেন্টরি ফ্লো এবং মূল সমস্যাগুলো বুঝে প্রয়োজনীয় মডিউল ঠিক করা।", en: "We map your current stock flow, barcodes, and outlet connectivity requirements." } },
          { step: "02", title: { bn: "এক্সেল ডাটা ইমপোর্ট", en: "Data Migration" }, desc: { bn: "আপনার এক্সেল (Excel) বা পূর্বে ব্যবহৃত যেকোনো ফাইলের প্রোডাক্ট লিস্ট আমরা ফ্রীতেই কনভার্ট করে দেব।", en: "Existing SKUs migrated and formatted from Excel/CSV templates into your database." } },
          { step: "03", title: { bn: "স্টাফ ও লাইভ ট্রেনিং", en: "Staff Training" }, desc: { bn: "ক্যাশিয়ার থেকে ম্যানেজার — কিভাবে বিল করবেন এবং স্টক ট্রান্সফার করবেন বাংলায় সম্পূর্ণ ট্রেনিং।", en: "Training your billing operators and management staff in Bengali on how to operate POS." } },
          { step: "04", title: { bn: "সিস্টেম গো-লাইভ", en: "System Go-Live" }, desc: { bn: "ডোমেইন ও সার্ভার কানেক্ট করে লাইভ করা এবং ৩০ দিনের সার্বক্ষণিক ফ্রী সাপোর্ট চালু।", en: "POS system launched with 30 days of active hand-holding and emergency phone support." } }
        ]}
        testimonials={[
          {
            quote: { bn: "Excel-এ স্টক মেইনটেইন করতে গিয়ে আমাদের অনেক ভুল হতো। এখন ৩টি আউটলেটের স্টক সেন্ট্রাললি রিয়েলটাইমে দেখতে পারি।", en: "Maintaining stock in Excel was error-prone. Now we manage 3 outlets centrally with real-time sync." },
            name: "Mahbub Alam",
            role: { bn: "ম্যানেজিং ডিরেক্টর, আলম স্টোর", en: "Managing Director, Alam Store" }
          },
          {
            quote: { bn: "লো-স্টক আর এক্সপায়ারি এলার্ট আমাদের অনেক টাকা বাঁচিয়েছে। কাস্টমার আসার আগেই স্টকে মাল তোলা সম্ভব হয়।", en: "Low-stock and expiry warnings saved us tons of capital. We reorder before items sell out." },
            name: "Rifat Hossain",
            role: { bn: "অপারেশনস হেড, ফ্রেশ মার্ট", en: "Operations Head, Fresh Mart" }
          },
          {
            quote: { bn: "অফলাইন মোডটা লাইফ-সেভার। বাংলাদেশে লোডশেডিংয়ের মধ্যেও কোনো কাস্টমার পেমেন্ট ছাড়া ফিরে যায় না।", en: "Offline mode is a lifesaver. Even during load shedding, billing continues uninterrupted." },
            name: "Shirin Akter",
            role: { bn: "ম্যানেজার, চিটাগাং সুপার মার্কেট", en: "Manager, Chittagong Super Market" }
          }
        ]}
        plans={[
          {
            name: "Basic",
            tagline: { bn: "১টি আউটলেট ও ক্যাশ কাউন্টারের জন্য", en: "For 1 outlet and cash counter" },
            price: bn ? "৳২,৯৯৯" : "৳2,999",
            features: [
              { bn: "২৫০টি পর্যন্ত প্রোডাক্ট ট্র্যাকিং", en: "Track up to 250 Products" },
              { bn: "ম্যানুয়াল বারকোড এন্ট্রি ও বিলিং", en: "Manual Barcode & Billing" },
              { bn: "মোবাইল ও ট্যাবলেট ফ্রেন্ডলি", en: "Mobile & Tablet Friendly UI" },
              { bn: "মৌলিক সেলস ও কন্টাক্ট ডাটা", en: "Basic Sales Reports" },
              { bn: "ফ্রি লাইভ ডেমো সেটআপ", en: "Free Live Demo Setup" }
            ]
          },
          {
            name: "Business",
            tagline: { bn: "মাল্টি-আউটলেট ও ফুল অটোমেশন", en: "Multi-outlet & full automation" },
            price: bn ? "৳৬,৯৯৯" : "৳6,999",
            featured: true,
            features: [
              { bn: "আনলিমিটেড প্রোডাক্ট ও বারকোড POS", en: "Unlimited Products & Barcode POS" },
              { bn: "৩টি আউটলেট পর্যন্ত অটো সিঙ্ক", en: "Auto Sync up to 3 Outlets" },
              { bn: "লো-স্টক ও এক্সপায়ারি নোটিফিকেশন", en: "Low-Stock & Expiry Alerts" },
              { bn: "হোয়াটসঅ্যাপ সেলস ও লাভ-ক্ষতি রিপোর্ট", en: "WhatsApp Reports & P&L" },
              { bn: "অফলাইন মোড ও অটো ক্লাউড ব্যাকআপ", en: "Offline Mode & Auto Backup" },
              { bn: "সম্পূর্ণ কাস্টম রিয়্যাক্ট কোড ফাইল", en: "Full Code Files Ownership" }
            ]
          },
          {
            name: "Enterprise",
            tagline: { bn: "লার্জ স্কেল ডিস্ট্রিবিউশন ও হোলসেল", en: "Large scale distribution & wholesale" },
            price: bn ? "৳আলোচনা সাপেক্ষে" : "Custom",
            cta: { bn: "যোগাযোগ করুন", en: "Talk to Sales" },
            features: [
              { bn: "আনলিমিটেড আউটলেট ও ওয়ারহাউস", en: "Unlimited Outlets & Warehouses" },
              { bn: "কাস্টম ইআরপি (ERP) বা একাউন্টিং কানেক্টিভিটি", en: "Custom ERP & Accounting Sync" },
              { bn: "উнят ডাটা অ্যানালিটিক্স ও প্রিডিক্টিভ পারচেজিং", en: "Advanced Analytics & Forecasting" },
              { bn: "২৪/৭ ডেডিকেটেড ফোন ও অন-সাইট সাপোর্ট", en: "24/7 Phone & On-Site Support" },
              { bn: "কাস্টমাইজড কোড এবং ডাটা সিকিউরিটি", en: "Customized Code & Data Hosting" }
            ]
          }
        ]}
        faq={[
          {
            q: { bn: "অফলাইনে কি আসলেই বিলিং করা যাবে?", en: "Can it really run offline?" },
            a: { bn: "হ্যাঁ, আমাদের বিজনেস ও এন্টারপ্রাইজ প্ল্যানে লোকাল ব্রাউজার স্টোরেজ টেকনোলজি ব্যবহার করা হয়। ইন্টারনেট চলে গেলেও বিলিং ও বারকোড স্ক্যানিং চালু থাকবে এবং নেট আসলে অটো সিঙ্ক হয়ে যাবে।", en: "Yes, our Business and Enterprise plans use progressive local browser caching. Billing and barcode scanning continue during internet dropouts and sync back automatically." }
          },
          {
            q: { bn: "আমার আগের প্রোডাক্ট ডাটা কি ইমপোর্ট করা যাবে?", en: "Can you migrate our existing product data?" },
            a: { bn: "হ্যাঁ, আপনার প্রোডাক্টের নামের তালিকা এক্সেল (Excel) বা CSV ফাইলে থাকলে আমাদের টিম সম্পূর্ণ ডেটা সিস্টেমে ফ্রীতে মাইগ্রেট ও ইনপুট করে দেবে।", en: "Yes, if you have your product list in an Excel or CSV file, our team will migrate and format all your SKU data for free." }
          },
          {
            q: { bn: "একাধিক ক্যাশিয়ারের জন্য রোল সেট করা যাবে?", en: "Can multiple cashier roles be configured?" },
            a: { bn: "অবশ্যই। ক্যাশিয়ার শুধুমাত্র পণ্য বিক্রি করতে পারবেন কিন্তু স্টকের পরিমাণ দেখতে বা এডিট করতে পারবেন না। ম্যানেজার স্টক এডিট করতে পারবেন এবং মালিক সম্পূর্ণ লাভ-ক্ষতির হিসাব দেখতে পারবেন।", en: "Absolutely. Cashiers can only perform billing but cannot edit stock levels. Managers can edit stock, and only owners can view cost/profit charts." }
          },
          {
            q: { bn: "কোড এবং ডিজাইনের মালিকানা কি আমার থাকবে?", en: "Do I own the code and design?" },
            a: { bn: "হ্যাঁ, বিজনেস এবং এন্টারপ্রাইজ প্ল্যানে সম্পূর্ণ সোর্স কোডের ফাইল আপনাকে দিয়ে দেওয়া হবে। বেসিক প্ল্যানের সাইটগুলো আমাদের ক্লাউড হোস্টিংয়ে রান করবে কিন্তু এর কন্টেন্ট ও ডিজাইনের মালিকানা সম্পূর্ণ আপনারই থাকবে।", en: "Yes, Business and Enterprise plans include full code files ownership. Basic plans run on our managed hosting but the content remains fully yours." }
          }
        ]}
      />
    );
  }
});