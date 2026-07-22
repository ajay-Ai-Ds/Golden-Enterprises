"use client";

import Header from "@/components/common/Header";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A1218]">
      <Header />
      <Hero />

      {/* Section Anchor Placeholders for Phase 1 Nav */}
      <section id="about" className="py-24 px-4 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-wider text-white uppercase mb-4">About Golden Enterprises</h2>
          <p className="text-[#9AA5AD] max-w-2xl mx-auto">
            Chennai&apos;s leading installer of high-tensile 316-grade stainless steel invisible grills and UV-stabilized pigeon safety netting for high-rise apartments and residential homes.
          </p>
        </div>
      </section>

      <section id="services" className="py-24 px-4 max-w-7xl mx-auto border-t border-white/5 bg-[#0D1821]/50">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-wider text-white uppercase mb-4">Our Core Solutions</h2>
          <p className="text-[#9AA5AD] max-w-2xl mx-auto">
            Invisible Grills • Pigeon Safety Nets • Balcony Protection • Duct Area Nets
          </p>
        </div>
      </section>

      <section id="gallery" className="py-24 px-4 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-wider text-white uppercase mb-4">Installation Gallery</h2>
          <p className="text-[#9AA5AD] max-w-2xl mx-auto">
            View our completed balcony and window installations across Chennai.
          </p>
        </div>
      </section>

      <section id="pricing" className="py-24 px-4 max-w-7xl mx-auto border-t border-white/5 bg-[#0D1821]/50">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-wider text-white uppercase mb-4">Transparent Pricing</h2>
          <p className="text-[#9AA5AD] max-w-2xl mx-auto">
            Custom per-sqft pricing tailored to balcony dimensions and wire thickness specifications.
          </p>
        </div>
      </section>

      <section id="contact" className="py-24 px-4 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-wider text-[#2E86FF] uppercase mb-4">Get Free On-Site Inspection</h2>
          <p className="text-[#C7CDD3] max-w-2xl mx-auto mb-6">
            Call us directly or schedule a free balcony measurement in Chennai.
          </p>
          <a
            href="tel:+919876543210"
            className="inline-block px-8 py-4 rounded-full bg-[#2E86FF] text-white font-bold tracking-wider shadow-[0_0_25px_rgba(46,134,255,0.4)]"
          >
            +91 98765 43210
          </a>
        </div>
      </section>

      <footer className="py-8 text-center text-xs text-[#9AA5AD] border-t border-white/5">
        © {new Date().getFullYear()} Golden Enterprises Chennai. All Rights Reserved.
      </footer>
    </main>
  );
}
