import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Navbar } from "./Navbar";

interface Section {
  title: string;
  content: React.ReactNode;
}

interface Props {
  name: string;
  tagline: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  sections: Section[];
}

export function ProjectPage({ name, tagline, tags, githubUrl, liveUrl, sections }: Props) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#2c3424", color: "#f0f0e8" }}>
      <Navbar />

      <main className="page-enter mx-auto max-w-3xl px-10 pt-36 pb-24">
        {/* Back link */}
        <Link
          href="/projects"
          className="text-sm transition-opacity hover:opacity-70"
          style={{ color: "rgba(240,240,232,0.38)" }}
        >
          ← projects
        </Link>

        {/* Header */}
        <div className="mt-8 mb-14">
          <div className="flex items-start justify-between gap-6 mb-4">
            <h1 className="text-[2.6rem] leading-tight">{name}</h1>
            <div className="flex items-center gap-5 mt-3 shrink-0">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
                  style={{ color: "rgba(240,240,232,0.45)" }}
                >
                  <Github size={16} />
                  github
                </a>
              )}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
                  style={{ color: "rgba(240,240,232,0.45)" }}
                >
                  <ExternalLink size={16} />
                  live
                </a>
              )}
            </div>
          </div>

          <p
            className="text-[1.05rem] leading-[1.65] mb-6"
            style={{ color: "rgba(240,240,232,0.5)" }}
          >
            {tagline}
          </p>

          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="rounded px-3 py-1 text-xs"
                style={{ backgroundColor: "rgba(240,240,232,0.08)" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div
          className="pt-12 space-y-14"
          style={{ borderTop: "1px solid rgba(240,240,232,0.1)" }}
        >
          {sections.map((s) => (
            <section key={s.title}>
              <p
                className="text-xs uppercase tracking-widest mb-5"
                style={{ color: "rgba(240,240,232,0.28)" }}
              >
                {s.title}
              </p>
              {s.content}
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
