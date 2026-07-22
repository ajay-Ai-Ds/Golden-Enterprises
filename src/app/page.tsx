"use client";

import Header from "@/components/common/Header";
import Hero from "@/components/hero/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Gallery from "@/components/sections/Gallery";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import Location from "@/components/sections/Location";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A1218]">
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Pricing />
      <Testimonials />
      <Location />
      <Contact />
      <Footer />
    </main>
  );
}
