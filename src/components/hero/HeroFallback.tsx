"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function HeroFallback() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-gradient-to-b from-[#0A1218] via-[#101C26] to-[#0A1218] pointer-events-none">
      {/* Dusk Glow Light Orbs */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#2E86FF]/15 rounded-full blur-[120px] transition-transform duration-700 ease-out"
        style={{ transform: `translate(calc(-50% + ${mousePos.x}px), ${mousePos.y}px)` }}
      />

      {/* SVG Diamond Wire Lattice Overlay with glowing stroke */}
      <div className="absolute inset-0 opacity-25">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="wire-glow-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C7CDD3" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#2E86FF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#C7CDD3" stopOpacity="0.2" />
            </linearGradient>
            <pattern
              id="steel-mesh-pattern"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              {/* Invisible Grill Vertical Wires */}
              <line x1="15" y1="0" x2="15" y2="60" stroke="url(#wire-glow-grad)" strokeWidth="0.8" />
              <line x1="45" y1="0" x2="45" y2="60" stroke="url(#wire-glow-grad)" strokeWidth="0.8" />
              {/* Horizontal Cables */}
              <line x1="0" y1="30" x2="60" y2="30" stroke="#C7CDD3" strokeWidth="0.4" strokeOpacity="0.4" />
              {/* Diamond Weave Nodes */}
              <polygon points="30,0 60,30 30,60 0,30" fill="none" stroke="#2E86FF" strokeWidth="0.4" strokeOpacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#steel-mesh-pattern)" />
        </svg>
      </div>

      {/* Flock of White & Red Flying Pigeons across Sky & Header */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => {
          const isRed = i % 3 === 0;
          return (
            <motion.div
              key={i}
              initial={{ x: "-10vw", y: `${5 + (i * 6) % 65}vh`, opacity: 0 }}
              animate={{
                x: "110vw",
                y: [
                  `${5 + (i * 6) % 65}vh`,
                  `${2 + (i * 5) % 60}vh`,
                  `${8 + (i * 7) % 70}vh`,
                ],
                opacity: [0.2, 0.95, 0.2],
              }}
              transition={{
                duration: 10 + (i % 6) * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: (i * 0.3) % 8,
              }}
              className={`absolute ${isRed ? "text-[#FF3B30] drop-shadow-[0_0_8px_rgba(255,59,48,0.8)]" : "text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]"}`}
              style={{
                width: `${14 + (i % 5) * 4}px`,
                height: `${14 + (i % 5) * 4}px`,
              }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M2 12c4-3 7-3 10 0 3-3 6-3 10 0-4 1-7 0-10-2-3 2-6 3-10 2z" />
              </svg>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
