"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield, PhoneCall } from "lucide-react";

const NAV_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "glass-header-scrolled py-3 shadow-xl border-b border-white/10" : "glass-header py-5 border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with Diamond-Weave Motif Badge */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-full bg-[#0A1218] border border-[#C7CDD3]/30 p-1 flex items-center justify-center group-hover:border-[#2E86FF] transition-all duration-300 shadow-[0_0_12px_rgba(46,134,255,0.2)]">
            <svg viewBox="0 0 40 40" className="w-full h-full text-[#C7CDD3] group-hover:text-[#2E86FF] transition-colors duration-300">
              {/* Outer Diamond Boundary */}
              <polygon points="20,2 38,20 20,38 2,20" fill="none" stroke="currentColor" strokeWidth="1.5" />
              {/* Internal Mesh Weave Lines */}
              <line x1="20" y1="2" x2="20" y2="38" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="2" y1="20" x2="38" y2="20" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
              <polygon points="20,10 30,20 20,30 10,20" fill="none" stroke="#F2A93B" strokeWidth="1" />
            </svg>
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-[#2E86FF]/10 blur-sm transition-opacity duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-bold tracking-wider text-white font-sans group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#2E86FF] transition-all">
              GOLDEN ENTERPRISES
            </span>
            <span className="text-[10px] tracking-[0.2em] text-[#9AA5AD] font-medium uppercase">
              CHENNAI • INVISIBLE GRILLS
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-sm font-medium text-[#C7CDD3] hover:text-white transition-colors py-1 group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#2E86FF] group-hover:w-full transition-all duration-300 rounded-full shadow-[0_0_8px_#2E86FF]" />
            </a>
          ))}
        </nav>

        {/* Desktop Call/CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+919876543210"
            className="relative group px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white border border-[#2E86FF]/50 bg-[#2E86FF]/10 hover:bg-[#2E86FF] hover:border-[#2E86FF] transition-all duration-300 shadow-[0_0_15px_rgba(46,134,255,0.25)] hover:shadow-[0_0_25px_rgba(46,134,255,0.6)] flex items-center gap-2 overflow-hidden"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#2E86FF] group-hover:text-white transition-colors" />
            <span>Get Free Quote</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="md:hidden p-2 rounded-lg text-[#C7CDD3] hover:text-white hover:bg-white/10 transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0A1218]/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-[#C7CDD3] hover:text-[#2E86FF] py-2 border-b border-white/5 transition-colors flex items-center justify-between"
                >
                  <span>{item.name}</span>
                  <span className="text-[#2E86FF] opacity-0 hover:opacity-100">→</span>
                </a>
              ))}
              <a
                href="tel:+919876543210"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 w-full text-center py-3 rounded-xl bg-[#2E86FF] text-white font-semibold text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(46,134,255,0.4)] flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Now for Free Consultation</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
