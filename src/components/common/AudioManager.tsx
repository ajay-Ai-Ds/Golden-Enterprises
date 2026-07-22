"use client";

import { useState, useEffect, useRef } from "react";
import { VolumeX, Wind, Music } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AudioManager() {
  const [isMuted, setIsMuted] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const breezeGainRef = useRef<GainNode | null>(null);
  const breezeSourceRef = useRef<AudioBufferSourceNode | null>(null);
  const birdTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize Web Audio API Context
  const initAudio = () => {
    if (!audioCtxRef.current && typeof window !== "undefined") {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }
  };

  // Synthesize Coastal Sky Breeze Background Loop
  const startCoastalBreezeTrack = () => {
    if (!audioCtxRef.current) return;
    const ctx = audioCtxRef.current;

    if (breezeSourceRef.current) {
      try { breezeSourceRef.current.stop(); } catch {}
    }

    const bufferSize = ctx.sampleRate * 4;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      data[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
      data[i] *= 0.04;
      b6 = white * 0.115926;
    }

    const noiseSource = ctx.createBufferSource();
    noiseSource.buffer = buffer;
    noiseSource.loop = true;

    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(320, ctx.currentTime);

    const breezeGain = ctx.createGain();
    breezeGain.gain.setValueAtTime(0.04, ctx.currentTime);

    noiseSource.connect(filter);
    filter.connect(breezeGain);
    breezeGain.connect(ctx.destination);

    noiseSource.start();
    breezeSourceRef.current = noiseSource;
    breezeGainRef.current = breezeGain;

    scheduleMorningBirdChirps();
  };

  // Stop background track
  const stopCoastalBreezeTrack = () => {
    if (breezeGainRef.current && audioCtxRef.current) {
      breezeGainRef.current.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 0.5);
      setTimeout(() => {
        if (breezeSourceRef.current) {
          try { breezeSourceRef.current.stop(); } catch {}
        }
      }, 500);
    }
    if (birdTimerRef.current) {
      clearTimeout(birdTimerRef.current);
    }
  };

  // Synthesize delicate distant bird chirps
  const playDistantBirdChirp = () => {
    if (!audioCtxRef.current || isMuted) return;
    try {
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      const startFreq = 2400 + Math.random() * 800;
      osc.type = "sine";
      osc.frequency.setValueAtTime(startFreq, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(startFreq + 600, ctx.currentTime + 0.08);
      osc.frequency.exponentialRampToValueAtTime(startFreq - 400, ctx.currentTime + 0.18);

      gain.gain.setValueAtTime(0.02, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.2);
    } catch {}
  };

  const scheduleMorningBirdChirps = () => {
    if (isMuted) return;
    const nextInterval = 4000 + Math.random() * 6000;
    birdTimerRef.current = setTimeout(() => {
      playDistantBirdChirp();
      scheduleMorningBirdChirps();
    }, nextInterval);
  };

  // Synthesize metallic wire catch-light chime on UI click
  const playWireChimeSFX = () => {
    if (!audioCtxRef.current || isMuted) return;
    try {
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(587.33, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1174.66, ctx.currentTime + 0.15);

      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    } catch {}
  };

  const toggleSound = () => {
    initAudio();
    if (isMuted) {
      setIsMuted(false);
      setHasInteracted(true);
      startCoastalBreezeTrack();
      playWireChimeSFX();
    } else {
      setIsMuted(true);
      stopCoastalBreezeTrack();
    }
  };

  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("button, a, input, [role='button']")) {
        playWireChimeSFX();
      }
    };

    window.addEventListener("click", handleGlobalClick);
    return () => window.removeEventListener("click", handleGlobalClick);
  }, [isMuted]);

  return (
    /* Clean Bottom-Left Positioning (Zero overlap with bottom-right Call/WhatsApp buttons) */
    <div className="fixed bottom-6 left-6 z-50 select-none flex flex-col items-start">
      <AnimatePresence>
        {!hasInteracted && isMuted && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="mb-2.5 px-3.5 py-2 rounded-2xl bg-[#0D1821]/95 border border-[#2E86FF]/50 text-white text-xs font-semibold whitespace-nowrap shadow-2xl flex items-center gap-2 backdrop-blur-xl"
          >
            <Wind className="w-4 h-4 text-[#2E86FF] animate-pulse" />
            <div>
              <span className="block font-bold">Play Coastal Sky Track</span>
              <span className="text-[10px] text-[#9AA5AD]">Chennai Balcony Atmosphere</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mute / Unmute Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleSound}
        aria-label={isMuted ? "Play Coastal Sky Track" : "Mute Audio Track"}
        className={`w-12 h-12 rounded-full flex items-center justify-center border backdrop-blur-2xl shadow-2xl transition-all duration-300 ${
          !isMuted
            ? "bg-[#2E86FF] text-white border-white/30 shadow-[0_0_25px_rgba(46,134,255,0.7)]"
            : "bg-[#0D1821]/90 text-[#9AA5AD] border-white/10 hover:text-white hover:border-[#2E86FF]"
        }`}
      >
        {!isMuted ? (
          <Music className="w-5 h-5 text-white" />
        ) : (
          <VolumeX className="w-5 h-5" />
        )}
      </motion.button>
    </div>
  );
}
