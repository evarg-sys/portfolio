"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function PageIntro() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    if (sessionStorage.getItem("ev-intro")) return false;
    sessionStorage.setItem("ev-intro", "1");
    return true;
  });

  if (!visible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex items-center justify-center pointer-events-none"
      initial={{ y: "0%" }}
      animate={{ y: "100%" }}
      transition={{ duration: 0.9, delay: 1.0, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => setVisible(false)}
    >
      <motion.span
        className="text-[11px] tracking-[0.45em] uppercase text-zinc-500 select-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 0.9, times: [0, 0.15, 0.65, 0.92] }}
      >
        Eric Varghese
      </motion.span>
    </motion.div>
  );
}
