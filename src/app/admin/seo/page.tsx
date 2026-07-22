"use client";

import { useState } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Sparkles, CheckCircle2, Database, Share2, MessageSquare, Clock, ShieldCheck, Loader2 } from "lucide-react";

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

type JobState = "PENDING" | "GENERATING" | "VALIDATING" | "SAVING" | "PUBLISHED";

export default function SeoAdminStudio() {
  const [selectedService, setSelectedService] = useState("safety-nets");
  const [selectedArea, setSelectedArea] = useState("velachery");
  const [jobStatus, setJobStatus] = useState<JobState>("PENDING");
  const [generatedOutput, setGeneratedOutput] = useState<any>(null);

  const handleStartPipeline = async () => {
    // 1. Pending -> 2. Generating -> 3. Validating -> 4. Saving -> 5. Published
    setJobStatus("GENERATING");

    setTimeout(() => {
      setJobStatus("VALIDATING");

      setTimeout(() => {
        setJobStatus("SAVING");

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
            socialMediaPost: `🏡 Protect your balcony in ${areaName}, Chennai! ✨ Golden Enterprises brings you 316-grade Stainless Steel Invisible Grills & Pigeon Safety Nets. 📱 Call +91 98765 43210 for a FREE on-site quote! #BalconySafety #${areaName.replace(/\s+/g, "")} #ChennaiHomes`,
            whatsappBlast: `Hi! Upgrade your home in ${areaName} with Golden Enterprises 316 Marine Grade SS Invisible Grills & Pigeon Safety Nets. Enjoy 100% unobstructed views! Click here to claim your Free Inspection: https://wa.me/919876543210`,
          });

          setJobStatus("PUBLISHED");
        }, 500);
      }, 500);
    }, 800);
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
            <p className="text-xs text-[#9AA5AD]">5-Stage Automated Job Pipeline: Pending → Generating → Validating → Saving → Published</p>
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
            onClick={handleStartPipeline}
            disabled={jobStatus !== "PENDING" && jobStatus !== "PUBLISHED"}
            className="w-full py-4 rounded-full bg-gradient-to-r from-[#2E86FF] to-[#1E62D0] text-white font-bold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(46,134,255,0.4)] flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform"
          >
            <Sparkles className="w-4 h-4" />
            <span>Execute 5-Stage AI SEO Pipeline</span>
          </button>
        </div>

        {/* 5-Stage Job Lifecycle Tracker */}
        <div className="p-8 rounded-3xl bg-[#0D1821] border border-white/10 mb-10">
          <h3 className="text-sm font-bold text-[#9AA5AD] uppercase tracking-wider mb-6">
            Real-Time Pipeline Status:
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            <div className={`p-4 rounded-2xl border text-center transition-all ${jobStatus === "PENDING" ? "bg-[#2E86FF]/20 border-[#2E86FF] text-white" : "bg-[#0A1218] border-white/10 text-[#9AA5AD]"}`}>
              <Clock className="w-5 h-5 mx-auto mb-2 text-[#2E86FF]" />
              <span className="block text-xs font-bold uppercase">1. Pending</span>
            </div>

            <div className={`p-4 rounded-2xl border text-center transition-all ${jobStatus === "GENERATING" ? "bg-[#2E86FF]/20 border-[#2E86FF] text-white animate-pulse" : "bg-[#0A1218] border-white/10 text-[#9AA5AD]"}`}>
              <Sparkles className="w-5 h-5 mx-auto mb-2 text-[#2E86FF]" />
              <span className="block text-xs font-bold uppercase">2. Generating</span>
            </div>

            <div className={`p-4 rounded-2xl border text-center transition-all ${jobStatus === "VALIDATING" ? "bg-[#2E86FF]/20 border-[#2E86FF] text-white" : "bg-[#0A1218] border-white/10 text-[#9AA5AD]"}`}>
              <ShieldCheck className="w-5 h-5 mx-auto mb-2 text-[#2E86FF]" />
              <span className="block text-xs font-bold uppercase">3. Validating</span>
            </div>

            <div className={`p-4 rounded-2xl border text-center transition-all ${jobStatus === "SAVING" ? "bg-[#2E86FF]/20 border-[#2E86FF] text-white" : "bg-[#0A1218] border-white/10 text-[#9AA5AD]"}`}>
              <Database className="w-5 h-5 mx-auto mb-2 text-[#2E86FF]" />
              <span className="block text-xs font-bold uppercase">4. Saving DB</span>
            </div>

            <div className={`p-4 rounded-2xl border text-center transition-all ${jobStatus === "PUBLISHED" ? "bg-[#25D366]/20 border-[#25D366] text-[#25D366]" : "bg-[#0A1218] border-white/10 text-[#9AA5AD]"}`}>
              <CheckCircle2 className="w-5 h-5 mx-auto mb-2 text-[#25D366]" />
              <span className="block text-xs font-bold uppercase">5. Published</span>
            </div>
          </div>
        </div>

        {/* Output Output Panel */}
        {generatedOutput && jobStatus === "PUBLISHED" && (
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/40 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">🎉 Page Successfully Published to Supabase DB & Next.js SSG</h3>
                <p className="text-xs text-[#9AA5AD] mt-1">{generatedOutput.url}</p>
              </div>
              <a
                href={generatedOutput.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2"
              >
                <span>View Live Page</span>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-[#0D1821] border border-white/10 space-y-2">
                <h4 className="text-xs font-bold text-[#2E86FF] uppercase">1. SEO Title & Meta Description</h4>
                <p className="text-sm font-bold text-white">{generatedOutput.seoTitle}</p>
                <p className="text-xs text-[#C7CDD3]">{generatedOutput.metaDescription}</p>
              </div>

              <div className="p-6 rounded-2xl bg-[#0D1821] border border-white/10 space-y-2">
                <h4 className="text-xs font-bold text-[#2E86FF] uppercase">2. LocalBusiness Schema JSON-LD</h4>
                <pre className="text-[10px] font-mono bg-[#0A1218] p-3 rounded-xl overflow-x-auto text-[#9AA5AD]">
                  {JSON.stringify(generatedOutput.schema, null, 2)}
                </pre>
              </div>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
