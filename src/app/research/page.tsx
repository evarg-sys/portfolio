"use client";

import { motion } from "framer-motion";
import { ResearchCard } from "@/components/ResearchCard";

const research = [
  {
    title: "Emergency Response Routing AI",
    abstract:
      "Optimizing routes and resource allocation for disaster response using reinforcement learning and spatial analytics.",
    pdfUrl: "#",
    codeUrl: "#",
  },
  {
    title: "CompCert Verification Research",
    abstract:
      "Formal verification and compiler correctness in verified systems.",
    pdfUrl: "#",
    codeUrl: "#",
  },
];

export default function ResearchPage() {
  return (
    <main className="pt-28 pb-20 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-3xl font-bold text-white sm:text-4xl"
        >
          Research
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-2 text-zinc-500"
        >
          Papers, abstracts, PDFs, and code
        </motion.p>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {research.map((r, i) => (
            <ResearchCard key={r.title} {...r} index={i} />
          ))}
        </div>
      </div>
    </main>
  );
}
