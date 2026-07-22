"use client";

import { ShieldCheck, PhoneCall, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#060B0F] border-t border-white/10 pt-16 pb-12 text-[#C7CDD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="flex flex-col">
            <a href="#home" className="flex items-center gap-3 mb-4 group">
              <div className="w-10 h-10 rounded-full bg-[#0A1218] border border-[#2E86FF]/40 p-1 flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="w-full h-full text-[#2E86FF]">
                  <polygon points="20,2 38,20 20,38 2,20" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="20" y1="2" x2="20" y2="38" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                  <line x1="2" y1="20" x2="38" y2="20" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold tracking-wider text-white">GOLDEN ENTERPRISES</span>
                <span className="text-[10px] tracking-[0.2em] text-[#9AA5AD] uppercase">CHENNAI • INVISIBLE GRILLS</span>
              </div>
            </a>

            <p className="text-xs text-[#9AA5AD] leading-relaxed mb-6 font-light">
              Chennai&apos;s leading installer of high-tensile 316 marine-grade stainless steel invisible grills and UV-stabilized pigeon safety netting for balcony architecture.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-sans">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              {["Home", "About", "Services", "Gallery", "Pricing", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-[#2E86FF] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-sans">Core Services</h4>
            <ul className="space-y-2 text-xs">
              <li>316 Stainless Steel Invisible Grills</li>
              <li>UV Stabilized Pigeon Nets</li>
              <li>Balcony Safety Enclosures</li>
              <li>AC Duct Shaft Netting</li>
              <li>Child & Pet Safety Nets</li>
            </ul>
          </div>

          {/* Chennai Service Areas */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-sans">Chennai Coverage</h4>
            <p className="text-xs text-[#9AA5AD] leading-relaxed mb-4">
              <strong>Service Areas:</strong> Adyar, ECR, OMR, Anna Nagar, Velachery, Porur, Tambaram, T. Nagar, Nungambakkam, Medavakkam & all surrounding Chennai regions.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#2E86FF]">
              <PhoneCall className="w-4 h-4" />
              <a href="tel:+919876543210" className="font-mono font-bold hover:underline">
                +91 98765 43210
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#9AA5AD] gap-4">
          <p>© {currentYear} Golden Enterprises Chennai. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span>Pigeon Safety Nets Chennai</span>
            <span>Invisible Grills Chennai</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
