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
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(170deg, #333d29 0%, #2c3424 45%, #242c1e 100%)",
        color: "#f0f0e8",
      }}
    >
      <Navbar />

      <main className="mx-auto max-w-6xl px-10 pt-36 pb-24">
        {/* Heading */}
        <div className="mb-16">
          <h1 className="text-[3rem] mb-4">projects.</h1>
          <div style={{ width: 44, height: 2, backgroundColor: "rgba(107,125,91,0.75)" }} />
        </div>

        <div className="grid grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.name} index={i} {...p} />
          ))}
        </div>
        {/* a card where it says more to come */}
        <div className="relative block rounded-xl p-7 overflow-hidden transition-all duration-200"
          style={{
            background: "linear-gradient(145deg, rgba(54,64,48,0.5) 0%, rgba(28,35,21,0.4) 100%)",
            border: "1px solid rgba(198,202,181,0.1)",
          }}
        >
          <div className="mb-4 flex items-start justify-between">
            <h3 className="text-[1.15rem]">more to come...</h3>
          </div>
          <p
            className="mb-5 text-sm leading-[1.75]"
            style={{ color: "rgba(240,240,232,0.62)" }}
          >
            i&apos;m always working on new projects and ideas, so stay tuned for updates!
          </p>
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
  index,
}: {
  name: string;
  description: string;
  tags: string[];
  href: string;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      className="relative block rounded-xl p-7 overflow-hidden transition-all duration-200"
      style={{
        background: hovered
          ? "linear-gradient(145deg, rgba(60,72,50,0.75) 0%, rgba(32,40,25,0.65) 100%)"
          : "linear-gradient(145deg, rgba(54,64,48,0.5) 0%, rgba(28,35,21,0.4) 100%)",
        border: hovered
          ? "1px solid rgba(107,125,91,0.45)"
          : "1px solid rgba(198,202,181,0.1)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Faint background index number */}
      <span
        aria-hidden
        style={{
          position: "absolute",
          bottom: "-1rem",
          right: "1.25rem",
          fontSize: "7rem",
          lineHeight: 1,
          color: "rgba(198,202,181,0.07)",
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

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
            style={{
              backgroundColor: "rgba(107,125,91,0.2)",
              border: "1px solid rgba(107,125,91,0.25)",
              color: "rgba(240,240,232,0.75)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}
