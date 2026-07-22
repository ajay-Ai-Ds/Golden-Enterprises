"use client";

import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AudioManager() {
  const [isMuted, setIsMuted] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Initialize Web Audio API Context on user interaction
  const initAudio = () => {
    if (!audioCtxRef.current && typeof window !== "undefined") {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }
  };

  const toggleSound = () => {
    initAudio();
    if (isMuted) {
      setIsMuted(false);
      setHasInteracted(true);
      playShimmerSFX();
    } else {
      setIsMuted(true);
    }
  };

  // Synthesize subtle wire shimmer sound effect (316 Grade SS Wire catch-light sound)
  const playShimmerSFX = () => {
    if (!audioCtxRef.current || isMuted) return;
    try {
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5 note
      osc.frequency.exponentialRampToValueAtTime(1174.66, ctx.currentTime + 0.15); // D6 note

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.3);
    } catch {
      // Audio context suspended or blocked
    }
  };

  // Listen for global button clicks & slider moves to play subtle SFX if unmuted
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("button, a, input, [role='button']")) {
        playShimmerSFX();
      }
    };

    window.addEventListener("click", handleGlobalClick);
    return () => window.removeEventListener("click", handleGlobalClick);
  }, [isMuted]);

  return (
    <div className="fixed bottom-24 right-6 z-50 select-none">
      <AnimatePresence>
        {!hasInteracted && isMuted && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="mb-2 px-3 py-1.5 rounded-xl bg-[#0D1821] border border-[#2E86FF]/40 text-white text-[11px] font-semibold whitespace-nowrap shadow-2xl flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#F2A93B]" />
            <span>Enable Audio Experience</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mute / Unmute Toggle Floating Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleSound}
        aria-label={isMuted ? "Unmute sound effects" : "Mute sound effects"}
        className={`w-12 h-12 rounded-full flex items-center justify-center border backdrop-blur-xl shadow-2xl transition-all duration-300 ${
          !isMuted
            ? "bg-[#2E86FF] text-white border-white/30 shadow-[0_0_20px_rgba(46,134,255,0.6)]"
            : "bg-[#0D1821]/90 text-[#9AA5AD] border-white/10 hover:text-white hover:border-[#2E86FF]"
        }`}
      >
        {!isMuted ? (
          <Volume2 className="w-5 h-5 animate-pulse" />
        ) : (
          <VolumeX className="w-5 h-5" />
        )}
      </motion.button>
    </div>
  );
}
