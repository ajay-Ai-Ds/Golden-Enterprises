"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import BeforeAfterSlider from "../common/BeforeAfterSlider";
import { MapPin, ZoomIn } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  location: string;
  service: string;
  image: string;
  alt: string;
  span?: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "High-Rise Apartment Balcony",
    location: "Adyar, Chennai",
    service: "316 SS Invisible Grill Installation",
    image: "/images/about_installation.png",
    alt: "Adyar Chennai high-rise balcony invisible grill installation",
    span: "col-span-1 md:col-span-2",
  },
  {
    id: "g2",
    title: "Luxury Villa Terrace",
    location: "ECR, Chennai",
    service: "Pigeon Safety Netting",
    image: "/images/pigeon_nets.png",
    alt: "ECR Chennai villa balcony pigeon safety netting installation",
    span: "col-span-1",
  },
  {
    id: "g3",
    title: "Duplex Window Protection",
    location: "Anna Nagar, Chennai",
    service: "Invisible Grill & Net Enclosure",
    image: "/images/invisible_grills.png",
    alt: "Anna Nagar Chennai duplex window invisible grill installation",
    span: "col-span-1",
  },
  {
    id: "g4",
    title: "Child & Pet Safety Balcony",
    location: "Velachery, Chennai",
    service: "High-Tensile Cable Netting",
    image: "/images/balcony_safety.png",
    alt: "Velachery Chennai balcony child safety net installation",
    span: "col-span-1 md:col-span-2",
  },
  {
    id: "g5",
    title: "AC Duct & Shaft Netting",
    location: "OMR IT Corridor, Chennai",
    service: "Duct Area Bird Protection",
    image: "/images/duct_area_nets.png",
    alt: "OMR Chennai IT corridor building duct area bird netting",
    span: "col-span-1",
  },
];

function GalleryCard({ item, index }: { item: GalleryItem; index: number }) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative rounded-2xl overflow-hidden bg-[#0D1821] border border-white/10 hover:border-[#2E86FF] transition-all duration-500 shadow-xl ${item.span || ""}`}
    >
      <div className="relative h-72 sm:h-80 w-full overflow-hidden">
        {!imageError ? (
          <Image
            src={item.image}
            alt={item.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#0D1821] text-center">
            <ZoomIn className="w-10 h-10 text-[#2E86FF] mb-2" />
            <span className="text-xs font-semibold text-[#C7CDD3]">{item.title}</span>
          </div>
        )}

        {/* Hover Overlay with Location Tag */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1218] via-[#0A1218]/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-end p-6">
          <div className="inline-flex items-center gap-1.5 text-xs text-[#2E86FF] font-semibold mb-1">
            <MapPin className="w-3.5 h-3.5" />
            <span>{item.location}</span>
          </div>

          <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#2E86FF] transition-all">
            {item.title}
          </h3>

          <p className="text-xs text-[#C7CDD3] mt-1 font-light">
            {item.service}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 bg-[#0A1218]">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2E86FF]/10 border border-[#2E86FF]/30 mb-4">
            <span className="text-xs font-semibold tracking-wider text-[#2E86FF] uppercase">
              Installation Proof & Portfolio
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase font-sans mb-4">
            Our Work Across <span className="text-wire-gradient">Chennai</span>
          </h2>

          <p className="text-base sm:text-lg text-[#C7CDD3] font-light">
            Real balcony safety net & 316-grade invisible grill installations in Adyar, ECR, Anna Nagar, Velachery, and OMR.
          </p>
        </div>

        {/* Interactive Before / After Transformation Slider */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-white mb-4 text-center">
            Interactive Before & After Transformation
          </h3>
          <p className="text-xs text-[#9AA5AD] text-center mb-6">
            Drag the slider horizontally to compare balcony security before and after Golden Enterprises installation.
          </p>

          <BeforeAfterSlider
            beforeImage="/images/about_installation.png"
            afterImage="/images/invisible_grills.png"
            beforeLabel="Before Protection"
            afterLabel="After Invisible Grill"
            locationTag="Adyar, Chennai • 14th Floor Apartment Balcony"
          />
        </div>

        {/* Gallery Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <GalleryCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
