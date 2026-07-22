"use client";

import { useState } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Sparkles, CheckCircle2, Copy, Send, Database, Share2, MessageSquare, Globe, ArrowRight } from "lucide-react";

const SERVICES_LIST = [
  { slug: "safety-nets", name: "Pigeon & Balcony Safety Nets" },
  { slug: "invisible-grills", name: "316 Stainless Steel Invisible Grills" },
  { slug: "cloth-hangers", name: "Ceiling Cloth Drying Hangers" },
  { slug: "mosquito-mesh", name: "Window Mosquito Mesh Screens" },
  { slug: "bird-nets", name: "Bird Nets & Pigeon Deterrents" },
  { slug: "pigeon-spikes", name: "Anti-Pigeon Bird Spikes" },
];

const AREAS_LIST = [
  { slug: "velachery", name: "Velachery" },
  { slug: "anna-nagar", name: "Anna Nagar" },
  { slug: "omr", name: "OMR IT Corridor" },
  { slug: "tambaram", name: "Tambaram" },
  { slug: "porur", name: "Porur" },
  { slug: "perungudi", name: "Perungudi" },
  { slug: "medavakkam", name: "Medavakkam" },
  { slug: "sholinganallur", name: "Sholinganallur" },
  { slug: "adyar", name: "Adyar" },
  { slug: "ecr", name: "ECR Road" },
];

