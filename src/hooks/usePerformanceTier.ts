"use client";

import { useEffect, useState } from "react";

export interface PerformanceTier {
  isLowPerformance: boolean;
  maxParticleCount: number;
  enableBloom: boolean;
  enable3D: boolean;
}

export function usePerformanceTier(): PerformanceTier {
  const [tier, setTier] = useState<PerformanceTier>({
    isLowPerformance: false,
    maxParticleCount: 500,
    enableBloom: true,
    enable3D: true,
  });

  useEffect(() => {
    const checkPerformance = () => {
      const isSmallScreen = window.innerWidth < 768;
      const isLowCores =
        typeof navigator !== "undefined" &&
        navigator.hardwareConcurrency !== undefined &&
        navigator.hardwareConcurrency <= 2; // Only flag extreme low-spec (<= 2 cores)
      const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const hasWebGL = (() => {
        try {
          const canvas = document.createElement("canvas");
          return !!(
            window.WebGLRenderingContext &&
            (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
          );
        } catch {
          return false;
        }
      })();

      const isLow = (isSmallScreen || isLowCores || prefersReducedMotion) && !hasWebGL;

      setTier({
        isLowPerformance: isLow,
        maxParticleCount: isLow ? 150 : 600, // Capped under 200 on low spec
        enableBloom: !isLow,
        enable3D: !isLow,
      });
    };

    checkPerformance();

    window.addEventListener("resize", checkPerformance);
    return () => window.removeEventListener("resize", checkPerformance);
  }, []);

  return tier;
}
