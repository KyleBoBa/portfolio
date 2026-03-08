"use client";

import { Navbar } from "@/components/Navbar";
import { PaperProjectCard } from "@/components/PaperProjectCard";

const PROJECTS = [
  {
    name: "project fuchs.",
    description:
      "real-time dashboard for chemical sample flow analysis. full-stack with live data, microsoft OAuth, and a python ingestion service.",
    tags: ["next.js", "typescript", "postgres", "docker", "prisma", "tailwind", "python"],
    href: "/projects/fuchsdash",
    slug: "fuchsdash",
  },
  {
    name: "movie search.",
    description:
      "react SPA for searching and saving movies from an external API. favorites managed with context API, client-side routing with react router.",
    tags: ["react", "javascript", "vite", "react router", "css"],
    href: "/projects/movie-search",
    slug: "movie-search",
  },
  {
    name: "biljett.",
    description:
      "CLI tool that finds the cheapest SL (stockholm transit) ticket combination for any travel period. dynamic programming, coin-change variant.",
    tags: ["python"],
    href: "/projects/biljett",
    slug: "biljett",
  },
  {
    name: "shell.",
    description:
      "POSIX-compliant shell built from scratch in python. builtins, PATH resolution, subprocess execution — a CodeCrafters challenge.",
    tags: ["python", "systems"],
    href: "/projects/shell",
    slug: "shell",
  },
];

const ROTATIONS = [-1.4, 0.9, -0.6, 1.1];

export default function Projects() {
  return (
    <div
      className="min-h-screen sage-surface"
      style={{ color: "#f4f0e6" }}
    >
      <Navbar />

      <main className="page-slide-enter mx-auto max-w-6xl px-10 pb-28 pt-36">
        {/* Heading */}
        <div className="mb-20">
          <h1 className="mb-3 text-[2.8rem]">projects.</h1>
          <div style={{ width: 36, height: 2, backgroundColor: "#7a9068" }} />
        </div>

        {/* Paper cards grid — extra top padding for tape strips */}
        <div className="grid grid-cols-1 gap-16 sm:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <PaperProjectCard
              key={p.name}
              name={p.name}
              description={p.description}
              tags={p.tags}
              href={p.href}
              rotation={ROTATIONS[i % ROTATIONS.length]}
              index={i}
              viewTransitionSlug={p.slug}
            />
          ))}

          {/* Placeholder card */}
          <PlaceholderCard rotation={ROTATIONS[PROJECTS.length % ROTATIONS.length]} />
        </div>
      </main>
    </div>
  );
}

function PlaceholderCard({ rotation }: { rotation: number }) {
  return (
    <div style={{ perspective: "1000px", paddingTop: "18px", overflow: "visible" }}>
      <div
        style={{
          position: "relative",
          overflow: "visible",
          background: "#f9f5ed",
          padding: "2.25rem 1.75rem 1.75rem",
          boxShadow: "0 4px 16px rgba(50,35,10,0.10), 0 1px 4px rgba(50,35,10,0.06)",
          transform: `rotate(${rotation}deg)`,
          border: "1.5px dashed rgba(28,26,20,0.14)",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: -18,
            left: "50%",
            transform: "translateX(-50%)",
            width: 72,
            height: 22,
            zIndex: 10,
            backgroundColor: "#e4c820",
            opacity: 0.82,
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(0,0,0,0.05) 3px, rgba(0,0,0,0.05) 4px)",
          }}
        />
        <h3
          style={{
            fontSize: "1.1rem",
            marginBottom: "0.65rem",
            fontFamily: "var(--font-russo-one), sans-serif",
            color: "rgba(28,26,20,0.35)",
          }}
        >
          more to come...
        </h3>
        <p
          style={{
            fontSize: "0.82rem",
            lineHeight: 1.8,
            color: "rgba(28,26,20,0.28)",
            fontFamily: "var(--font-space-mono), monospace",
          }}
        >
          always working on new projects and ideas. stay tuned.
        </p>
      </div>
    </div>
  );
}
