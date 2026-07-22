"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, PhoneCall, MessageSquare, ShieldCheck, Sparkles, Award } from "lucide-react";

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

  const phoneNumber = "+919876543210";
  const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(
    "Hi Golden Enterprises, I need a free quote for balcony invisible grills/nets in Chennai."
  )}`;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 select-none">
      {/* Top Ticker Announcement Bar */}
      <div className="bg-gradient-to-r from-[#060B0F] via-[#0D1B26] to-[#060B0F] border-b border-white/10 py-1.5 px-4 text-center text-[11px] sm:text-xs text-[#C7CDD3] flex items-center justify-between max-w-full overflow-hidden">
        <div className="hidden sm:flex items-center gap-2 max-w-7xl mx-auto w-full justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2E86FF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2E86FF]"></span>
            </span>
            <span className="font-medium text-white">
              Chennai&apos;s #1 Rated Invisible Grill & Pigeon Netting Specialist
            </span>
          </div>

          <div className="flex items-center gap-6 text-[11px]">
            <a href={`tel:${phoneNumber}`} className="hover:text-[#2E86FF] transition-colors flex items-center gap-1.5 font-mono">
              <PhoneCall className="w-3 h-3 text-[#2E86FF]" />
              <span>+91 98765 43210</span>
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors flex items-center gap-1.5">
              <MessageSquare className="w-3 h-3 text-[#25D366]" />
              <span>WhatsApp Instant Quote</span>
            </a>
          </div>
        </div>

        {/* Mobile top ticker string */}
        <div className="sm:hidden w-full text-center text-[10px] font-medium text-[#C7CDD3] flex items-center justify-center gap-1">
          <Sparkles className="w-3 h-3 text-[#F2A93B]" />
          <span>Chennai&apos;s Top Balcony Safety Specialist • 316 SS Grade</span>
        </div>
      </div>

      {/* Floating Main Navbar Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2 sm:mt-3">
        <nav
          className={`relative rounded-full transition-all duration-300 px-5 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between ${
            scrolled
              ? "bg-[#0A1218]/90 backdrop-blur-2xl border border-[#2E86FF]/40 shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
              : "bg-[#0A1218]/70 backdrop-blur-xl border border-white/10 shadow-[0_4px_25px_rgba(0,0,0,0.5)]"
          }`}
        >
          {/* Brand Logo with Illuminated Diamond Mesh Badge */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full bg-[#060B0F] border border-[#2E86FF]/50 p-1 flex items-center justify-center group-hover:border-[#2E86FF] transition-all duration-300 shadow-[0_0_15px_rgba(46,134,255,0.3)]">
              <svg viewBox="0 0 40 40" className="w-full h-full text-[#2E86FF] group-hover:rotate-12 transition-transform duration-500">
                <polygon points="20,2 38,20 20,38 2,20" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <line x1="20" y1="2" x2="20" y2="38" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="2" y1="20" x2="38" y2="20" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                <polygon points="20,10 30,20 20,30 10,20" fill="none" stroke="#F2A93B" strokeWidth="1.5" />
              </svg>
            </div>
            
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black tracking-wider text-white uppercase font-sans group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-[#C7CDD3] group-hover:to-[#2E86FF] transition-all">
                GOLDEN <span className="text-[#2E86FF]">ENTERPRISES</span>
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.22em] text-[#F2A93B] font-semibold uppercase">
                CHENNAI • INVISIBLE GRILLS
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 bg-[#060B0F]/60 p-1 rounded-full border border-white/5">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-1.5 rounded-full text-xs font-semibold text-[#C7CDD3] hover:text-white hover:bg-[#2E86FF]/20 transition-all duration-300 relative group"
              >
                <span>{item.name}</span>
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#2E86FF] opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* WhatsApp Quick Icon Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact on WhatsApp"
              className="p-2.5 rounded-full bg-[#25D366]/20 border border-[#25D366]/50 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(37,211,102,0.3)] flex items-center justify-center group"
            >
              <MessageSquare className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
            </a>

            {/* Phone Quote Button */}
            <a
              href={`tel:${phoneNumber}`}
              className="relative group px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider text-white bg-gradient-to-r from-[#2E86FF] to-[#1E62D0] border border-white/20 hover:border-white shadow-[0_0_20px_rgba(46,134,255,0.4)] hover:shadow-[0_0_30px_rgba(46,134,255,0.8)] transition-all duration-300 flex items-center gap-2 overflow-hidden"
            >
              <PhoneCall className="w-3.5 h-3.5 text-white animate-pulse" />
              <span>Get Free Quote</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-2 rounded-xl text-white hover:bg-white/10 transition-colors border border-white/10"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden max-w-7xl mx-auto px-4 mt-2"
          >
            <div className="bg-[#0A1218]/95 backdrop-blur-2xl border border-[#2E86FF]/40 rounded-3xl p-6 shadow-2xl flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-bold text-[#C7CDD3] hover:text-[#2E86FF] py-2.5 border-b border-white/5 transition-colors flex items-center justify-between"
                >
                  <span>{item.name}</span>
                  <span className="text-[#2E86FF]">→</span>
                </a>
              ))}
              
              <div className="flex flex-col gap-3 mt-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3.5 rounded-xl bg-[#25D366] text-white font-extrabold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(37,211,102,0.4)] flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={`tel:${phoneNumber}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3.5 rounded-xl bg-[#2E86FF] text-white font-extrabold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(46,134,255,0.4)] flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call +91 98765 43210</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
