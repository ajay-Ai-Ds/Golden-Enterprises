"use client";

import Image from "next/image";

interface GalleryProps {
  areaName: string;
}

export default function Gallery({ areaName }: GalleryProps) {
  const GALLERY_IMAGES = [
    { title: `Balcony Netting in ${areaName}`, src: "/images/pigeon_nets.png" },
    { title: `Invisible Grill Installation in ${areaName}`, src: "/images/invisible_grills.png" },
    { title: `Duct Safety Nets in ${areaName}`, src: "/images/duct_area_nets.png" },
    { title: `Cloth Hangers in ${areaName}`, src: "/images/about_installation.png" },
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-white uppercase">
          Installation Gallery in <span className="text-wire-gradient">{areaName}</span>
        </h2>
        <p className="text-xs text-[#9AA5AD] mt-2">Real proof of work across apartment balconies in {areaName}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {GALLERY_IMAGES.map((img, idx) => (
          <div key={idx} className="relative h-60 rounded-2xl overflow-hidden border border-white/10 group">
            <Image
              src={img.src}
              alt={img.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <span className="absolute bottom-4 left-4 text-xs font-bold text-white">{img.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
