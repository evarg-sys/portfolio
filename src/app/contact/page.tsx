"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="pt-28 pb-20 px-6">
      <div className="mx-auto max-w-xl">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-3xl font-bold text-white sm:text-4xl"
        >
          Get in touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-zinc-400"
        >
          Contact form and AI Assistant link will go here. (Phase 3 — Backend)
        </motion.p>
      </div>
    </main>
  );
}
