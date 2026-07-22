"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { PhoneCall, ArrowUp } from "lucide-react";

export default function FloatingCTA() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const phoneNumber = "+919876543210";
  const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(
    "Hi Golden Enterprises, I would like to get a free quote for pigeon safety nets / invisible grills in Chennai."
  )}`;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
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

      {/* Universal Floating Actions Container */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 select-none">
        
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

        {/* Click to Call Floating Button */}
        <motion.a
          href={`tel:${phoneNumber}`}
          aria-label="Call Golden Enterprises"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className="relative group w-12 h-12 rounded-full bg-[#2E86FF] text-white flex items-center justify-center shadow-[0_0_20px_rgba(46,134,255,0.6)] hover:shadow-[0_0_30px_rgba(46,134,255,0.9)] transition-all"
        >
          <PhoneCall className="w-5 h-5" />
          <span className="absolute right-14 px-3 py-1.5 rounded-xl bg-[#0D1821] border border-white/10 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-2xl">
            Call +91 98765 43210
          </span>
        </motion.a>

        {/* Universal WhatsApp Floating Widget Button */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="relative group w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_0_25px_rgba(37,211,102,0.6)] hover:shadow-[0_0_35px_rgba(37,211,102,0.9)] transition-all border-2 border-white/30"
        >
          {/* Pulsing Online Badge */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#128C7E] border-2 border-white"></span>
          </span>

          {/* Official WhatsApp SVG Icon */}
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
            <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.764.459 3.487 1.333 5.006l-1.417 5.176 5.297-1.389c1.465.798 3.116 1.218 4.774 1.219h.004c5.507 0 9.99-4.478 9.99-9.984 0-2.668-1.039-5.176-2.927-7.062a9.925 9.925 0 0 0-7.063-2.95zm5.727 14.175c-.241.677-1.393 1.291-1.921 1.341-.502.047-1.15.074-3.565-.92-2.853-1.176-4.667-4.08-4.81-4.271-.141-.191-1.157-1.541-1.157-2.939 0-1.398.73-2.083.99-2.366.259-.283.565-.354.754-.354.188 0 .376.002.541.01.175.008.411-.067.644.49.241.579.824 2.012.895 2.155.071.142.118.307.024.496-.094.188-.141.307-.283.472-.142.165-.298.369-.425.496-.142.142-.29.297-.124.582.165.283.738 1.218 1.586 1.974 1.091.972 2.012 1.274 2.296 1.416.284.142.449.119.614-.07.165-.189.708-.825.896-1.109.188-.283.377-.236.637-.142.259.094 1.649.778 1.932.919.284.142.472.213.543.33.07.118.07.684-.171 1.361z" />
          </svg>

          {/* Persistent Tooltip Card */}
          <div className="absolute right-16 bottom-0 p-3 rounded-2xl bg-[#0D1821] border border-[#25D366]/40 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-2xl flex flex-col gap-0.5">
            <div className="flex items-center gap-1.5 text-[#25D366]">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <span className="font-bold text-[11px] uppercase tracking-wider">Online Now</span>
            </div>
            <span className="text-white font-medium">Chat on WhatsApp</span>
            <span className="text-[10px] text-[#9AA5AD]">Instant Quote • Free Inspection</span>
          </div>
        </motion.a>

      </div>
    </>
  );
}
