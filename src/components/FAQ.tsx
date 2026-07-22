"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQProps {
  faqs: { q: string; a: string }[];
  areaName: string;
}

export default function FAQ({ faqs, areaName }: FAQProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2E86FF]/10 border border-[#2E86FF]/30 mb-4">
          <HelpCircle className="w-4 h-4 text-[#2E86FF]" />
          <span className="text-xs font-bold text-[#2E86FF] uppercase tracking-wider">
            Locality FAQ
          </span>
        </div>
        <h2 className="text-3xl font-extrabold text-white uppercase">
          Frequently Asked Questions in <span className="text-wire-gradient">{areaName}</span>
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-2xl bg-[#0D1821] border border-white/10 overflow-hidden"
          >
            <button
              onClick={() => setOpenIdx(openIdx === index ? null : index)}
              className="w-full px-6 py-5 text-left text-sm font-bold text-white flex items-center justify-between hover:text-[#2E86FF] transition-colors"
            >
              <span>{faq.q}</span>
              <ChevronDown
                className={`w-5 h-5 text-[#2E86FF] transition-transform ${
                  openIdx === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIdx === index && (
              <div className="px-6 pb-6 text-xs text-[#C7CDD3] font-light leading-relaxed border-t border-white/5 pt-4">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
