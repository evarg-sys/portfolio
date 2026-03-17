"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";
import { GitHubAutoProjects } from "@/components/GitHubAutoProjects";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="pt-28 pb-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-3xl font-light tracking-tight text-white sm:text-4xl"
        >
          Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="mt-2 text-zinc-500"
        >
          Description · GitHub · Tech stack · Job simulations via Forage
        </motion.p>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.id}
              title={p.title}
              description={p.fullDescription}
              href={p.href}
              githubUrl={p.githubUrl}
              demoUrl={p.demoUrl}
              tech={p.tech}
              index={i}
              viaForage={p.viaForage}
            />
          ))}
        </div>

        <GitHubAutoProjects
          knownRepoUrls={projects
            .map((p) => p.githubUrl)
            .filter((url): url is string => Boolean(url))}
        />
      </div>
    </main>
  );
}
