import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) return notFound();

  return (
    <main className="pt-28 pb-32 px-6">
      <div className="mx-auto max-w-3xl">

        {/* Back */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-zinc-600 hover:text-zinc-300 transition-colors mb-14"
        >
          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          All Projects
        </Link>

        {/* Header */}
        <div className="space-y-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] tracking-[0.25em] uppercase text-zinc-600 border border-white/[0.08] rounded-full px-3 py-1">
              Project
            </span>
            {project.viaForage && (
              <span className="text-[10px] tracking-[0.2em] uppercase text-amber-400/70 border border-amber-500/20 rounded-full px-3 py-1">
                Job Simulation · Forage
              </span>
            )}
          </div>

          <h1 className="font-display text-3xl font-light tracking-tight text-white sm:text-4xl">
            {project.title}
          </h1>

          <p className="text-zinc-400 text-base leading-relaxed max-w-2xl">
            {project.shortDescription}
          </p>
        </div>

        {/* Link buttons */}
        {(project.githubUrl || project.demoUrl) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm text-white transition-colors hover:border-white/30 hover:bg-white/5"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                View on GitHub
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#0a0a0a] transition-opacity hover:opacity-85"
              >
                Live Demo
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        )}

        <div className="my-12 border-t border-white/[0.06]" />

        {/* Full description */}
        <div className="space-y-4">
          <p className="text-[11px] tracking-[0.2em] uppercase text-zinc-600">About this project</p>
          <p className="text-zinc-400 text-sm leading-[1.85] whitespace-pre-line">
            {project.fullDescription}
          </p>
        </div>

        {/* Tech stack */}
        {project.tech.length > 0 && (
          <div className="mt-12 space-y-4">
            <p className="text-[11px] tracking-[0.2em] uppercase text-zinc-600">Tech stack</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-1.5 text-sm text-zinc-400"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Bottom nav */}
        <div className="mt-16 pt-8 border-t border-white/[0.06]">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-zinc-600 hover:text-zinc-300 transition-colors"
          >
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            All Projects
          </Link>
        </div>

      </div>
    </main>
  );
}

