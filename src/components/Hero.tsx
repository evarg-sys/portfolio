"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { StaggerText } from "./StaggerText";
import { HeroBackgroundAnimation } from "./HeroBackgroundAnimation";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-20 px-6">
      <HeroBackgroundAnimation />
      <div className="relative z-10 mx-auto max-w-4xl w-full">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 font-display text-xs font-medium tracking-[0.3em] text-zinc-500 uppercase"
        >
          Eric Varghese
        </motion.p>

        <h1 className="font-display text-4xl font-light tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          <StaggerText
            text="Data science is my craft"
            delay={0.5}
            staggerDelay={0.06}
            as="words"
          />
        </h1>
        <p className="mt-2 font-display text-3xl font-light tracking-tight text-zinc-400 sm:text-4xl md:text-5xl">
          abstract thinking is my passion
        </p>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.2 }}
          className="mt-10 max-w-2xl text-lg leading-relaxed text-zinc-500"
        >
          A data science student with a passion for innovation and cutting-edge
          technology. Particularly interested in the intersection of AI, quant, and
          systems—and using data to solve real problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8 }}
          className="mt-12 flex flex-wrap gap-4"
        >
          <Link
            href="/projects"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-white/5"
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
          transition={{ delay: 3.2 }}
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
