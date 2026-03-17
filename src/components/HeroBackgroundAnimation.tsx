"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useMotionValue, useSpring, useTransform } from "framer-motion";

export function HeroBackgroundAnimation() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const springX = useSpring(pointerX, { stiffness: 40, damping: 18, mass: 0.5 });
  const springY = useSpring(pointerY, { stiffness: 40, damping: 18, mass: 0.5 });

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;
      pointerX.set(x);
      pointerY.set(y);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [pointerX, pointerY]);

  const bubble1X = useTransform(springX, (value) => -value * 44);
  const bubble1Y = useTransform(springY, (value) => -value * 44);
  const bubble2X = useTransform(springX, (value) => -value * 30);
  const bubble2Y = useTransform(springY, (value) => -value * 30);
  const bubble3X = useTransform(springX, (value) => -value * 38);
  const bubble3Y = useTransform(springY, (value) => -value * 38);
  const bubble4X = useTransform(springX, (value) => -value * 24);
  const bubble4Y = useTransform(springY, (value) => -value * 24);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div
        className="absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(130,155,255,0.22),rgba(130,155,255,0.05)_45%,rgba(10,10,10,0)_70%)] blur-2xl"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.4, 0.7, 0.45],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div className="absolute left-[18%] top-[26%]" style={{ x: bubble1X, y: bubble1Y }}>
        <motion.div
          className="h-64 w-64 rounded-full border border-white/20 bg-white/10 backdrop-blur-md"
          animate={{ x: [0, 46, -23, 0], y: [0, -36, 18, 0], scale: [1, 1.1, 0.96, 1] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <motion.div className="absolute left-[38%] top-[20%]" style={{ x: bubble2X, y: bubble2Y }}>
        <motion.div
          className="h-36 w-36 rounded-full border border-white/20 bg-white/10 backdrop-blur-md"
          animate={{ x: [0, 34, -17, 0], y: [0, -44, 22, 0], scale: [1, 1.08, 0.97, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        />
      </motion.div>

      <motion.div className="absolute right-[14%] top-[34%]" style={{ x: bubble3X, y: bubble3Y }}>
        <motion.div
          className="h-52 w-52 rounded-full border border-white/20 bg-white/10 backdrop-blur-md"
          animate={{ x: [0, 48, -24, 0], y: [0, -30, 15, 0], scale: [1, 1.1, 0.96, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
        />
      </motion.div>

      <motion.div className="absolute right-[24%] top-[56%]" style={{ x: bubble4X, y: bubble4Y }}>
        <motion.div
          className="h-40 w-40 rounded-full border border-white/20 bg-white/10 backdrop-blur-md"
          animate={{ x: [0, 30, -15, 0], y: [0, -40, 20, 0], scale: [1, 1.08, 0.97, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
        />
      </motion.div>

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)
          `,
          backgroundSize: "52px 52px",
        }}
      />
    </div>
  );
}
