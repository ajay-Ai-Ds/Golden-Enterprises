"use client";

import { useState, useRef, MouseEvent, TouchEvent } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage?: string;
  afterImage?: string;
  beforeLabel?: string;
  afterLabel?: string;
  locationTag?: string;
}

export default function BeforeAfterSlider({
  beforeImage = "/images/about_installation.png",
  afterImage = "/images/invisible_grills.png",
  beforeLabel = "Before Protection",
  afterLabel = "After Invisible Grill",
  locationTag = "Adyar, Chennai - Balcony Installation",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;
    if (position < 0) position = 0;
    if (position > 100) position = 100;
    setSliderPosition(position);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      className="relative w-full h-[320px] sm:h-[420px] rounded-2xl overflow-hidden select-none border border-[#C7CDD3]/30 shadow-2xl cursor-ew-resize bg-[#0A1218]"
    >
      {/* After Image (Full width background) */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={afterImage}
          alt={`After ${locationTag}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#2E86FF]/90 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-lg">
          {afterLabel}
        </div>
      </div>

      {/* Before Image (Clipped overlay) */}
      <div
        className="absolute top-0 bottom-0 left-0 overflow-hidden border-r-2 border-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"
        style={{ width: `${sliderPosition}%` }}
      >
        <div className="relative w-full h-full min-w-[300px] sm:min-w-[600px]">
          <Image
            src={beforeImage}
            alt={`Before ${locationTag}`}
            fill
            className="object-cover filter contrast-125 brightness-90"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Simulated Pigeon Mess Overlay filter */}
          <div className="absolute inset-0 bg-[#F2A93B]/10 mix-blend-overlay" />
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0A1218]/90 text-[#F2A93B] text-xs font-bold uppercase tracking-wider border border-[#F2A93B]/40 backdrop-blur-md shadow-lg">
            {beforeLabel}
          </div>
        </div>
      </div>

      {/* Slider Control Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white -translate-x-1/2 pointer-events-none z-20 flex items-center justify-center"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="w-10 h-10 rounded-full bg-[#0A1218] border-2 border-white text-[#2E86FF] flex items-center justify-center shadow-[0_0_20px_rgba(46,134,255,0.8)]">
          <MoveHorizontal className="w-5 h-5" />
        </div>
      </div>

      {/* Location Badge */}
      <div className="absolute bottom-4 left-4 right-4 px-4 py-2 rounded-xl glass-header border border-white/10 text-xs font-semibold text-[#C7CDD3] flex items-center justify-between pointer-events-none">
        <span>{locationTag}</span>
        <span className="text-[10px] text-[#2E86FF] uppercase font-mono">Drag slider</span>
      </div>
    </div>
  );
}
