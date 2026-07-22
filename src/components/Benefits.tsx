"use client";

import { ShieldCheck, Eye, Wind, Award } from "lucide-react";

interface BenefitsProps {
  serviceTitle: string;
  areaName: string;
}

export default function Benefits({ serviceTitle, areaName }: BenefitsProps) {
  const BENEFITS_LIST = [
    {
      icon: Eye,
      title: "100% Unobstructed Balcony View",
      desc: "Ultra-thin 316-grade stainless steel cables and fine nylon mesh provide complete safety while preserving your panoramic outdoor view.",
    },
    {
      icon: ShieldCheck,
      title: "Child & Pet Fall Protection",
      desc: "High-tensile cables tested to withstand up to 400 kg breaking force, preventing accidental balcony falls for toddlers and pets.",
    },
    {
      icon: Wind,
      title: "Coastal Anti-Rust Weatherproofing",
      desc: "Marine-grade SS 316 alloy and UV-stabilized copolymer nylon withstand Chennai salt air, heavy monsoon rains, and intense heat.",
    },
    {
      icon: Award,
      title: "Multi-Year Warranty Certificate",
      desc: "Official Golden Enterprises written warranty covering wire strength, tension stability, and mounting bracket durability.",
    },
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-white uppercase">
          Key Benefits of <span className="text-wire-gradient">{serviceTitle}</span> in {areaName}
        </h2>
        <p className="text-xs text-[#9AA5AD] mt-2">Why high-rise homeowners in {areaName} trust Golden Enterprises</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {BENEFITS_LIST.map((b, idx) => {
          const Icon = b.icon;
          return (
            <div key={idx} className="p-6 rounded-2xl bg-[#0D1821] border border-white/10 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#2E86FF]/10 flex items-center justify-center text-[#2E86FF]">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">{b.title}</h3>
              <p className="text-xs text-[#C7CDD3] leading-relaxed font-light">{b.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
