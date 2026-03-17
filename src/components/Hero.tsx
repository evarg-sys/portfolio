"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HeroBackgroundAnimation } from "./HeroBackgroundAnimation";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pb-20 pt-32 sm:pt-36">
      <HeroBackgroundAnimation />
      <div className="relative z-10 mx-auto w-full max-w-4xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-7 font-display text-[11px] font-medium uppercase tracking-[0.32em] text-zinc-500"
        >
          Eric Varghese
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="max-w-4xl font-display text-[54px] font-light leading-[0.94] tracking-[-0.05em] text-white sm:text-[72px] md:text-[92px]"
        >
          Hi, I&apos;m Eric.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.48 }}
          className="mt-3 font-display text-[30px] font-light tracking-[-0.04em] text-zinc-300 sm:text-[42px] md:text-[56px]"
        >
          I build things with data.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 max-w-xl text-[17px] leading-8 text-zinc-500"
        >
          Data science student focused on AI, quant, and systems. I like building
          clean, useful work that turns complex data into practical tools.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.92 }}
          className="mt-12 flex flex-wrap gap-4"
        >
          <Link
            href="/projects"
            className="rounded-full border border-white/[0.12] bg-white/[0.03] px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/[0.2] hover:bg-white/[0.07]"
          >
            View projects
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-[#0a0a0a] transition-opacity hover:bg-zinc-200"
          >
            Get in touch
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.15 }}
          className="mt-20 flex items-center gap-2 text-zinc-600"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="block h-4 w-px bg-zinc-600"
          />
        </motion.div>
      </div>
    </section>
  );
}
