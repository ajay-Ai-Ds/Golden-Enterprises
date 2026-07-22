"use client";

import { PhoneCall, MessageSquare } from "lucide-react";

interface CTAProps {
  areaName: string;
  serviceTitle: string;
}

export default function CTA({ areaName, serviceTitle }: CTAProps) {
  const phoneNumber = "+919876543210";
  const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(
    `Hi Golden Enterprises, I want a free quote for ${serviceTitle} in ${areaName}.`
  )}`;

  return (
    <section className="py-20 bg-gradient-to-r from-[#0D1821] via-[#1E62D0]/20 to-[#0D1821] border-t border-b border-white/10 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-5xl font-extrabold uppercase text-white mb-4">
          Book Free Inspection in <span className="text-wire-gradient">{areaName}</span>
        </h2>
        <p className="text-sm sm:text-base text-[#C7CDD3] mb-8 font-light">
          Our technician will visit your balcony in {areaName} with 316 SS wire and Garware net samples.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={`tel:${phoneNumber}`}
            className="px-8 py-4 rounded-full bg-[#2E86FF] text-white font-bold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(46,134,255,0.5)] flex items-center justify-center gap-2"
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
            <span>WhatsApp Instant Quote</span>
          </a>
        </div>
      </div>
    </section>
  );
}
