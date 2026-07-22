"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Bird, Home, Layers } from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  icon: typeof ShieldCheck;
  tag: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "invisible-grills",
    title: "Invisible Grills",
    description:
      "Nearly invisible 316-grade stainless steel wire grills for balconies and windows - full security without blocking your view.",
    image: "/images/invisible_grills.png",
    alt: "Invisible grill installation Chennai balcony for high-rise apartment",
    icon: ShieldCheck,
    tag: "316 SS Wire Spec",
  },
  {
    id: "pigeon-safety-nets",
    title: "Pigeon Safety Nets",
    description:
      "UV-stabilized nylon netting to keep pigeons and birds out of balconies, ducts, and open areas - safe, humane, durable.",
    image: "/images/pigeon_nets.png",
    alt: "Pigeon safety net installation Chennai balcony protection",
    icon: Bird,
    tag: "UV Stabilized",
  },
  {
    id: "balcony-protection",
    title: "Balcony Protection",
    description:
      "Complete balcony enclosure solutions combining nets and grills for child and pet safety.",
    image: "/images/balcony_safety.png",
    alt: "Child safety balcony net and invisible grill enclosure Chennai",
    icon: Home,
    tag: "Child & Pet Safe",
  },
  {
    id: "duct-area-nets",
    title: "Duct Area Nets",
    description:
      "Specialized netting for AC duct areas and utility shafts prone to bird nesting.",
    image: "/images/duct_area_nets.png",
    alt: "Building AC duct area bird protection netting installation Chennai",
    icon: Layers,
    tag: "High-Rise Shafts",
  },
];

function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  const [imageError, setImageError] = useState(false);
  const IconComponent = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative flex flex-col rounded-2xl bg-[#0D1821]/80 border border-[#C7CDD3]/20 hover:border-[#2E86FF] transition-all duration-300 overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(46,134,255,0.25)] hover:-translate-y-2 backdrop-blur-md"
    >
      {/* Service Card Image Container */}
      <div className="relative w-full h-56 sm:h-60 overflow-hidden bg-[#0A1218]">
        {!imageError ? (
          <Image
            src={service.image}
            alt={service.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            onError={() => setImageError(true)}
          />
        ) : (
          /* Fallback UI if image fails */
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#0A1218] text-center border-b border-white/10">
            <IconComponent className="w-12 h-12 text-[#2E86FF] mb-2" />
            <span className="text-xs font-semibold text-[#C7CDD3]">{service.title}</span>
          </div>
        )}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1821] via-transparent to-transparent opacity-90" />

        {/* Feature Tag Pill */}
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0A1218]/80 backdrop-blur-md border border-[#2E86FF]/40 text-[#2E86FF] text-[11px] font-bold uppercase tracking-wider">
          {service.tag}
        </div>
      </div>

      {/* Service Card Body Content */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-lg bg-[#2E86FF]/10 border border-[#2E86FF]/30 flex items-center justify-center text-[#2E86FF] group-hover:bg-[#2E86FF] group-hover:text-white transition-colors duration-300">
              <IconComponent className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-[#2E86FF] transition-colors">
              {service.title}
            </h3>
          </div>

          <p className="text-sm text-[#C7CDD3] leading-relaxed mb-6 font-light">
            {service.description}
          </p>
        </div>

        {/* Micro CTA Button */}
        <a
          href="#contact"
          className="inline-flex items-center justify-between w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#2E86FF]/60 group-hover:bg-[#2E86FF]/10 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300"
        >
          <span>Get Instant Quote</span>
          <ArrowRight className="w-4 h-4 text-[#2E86FF] group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-[#0A1218]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2E86FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2E86FF]/10 border border-[#2E86FF]/30 mb-4">
            <span className="text-xs font-semibold tracking-wider text-[#2E86FF] uppercase">
              Our Core Solutions
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase font-sans mb-4">
            Premium Safety Nets & <span className="text-wire-gradient">Invisible Grills</span>
          </h2>

          <p className="text-base sm:text-lg text-[#C7CDD3] font-light">
            Architectural balcony protection engineered for Chennai&apos;s high-rise apartments, villas, and independent homes.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
