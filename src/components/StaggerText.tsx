"use client";

import { motion } from "framer-motion";

interface StaggerTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  as?: "words" | "chars";
}

export function StaggerText({
  text,
  className = "",
  delay = 0,
  staggerDelay = 0.03,
  as = "words",
}: StaggerTextProps) {
  const items = as === "words" ? text.split(/\s+/) : text.split("");

  return (
    <span className={`inline-flex flex-wrap ${className}`}>
      {items.map((item, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: delay + i * staggerDelay,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="inline-block overflow-hidden"
          style={{ marginRight: as === "words" ? "0.25em" : 0 }}
        >
          {item}
        </motion.span>
      ))}
    </span>
  );
}
