"use client";

import { motion } from "framer-motion";

export function HeroBackgroundAnimation() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div
        className="absolute -left-[20%] top-[18%] h-[2px] w-[150%] rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent blur-[1px]"
        animate={{
          x: ["-8%", "6%", "-8%"],
          y: [0, -14, 0],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transform: "rotate(-6deg)" }}
      />

      <motion.div
        className="absolute -left-[18%] top-[34%] h-[2px] w-[145%] rounded-full bg-gradient-to-r from-transparent via-white/15 to-transparent"
        animate={{
          x: ["10%", "-10%", "10%"],
          y: [0, 12, 0],
          opacity: [0.12, 0.28, 0.12],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transform: "rotate(4deg)", filter: "blur(0.6px)" }}
      />

      <motion.div
        className="absolute -left-[16%] top-[52%] h-[1px] w-[140%] rounded-full bg-gradient-to-r from-transparent via-white/25 to-transparent"
        animate={{
          x: ["-6%", "7%", "-6%"],
          y: [0, -8, 0],
          opacity: [0.1, 0.24, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transform: "rotate(-3deg)", filter: "blur(1px)" }}
      />

      <motion.div
        className="absolute -left-[14%] top-[68%] h-[1px] w-[138%] rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{
          x: ["7%", "-9%", "7%"],
          y: [0, 9, 0],
          opacity: [0.08, 0.22, 0.08],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transform: "rotate(5deg)", filter: "blur(1px)" }}
      />

      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04),rgba(10,10,10,0)_60%)]"
      />

      <div
        className="absolute inset-0 bg-[#0a0a0a]/40"
      />

      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />
    </div>
  );
}
