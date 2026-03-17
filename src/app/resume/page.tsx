"use client";

import { motion } from "framer-motion";

export default function ResumePage() {
  return (
    <main className="pt-28 pb-24 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-3xl font-light tracking-tight text-white sm:text-4xl"
          >
            Resume
          </motion.h1>
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            href="/resume.pdf"
            download="Eric_Varghese_Resume.pdf"
            className="flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/[0.2] hover:bg-white/[0.07]"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download PDF
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.14 }}
          className="w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]"
          style={{ height: "80vh" }}
        >
          <iframe
            src="/resume.pdf"
            title="Eric Varghese Resume"
            className="h-full w-full"
            style={{ border: "none" }}
          />
        </motion.div>
      </div>
    </main>
  );
}
