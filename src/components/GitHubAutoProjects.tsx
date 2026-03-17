"use client";

import { useEffect, useMemo, useState } from "react";

type GithubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  fork: boolean;
  archived: boolean;
  pushed_at: string;
};

type Props = {
  knownRepoUrls: string[];
};

function normalizeRepoNameFromUrl(url: string) {
  try {
    const match = url.match(/github\.com\/[^/]+\/([^/?#]+)/i);
    return match?.[1]?.toLowerCase() ?? "";
  } catch {
    return "";
  }
}

export function GitHubAutoProjects({ knownRepoUrls }: Props) {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  const knownRepoNames = useMemo(
    () => new Set(knownRepoUrls.map(normalizeRepoNameFromUrl).filter(Boolean)),
    [knownRepoUrls]
  );

  useEffect(() => {
    let mounted = true;

    async function loadRepos() {
      try {
        const res = await fetch(
          "https://api.github.com/users/evary-sys/repos?sort=updated&per_page=40",
          { cache: "no-store" }
        );
        if (!res.ok) return;

        const data = (await res.json()) as GithubRepo[];
        if (!mounted) return;

        const filtered = data
          .filter((repo) => !repo.fork && !repo.archived)
          .filter((repo) => !knownRepoNames.has(repo.name.toLowerCase()))
          .slice(0, 6);

        setRepos(filtered);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    loadRepos();
    return () => {
      mounted = false;
    };
  }, [knownRepoNames]);

  if (loading || repos.length === 0) return null;

  return (
    <section className="mt-16 border-t border-white/[0.06] pt-12">
      <div className="mb-7">
        <h2 className="font-display text-xl font-light text-white sm:text-2xl">
          Auto-updated from GitHub
        </h2>
        <p className="mt-1 text-sm text-zinc-500">
          New repos from your GitHub profile appear here automatically.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo) => (
          <article
            key={repo.id}
            className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-6"
          >
            <h3 className="font-display text-lg font-medium text-white">
              {repo.name.replace(/[-_]/g, " ")}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-500 line-clamp-4">
              {repo.description || "No description provided yet."}
            </p>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center text-sm text-zinc-400 underline-offset-2 hover:text-white hover:underline"
            >
              View on GitHub
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
