"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Award, CheckCircle2, Building2 } from "lucide-react";

export default function About() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="relative py-24 bg-[#0A1218] overflow-hidden w-full max-w-full">
      {/* Background Grill Pattern Accent */}
      <div className="absolute inset-0 bg-wire-lattice opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Installation Photo Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-full"
          >
            {/* Outer Cyan Glow Ring */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#2E86FF]/30 to-[#F2A93B]/20 blur-xl opacity-60 pointer-events-none" />
            
            <div className="relative rounded-2xl overflow-hidden border border-[#C7CDD3]/30 bg-[#0D1821] shadow-2xl group w-full">
              {!imageError ? (
                <div className="relative h-[380px] sm:h-[450px] w-full overflow-hidden">
                  <Image
                    src="/images/about_installation.png"
                    alt="Invisible grill installation on high-rise balcony in Chennai"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    onError={() => setImageError(true)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1218] via-transparent to-transparent opacity-80" />
                </div>
              ) : (
                <div className="h-[380px] sm:h-[450px] w-full flex flex-col items-center justify-center p-8 bg-[#0D1821] text-center border border-white/10">
                  <Building2 className="w-16 h-16 text-[#2E86FF] mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Golden Enterprises Installation</h3>
                  <p className="text-sm text-[#9AA5AD]">316 Grade Stainless Steel Invisible Grills & Pigeon Nets Chennai</p>
                </div>
              )}

              {/* Floating Specification Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-header border border-white/10 flex items-center justify-between backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2E86FF]/20 flex items-center justify-center border border-[#2E86FF]/40">
                    <ShieldCheck className="w-5 h-5 text-[#2E86FF]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">316-Grade Stainless Steel</h4>
                    <p className="text-[11px] text-[#9AA5AD]">High-Tensile Anti-Rust Wire Spec</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#F2A93B]/20 text-[#F2A93B] text-[10px] font-bold tracking-wider uppercase border border-[#F2A93B]/40">
                  Verified
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Company Story Copy & Animated Counters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col w-full max-w-full"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2E86FF]/10 border border-[#2E86FF]/30 w-fit mb-4">
              <Award className="w-4 h-4 text-[#2E86FF]" />
              <span className="text-xs font-semibold tracking-wider text-[#2E86FF] uppercase">
                About Golden Enterprises
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase font-sans mb-6 leading-tight">
              Chennai&apos;s Most Trusted Name in <span className="text-wire-gradient">Balcony Safety</span>
            </h2>

            <p className="text-base sm:text-lg text-[#C7CDD3] font-light leading-relaxed mb-6">
              Golden Enterprises has been Chennai&apos;s trusted name in balcony safety for 10+ years, installing 316-grade stainless steel invisible grills and UV-stabilized pigeon nets across high-rise apartments and independent homes.
            </p>

            <p className="text-sm text-[#9AA5AD] leading-relaxed mb-8">
              We specialize in custom engineering solutions that protect children, pets, and homes from pigeon infestation without compromising on panoramic architectural views, airflow, or emergency egress safety.
            </p>

            {/* Key Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {[
                "316 Marine-Grade Wire Cables",
                "UV-Stabilized Nylon Nets",
                "High-Rise Egress Safety",
                "Zero View Obstruction",
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2E86FF] shrink-0" />
                  <span className="text-xs sm:text-sm text-[#C7CDD3] font-medium">{point}</span>
                </div>
              ))}
            </div>

            {/* Animated Count-up Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex flex-col"
              >
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">10+ Yrs</span>
                <span className="text-[11px] text-[#9AA5AD] uppercase tracking-wider mt-1">Chennai Excellence</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex flex-col"
              >
                <span className="text-2xl sm:text-3xl font-extrabold text-[#2E86FF] font-mono">5,000+</span>
                <span className="text-[11px] text-[#9AA5AD] uppercase tracking-wider mt-1">Balconies Protected</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex flex-col"
              >
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">316 Grade</span>
                <span className="text-[11px] text-[#9AA5AD] uppercase tracking-wider mt-1">SS Wire Spec</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex flex-col"
              >
                <span className="text-2xl sm:text-3xl font-extrabold text-[#F2A93B] font-mono">100%</span>
                <span className="text-[11px] text-[#9AA5AD] uppercase tracking-wider mt-1">Unobstructed View</span>
              </motion.div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
