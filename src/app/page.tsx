"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { ResearchCard } from "@/components/ResearchCard";
import { GalleryGrid } from "@/components/GalleryGrid";

const featuredProjects = [
  {
    title: "Disaster Response AI",
    description: "AI-powered routing and resource allocation for emergency response.",
    href: "/projects/disaster-response-ai",
    tech: ["Python", "AI", "Maps"],
  },
  {
    title: "OpenEVMap",
    description: "Open-source EV charging and mapping toolkit.",
    href: "/projects/openevmap",
    tech: ["Maps", "Open Source"],
  },
  {
    title: "RoleBit",
    description: "Role-based access and workflow automation.",
    href: "/projects/rolebit",
    tech: ["Systems", "Backend"],
  },
  {
    title: "NASDAQ Quant Analysis",
    description: "Quantitative analysis and backtesting pipeline.",
    href: "/projects/nasdaq-quant",
    tech: ["Python", "Quant", "Data"],
  },
];

const researchEntries = [
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

const photographyPreview = [
  { src: "", alt: "Urban", category: "Urban" },
  { src: "", alt: "Nature", category: "Nature" },
  { src: "", alt: "Street", category: "Street" },
  { src: "", alt: "Night", category: "Night" },
];

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Short intro */}
      <section className="relative border-t border-white/5 py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid gap-12 md:grid-cols-2 md:items-center"
          >
            <div>
              <p className="font-display text-sm font-medium uppercase tracking-widest text-primary">
                Behind the code
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Building systems that solve real problems
              </h2>
            </div>
            <p className="text-zinc-400">
              I&apos;m a computer science student at UIC focused on AI, quantitative systems,
              and research. From disaster response routing to compiler verification,
              I work on projects that bridge theory and impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="relative border-t border-white/5 py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 flex items-end justify-between"
          >
            <div>
              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Featured projects
              </h2>
              <p className="mt-1 text-zinc-500">Selected work and side projects</p>
            </div>
            <Link
              href="/projects"
              className="text-sm font-medium text-primary hover:underline"
            >
              View all →
            </Link>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProjects.map((p, i) => (
              <ProjectCard key={p.title} {...p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="relative border-t border-white/5 py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Research
            </h2>
            <p className="mt-1 text-zinc-500">Papers and verification work</p>
          </motion.div>
          <div className="grid gap-4 md:grid-cols-2">
            {researchEntries.map((r, i) => (
              <ResearchCard key={r.title} {...r} index={i} />
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/research"
              className="text-sm font-medium text-primary hover:underline"
            >
              All research →
            </Link>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="relative border-t border-white/5 py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl font-bold text-white sm:text-3xl"
          >
            Skills & focus
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            {["AI / ML", "Quantitative", "Systems", "Research", "Python", "TypeScript", "Maps & GIS"].map(
              (skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300"
                >
                  {skill}
                </span>
              )
            )}
          </motion.div>
        </div>
      </section>

      {/* Photography preview */}
      <section className="relative border-t border-white/5 py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 flex items-end justify-between"
          >
            <div>
              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Photography
              </h2>
              <p className="mt-1 text-zinc-500">Urban • Nature • Street • Night</p>
            </div>
            <Link
              href="/photography"
              className="text-sm font-medium text-primary hover:underline"
            >
              View gallery →
            </Link>
          </motion.div>
          <GalleryGrid images={photographyPreview} columns={4} />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative border-t border-white/5 py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Let&apos;s build something meaningful
          </h2>
          <p className="mt-3 text-zinc-400">
            Open to research collaboration, internships, and interesting problems.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-[#0b0b0b] transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
          >
            Get in touch
            <span className="text-lg">→</span>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
