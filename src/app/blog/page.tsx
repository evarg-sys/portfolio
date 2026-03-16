"use client";

import { motion } from "framer-motion";

export default function BlogPage() {
  return (
    <main className="pt-28 pb-20 px-6">
      <div className="mx-auto max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-3xl font-bold text-white sm:text-4xl"
        >
          Blog
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-zinc-400"
        >
          Blog posts will be loaded from your backend. (Phase 3)
        </motion.p>
      </div>
    </main>
  );
}
