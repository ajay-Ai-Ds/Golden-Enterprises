"use client";

import Image from "next/image";
import { PhoneCall, MessageSquare, MapPin, ShieldCheck, Star } from "lucide-react";

interface HeroProps {
  serviceTitle: string;
  areaName: string;
  cityName?: string;
  imageSrc?: string;
}

export default function Hero({
  serviceTitle,
  areaName,
  cityName = "Chennai",
  imageSrc = "/images/pigeon_nets.png",
}: HeroProps) {
  const phoneNumber = "+919876543210";
  const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(
    `Hi Golden Enterprises, I need ${serviceTitle} in ${areaName}, ${cityName}. Please contact me.`
  )}`;

  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#060B0F] via-[#0D1821] to-[#0A1218] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2E86FF]/10 border border-[#2E86FF]/30 mb-6">
              <MapPin className="w-4 h-4 text-[#2E86FF]" />
              <span className="text-xs font-bold text-[#2E86FF] uppercase tracking-wider">
                {areaName}, {cityName} • Certified Installation
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-white uppercase tracking-tight mb-6 leading-tight">
              {serviceTitle} in <span className="text-wire-gradient">{areaName}, {cityName}</span>
            </h1>

            <p className="text-base sm:text-xl text-[#C7CDD3] font-light leading-relaxed mb-8">
              Protect your balcony, children, and pets with Golden Enterprises&apos; 316 marine-grade stainless steel invisible grills and UV-stabilized Garware pigeon safety nets.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href={`tel:${phoneNumber}`}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#2E86FF] to-[#1E62D0] text-white font-bold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(46,134,255,0.4)] flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call +91 98765 43210</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-[#25D366] text-white font-bold text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(37,211,102,0.4)] flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>WhatsApp Quote for {areaName}</span>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[380px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0D1821] group">
              <Image
                src={imageSrc}
                alt={`${serviceTitle} in ${areaName}`}
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1218] via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-header border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-7 h-7 text-[#2E86FF]" />
                  <div>
                    <h4 className="text-xs font-bold text-white">100% Guaranteed Fit</h4>
                    <p className="text-[10px] text-[#9AA5AD]">{areaName} Region</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[#F2A93B] text-xs font-bold">
                  <Star className="w-4 h-4 fill-[#F2A93B]" />
                  <span>4.9 / 5</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
