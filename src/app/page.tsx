"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, featuredProjectIds } from "@/data/projects";

const featuredProjects = projects.filter((p) => featuredProjectIds.includes(p.id));

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="border-t border-white/[0.06] py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-16 md:grid-cols-2 md:items-center"
          >
            <motion.div variants={item}>
              <p className="font-display text-xs font-medium tracking-[0.2em] text-zinc-500 uppercase">
                About me
              </p>
              <h2 className="mt-4 font-display text-2xl font-light tracking-tight text-white sm:text-3xl">
                Building with data & systems that solve real problems
              </h2>
            </motion.div>
            <motion.p variants={item} className="text-zinc-500 leading-relaxed">
              I&apos;m a data science student at UIC focused on AI, quantitative systems,
              and research. From disaster response routing to compiler verification,
              I work on projects that bridge theory and impact.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-white/[0.06] py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 flex items-end justify-between"
          >
            <div>
              <h2 className="font-display text-2xl font-light text-white">
                Featured projects
              </h2>
              <p className="mt-1 text-sm text-zinc-500">
                Selected work · Job simulations via Forage
              </p>
            </div>
            <Link
              href="/projects"
              className="text-sm text-zinc-500 transition-colors hover:text-white"
            >
              View all →
            </Link>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((p, i) => (
              <ProjectCard
                key={p.id}
                title={p.title}
                description={p.shortDescription}
                href={p.href}
                githubUrl={p.githubUrl}
                demoUrl={p.demoUrl}
                tech={p.tech}
                index={i}
                viaForage={p.viaForage}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.06] py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="font-display text-2xl font-light text-white">
              Skills & focus
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="flex flex-wrap gap-2"
          >
            {["Data Science", "AI / ML", "Quantitative", "Systems", "Research", "Python", "TypeScript", "Maps & GIS"].map(
              (skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2 text-sm text-zinc-500"
                >
                  {skill}
                </span>
              )
            )}
          </motion.div>
        </div>
      </section>

      <section className="border-t border-white/[0.06] py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/[0.08] bg-white/[0.02] py-24 text-center"
          >
            <h2 className="font-display text-2xl font-light text-white">
              Photography
            </h2>
            <p className="mt-3 text-zinc-500">Coming soon</p>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-white/[0.06] py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-xl text-center"
        >
          <h2 className="font-display text-2xl font-light text-white">
            Let&apos;s work together
          </h2>
          <p className="mt-4 text-zinc-500">
            Open to research collaboration, internships, and interesting problems.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-sm font-medium text-[#0a0a0a] transition-opacity hover:opacity-90"
          >
            Get in touch
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
