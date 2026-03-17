"use client";

import { motion } from "framer-motion";
import { ResearchCard } from "@/components/ResearchCard";
import { research } from "@/data/research";

export default function ResearchPage() {
  return (
    <main className="pt-28 pb-20 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-3xl font-light text-white sm:text-4xl"
        >
          Research
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="mt-2 text-zinc-500"
        >
          Papers, abstracts, PDFs, and code — edit links in <code className="rounded bg-white/10 px-1 py-0.5 text-xs">src/data/research.ts</code>
        </motion.p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {research.map((r, i) => (
            <ResearchCard key={r.title} {...r} index={i} />
          ))}
        </div>
      </div>
    </main>
  );
}
