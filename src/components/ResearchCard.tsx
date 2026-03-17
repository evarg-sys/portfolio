"use client";

import { motion } from "framer-motion";

export interface ResearchCardProps {
  title: string;
  abstract: string;
  pdfUrl?: string;
  codeUrl?: string;
  index?: number;
}

export function ResearchCard({
  title,
  abstract,
  pdfUrl,
  codeUrl,
  index = 0,
}: ResearchCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-6"
    >
      <h3 className="font-display text-lg font-medium text-white">{title}</h3>
      <p className="mt-2 text-sm text-zinc-500 leading-relaxed">{abstract}</p>
      <div className="mt-4 flex gap-4">
        {pdfUrl && (
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-400 underline-offset-2 hover:text-white hover:underline"
          >
            PDF
          </a>
        )}
        {codeUrl && (
          <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-400 underline-offset-2 hover:text-white hover:underline"
          >
            Code
          </a>
        )}
      </div>
    </motion.article>
  );
}
