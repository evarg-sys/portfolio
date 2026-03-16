"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";

const projects = [
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
  {
    title: "Flappy++",
    description: "Game project and systems programming.",
    href: "/projects/flappy",
    tech: ["C++", "Games"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="pt-28 pb-20 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-3xl font-bold text-white sm:text-4xl"
        >
          Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-2 text-zinc-500"
        >
          Description • GitHub • Tech stack • Demo • Screenshots
        </motion.p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} {...p} index={i} />
          ))}
        </div>
      </div>
    </main>
  );
}
