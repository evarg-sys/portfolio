"use client";

import { motion } from "framer-motion";
import { courses } from "@/data/courses";

export default function CoursesPage() {
  return (
    <main className="pt-28 pb-24 px-6">
      <div className="mx-auto max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-3xl font-light tracking-tight text-white sm:text-4xl"
        >
          Courses
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="mt-2 text-sm text-zinc-500"
        >
          Job simulations completed via Forage.
        </motion.p>

        <ul className="mt-12 space-y-6">
          {courses.map((c, i) => (
            <motion.li
              key={c.title + c.issuer}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i }}
              className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-6"
            >
              <div className="flex flex-col gap-1">
                <h2 className="font-display text-lg font-medium text-white">
                  {c.title}
                </h2>
                <p className="text-sm text-zinc-500">
                  {c.issuer}
                  {c.issueDate && ` · ${c.issueDate}`}
                  {c.viaForage && (
                    <span className="ml-2 text-zinc-600">(via Forage)</span>
                  )}
                </p>
                {c.skills && c.skills.length > 0 && (
                  <p className="mt-2 text-xs text-zinc-500">
                    Skills: {c.skills.join(", ")}
                  </p>
                )}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </main>
  );
}
