"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  location: string;
  service: string;
  quote: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Karthik Subramanian",
    location: "Adyar, Chennai",
    service: "316 Grade Invisible Grills",
    quote:
      "Installed invisible grills for our 12th-floor balcony in Adyar. The 316 steel wire quality is exceptional — from 10 feet away you cannot even see the grill! Peace of mind for our kids without blocking our sea breeze.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Priya Rajagopal",
    location: "Anna Nagar, Chennai",
    service: "Balcony Pigeon Netting",
    quote:
      "We had a major pigeon nesting issue in our Anna Nagar apartment. Golden Enterprises completed the installation in just 3 hours. Completely bird-free balcony for the last 6 months!",
    rating: 5,
  },
  {
    id: "t3",
    name: "Venkatesh Narayanan",
    location: "OMR IT Corridor, Chennai",
    service: "Invisible Grill & Net Enclosure",
    quote:
      "Very professional team. They came for a free inspection on Tuesday and completed the installation by Thursday. Clean finishing and sturdy marine-grade wire mounting.",
    rating: 5,
  },
  {
    id: "t4",
    name: "Anand & Divya",
    location: "Velachery, Chennai",
    service: "Child Safety Nets",
    quote:
      "Must-have for high-rise apartment owners in Chennai. The invisible grills look super sleek, elegant, and modern compared to traditional heavy iron grills.",
    rating: 5,
  },
  {
    id: "t5",
    name: "Dr. S. Ramakrishnan",
    location: "Nungambakkam, Chennai",
    service: "AC Duct Bird Netting",
    quote:
      "Got our building's AC duct areas covered with UV-stabilized nets. Excellent workmanship and prompt customer service from Golden Enterprises.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  // Auto-slide effect, pauses on hover/focus
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Keyboard navigation accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 50) prevSlide();
    if (deltaX < -50) nextSlide();
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section
      id="testimonials"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      className="relative py-24 bg-[#0A1218] border-t border-white/5 outline-none"
    >
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2E86FF]/10 border border-[#2E86FF]/30 mb-4">
            <span className="text-xs font-semibold tracking-wider text-[#2E86FF] uppercase">
              Customer Reviews
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase font-sans mb-4">
            What Chennai Say About <span className="text-wire-gradient">Golden Enterprises</span>
          </h2>
        </div>

        {/* Testimonial Glass Carousel Card */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative min-h-[300px] p-8 sm:p-12 rounded-3xl bg-[#0D1821]/80 border border-[#C7CDD3]/20 backdrop-blur-xl shadow-2xl flex flex-col justify-between"
        >
          <Quote className="absolute top-6 right-8 w-16 h-16 text-[#2E86FF]/10 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col justify-between h-full"
            >
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#F2A93B] text-[#F2A93B]" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-base sm:text-xl text-[#C7CDD3] font-light leading-relaxed mb-8 italic">
                &ldquo;{current.quote}&rdquo;
              </p>

              {/* Author & Location */}
              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <div>
                  <h4 className="text-lg font-bold text-white">{current.name}</h4>
                  <p className="text-xs text-[#2E86FF] font-semibold mt-0.5">
                    {current.location} • <span className="text-[#9AA5AD]">{current.service}</span>
                  </p>
                </div>
                <span className="text-xs text-[#9AA5AD] font-mono uppercase tracking-wider hidden sm:block">
                  Verified Installation
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Navigation Buttons & Dots */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "bg-[#2E86FF] w-8 shadow-[0_0_10px_#2E86FF]"
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={prevSlide}
                aria-label="Previous Testimonial"
                className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#2E86FF] hover:border-[#2E86FF] transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next Testimonial"
                className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#2E86FF] hover:border-[#2E86FF] transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
