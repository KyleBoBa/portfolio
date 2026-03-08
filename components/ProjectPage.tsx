"use client";

import { Github, ExternalLink } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
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
  const router = useRouter();
  const pathname = usePathname();
  const slug = pathname.split("/").pop() ?? "";

  const goBack = () => {
    document.documentElement.dataset.navDir = "expand";
    if ("startViewTransition" in document) {
      (document as Document & { startViewTransition: (cb: () => void) => void }).startViewTransition(() => router.push("/projects"));
    } else {
      router.push("/projects");
    }
  };

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--ws-cream)", color: "var(--ws-ink)" }}
    >
      <Navbar />

      <main className="page-enter mx-auto max-w-3xl px-10 pb-28 pt-36">
        {/* Back link */}
        <button
          onClick={goBack}
          className="text-xs uppercase tracking-widest transition-opacity hover:opacity-60"
          style={{
            color: "var(--ws-sage-muted)",
            fontFamily: "var(--font-space-mono), monospace",
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
          }}
        >
          ← projects
        </button>

        {/* Header */}
        <div className="mt-8 mb-14">
          <div className="mb-4 flex items-start justify-between gap-6">
            <h1
              className="text-[2.4rem] leading-tight"
              style={{ viewTransitionName: `project-${slug}` } as React.CSSProperties}
            >
              {name}
            </h1>
            <div className="mt-3 flex shrink-0 items-center gap-5">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs transition-opacity hover:opacity-60"
                  style={{
                    color: "var(--ws-ink-faint)",
                    fontFamily: "var(--font-space-mono), monospace",
                  }}
                >
                  <Github size={14} />
                  github
                </a>
              )}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs transition-opacity hover:opacity-60"
                  style={{
                    color: "var(--ws-ink-faint)",
                    fontFamily: "var(--font-space-mono), monospace",
                  }}
                >
                  <ExternalLink size={14} />
                  live
                </a>
              )}
            </div>
          </div>

          <p
            className="mb-6 text-[0.95rem] leading-[1.7]"
            style={{ color: "var(--ws-ink-faint)", fontFamily: "var(--font-space-mono), monospace" }}
          >
            {tagline}
          </p>

          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="text-xs"
                style={{
                  padding: "0.2rem 0.55rem",
                  backgroundColor: "rgba(46,61,38,0.10)",
                  color: "var(--ws-sage-mid)",
                  fontFamily: "var(--font-space-mono), monospace",
                  letterSpacing: "0.02em",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div
          className="space-y-14 pt-12"
          style={{ borderTop: "1px solid rgba(28,26,20,0.08)" }}
        >
          {sections.map((s) => (
            <section key={s.title}>
              <p
                className="mb-5 text-xs uppercase tracking-widest"
                style={{
                  color: "var(--ws-sage-muted)",
                  fontFamily: "var(--font-space-mono), monospace",
                }}
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
