"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HeroBackground } from "./HeroBackground";
import { TypingText } from "./TypingText";

const skills = [
  "AI / ML",
  "Quantitative",
  "Systems",
  "Research",
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-20 px-6">
      <HeroBackground />

      <div className="relative z-10 mx-auto max-w-7xl w-full">
        {/* Logo/name fade in ~1s */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mb-2 font-display text-sm font-medium tracking-widest text-primary uppercase"
        >
          Eric Varghese
        </motion.div>

        {/* Typing animation ~2s start */}
        <div className="mb-6 min-h-[4rem]">
          <TypingText
            lines={["Computer Science @ UIC"]}
            className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
            delay={2000}
            lineDelay={60}
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 3.2 }}
          className="mb-12 max-w-xl text-lg text-zinc-400"
        >
          AI • Quant • Systems • Research
        </motion.p>

        {/* Interactive elements appear ~3s */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 3 }}
          className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
        >
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 3.2 + i * 0.1 }}
              whileHover={{ scale: 1.02, borderColor: "rgba(0, 229, 255, 0.4)" }}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm transition-colors"
            >
              <span className="text-xs font-medium text-zinc-500">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-display text-sm font-medium text-white">{skill}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.8 }}
          className="mt-12 flex flex-wrap gap-4"
        >
          <Link
            href="/projects"
            className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-[#0b0b0b] transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
          >
            View projects
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-all hover:border-primary hover:bg-white/5"
          >
            Get in touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
