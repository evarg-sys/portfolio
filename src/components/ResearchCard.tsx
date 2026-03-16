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
      className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
    >
      <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-zinc-400 line-clamp-3">{abstract}</p>
      <div className="mt-4 flex gap-3">
        {pdfUrl && (
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-primary hover:underline"
          >
            PDF
          </a>
        )}
        {codeUrl && (
          <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-primary hover:underline"
          >
            Code
          </a>
        )}
      </div>
    </motion.article>
  );
}