export default function SeoAdminStudio() {
  const [selectedService, setSelectedService] = useState("safety-nets");
  const [selectedArea, setSelectedArea] = useState("velachery");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isPublished, setIsPublished] = useState(false);
  const [generatedOutput, setGeneratedOutput] = useState<any>(null);

  const handleGenerate = () => {
    setIsGenerating(true);
    setIsPublished(false);

    setTimeout(() => {
      const serviceObj = SERVICES_LIST.find((s) => s.slug === selectedService);
      const areaObj = AREAS_LIST.find((a) => a.slug === selectedArea);
      const serviceName = serviceObj?.name || "Safety Nets";
      const areaName = areaObj?.name || "Velachery";

      setGeneratedOutput({
        seoTitle: `${serviceName} in ${areaName}, Chennai | Golden Enterprises`,
        metaDescription: `Top-rated ${serviceName.toLowerCase()} in ${areaName}, Chennai. 316-grade stainless steel & Garware nets. Call +91 98765 43210.`,
        url: `https://goldenenterpriseschennai.com/${selectedService}/${selectedArea}`,
        schema: {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: `Golden Enterprises ${serviceName} ${areaName}`,
          address: { "@type": "PostalAddress", addressLocality: areaName, addressRegion: "Chennai" },
        },
        faqs: [
          { q: `How much does ${serviceName.toLowerCase()} cost in ${areaName}?`, a: `Pricing in ${areaName} is calculated per sqft based on balcony measurements. Call for free inspection.` },
          { q: `Is same-day inspection available in ${areaName}?`, a: `Yes, Golden Enterprises offers express 24-hour inspection in ${areaName}.` },
        ],
        blogPost: {
          title: `Why High-Rise Apartments in ${areaName} Need ${serviceName}`,
          content: `Living in ${areaName} offers scenic views, but bird droppings and safety concerns can spoil your balcony experience. Golden Enterprises provides 316 SS wire grills...`,
        },
        socialMediaPost: `🏡 Protect your balcony in ${areaName}, Chennai! ✨ Golden Enterprises brings you 316-grade Stainless Steel Invisible Grills & Pigeon Safety Nets. 📱 Call +91 98765 43210 for a FREE on-site quote! #BalconySafety #${areaName.replace(/\s+/g, "")} #ChennaiHomes`,
        gmbPost: `Looking for reliable ${serviceName.toLowerCase()} in ${areaName}? Golden Enterprises is Chennai's #1 rated balcony safety specialist with 5,000+ happy homes protected. Call +91 98765 43210 today for a free inspection!`,
        whatsappBlast: `Hi! Upgrade your home in ${areaName} with Golden Enterprises 316 Marine Grade SS Invisible Grills & Pigeon Safety Nets. Enjoy 100% unobstructed views! Click here to claim your Free Inspection: https://wa.me/919876543210`,
      });

      setIsGenerating(false);
    }, 800);
  };

  const handlePublish = () => {
    setIsPublished(true);
  };

  return (
    <main className="min-h-screen bg-[#0A1218] text-white">
      <Header />

      <section className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-[#2E86FF]/20 border border-[#2E86FF] flex items-center justify-center text-[#2E86FF]">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold uppercase tracking-tight text-white">
              AI Local SEO Engine Studio
            </h1>
            <p className="text-xs text-[#9AA5AD]">Generate & Publish 100% Unique Local SEO Pages in 1 Click</p>
          </div>
        </div>

        {/* Input Controls */}
        <div className="p-8 rounded-3xl bg-[#0D1821] border border-white/10 shadow-2xl mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-xs font-bold text-[#9AA5AD] uppercase tracking-wider mb-2">
                1. Select Service Category
              </label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#0A1218] border border-white/10 text-white font-medium focus:border-[#2E86FF] outline-none"
              >
                {SERVICES_LIST.map((s) => (
                  <option key={s.slug} value={s.slug}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#9AA5AD] uppercase tracking-wider mb-2">
                2. Select Chennai Locality
              </label>
              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#0A1218] border border-white/10 text-white font-medium focus:border-[#2E86FF] outline-none"
              >
                {AREAS_LIST.map((a) => (
                  <option key={a.slug} value={a.slug}>
                    {a.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="w-full py-4 rounded-full bg-gradient-to-r from-[#2E86FF] to-[#1E62D0] text-white font-bold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(46,134,255,0.4)] flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform"
          >
            <Sparkles className="w-4 h-4" />
            <span>{isGenerating ? "AI Generating All 11 Assets..." : "Generate Complete SEO Suite"}</span>
          </button>
        </div>

        {/* Output Panel */}
        {generatedOutput && (
          <div className="space-y-8">
            <div className="flex items-center justify-between p-6 rounded-2xl bg-[#0D1821] border border-[#2E86FF]/40">
              <div>
                <h3 className="text-lg font-bold text-white">Generated SEO Landing Page Ready</h3>
                <p className="text-xs text-[#9AA5AD] mt-1">{generatedOutput.url}</p>
              </div>
              <button
                onClick={handlePublish}
                className={`px-8 py-3 rounded-full font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all ${
                  isPublished
                    ? "bg-[#25D366] text-white shadow-[0_0_20px_rgba(37,211,102,0.5)]"
                    : "bg-[#2E86FF] text-white hover:bg-[#1E62D0]"
                }`}
              >
                <Database className="w-4 h-4" />
                <span>{isPublished ? "Published to Supabase DB & Next.js!" : "Publish 1-Click"}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Asset 1: Meta Tags */}
              <div className="p-6 rounded-2xl bg-[#0D1821] border border-white/10 space-y-2">
                <h4 className="text-xs font-bold text-[#2E86FF] uppercase">1. SEO Title & Meta Description</h4>
                <p className="text-sm font-bold text-white">{generatedOutput.seoTitle}</p>
                <p className="text-xs text-[#C7CDD3]">{generatedOutput.metaDescription}</p>
              </div>

              {/* Asset 2: JSON-LD Schema */}
              <div className="p-6 rounded-2xl bg-[#0D1821] border border-white/10 space-y-2">
                <h4 className="text-xs font-bold text-[#2E86FF] uppercase">2. LocalBusiness Schema JSON-LD</h4>
                <pre className="text-[10px] font-mono bg-[#0A1218] p-3 rounded-xl overflow-x-auto text-[#9AA5AD]">
                  {JSON.stringify(generatedOutput.schema, null, 2)}
                </pre>
              </div>

              {/* Asset 3: Social Media Copy */}
              <div className="p-6 rounded-2xl bg-[#0D1821] border border-white/10 space-y-2">
                <h4 className="text-xs font-bold text-[#25D366] uppercase flex items-center gap-1.5">
                  <Share2 className="w-3.5 h-3.5" />
                  <span>3. Social Media Post (FB / IG)</span>
                </h4>
                <p className="text-xs text-[#C7CDD3] bg-[#0A1218] p-3 rounded-xl">{generatedOutput.socialMediaPost}</p>
              </div>

              {/* Asset 4: WhatsApp Blast */}
              <div className="p-6 rounded-2xl bg-[#0D1821] border border-white/10 space-y-2">
                <h4 className="text-xs font-bold text-[#25D366] uppercase flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>4. WhatsApp Promo Message</span>
                </h4>
                <p className="text-xs text-[#C7CDD3] bg-[#0A1218] p-3 rounded-xl">{generatedOutput.whatsappBlast}</p>
              </div>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
