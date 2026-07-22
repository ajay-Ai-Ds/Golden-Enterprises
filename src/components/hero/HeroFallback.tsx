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

      {/* Lightweight SVG Birds Silhouette Flight Path */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: "-10vw", y: `${20 + i * 12}vh`, opacity: 0.7 }}
            animate={{
              x: "110vw",
              y: [`${20 + i * 12}vh`, `${15 + i * 10}vh`, `${25 + i * 12}vh`],
              opacity: [0.3, 0.8, 0.2],
            }}
            transition={{
              duration: 18 + i * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2.5,
            }}
            className="absolute w-6 h-6 text-[#9AA5AD]"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M2 12c4-3 7-3 10 0 3-3 6-3 10 0-4 1-7 0-10-2-3 2-6 3-10 2z" />
            </svg>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
