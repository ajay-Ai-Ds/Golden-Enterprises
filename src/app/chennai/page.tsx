import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Contact from "@/components/sections/Contact";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, MapPin, ArrowRight, CheckCircle2, PhoneCall } from "lucide-react";

export const metadata: Metadata = {
  title: "Balcony Safety Nets & Invisible Grills Services in Chennai | Golden Enterprises",
  description:
    "Explore Golden Enterprises' full suite of balcony safety services across Chennai: Invisible Grills, Pigeon Safety Nets, Cloth Hangers, Mosquito Mesh, and Pigeon Spikes.",
};

const CHENNAI_SERVICES = [
  {
    title: "Pigeon Safety Nets",
    href: "/chennai/safety-nets",
    desc: "UV-stabilized high-durability netting for balconies, open areas, and high-rise apartments.",
    image: "/images/pigeon_nets.png",
  },
  {
    title: "Invisible Grills",
    href: "/chennai/invisible-grills",
    desc: "Nearly invisible 316-grade stainless steel wire grills providing maximum security without view obstruction.",
    image: "/images/invisible_grills.png",
  },
  {
    title: "Ceiling Cloth Hangers",
    href: "/chennai/cloth-hangers",
    desc: "Space-saving ceiling pull-down and wall-mounted stainless steel cloth drying hangers for balconies.",
    image: "/images/about_installation.png",
  },
  {
    title: "Mosquito Mesh",
    href: "/chennai/mosquito-mesh",
    desc: "SS and fiberglass mosquito mesh screens for windows and balcony doors to keep insects out.",
    image: "/images/balcony_safety.png",
  },
  {
    title: "Anti-Pigeon Spikes",
    href: "/chennai/pigeon-spikes",
    desc: "Polycarbonate and SS bird deterrent spikes for parapet walls, AC outdoor units, and ledges.",
    image: "/images/duct_area_nets.png",
  },
];

const LOCALITIES = [
  { name: "Velachery", href: "/chennai/safety-nets/velachery" },
  { name: "Anna Nagar", href: "/chennai/safety-nets/anna-nagar" },
  { name: "Tambaram", href: "/chennai/safety-nets/tambaram" },
  { name: "OMR IT Corridor", href: "/chennai/safety-nets/omr" },
  { name: "Porur", href: "/chennai/safety-nets/porur" },
];

export default function ChennaiHubPage() {
  return (
    <main className="min-h-screen bg-[#0A1218] text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#060B0F] via-[#0D1821] to-[#0A1218]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2E86FF]/10 border border-[#2E86FF]/30 mb-6">
            <MapPin className="w-4 h-4 text-[#2E86FF]" />
            <span className="text-xs font-bold text-[#2E86FF] uppercase tracking-wider">
              Chennai Service Hub
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white uppercase font-sans mb-6">
            Balcony Safety & Protection Services in <span className="text-wire-gradient">Chennai</span>
          </h1>

          <p className="text-base sm:text-xl text-[#C7CDD3] max-w-3xl mx-auto font-light leading-relaxed mb-8">
            Golden Enterprises provides end-to-end balcony safety solutions across Chennai: Invisible Grills, Pigeon Nets, Mosquito Mesh, Cloth Hangers, and Pigeon Spikes.
          </p>

          <a
            href="tel:+919876543210"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#2E86FF] text-white font-bold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(46,134,255,0.4)]"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call +91 98765 43210 for Free Inspection</span>
          </a>
        </div>
      </section>

      {/* Service Categories Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-4xl font-extrabold uppercase mb-12 text-center">
          Explore Our <span className="text-wire-gradient">Services</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CHENNAI_SERVICES.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-[#0D1821] border border-white/10 overflow-hidden hover:border-[#2E86FF] transition-all group"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-[#C7CDD3] mb-6 font-light">{item.desc}</p>
                <a
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2E86FF] hover:underline"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Locality Hub Links */}
      <section className="py-16 bg-[#0D1821]/60 border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold uppercase mb-8">Popular Chennai Service Localities</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {LOCALITIES.map((loc) => (
              <a
                key={loc.name}
                href={loc.href}
                className="px-6 py-3 rounded-full bg-[#0A1218] border border-white/10 hover:border-[#2E86FF] text-xs font-semibold text-white transition-all flex items-center gap-2"
              >
                <MapPin className="w-3.5 h-3.5 text-[#2E86FF]" />
                <span>{loc.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
