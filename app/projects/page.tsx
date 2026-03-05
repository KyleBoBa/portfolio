"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Navbar } from "@/components/Navbar";

const PROJECTS = [
  {
    name: "project fuchs.",
    description:
      "real-time dashboard for chemical sample flow analysis. full-stack with live data, microsoft OAuth, and a python ingestion service.",
    tags: ["next.js", "typescript", "postgres", "docker", "prisma", "tailwind", "python"],
    href: "/projects/fuchsdash",
  },
  {
    name: "movie search.",
    description:
      "react SPA for searching and saving movies from an external API. favorites managed with context API, client-side routing with react router.",
    tags: ["react", "javascript", "vite", "react router", "css"],
    href: "/projects/movie-search",
  },
  {
    name: "biljett.",
    description:
      "CLI tool that finds the cheapest SL (stockholm transit) ticket combination for any travel period. dynamic programming, coin-change variant.",
    tags: ["python"],
    href: "/projects/biljett",
  },
  {
    name: "shell.",
    description:
      "POSIX-compliant shell built from scratch in python. builtins, PATH resolution, subprocess execution — a CodeCrafters challenge.",
    tags: ["python", "systems"],
    href: "/projects/shell",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#2c3424", color: "#f0f0e8" }}>
      <Navbar />

      <main className="mx-auto max-w-6xl px-10 pt-36 pb-24">
        <h1 className="text-[3rem] mb-16">projects.</h1>

        <div className="grid grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.name} {...p} />
          ))}
        </div>
      </main>
    </div>
  );
}

function ProjectCard({
  name,
  description,
  tags,
  href,
}: {
  name: string;
  description: string;
  tags: string[];
  href: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      className="block rounded-xl p-7 transition-all duration-200"
      style={{
        backgroundColor: hovered
          ? "rgba(198,202,181,0.14)"
          : "rgba(198,202,181,0.07)",
        border: hovered
          ? "1px solid rgba(240,240,232,0.18)"
          : "1px solid rgba(240,240,232,0.08)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="mb-4 flex items-start justify-between">
        <h3 className="text-[1.15rem]">{name}</h3>
        <ExternalLink
          size={15}
          className="mt-0.5 transition-opacity duration-200"
          style={{
            color: "rgba(240,240,232,0.5)",
            opacity: hovered ? 1 : 0,
          }}
        />
      </div>
      <p
        className="mb-5 text-sm leading-[1.75]"
        style={{ color: "rgba(240,240,232,0.62)" }}
      >
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded px-3 py-1 text-xs"
            style={{ backgroundColor: "rgba(240,240,232,0.08)" }}
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}
