"use client";

import { motion } from "framer-motion";
import { Calculator, ArrowRight, CheckCircle2, HelpCircle } from "lucide-react";
import GlowButton from "../ui/GlowButton";

const ESTIMATE_CARDS = [
  {
    title: "Small Balcony",
    sqft: "~50 Sq. Ft.",
    suitableFor: "Standard 1-BHK / Studio balcony windows & utility drying areas.",
    indicativePrice: "₹[Custom Quote / Sqft]",
    features: [
      "316-Grade Stainless Steel Wire Option",
      "Pigeon Safety Netting Option",
      "Free Measurement & Inspection",
      "Same-Week Installation",
    ],
  },
  {
    title: "Medium Balcony",
    sqft: "~100 Sq. Ft.",
    suitableFor: "2-BHK / 3-BHK master balcony enclosures and bedroom windows.",
    indicativePrice: "₹[Custom Quote / Sqft]",
    isPopular: true,
    features: [
      "Choice of 2mm / 3mm SS Cable Spec",
      "UV-Stabilized Weatherproof Net",
      "Child & Pet Safety Guarantee",
      "Multi-Year Workmanship Warranty",
    ],
  },
  {
    title: "Large Terrace",
    sqft: "~200+ Sq. Ft.",
    suitableFor: "Duplex penthouse terraces, open sky decks, and multi-side balconies.",
    indicativePrice: "₹[Custom Quote / Sqft]",
    features: [
      "Custom Structural Frame Mounting",
      "Combination Net + Grill Solution",
      "High-Rise Coastal Wind Resistance",
      "Priority Installation Team",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 bg-[#0A1218] border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#2E86FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2E86FF]/10 border border-[#2E86FF]/30 mb-4">
            <Calculator className="w-4 h-4 text-[#2E86FF]" />
            <span className="text-xs font-semibold tracking-wider text-[#2E86FF] uppercase">
              Transparent Estimate Ranges
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase font-sans mb-4">
            Custom Balcony <span className="text-wire-gradient">Pricing & Estimates</span>
          </h2>

          <p className="text-base sm:text-lg text-[#C7CDD3] font-light">
            Every balcony in Chennai is measured on-site. Prices are calculated per square foot based on exact dimensions, wire grade, and installation height.
          </p>
        </div>

        {/* 3 Illustrative Estimate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {ESTIMATE_CARDS.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative flex flex-col justify-between p-8 rounded-2xl bg-[#0D1821]/80 border ${
                card.isPopular
                  ? "border-[#2E86FF] shadow-[0_0_30px_rgba(46,134,255,0.3)] bg-[#0D1821]"
                  : "border-white/10 hover:border-[#2E86FF]/60"
              } transition-all duration-300 backdrop-blur-md`}
            >
              {card.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#2E86FF] text-white text-[11px] font-extrabold tracking-wider uppercase shadow-md">
                  Most Popular Size
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">{card.title}</h3>
                  <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-[#C7CDD3]">
                    {card.sqft}
                  </span>
                </div>

                <p className="text-xs text-[#9AA5AD] mb-6 font-light">
                  {card.suitableFor}
                </p>

                {/* Price Display */}
                <div className="p-4 rounded-xl bg-[#0A1218] border border-white/5 mb-6 text-center">
                  <span className="text-xs uppercase tracking-wider text-[#9AA5AD] block mb-1">
                    Indicative Price Range
                  </span>
                  <span className="text-xl sm:text-2xl font-extrabold text-[#2E86FF] font-mono">
                    {card.indicativePrice}
                  </span>
                  <span className="text-[10px] text-[#9AA5AD] block mt-1">
                    (Final quote based on on-site inspection)
                  </span>
                </div>

                {/* Features Checklist */}
                <ul className="space-y-3 mb-8">
                  {card.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-xs text-[#C7CDD3]">
                      <CheckCircle2 className="w-4 h-4 text-[#2E86FF] shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Get Exact Quote Button */}
              <a
                href="#contact"
                className="w-full py-3.5 rounded-xl bg-[#2E86FF] hover:bg-[#1E62D0] text-white font-bold text-xs uppercase tracking-wider text-center transition-all duration-300 shadow-[0_0_15px_rgba(46,134,255,0.3)] flex items-center justify-center gap-2"
              >
                <span>Get Exact Quote for My Balcony</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer Notice */}
        <div className="p-6 rounded-2xl bg-[#0D1821]/40 border border-white/10 max-w-4xl mx-auto flex items-start gap-4 text-xs text-[#9AA5AD]">
          <HelpCircle className="w-5 h-5 text-[#F2A93B] shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-[#C7CDD3] block mb-1">How Pricing Works:</span>
            We do not use generic fixed pricing cards because every balcony in Chennai has unique structural dimensions, mounting bracket requirements, and height conditions. Contact our team to book a <strong>100% Free On-Site Inspection & Exact Quote</strong> with zero obligations.
          </div>
        </div>
      </div>
    </section>
  );
}
