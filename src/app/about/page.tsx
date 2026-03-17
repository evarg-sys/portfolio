"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <main className="pt-28 pb-24 px-6">
      <div className="mx-auto max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-3xl font-light tracking-tight text-white sm:text-4xl"
        >
          About me
        </motion.h1>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-12 space-y-6 text-zinc-400 leading-relaxed"
        >
          <motion.p variants={item}>
            I&apos;m a <strong className="text-white">data science student</strong> at the
            University of Illinois Chicago (UIC), with a focus on AI, quantitative
            systems, and research. I believe that data and software can be combined to
            create tools that actually help people—whether that&apos;s optimizing emergency
            response, understanding markets, or building verified systems.
          </motion.p>
          <motion.p variants={item}>
            I&apos;m particularly interested in the intersection of <strong className="text-white">art, design, and data</strong>.
            I think these disciplines can come together to create clear, impactful
            experiences—from dashboards that tell a story to models that support
            real-world decisions.
          </motion.p>
          <motion.p variants={item}>
            My projects have spanned disaster response routing with reinforcement
            learning, quantitative analysis and backtesting, compiler verification
            research, and systems programming. I&apos;m always looking for new ways to use
            data and code to make a positive impact.
          </motion.p>
          <motion.p variants={item}>
            When I&apos;m not coding, I shoot photos (urban, street, night) and enjoy
            exploring where tech and creativity meet.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-14 flex flex-wrap gap-6"
        >
          <Link
            href="/projects"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-white/5"
          >
            View projects
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-[#0a0a0a] transition-opacity hover:opacity-90"
          >
            Get in touch
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
