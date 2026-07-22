"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, Sparkles, Award, CheckCircle2 } from "lucide-react";
import { usePerformanceTier } from "@/hooks/usePerformanceTier";
import GlowButton from "../ui/GlowButton";
import HeroFallback from "./HeroFallback";

// Dynamically import 3D Canvas component to prevent SSR hydration mismatches
const HeroCanvas = dynamic(() => import("./HeroCanvas"), {
  ssr: false,
  loading: () => <HeroFallback />,
});

export default function Hero() {
  const { isLowPerformance } = usePerformanceTier();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="hero-section"
      className="relative min-h-screen w-full flex items-center justify-center pt-28 sm:pt-36 pb-20 overflow-hidden bg-[#0A1218]"
    >
      {/* 3D R3F Dusk Sky Scene (10,000 Flying White/Red Pigeons & Invisible Mesh) */}
      {mounted && !isLowPerformance ? <HeroCanvas /> : <HeroFallback />}

      {/* Hero Content Overlay with Superior Legibility & Contrast */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Architectural Quality Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full bg-[#0A1218]/90 border border-[#2E86FF]/50 backdrop-blur-2xl mb-8 shadow-[0_0_25px_rgba(46,134,255,0.35)]"
        >
          <Sparkles className="w-4 h-4 text-[#F2A93B]" />
          <span className="text-xs sm:text-sm font-bold tracking-wider text-white uppercase font-sans">
            Chennai&apos;s Premium Pigeon Nets & 316 Stainless Steel Invisible Grills
          </span>
        </motion.div>

        {/* Main Brand Title - Cinematic Metallic Wire Text Gradient */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6 relative"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white uppercase font-sans leading-none drop-shadow-[0_0_35px_rgba(46,134,255,0.7)]">
            GOLDEN <span className="text-wire-gradient">ENTERPRISES</span>
          </h1>
          <span className="text-xs sm:text-sm font-mono tracking-[0.4em] text-[#F2A93B] uppercase font-bold block mt-3 drop-shadow-[0_0_10px_rgba(242,169,59,0.5)]">
            CHENNAI • BALCONY SAFETY ARCHITECTURE
          </span>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-2xl font-light text-[#C7CDD3] max-w-3xl mb-10 tracking-wide leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
        >
          Protect What Matters. <span className="text-white font-semibold underline decoration-[#2E86FF] decoration-2 underline-offset-4">Stay Invisible.</span> Live Open.
        </motion.p>

        {/* Core Value Highlights Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10 text-xs text-[#C7CDD3] font-medium"
        >
          {["316 Marine Grade SS Wire", "UV-Stabilized Pigeon Nets", "100% Unobstructed View", "Free On-Site Inspection"].map((item, idx) => (
            <div key={idx} className="px-3.5 py-1.5 rounded-lg bg-[#0A1218]/80 border border-white/10 backdrop-blur-md flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#2E86FF]" />
              <span>{item}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full max-w-md sm:max-w-none"
        >
          <GlowButton href="#contact" variant="primary">
            <span>Book Free On-Site Inspection</span>
            <ArrowRight className="w-5 h-5 ml-1" />
          </GlowButton>

          <GlowButton href="#services" variant="secondary">
            <ShieldCheck className="w-5 h-5 text-[#2E86FF]" />
            <span>Explore Services & Work</span>
          </GlowButton>
        </motion.div>

        {/* Trust Metrics Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 rounded-3xl bg-[#0D1821]/80 border border-white/10 backdrop-blur-xl w-full max-w-4xl shadow-2xl"
        >
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono">10+ Yrs</span>
            <span className="text-[11px] text-[#9AA5AD] uppercase tracking-wider font-semibold mt-1">Chennai Excellence</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#2E86FF] font-mono">316 Grade</span>
            <span className="text-[11px] text-[#9AA5AD] uppercase tracking-wider font-semibold mt-1">SS Wire Spec</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono">5,000+</span>
            <span className="text-[11px] text-[#9AA5AD] uppercase tracking-wider font-semibold mt-1">Balconies Protected</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#F2A93B] font-mono">100%</span>
            <span className="text-[11px] text-[#9AA5AD] uppercase tracking-wider font-semibold mt-1">Unobstructed View</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
