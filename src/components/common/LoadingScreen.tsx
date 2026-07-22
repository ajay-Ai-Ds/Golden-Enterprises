"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({
  onComplete,
}: {
  onComplete?: () => void;
}) {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        const visited = sessionStorage.getItem("ge_visited_session");
        if (visited) {
          setShouldRender(false);
          if (onCompleteRef.current) onCompleteRef.current();
          return;
        }
      }
    } catch {
      // Storage access blocked or restricted
    }

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 12) + 8;
      if (currentProgress >= 100) {
        currentProgress = 100;
        setProgress(100);
        clearInterval(interval);

        setTimeout(() => {
          setIsLoaded(true);
          try {
            if (typeof window !== "undefined") {
              sessionStorage.setItem("ge_visited_session", "true");
            }
          } catch {
            // Storage access blocked
          }
          if (onCompleteRef.current) onCompleteRef.current();
        }, 600);
      } else {
        setProgress(currentProgress);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  if (!shouldRender) return null;

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0A1218] text-white overflow-hidden select-none"
        >
          {/* Background Straight Parallel Grill Mesh */}
          <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="straight-wire-mesh"
                  width="30"
                  height="30"
                  patternUnits="userSpaceOnUse"
                >
                  {/* Straight Narrow Vertical & Horizontal Grill Lines */}
                  <line x1="15" y1="0" x2="15" y2="30" stroke="#C7CDD3" strokeWidth="0.6" strokeOpacity="0.4" />
                  <line x1="0" y1="15" x2="30" y2="15" stroke="#C7CDD3" strokeWidth="0.6" strokeOpacity="0.4" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#straight-wire-mesh)" />
            </svg>
          </div>

          {/* Center Brand Wire Line Trace */}
          <div className="relative z-10 flex flex-col items-center px-4 max-w-xl text-center">
            {/* Straight Grill Motif Badge SVG Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="w-20 h-20 mb-6 relative flex items-center justify-center"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Outer Ring */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#C7CDD3"
                  strokeWidth="1.5"
                  strokeDasharray="283"
                  strokeDashoffset={283 - (283 * progress) / 100}
                  className="transition-all duration-150"
                />
                {/* Straight Parallel Grill Wires */}
                <line x1="30" y1="20" x2="30" y2="80" stroke="#2E86FF" strokeWidth="1.5" strokeDasharray="60" strokeDashoffset={60 - (60 * progress) / 100} />
                <line x1="50" y1="15" x2="50" y2="85" stroke="#2E86FF" strokeWidth="1.5" strokeDasharray="70" strokeDashoffset={70 - (70 * progress) / 100} />
                <line x1="70" y1="20" x2="70" y2="80" stroke="#2E86FF" strokeWidth="1.5" strokeDasharray="60" strokeDashoffset={60 - (60 * progress) / 100} />
                <line x1="20" y1="50" x2="80" y2="50" stroke="#F2A93B" strokeWidth="1.5" strokeDasharray="60" strokeDashoffset={60 - (60 * progress) / 100} />
              </svg>
            </motion.div>

            {/* Continuous Line Wire Traced Text */}
            <div className="relative overflow-hidden mb-2">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-2xl md:text-4xl font-bold tracking-[0.25em] text-white uppercase font-sans drop-shadow-[0_0_15px_rgba(46,134,255,0.4)]"
              >
                GOLDEN ENTERPRISES
              </motion.h1>
            </div>

            {/* Subtitle "CHENNAI" settling beneath */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: progress > 40 ? 1 : 0, y: progress > 40 ? 0 : 10 }}
              transition={{ duration: 0.5 }}
              className="text-xs md:text-sm tracking-[0.4em] text-[#C7CDD3] uppercase font-medium mb-8"
            >
              CHENNAI • PIGEON SAFETY NETS & INVISIBLE GRILLS
            </motion.p>

            {/* Thin Glowing Wire Progress Bar */}
            <div className="w-64 md:w-80 h-[2px] bg-white/10 rounded-full relative overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#2E86FF] via-[#C7CDD3] to-[#F2A93B] rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.1 }}
              />
              <div
                className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#2E86FF] blur-[3px]"
                style={{ left: `calc(${progress}% - 4px)` }}
              />
            </div>

            {/* Progress Percentage */}
            <span className="text-[10px] tracking-widest text-[#9AA5AD] mt-3 font-mono">
              WEAVING PROTECTION {progress}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
