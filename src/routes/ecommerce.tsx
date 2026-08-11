import { createFileRoute } from "@tanstack/react-router";
import { CreditCard, ShieldCheck, Smartphone, PenTool, Code2, Rocket, LifeBuoy } from "lucide-react";
import { ServiceLanding } from "@/components/site/ServiceLanding";
import { useLang } from "@/hooks/use-language";

import wpDemoCosmetics from "@/assets/wp-demo-cosmetics.webp";
import wpDemoElectronics from "@/assets/wp-demo-electronics.webp";
import wpDemoFashion from "@/assets/wp-demo-fashion.webp";
import wpDemoGrocery from "@/assets/wp-demo-grocery.webp";
import wpDemoJewellery from "@/assets/wp-demo-jewellery.webp";

export const Route = createFileRoute("/ecommerce")({
  head: () => ({
    meta: [
      { title: "E-Commerce Website Development BD — Uperskill" },
      {
        name: "description",
        content:
          "বিকাশ, নগদ ও রিয়েলটাইম কুরিয়ার ইন্টিগ্রেশনসহ প্রিমিয়াম ই-কমার্স ওয়েবসাইট ডেভেলপমেন্ট। Launch a premium online store with bKash, Nagad and automated COD/Courier tracking. Plans from ৳3,999.",
      },
      { property: "og:title", content: "E-Commerce Website Development BD — Uperskill" },
      {
        property: "og:description",
        content:
          "বিকাশ, নগদ ও রিয়েলটাইম কুরিয়ার ইন্টিগ্রেশনসহ প্রিমিয়াম ই-কমার্স ওয়েবসাইট ডেভেলপমেন্ট। Productized e-commerce builds that don't break. Basic, Business & Enterprise plans.",
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
          name: "E-Commerce Website Development BD",
          provider: { "@type": "Organization", name: "Uperskill Agency" },
          areaServed: "BD",
          url: "https://uperskillagency.lovable.app/ecommerce",
        }),
      },
    ],
  }),
  component: () => {
    const { lang } = useLang();
    const bn = lang === "bn";

    return (
      <ServiceLanding
        eyebrow={{ bn: "ই-কমার্স ওয়েবসাইট ডেভেলপমেন্ট 🛒", en: "E-Commerce Website Development 🛒" }}
        title={
          bn ? (
            <>
              মিনিটেই অর্ডার, ওয়ান-ক্লিক চেকআউট — <span className="text-gradient">সেলস বাড়ান ৩ গুণ।</span>
            </>
          ) : (
            <>
              Online stores that <span className="text-gradient">actually sell.</span>
            </>
          )
        }
        subtitle={{
          bn: "বাংলাদেশি কাস্টমারদের জন্য বিশেষভাবে অপ্টিমাইজড মোবাইল-ফার্স্ট ই-কমার্স শপ। বিকাশ, নগদ ও কুরিয়ার অটো বুকিং সুবিধা সরাসরি ইন-বিল্ট।",
          en: "Mobile-first e-commerce stores designed for Bangladeshi shoppers — bKash, Nagad, and automated courier booking included out of the box."
        }}
        heroImage="/assets/work-nexora.jpg"
        heroImageAlt="Nexora E-Commerce storefront dashboard"
        stats={[
          { value: "৳৪.৫ কোটি+", label: { bn: "প্রসেসড সেলস (GMV)", en: "Processed Sales" } },
          { value: "২০০+", label: { bn: "সফল ই-কমার্স স্টোর", en: "Successful Stores" } },
          { value: "১.৫ সেকেন্ড", label: { bn: "গড় পেইজ লোড টাইম", en: "Avg Load Time" } },
          { value: "৯৯.৯%", label: { bn: "সার্ভার আপটাইম", en: "Server Uptime" } }
        ]}
        features={[
          {
            icon: Smartphone,
            title: { bn: "মোবাইল-ফার্স্ট ডিজাইন", en: "Mobile-First Design" },
            desc: { bn: "বাঙালির ৯০% কেনাকাটা হয় মোবাইল দিয়ে। প্রতিটি সাইট মোবাইল স্ক্রিনে সর্বোচ্চ গতি ও সুবিধা নিশ্চিত করতে ডিজাইন করা হয়েছে।", en: "90% of Bangladeshi shoppers browse on mobile. We design and optimize explicitly for smartphones first." }
          },
          {
            icon: CreditCard,
            title: { bn: "বিকাশ · নগদ · রকেট পেমেন্ট", en: "Automatic Local Payments" },
            desc: { bn: "অটোমেটেড ও ম্যানুয়াল বিকাশ, নগদ ও রকেট পেমেন্ট। SSLCommerz, Shurjopay বা AmarPay সহজেই সেটআপ করুন কোনো ঝামেলা ছাড়াই।", en: "Automated bKash, Nagad, Rocket and Cards. Integrate SSLCommerz, Shurjopay, or AmarPay effortlessly." }
          },
          {
            icon: Rocket,
            title: { bn: "অটোমেটেড কুরিয়ার বুকিং", en: "Automated Courier Sync" },
            desc: { bn: "অর্ডার আসা মাত্রই এক ক্লিকে পাঠাও (Pathao), স্টিডফাস্ট (Steadfast) বা রেডক্স (RedX) কুরিয়ারে অটোমেটিক পার্সেল বুকিং হয়ে যাবে।", en: "Book shipments automatically. One-click sync with Pathao, Steadfast, and RedX couriers straight from your admin panel." }
          },
          {
            icon: Code2,
            title: { bn: "ফেসবুক পিক্সেল ও API ট্র্যাকিং", en: "Facebook Pixel & CAPI" },
            desc: { bn: "iOS 14+ আপডেট প্রতিরোধী সার্ভার-সাইড ট্র্যাকিং (Conversions API) ও ফেসবুক পিক্সেল সেটআপ, যা আপনার বিজ্ঞাপন খরচ কমাবে ও সেলস বাড়াবে।", en: "Server-side Conversions API (CAPI) and Facebook Pixel integration to bypass iOS 14+ tracking blocks and maximize ROI." }
          },
          {
            icon: PenTool,
            title: { bn: "হোয়াটসঅ্যাপ কুইক অর্ডার", en: "WhatsApp Quick Order" },
            desc: { bn: "কাস্টমার যাতে সরাসরি হোয়াটসঅ্যাপে অর্ডার প্লেস করতে পারে তার জন্য ওয়ান-ক্লিক বাটন। ডাইরেক্ট কাস্টমার ক্লোজিং সহজ করে তোলে।", en: "Let customers order directly via WhatsApp in one click. Perfect for converting high-intent leads instantly." }
          },
          {
            icon: LifeBuoy,
            title: { bn: "৩০ দিনের ফ্রি টেকনিক্যাল সাপোর্ট", en: "30-Day Free Tech Support" },
            desc: { bn: "সাইট বুঝিয়ে দেওয়ার পরও ৩০ দিন পর্যন্ত যেকোনো বাগ ফিক্সিং, ব্যাকআপ ও লাইভ ট্রেনিং সম্পূর্ণ বিনামূল্যে পাবেন।", en: "We don't disappear. Get 30 days of free training, bug fixes, and optimization help after launching." }
          }
        ]}
        showcase={[
          {
            image: "/assets/work-nexora.jpg",
            title: { bn: "নেক্সোরা লাক্সারি ফ্যাশন", en: "Nexora Fashion Store" },
            desc: { bn: "আকর্ষণীয় প্রোডাক্ট পেইজ এবং ওয়ান-পেইজ কার্ট ও কুইক চেকআউটসহ প্রিমিয়াম ক্লথিং ব্র্যান্ডের ডিজাইন।", en: "Premium clothing brand design with custom lookbooks, quick filters, and one-page checkout." }
          },
          {
            image: "/assets/work-electrostock.png",
            title: { bn: "ইলেক্ট্রোস্টক গ্যাজেট শপ", en: "ElectroStock Gadgets" },
            desc: { bn: "লাইভ স্টক আপডেট, কাস্টম সার্চ বার এবং ফিল্টারিং সিস্টেমসহ উন্নত গ্যাজেট ও ইলেকট্রনিক্স শপ।", en: "Gadget store with real-time stock sync, advanced tech specification tables, and filters." }
          },
          {
            image: "/assets/work-freshstock.jpg",
            title: { bn: "ফ্রেশস্টক অর্গানিক স্টোর", en: "FreshStock Organic Mart" },
            desc: { bn: "কাস্টমার প্রোফাইল, অর্ডার ট্র্যাকিং এবং ক্যাশ অন ডেলিভারি (COD) পেমেন্টসহ ফ্রেশ গ্রোসারি ও ফুড শপ।", en: "Fresh grocery and organic food storefront with delivery area slots, customer accounts, and COD." }
          }
        ]}
        demos={{
          heading: { bn: "প্রি-বিল্ট ডিজাইন ডেমো", en: "Pre-built Live Demos" },
          subheading: { bn: "আপনার পছন্দের ডেমো সিলেক্ট করুন, ৭ দিনে ডেলিভারি নিন", en: "Choose your favorite design, launched in 7 days" },
          note: { bn: "সবগুলো ডেমো ১০০% রেসপন্সিভ, মোবাইল ফ্রেন্ডলি এবং সেলস অপ্টিমাইজড।", en: "All designs are 100% mobile responsive and conversion optimized." },
          items: [
            { image: wpDemoFashion, name: { bn: "নেক্সোরা লাক্সারি ফ্যাশন", en: "Nexora Luxury Fashion" }, category: { bn: "ফ্যাশন ও লাইফস্টাইল", en: "Fashion" } },
            { image: wpDemoElectronics, name: { bn: "ইলেক্ট্রোস্টক গ্যাজেট শপ", en: "ElectroStock Gadget Shop" }, category: { bn: "ইলেকট্রনিক্স", en: "Electronics" } },
            { image: wpDemoCosmetics, name: { bn: "গ্লো অ্যান্ড কো কসমেটিকস", en: "Glow & Co Cosmetics" }, category: { bn: "সৌন্দর্য ও সাজগোজ", en: "Cosmetics" } },
            { image: wpDemoGrocery, name: { bn: "আজকের গ্রোসারি সুপারস্টোর", en: "Daily Grocery Superstore" }, category: { bn: "গ্রোসারি ও খাদ্য", en: "Grocery" } },
            { image: wpDemoJewellery, name: { bn: "অরূণ জুয়েলারি বুটিক", en: "Aurum Jewellery Boutique" }, category: { bn: "জুয়েলারি", en: "Jewellery" } }
          ]
        }}
        process={[
          { step: "01", title: { bn: "আলোচনা ও পরিকল্পনা", en: "Discover & Scope" }, desc: { bn: "৩০ মিনিটের কলে আপনার ক্যাটালগ সাইজ, ব্র্যান্ড গাইডলাইন ও পেমেন্ট/কুরিয়ার রিকোয়ারমেন্ট ঠিক করা হয়।", en: "A 30-min call to understand your catalog size, brand requirements, and courier setup." } },
          { step: "02", title: { bn: "ডিজাইন ও মকআপ", en: "Design & Customization" }, desc: { bn: "আপনার লোগো ও থিমের সাথে মিলিয়ে ৩ দিনে মকআপ তৈরি। পছন্দ হলে তবেই কোডিং শুরু।", en: "We prepare custom mockups matching your brand color palette and assets in 3 days." } },
          { step: "03", title: { bn: "ডেভেলপমেন্ট ও ইন্টিগ্রেশন", en: "Development & Testing" }, desc: { bn: "পিক্সেল সেটআপ, অটো-পেমেন্ট কানেকশন এবং কুরিয়ার অটো বুকিং ইন্টিগ্রেট করে সাইট রেডি করা।", en: "Coding your storefront, setting up payment pathways, pixel events, and syncing courier APIs." } },
          { step: "04", title: { bn: "লাইভ ও সাপোর্ট", en: "Launch & Support" }, desc: { bn: "ডোমেইন কানেক্ট করে সাইট লাইভ করে ট্রেনিং দেওয়া ও ৩০ দিনের ফ্রী টেকনিক্যাল সাপোর্ট শুরু।", en: "Deploying your store, connecting domain, providing admin training, and starting 30-day support." } }
        ]}
        testimonials={[
          {
            quote: { bn: "Uperskill-এর তৈরি সাইটের স্পিড আর সার্ভার-সাইড Conversions API সেটআপের জন্য আমাদের এডস রিটার্ন অন ইনভেস্টমেন্ট (ROI) দ্বিগুণ হয়েছে। কাস্টমাররাও সহজেই অর্ডার করতে পারে।", en: "Uperskill's server-side Conversions API setup and ultra-fast page speeds doubled our Facebook ads ROI. Customers checkout in seconds on mobile." },
            name: "Nafisa Rahman",
            role: { bn: "ফাউন্ডার, রংধনু লাইফস্টাইল", en: "Founder, Rongdhonu Lifestyle" }
          },
          {
            quote: { bn: "বিকাশ অটো পেমেন্ট ও স্টিডফাস্ট কুরিয়ার অটো-বুকিং ইন্টিগ্রেশনের কারণে আমাদের ডেইলি অর্ডার প্রসেসিং এখন আগের চেয়ে ১০ গুণ সহজ ও দ্রুত হয়েছে।", en: "With bKash auto-payments and Steadfast Courier auto-booking, processing our daily orders is now 10 times faster and hassle-free." },
            name: "Tanvir Ahmed",
            role: { bn: "সিইও, ঢাকা গ্যাজেট হাউজ", en: "CEO, Dhaka Gadget House" }
          },
          {
            quote: { bn: "বাংলাদেশি বাজারে ব্যবসা করার জন্য এরা সেরা। হোয়াটসঅ্যাপ অর্ডার ও ওয়ান-ক্লিক চেকআউট আমাদের রিটার্নিং কাস্টমার বাড়াতে ব্যাপক সাহায্য করেছে।", en: "Best agency for doing e-commerce in BD. The WhatsApp checkout option and quick order form boosted our sales conversion." },
            name: "Sadia Kabir",
            role: { bn: "ওনার, অর্গানিক বিডি", en: "Owner, Organic BD" }
          }
        ]}
        plans={[
          {
            name: "Basic",
            tagline: { bn: "১ সপ্তাহে রেডিমেড শপ লঞ্চ করুন", en: "Ready-made store in 1 week" },
            price: bn ? "৳৩,৯৯৯" : "৳3,999",
            features: [
              { bn: "বিকাশ/নগদ ম্যানুয়াল পেমেন্ট", en: "bKash & Nagad Manual Setup" },
              { bn: "১০০% রেসপন্সিভ মোবাইল থিম", en: "100% Mobile Responsive Theme" },
              { bn: "হোয়াটসঅ্যাপ কুইক অর্ডার বাটন", en: "WhatsApp Quick Order Button" },
              { bn: "২৫০টি প্রোডাক্ট আপলোড সুবিধা", en: "Upload up to 250 Products" },
              { bn: "সম্পূর্ণ ফ্রি ক্লাউড হোস্টিং", en: "Free Cloud Hosting" }
            ]
          },
          {
            name: "Business",
            tagline: { bn: "কাস্টম ডেমো ও পিক্সেল এপিআই সেটআপ", en: "Custom domain & pixel API setup" },
            price: bn ? "৳৮,৯৯৯" : "৳8,999",
            featured: true,
            features: [
              { bn: "বিকাশ/নগদ অটো পেমেন্ট গেটওয়ে", en: "bKash & Nagad Auto Gateways" },
              { bn: "কুরিয়ার অটোমেটিক বুকিং ইন্টিগ্রেশন", en: "Courier Automatic Booking" },
              { bn: "ফেসবুক পিক্সেল ও CAPI ট্র্যাকিং", en: "Facebook Pixel & Conversions API" },
              { bn: "ফ্রি ডোমেইন ও হোস্টিং (১ বছর)", en: "Free Domain & Hosting (1 Year)" },
              { bn: "১০০০টি প্রোডাক্ট আপলোড সুবিধা", en: "Upload up to 1,000 Products" },
              { bn: "সম্পূর্ণ কাস্টম রিয়্যাক্ট কোড ফাইল", en: "Custom React/Vue.js Code Files" }
            ]
          },
          {
            name: "Enterprise",
            tagline: { bn: "লার্জ-স্কেল ব্র্যান্ড শপ ইকোসিস্টেম", en: "Large-scale brand ecosystem" },
            price: bn ? "৳আলোচনা সাপেক্ষে" : "Custom",
            cta: { bn: "যোগাযোগ করুন", en: "Talk to Sales" },
            features: [
              { bn: "আনলিমিটেড প্রোডাক্ট ও হোস্টিং", en: "Unlimited Products & Hosting" },
              { bn: "মাল্টি-ভেন্ডর বা কাস্টম ERP কানেক্টিভিটি", en: "Multi-vendor or Custom ERP" },
              { bn: "উন্নত স্পিড অপ্টিমাইজেশন (LCP < 1.0s)", en: "Premium Speed Optimization" },
              { bn: "ডেডিকেটেড অ্যাকাউন্ট ম্যানেজার", en: "Dedicated Account Manager" },
              { bn: "২৪/৭ প্রায়োরিটি কলার সাপোর্ট", en: "24/7 Priority Phone Support" }
            ]
          }
        ]}
        faq={[
          {
            q: { bn: "অটো পেমেন্ট গেটওয়ে সেটআপ করতে কি কি লাগবে?", en: "What is needed to set up auto payment gateways?" },
            a: { bn: "বিকাশ/নগদ অটো পেমেন্ট গেটওয়ে সেটআপ করতে আমরা SSLCommerz, Shurjopay বা AmarPay-র মাধ্যমে কানেক্ট করে দেব। আপনি পার্সোনাল বিকাশ নম্বরে কাস্টমার সেন্ড-মানি করতে চাইলে ম্যানুয়াল পেমেন্ট সিস্টেম ওয়ান-ক্লিকেই কনফিগার করা সম্ভব।", en: "To set up automated bKash/Nagad gateways, we integrate merchant accounts via SSLCommerz, Shurjopay, or AmarPay. If you don't have a business account, you can also use our manual customer-friendly bKash/Nagad wallet transfer form." }
          },
          {
            q: { bn: "স্টিডফাস্ট/পাঠাও কুরিয়ার বুকিং কিভাবে কাজ করবে?", en: "How does the courier auto-booking work?" },
            a: { bn: "আপনার অ্যাডমিন প্যানেল থেকে একটি বাটনে ক্লিক করলেই কাস্টমারের নাম, মোবাইল ও ঠিকানা সরাসরি কুরিয়ারের পোর্টালে পার্সেল হিসেবে বুকিং হয়ে যাবে। কোনো ম্যানুয়াল কপি-পেস্ট লাগবে না এবং ট্র্যাকিং আইডি অটোমেটিক জেনারেট হবে।", en: "With just one click from your admin panel, the customer's name, phone, and address are automatically booked as a parcel inside your courier account. There is no manual copying required, and the tracking ID is generated instantly." }
          },
          {
            q: { bn: "ফেসবুক বিজ্ঞপ্তির পিক্সেল সেটআপ কি অন্তর্ভুক্ত?", en: "Is Facebook Pixel and Conversions API included?" },
            a: { bn: "হ্যাঁ, আমাদের বিজনেস ও এন্টারপ্রাইজ প্ল্যানে ফেসবুক পিক্সেল এবং সার্ভার-সাইড Conversions API (CAPI) ইন্টিগ্রেশন অন্তর্ভুক্ত। এটি নিশ্চিত করে যে কোনো আইফোন কাস্টমার বা অ্যাড-ব্লকার ব্যবহারকারী আপনার প্রোডাক্ট কিনলেও সঠিক ডাটা ট্র্যাক হবে।", en: "Yes, our Business and Enterprise plans include full Facebook Pixel and server-side Conversions API (CAPI) setup. This ensures accurate ad reporting even when customers use iOS devices or ad-blockers." }
          },
          {
            q: { bn: "সাইট ডেভেলপমেন্ট করতে কত দিন সময় লাগে?", en: "How long does the development take?" },
            a: { bn: "আমাদের বেসিক প্ল্যানের স্টোর মাত্র ৫ থেকে ৭ দিনে ডেলিভারি করা সম্ভব। বিজনেস প্ল্যানের সাইটের জন্য ২ থেকে ৩ সপ্তাহ এবং কাস্টম প্রজেক্টের ক্ষেত্রে কাজের পরিধির ওপর ভিত্তি করে সময় নির্ধারণ করা হয়।", en: "Basic plan stores are launched in 5 to 7 days. Business builds take 2 to 3 weeks, and custom Enterprise projects depend on the specific features and scope." }
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