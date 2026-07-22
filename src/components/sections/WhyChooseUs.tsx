"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  Ruler,
  SunMedium,
  Zap,
  CheckCircle2,
} from "lucide-react";

const REASONS = [
  {
    icon: ShieldCheck,
    title: "316-Grade Stainless Steel",
    description:
      "Anti-rust, marine-grade high-tensile wire cables encased in protective transparent nylon.",
  },
  {
    icon: Award,
    title: "10+ Years Experience",
    description:
      "Chennai's pioneer in high-rise balcony safety, invisible grills, and pigeon net installations.",
  },
  {
    icon: Ruler,
    title: "Free On-Site Inspection",
    description:
      "Zero-cost balcony measurement, technical assessment, and exact custom quote across Chennai.",
  },
  {
    icon: SunMedium,
    title: "UV-Stabilized Netting",
    description:
      "Weatherproof high-durability netting engineered to withstand intense Chennai sun and coastal air.",
  },
  {
    icon: Zap,
    title: "Same-Week Installation",
    description:
      "Fast turnaround execution completed within 48 to 72 hours from order confirmation.",
  },
  {
    icon: CheckCircle2,
    title: "Warranty on Workmanship",
    description:
      "Comprehensive multi-year warranty covering wire cable tension, brackets, and mounting hardware.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 bg-[#0A1218] overflow-hidden border-t border-white/5">
      {/* Background Straight Grill Accent */}
      <div className="absolute inset-0 bg-wire-lattice opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2E86FF]/10 border border-[#2E86FF]/30 mb-4">
            <span className="text-xs font-semibold tracking-wider text-[#2E86FF] uppercase">
              The Golden Standard
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase font-sans mb-4">
            Why Choose <span className="text-wire-gradient">Golden Enterprises</span>
          </h2>

          <p className="text-base sm:text-lg text-[#C7CDD3] font-light">
            We combine high-grade materials, precision craftsmanship, and uncompromised safety standards for every balcony in Chennai.
          </p>
        </div>

        {/* 6 Reasons Icon Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REASONS.map((item, index) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-2xl bg-[#0D1821]/60 border border-white/10 hover:border-[#2E86FF]/60 hover:bg-[#0D1821]/90 transition-all duration-300 backdrop-blur-md shadow-lg hover:shadow-[0_0_25px_rgba(46,134,255,0.2)]"
              >
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-xl bg-[#2E86FF]/10 border border-[#2E86FF]/30 flex items-center justify-center text-[#2E86FF] group-hover:bg-[#2E86FF] group-hover:text-white transition-colors duration-300 mb-6 shadow-[0_0_15px_rgba(46,134,255,0.2)]">
                  <IconComp className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#2E86FF] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-[#C7CDD3] leading-relaxed font-light">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
