"use client";

import { motion } from "framer-motion";

export default function PhotographyPage() {
  return (
    <main className="pt-28 pb-24 px-6">
      <div className="mx-auto max-w-2xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-3xl font-light tracking-tight text-white sm:text-4xl"
        >
          Photography
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-8 text-xl text-zinc-500"
        >
          Coming soon
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-2 text-sm text-zinc-600"
        >
          Urban · Nature · Street · Night
        </motion.p>
      </div>
    </main>
  );
}
