"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { PhoneCall, MessageSquare, ArrowUp } from "lucide-react";

export default function FloatingCTA() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const phoneNumber = "+919876543210";
  const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(
    "Hi Golden Enterprises, I need a free quote for balcony invisible grills/nets in Chennai."
  )}`;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Top Scroll Progress Indicator */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2E86FF] via-[#C7CDD3] to-[#F2A93B] origin-left z-50 pointer-events-none shadow-[0_0_10px_#2E86FF]"
      />

      {/* Floating Action Buttons Container */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 select-none">
        
        {/* Scroll To Top Button */}
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-10 h-10 rounded-full bg-[#0D1821] border border-white/20 text-[#C7CDD3] hover:text-white flex items-center justify-center shadow-lg hover:border-[#2E86FF] transition-all"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}

        {/* WhatsApp Quick Chat Button */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="relative group w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:shadow-[0_0_30px_rgba(37,211,102,0.8)] transition-all"
        >
          <MessageSquare className="w-6 h-6 fill-white" />
          <span className="absolute right-14 px-3 py-1.5 rounded-lg bg-[#0D1821] border border-white/10 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl">
            WhatsApp Quote
          </span>
        </motion.a>

        {/* Click to Call Floating Button */}
        <motion.a
          href={`tel:${phoneNumber}`}
          aria-label="Call Golden Enterprises"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="relative group w-12 h-12 rounded-full bg-[#2E86FF] text-white flex items-center justify-center shadow-[0_0_20px_rgba(46,134,255,0.6)] hover:shadow-[0_0_30px_rgba(46,134,255,0.9)] transition-all animate-wire-glow"
        >
          <PhoneCall className="w-6 h-6" />
          <span className="absolute right-14 px-3 py-1.5 rounded-lg bg-[#0D1821] border border-white/10 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl">
            Call +91 98765 43210
          </span>
        </motion.a>

      </div>
    </>
  );
}
