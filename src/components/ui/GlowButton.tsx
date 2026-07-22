"use client";

import { useState, useRef, MouseEvent } from "react";
import { motion } from "framer-motion";

interface GlowButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

export default function GlowButton({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
}: GlowButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>(
    []
  );

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (e.clientX - (left + width / 2)) * 0.2;
    const y = (e.clientY - (top + height / 2)) * 0.2;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setRipples((prev) => [...prev, { x, y, id: Date.now() }]);
    }
    if (onClick) onClick();
  };

  const baseStyles =
    "relative inline-flex items-center justify-center px-8 py-4 rounded-full font-medium text-sm md:text-base uppercase tracking-wider transition-all duration-300 overflow-hidden cursor-pointer select-none";

  const variants = {
    primary:
      "bg-gradient-to-r from-[#2E86FF] to-[#1E62D0] text-white shadow-[0_0_25px_rgba(46,134,255,0.4)] hover:shadow-[0_0_40px_rgba(46,134,255,0.7)] border border-white/20",
    secondary:
      "bg-[#0A1218]/80 text-[#C7CDD3] hover:text-white border border-[#C7CDD3]/30 hover:border-[#2E86FF] hover:bg-[#2E86FF]/10 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.4)]",
  };

  const content = (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {/* Glow highlight */}
      {variant === "primary" && (
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:animate-[shimmer_1.5s_infinite]" />
      )}

      {/* Ripple elements */}
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          onAnimationComplete={() =>
            setRipples((prev) => prev.filter((r) => r.id !== ripple.id))
          }
          className="absolute rounded-full bg-white/40 pointer-events-none w-10 h-10 -translate-x-1/2 -translate-y-1/2"
          style={{ left: ripple.x, top: ripple.y }}
        />
      ))}

      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.div>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return content;
}
