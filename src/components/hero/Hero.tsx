"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
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
      className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0A1218]"
    >
      {/* 3D R3F Dusk Scene vs Low-Spec Parallax */}
      {mounted && !isLowPerformance ? <HeroCanvas /> : <HeroFallback />}

      {/* Hero Content Overlay */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Quality Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A1218]/80 border border-[#2E86FF]/40 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(46,134,255,0.25)]"
        >
          <Sparkles className="w-4 h-4 text-[#F2A93B]" />
          <span className="text-xs md:text-sm font-semibold tracking-wider text-[#C7CDD3] uppercase">
            Chennai&apos;s Premium Pigeon Nets & Invisible Grills
          </span>
        </motion.div>

        {/* Main Heading with Metallic Wire Gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 uppercase font-sans leading-none"
        >
          GOLDEN <span className="text-wire-gradient">ENTERPRISES</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-2xl font-light text-[#C7CDD3] max-w-2xl mb-10 tracking-wide leading-relaxed"
        >
          Protect What Matters. <span className="text-white font-medium">Stay Invisible.</span> Live Open.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full max-w-md sm:max-w-none"
        >
          <GlowButton href="#contact" variant="primary">
            <span>Get Free Consultation</span>
            <ArrowRight className="w-5 h-5 ml-1" />
          </GlowButton>

          <GlowButton href="#services" variant="secondary">
            <ShieldCheck className="w-5 h-5 text-[#2E86FF]" />
            <span>View Our Work</span>
          </GlowButton>
        </motion.div>

        {/* Trust Metric Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10 w-full max-w-4xl"
        >
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-bold text-white font-mono">10+ Yrs</span>
            <span className="text-xs text-[#9AA5AD] uppercase tracking-wider mt-1">Chennai Excellence</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-bold text-[#2E86FF] font-mono">316 Grade</span>
            <span className="text-xs text-[#9AA5AD] uppercase tracking-wider mt-1">SS Wire Spec</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-bold text-white font-mono">5,000+</span>
            <span className="text-xs text-[#9AA5AD] uppercase tracking-wider mt-1">Balconies Protected</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-bold text-[#F2A93B] font-mono">100%</span>
            <span className="text-xs text-[#9AA5AD] uppercase tracking-wider mt-1">Unobstructed View</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
