"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Contact from "@/components/sections/Contact";
import {
  ShieldCheck,
  MapPin,
  PhoneCall,
  MessageSquare,
  CheckCircle2,
  Star,
  ChevronDown,
  Clock,
  Ruler,
  Wrench,
  Award,
  ArrowRight,
  HelpCircle,
} from "lucide-react";

export interface FAQItem {
  q: string;
  a: string;
}

export interface ReviewItem {
  name: string;
  locality: string;
  rating: number;
  text: string;
  date: string;
}

export interface LocalLandingPageProps {
  city: string;
  area: string;
  serviceTitle: string;
  serviceCategory: string;
  canonicalUrl: string;
  metaDescription: string;
  keywords: string[];
  mainImage: string;
  altText: string;
  nearbyAreas: { name: string; href: string }[];
  faqs: FAQItem[];
  reviews: ReviewItem[];
}

export default function LocalLandingPage({
  city,
  area,
  serviceTitle,
  serviceCategory,
  canonicalUrl,
  metaDescription,
  mainImage,
  altText,
  nearbyAreas,
  faqs,
  reviews,
}: LocalLandingPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const phoneNumber = "+919876543210";
  const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(
    `Hi Golden Enterprises, I am looking for ${serviceTitle} in ${area}, ${city}. Please share details and book a free inspection.`
  )}`;

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-[#0A1218] text-white selection:bg-[#2E86FF] selection:text-white">
      <Header />

      {/* Breadcrumb Navigation Bar */}
      <div className="pt-28 pb-4 bg-[#060B0F] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-[#9AA5AD] flex items-center gap-2">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/chennai" className="hover:text-white transition-colors">{city}</Link>
          <span>/</span>
          <span className="text-[#2E86FF] font-semibold">{serviceTitle} {area}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-[#060B0F] via-[#0D1821] to-[#0A1218] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2E86FF]/10 border border-[#2E86FF]/30 w-fit mb-6">
                <MapPin className="w-4 h-4 text-[#2E86FF]" />
                <span className="text-xs font-bold text-[#2E86FF] uppercase tracking-wider">
                  {area}, {city} • Local Specialist
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase font-sans mb-6 leading-tight">
                {serviceTitle} in <span className="text-wire-gradient">{area}, {city}</span>
              </h1>

              <p className="text-base sm:text-xl text-[#C7CDD3] font-light leading-relaxed mb-8">
                Golden Enterprises provides premium, high-tensile 316-grade stainless steel invisible grills, UV-stabilized pigeon safety nets, and balcony protection across high-rise apartments and independent homes in <strong>{area}, {city}</strong>.
              </p>

              {/* Direct CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a
                  href={`tel:${phoneNumber}`}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-[#2E86FF] to-[#1E62D0] text-white font-bold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(46,134,255,0.4)] flex items-center justify-center gap-2 text-center"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call +91 98765 43210</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full bg-[#25D366] text-white font-bold text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(37,211,102,0.4)] flex items-center justify-center gap-2 text-center"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>WhatsApp Quote for {area}</span>
                </a>
              </div>

              {/* Key Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-medium text-[#C7CDD3] pt-6 border-t border-white/10">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2E86FF]" />
                  <span>Same-Week Install</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2E86FF]" />
                  <span>316 Grade SS Wire</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2E86FF]" />
                  <span>Free Inspection</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2E86FF]" />
                  <span>Warranty Support</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[380px] sm:h-[450px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0D1821] group">
                <Image
                  src={mainImage}
                  alt={altText}
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1218] via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-header border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-8 h-8 text-[#2E86FF]" />
                    <div>
                      <h4 className="text-sm font-bold text-white">Verified Installation</h4>
                      <p className="text-[11px] text-[#9AA5AD]">{area}, {city} Region</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#F2A93B]/20 text-[#F2A93B] text-[10px] font-bold uppercase">
                    5★ Rated
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust & E-E-A-T Metrics Bar */}
      <section className="py-12 bg-[#0D1821]/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono">4.9 ★</span>
            <span className="text-xs text-[#9AA5AD] block mt-1 uppercase tracking-wider">500+ Google Reviews</span>
          </div>
          <div>
            <span className="text-3xl sm:text-4xl font-extrabold text-[#2E86FF] font-mono">10+ Yrs</span>
            <span className="text-xs text-[#9AA5AD] block mt-1 uppercase tracking-wider">Serving {area}</span>
          </div>
          <div>
            <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono">5,000+</span>
            <span className="text-xs text-[#9AA5AD] block mt-1 uppercase tracking-wider">Balconies Protected</span>
          </div>
          <div>
            <span className="text-3xl sm:text-4xl font-extrabold text-[#F2A93B] font-mono">316 SS</span>
            <span className="text-xs text-[#9AA5AD] block mt-1 uppercase tracking-wider">Marine Wire Spec</span>
          </div>
        </div>
      </section>

      {/* Comprehensive Service Deep-Dive Copy (2500+ Word Content Structure) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-8 space-y-12">
            
            {/* Overview */}
            <div>
              <h2 className="text-3xl font-extrabold text-white uppercase mb-4">
                Why Homeowners in {area}, {city} Choose Golden Enterprises
              </h2>
              <p className="text-base text-[#C7CDD3] leading-relaxed mb-4 font-light">
                Living in high-rise apartments and residential complexes in <strong>{area}</strong> offers beautiful outdoor balcony views, but pigeon infestation, safety hazards for children, and bird droppings often spoil the experience. Traditional bulky iron grills block air circulation, rust over time in Chennai coastal humidity, and spoil the aesthetic facade of your building.
              </p>
              <p className="text-base text-[#C7CDD3] leading-relaxed font-light">
                Golden Enterprises solves this with precision-engineered <strong>316-grade stainless steel invisible grills</strong> and <strong>UV-stabilized high-density nylon safety netting</strong>. Our installations provide 100% security against accidental falls and pigeon entry without altering your balcony view.
              </p>
            </div>

            {/* Core Product Breakdown */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Our Complete Range of Services in {area}</h3>

              <div className="p-6 rounded-2xl bg-[#0D1821] border border-white/10 space-y-3">
                <h4 className="text-lg font-bold text-[#2E86FF]">1. 316-Grade Stainless Steel Invisible Grills</h4>
                <p className="text-xs text-[#C7CDD3] leading-relaxed font-light">
                  Manufactured from high-tensile 316 marine-grade stainless steel wire cables coated in transparent nylon. Resistant to rust, salt air, and extreme weather. Rated to support up to 400 kg breaking load.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#0D1821] border border-white/10 space-y-3">
                <h4 className="text-lg font-bold text-[#2E86FF]">2. Balcony Pigeon Safety Netting</h4>
                <p className="text-xs text-[#C7CDD3] leading-relaxed font-light">
                  UV-stabilized copolymer nylon netting with square mesh geometry. Prevents pigeons, crows, and sparrows from nesting on your balcony railings, drying lines, and air conditioner ledges.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#0D1821] border border-white/10 space-y-3">
                <h4 className="text-lg font-bold text-[#2E86FF]">3. Ceiling Pull-Down Cloth Drying Hangers</h4>
                <p className="text-xs text-[#C7CDD3] leading-relaxed font-light">
                  Space-saving ceiling-mounted stainless steel drying racks with pulley mechanisms. Maximizes balcony floor space while drying laundry effortlessly.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#0D1821] border border-white/10 space-y-3">
                <h4 className="text-lg font-bold text-[#2E86FF]">4. Window & Door Mosquito Mesh Screens</h4>
                <p className="text-xs text-[#C7CDD3] leading-relaxed font-light">
                  Sliding, magnetic, and Velcro mosquito mesh solutions made from SS 304 and high-visibility fiberglass. Protects your family from mosquitoes and insects.
                </p>
              </div>
            </div>

            {/* 4-Stage Installation Process */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Our 4-Stage Installation Process in {area}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-[#0D1821] border border-white/10 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#2E86FF] text-white font-bold flex items-center justify-center shrink-0">1</div>
                  <div>
                    <h5 className="text-sm font-bold text-white">Free On-Site Inspection</h5>
                    <p className="text-xs text-[#9AA5AD] mt-1">Our technician visits your home in {area} to measure balcony dimensions and inspect wall brackets.</p>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-[#0D1821] border border-white/10 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#2E86FF] text-white font-bold flex items-center justify-center shrink-0">2</div>
                  <div>
                    <h5 className="text-sm font-bold text-white">Custom Specification Quote</h5>
                    <p className="text-xs text-[#9AA5AD] mt-1">Receive an exact per-sqft price breakdown based on your choice of wire thickness and netting grade.</p>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-[#0D1821] border border-white/10 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#2E86FF] text-white font-bold flex items-center justify-center shrink-0">3</div>
                  <div>
                    <h5 className="text-sm font-bold text-white">Precision Mounting</h5>
                    <p className="text-xs text-[#9AA5AD] mt-1">High-tensile aluminum track anchors and SS tension turnbuckles are mounted into concrete beams.</p>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-[#0D1821] border border-white/10 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#2E86FF] text-white font-bold flex items-center justify-center shrink-0">4</div>
                  <div>
                    <h5 className="text-sm font-bold text-white">Testing & Warranty Handover</h5>
                    <p className="text-xs text-[#9AA5AD] mt-1">We perform load tension testing and issue your official multi-year warranty certificate.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Local Customer Reviews */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Customer Reviews from {area}, {city}</h3>
              <div className="space-y-4">
                {reviews.map((rev, rIdx) => (
                  <div key={rIdx} className="p-6 rounded-2xl bg-[#0D1821] border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="text-sm font-bold text-white">{rev.name}</h5>
                      <span className="text-[11px] text-[#9AA5AD]">{rev.date}</span>
                    </div>
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#F2A93B] text-[#F2A93B]" />
                      ))}
                    </div>
                    <p className="text-xs text-[#C7CDD3] italic font-light">&ldquo;{rev.text}&rdquo;</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 20 Locality FAQs Accordion */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions in {area}</h3>
              <div className="space-y-3">
                {faqs.map((faq, fIdx) => (
                  <div
                    key={fIdx}
                    className="rounded-xl bg-[#0D1821] border border-white/10 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(fIdx)}
                      className="w-full px-6 py-4 text-left text-sm font-bold text-white flex items-center justify-between hover:text-[#2E86FF] transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#2E86FF] transition-transform ${
                          openFaq === fIdx ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openFaq === fIdx && (
                      <div className="px-6 pb-5 text-xs text-[#C7CDD3] font-light leading-relaxed border-t border-white/5 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Sidebar: Sticky Inspection Form & Sister Area Links */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Quick Consultation Card */}
            <div className="sticky top-28 p-6 rounded-2xl bg-[#0D1821] border border-[#2E86FF]/40 shadow-xl space-y-6">
              <h4 className="text-lg font-bold text-white uppercase">Book Free Inspection in {area}</h4>
              <p className="text-xs text-[#9AA5AD]">Our technician will visit your balcony in {area} with wire samples.</p>
              
              <a
                href={`tel:${phoneNumber}`}
                className="w-full py-3.5 rounded-xl bg-[#2E86FF] text-white font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-lg"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call +91 98765 43210</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>WhatsApp Instant Quote</span>
              </a>
            </div>

            {/* Nearby Service Areas in Chennai */}
            <div className="p-6 rounded-2xl bg-[#0D1821] border border-white/10">
              <h4 className="text-base font-bold text-white uppercase mb-4">Nearby Service Areas</h4>
              <div className="flex flex-col gap-2">
                {nearbyAreas.map((near) => (
                  <Link
                    key={near.name}
                    href={near.href}
                    className="text-xs text-[#C7CDD3] hover:text-[#2E86FF] py-1.5 border-b border-white/5 flex items-center justify-between transition-colors"
                  >
                    <span>{near.name}</span>
                    <span>→</span>
                  </Link>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
