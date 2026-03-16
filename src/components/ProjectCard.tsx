"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
  tech?: string[];
  index?: number;
}

export function ProjectCard({ title, description, href, tech = [], index = 0 }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group"
    >
      <Link href={href}>
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-white/[0.07]">
          <h3 className="font-display text-lg font-semibold text-white transition-colors group-hover:text-primary">
            {title}
          </h3>
          <p className="mt-2 text-sm text-zinc-400 line-clamp-2">{description}</p>
          {tech.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-white/10 px-2 py-0.5 text-xs text-zinc-400"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </motion.article>
  );
}
