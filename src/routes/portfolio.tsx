import { createFileRoute } from "@tanstack/react-router";
import { Camera, Sparkles, Type, Search, Moon, Gauge } from "lucide-react";
import { ServiceLanding } from "@/components/site/ServiceLanding";
import { useLang } from "@/hooks/use-language";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio Website Development BD — Uperskill" },
      {
        name: "description",
        content:
          "ক্রিয়েটর, ফ্রিল্যান্সার ও কনসালট্যান্টদের জন্য প্রিমিয়াম পার্সোনাল ওয়েবসাইট ডেভেলপমেন্ট। Beautiful personal portfolio websites for creators, freelancers and consultants. From ৳1,999.",
      },
      { property: "og:title", content: "Portfolio Website Development BD — Uperskill" },
      {
        property: "og:description",
        content:
          "Beautiful personal portfolio websites for BD creators, freelancers and consultants. Basic, Business & Enterprise plans.",
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
  component: () => {
    const { lang } = useLang();
    const bn = lang === "bn";

    return (
      <ServiceLanding
        eyebrow={{ bn: "পোর্টফোলিও ওয়েবসাইট ডেভেলপমেন্ট 💼", en: "Portfolio Website Development 💼" }}
        title={
          bn ? (
            <>
              পার্সোনাল ব্র্যান্ড যা নতুন ক্লায়েন্ট ও <span className="text-gradient">কাজ আকর্ষণ করে।</span>
            </>
          ) : (
            <>
              A personal brand that <span className="text-gradient">closes clients.</span>
            </>
          )
        }
        subtitle={{
          bn: "ক্রিয়েটর, ফ্রিল্যান্সার ও কনসালট্যান্টদের জন্য প্রিমিয়াম পার্সোনাল ওয়েবসাইট। গুগল সার্চে র্যাংক করা, আল্ট্রা-ফাস্ট স্পিড ও আধুনিক অ্যানিমেশন ইন-বিল্ট।",
          en: "For creators, freelancers and consultants — a polished personal website that ranks on Google and looks premium on the phone your client actually opens it on."
        }}
        heroImage="/assets/work-basic-portfolio.png"
        heroImageAlt="Animated portfolio website preview"
        stats={[
          { value: "২০০+", label: { bn: "পোর্টফোলিও প্রজেক্ট ডেলিভারি", en: "Portfolios Shipped" } },
          { value: "৯৮/১০০", label: { bn: "গড় লাইটহাউস স্পিড স্কোর", en: "Lighthouse Score" } },
          { value: "৩ গুণ+", label: { bn: "ইনকোয়ারি ও ক্লায়েন্ট লিড বৃদ্ধি", en: "Avg Inquiry Lift" } },
          { value: "৭ দিন", label: { bn: "ডেলিভারি সময়", en: "Turnaround" } }
        ]}
        features={[
          {
            icon: Type,
            title: { bn: "অসাধারণ টাইপোগ্রাফি Look", en: "Typography that sings" },
            desc: { bn: "হিন্দ শিলিগুড়ি, শরিফা বা গুগলের আধুনিক ফন্ট পেয়ারিং। সাধারণ টেমপ্লেটের মত নয়, একদম ইউনিক লুক।", en: "Hind Siliguri + Noto Serif or a global pair — real type craft, not template defaults." }
          },
          {
            icon: Camera,
            title: { bn: "কেস-স্টাডি ও প্রজেক্ট গ্যালারি", en: "Case-study ready" },
            desc: { bn: "আপনার কাজকে আকর্ষণীয় করে তুলতে কেস স্টাডি লেআউট, ইমেজ গ্যালারি ও ক্লায়েন্ট রিভিউ সেকশন সেটআপ।", en: "Project layouts, image galleries and testimonials wired up from day one." }
          },
          {
            icon: Sparkles,
            title: { bn: "মোশন এবং মসৃণ অ্যানিমেশন", en: "Motion & polish" },
            desc: { bn: "হালকা থ্রিডি ইফেক্ট, স্ক্রোল অ্যানিমেশন এবং ডার্ক মোড সরাসরি অন্তর্ভুক্ত।", en: "Subtle 3D animations, hover states and dark mode included — no upsells." }
          },
          {
            icon: Search,
            title: { bn: "সার্চ ইঞ্জিন অপ্টিমাইজেশন (SEO)", en: "SEO baked in" },
            desc: { bn: "আপনার নিজের নাম দিয়ে সার্চ করলেই যাতে গুগল সার্চে ১ নম্বরে আসে তার জন্য প্রপার এসইও ডাটা সেটআপ।", en: "Structured data, sitemap, og-images — you rank for your own name." }
          },
          {
            icon: Moon,
            title: { bn: "ডার্ক মোড অটোমেটিক", en: "Dark mode default" },
            desc: { bn: "লাইট ও ডার্ক উভয় থিমেই ওয়েবসাইটটি দেখতে দুর্দান্ত লাগবে। ভিজিটরের পছন্দ অনুযায়ী ব্রাউজার মনে রাখবে।", en: "Beautiful in both themes, remembered per visitor." }
          },
          {
            icon: Gauge,
            title: { bn: "রকেটের মত স্পিড", en: "Blazing fast" },
            desc: { bn: "মোবাইল ৩জি বা ৪জি নেটওয়ার্কেও ২ সেকেন্ডের কম সময়ে সাইট লোড হবে। গুগল কোর ওয়েব ভাইটালস পাস।", en: "Core Web Vitals green out of the box — LCP < 2s on 4G." }
          }
        ]}
        showcase={[
          {
            image: "/assets/work-basic-portfolio.png",
            title: { bn: "ডিজিটাল ক্রিয়েটর পোর্টফোলিও", en: "Editorial Case Study" },
            desc: { bn: "আপনার পার্সোনাল ব্র্যান্ডিং ও কাজের প্রজেক্ট হাইলাইট করার জন্য ক্লিন ইন্টারফেস।", en: "Long-form project pages that tell the story." }
          },
          {
            image: "/assets/work-portfolio-design.png",
            title: { bn: "ইউএক্স ডিজাইনার শোকেস", en: "UX/UI Showcase Site" },
            desc: { bn: "কাস্টম ডার্ক মোড, কাজের গ্যালারি এবং ফিডব্যাক স্লাইডারসহ ডিজাইনার পোর্টফোলিও।", en: "High-fidelity portfolio with client reviews and Figma integrations." }
          }
        ]}
        process={[
          { step: "01", title: { bn: "ব্র্যান্ড স্টোরি সেশন", en: "Voice & Scope" }, desc: { bn: "৩০ মিনিটের কলে আপনার কাজের ধরণ, টার্গেট অডিয়েন্স ও পছন্দের ডিজাইন লেআউট সিলেক্ট করা।", en: "30-min discovery — your story, tone, case studies, and targets." } },
          { step: "02", title: { bn: "লেআউট ও সেকশন ডিজাইন", en: "Structure Setup" }, desc: { bn: "হোম, প্রজেক্টস, এবাউট এবং কন্টাক্ট সেকশনের কাস্টম স্কেচ ও টাইপোগ্রাফি ফাইনালাইজেশন।", en: "Wireframes and design matching your personal tone and palette." } },
          { step: "03", title: { bn: "ডেভেলপমেন্ট ও এসইও", en: "Development & SEO" }, desc: { bn: "রিয়্যাক্ট বা পিওর এইচটিএমএল দিয়ে সাইট কোড করা এবং সম্পূর্ণ গুগল এসইও ডাটা কনফিগারেশন।", en: "Coding your personal portfolio and setting up SEO meta/sitemaps." } },
          { step: "04", title: { bn: "গো-লাইভ ও ডোমেইন কানেক্ট", en: "Launch & Connect" }, desc: { bn: "ডোমেইন কানেক্ট করে গুগল সার্চ কনসোলে সাইট ইনডেক্সিং এবং ৩০ দিনের টেকনিক্যাল সাপোর্ট শুরু।", en: "Domain connected, analytics live, sitemap submitted to Google." } }
        ]}
        testimonials={[
          {
            quote: { bn: "আমার নতুন পোর্টফোলিও সাইট লঞ্চ করার প্রথম মাসেই আমি সরাসরি তিনটি ক্লায়েন্ট পেয়েছি।", en: "I closed three high-ticket clients in the first month after launching my personal site." },
            name: "Rasel Mahmud",
            role: { bn: "ফ্রিল্যান্স ভিজ্যুয়াল ডিজাইনার", en: "Freelance Designer" }
          },
          {
            quote: { bn: "সাইটের টাইপোগ্রাফি আর মসৃণ অ্যানিমেশন ক্লায়েন্টদের খুব আকৃষ্ট করে। কাজের কোয়ালিটি অনেক বেশি প্রফেশনাল মনে হয়।", en: "The typography and motion make it feel expensive — clients notice." },
            name: "Ayesha Chowdhury",
            role: { bn: "ব্র্যান্ড অ্যান্ড পিআর কনসালট্যান্ট", en: "Brand Consultant" }
          },
          {
            quote: { bn: "আমার নিজের নামের কীওয়ার্ডে গুগল সার্চে এক সপ্তাহের মধ্যে ১ নম্বরে র্যাঙ্ক করেছি। টাকা উসুল সার্ভিস!", en: "Best money I've spent on my personal brand. Ranked #1 for my name in a week." },
            name: "Kamrul Islam",
            role: { bn: "পোর্ট্রেট ও ফটোগ্রাফার", en: "Portrait Photographer" }
          }
        ]}
        plans={[
          {
            name: "Basic",
            tagline: { bn: "দ্রুত ওয়ান-পেইজার পোর্টফোলিও লঞ্চ করুন", en: "Launch a one-pager fast" },
            price: bn ? "৳১,৯৯৯" : "৳1,999",
            features: [
              { bn: "উপারস্কিল হোস্টিং কানেকশন", en: "Lovable Host + Cloud Pro" },
              { bn: "কোনো লোগো ওয়াটারমার্ক থাকবে না", en: "No Watermark" },
              { bn: "১০০% রেসপন্সিভ মোবাইল ডিজাইন", en: "Fully Responsive Layout" },
              { bn: "আনলিমিটেড ফ্রি হোস্টিং সময়কাল", en: "Unlimited Hosting Time" },
              { bn: "৬টি সেকশন পর্যন্ত কন্টেন্ট", en: "Up to 6 sections" }
            ]
          },
          {
            name: "Business",
            tagline: { bn: "মাল্টি-পেইজ প্রফেশনাল ব্র্যান্ড ওয়েবসাইট", en: "Multi-page personal brand site" },
            price: bn ? "৳৪,৯৯৯" : "৳4,999",
            featured: true,
            features: [
              { bn: "ডট কম (.com) ডোমেইন ও হোস্টিং (১ বছর)", en: "Domain + Hosting (1 Year)" },
              { bn: "কাস্টম রিয়্যাক্ট / কোডেড ডিজাইন", en: "Custom React Code" },
              { bn: "১০০% মোবাইল ফ্রেন্ডলি ও রেসপন্সিভ", en: "Fully Responsive" },
              { bn: "১৫টি প্রজেক্ট বা কেস স্টাডি সেকশন", en: "Up to 15 Case Studies" },
              { bn: "ব্লগিং প্ল্যাটফর্ম ও কন্টাক্ট ফর্ম", en: "Blog + Contact Form" }
            ]
          },
          {
            name: "Enterprise",
            tagline: { bn: "সিগনেচার ব্র্যান্ড ও ফুল কোড ওনারশিপ", en: "Signature brand & full ownership" },
            price: bn ? "৳আলোচনা সাপেক্ষে" : "Custom",
            cta: { bn: "যোগাযোগ করুন", en: "Talk to Sales" },
            features: [
              { bn: "ডোমেইন ও প্রিমিয়াম হোস্টিং (১ বছর)", en: "Domain + Hosting (1 Year)" },
              { bn: "আনলিমিটেড পেইজ ও আনলিমিটেড কেস স্টাডি", en: "Unlimited Pages & Case Studies" },
              { bn: "ফুল সোর্স কোড ফাইল হ্যান্ডওভার", en: "Full Source Code Files" },
              { bn: "লাইফটাইম সাপোর্ট ও মেইনটেনেন্স", en: "Ongoing Design Retainer" },
              { bn: "২৪/৭ প্রায়োরিটি ফোন সাপোর্ট", en: "24/7 Priority Support" }
            ]
          }
        ]}
        faq={[
          {
            q: { bn: "কপিরাইটিং বা কন্টেন্ট কি আপনারা লিখে দেবেন?", en: "Do you write my copy?" },
            a: { bn: "আমরা আপনাকে গাইডলাইন এবং ডামি টেক্সট প্রোভাইড করব। তবে প্রফেশনাল কপিরাইটিং বা কন্টেন্ট রাইটিং প্রয়োজন হলে আমাদের টিম সামান্য খরচে আপনার কাজের বর্ণনা লিখে দেবে।", en: "We help format and structure your text. If you need professional content writing, we offer copywriting as an add-on." }
          },
          {
            q: { bn: "গুগলে র্যাংক করতে কত দিন সময় লাগবে?", en: "How long does Google indexing take?" },
            a: { bn: "সাইট লাইভ করার ২৪ ঘণ্টার মধ্যে আমরা গুগল সার্চ কনসোলে সাবমিট করি। সাধারণত ৩ থেকে ৭ দিনের মধ্যে আপনার নাম লিখে সার্চ দিলে সাইট চলে আসে।", en: "We submit to Google Search Console on launch. Usually, indexing takes 3 to 7 days for your name keyword." }
          },
          {
            q: { bn: "আমি কি নিজে নিজে প্রজেক্ট এড করতে পারব?", en: "Can I update the portfolio myself?" },
            a: { bn: "হ্যাঁ, আমাদের বিজনেস ও এন্টারপ্রাইজ প্ল্যানে একটি সহজ অ্যাডমিন প্যানেল থাকে, যা দিয়ে আপনি কোনো কোডিং ছাড়াই নতুন প্রজেক্ট, কেস স্টাডি বা ব্লগ পোস্ট অ্যাড করতে পারবেন।", en: "Yes — you get a simple CMS panel on Business and Enterprise so you can edit projects and blog posts without coding." }
          }
        ]}
      />
    );
  }
});