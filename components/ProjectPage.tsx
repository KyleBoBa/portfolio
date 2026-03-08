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
  screenshots?: string[];
  sections: Section[];
}

export function ProjectPage({ name, tagline, tags, githubUrl, liveUrl, screenshots, sections }: Props) {
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
      className="relative min-h-screen"
      style={{ backgroundColor: "var(--ws-cream)", color: "var(--ws-ink)" }}
    >
      <Navbar />

      {/* ── Left margin decoration ── */}
      <div aria-hidden className="pointer-events-none absolute left-[3%] top-44 hidden flex-col items-center gap-4 xl:flex">
        <div style={{ width: 1, height: 64, background: "rgba(74,94,60,0.25)" }} />
        <div style={{ width: 7, height: 7, background: "rgba(46,61,38,0.22)" }} />
        <div style={{ width: 4, height: 4, background: "rgba(122,144,104,0.28)", marginLeft: 12 }} />
        <div style={{ width: 1, height: 96, background: "rgba(74,94,60,0.16)", marginLeft: 5 }} />
        <div style={{ width: 6, height: 6, background: "rgba(46,61,38,0.18)", marginLeft: -8 }} />
        <div style={{ width: 3, height: 3, background: "rgba(74,94,60,0.30)", marginLeft: 10 }} />
        <div style={{ width: 1, height: 52, background: "rgba(74,94,60,0.12)" }} />
        <div style={{ width: 5, height: 5, background: "rgba(46,61,38,0.20)" }} />
        <div style={{ width: 1, height: 40, background: "rgba(122,144,104,0.14)", marginLeft: 7 }} />
      </div>

      {/* ── Right margin decoration ── */}
      <div aria-hidden className="pointer-events-none absolute right-[3%] top-56 hidden xl:block">
        <div className="flex flex-col items-end gap-4">
          <div style={{ width: 6, height: 6, background: "rgba(46,61,38,0.24)", marginRight: 8 }} />
          <div style={{ width: 1, height: 80, background: "rgba(74,94,60,0.18)", marginRight: 11 }} />
          <div style={{ width: 8, height: 8, background: "rgba(74,94,60,0.20)", marginRight: 4 }} />
          <div style={{ width: 4, height: 4, background: "rgba(122,144,104,0.28)", marginRight: 18 }} />
          <div style={{ width: 1, height: 56, background: "rgba(46,61,38,0.14)", marginRight: 9 }} />
          <div style={{ width: 5, height: 5, background: "rgba(46,61,38,0.22)", marginRight: 14 }} />
          <div style={{ width: 3, height: 3, background: "rgba(122,144,104,0.30)", marginRight: 6 }} />
          <div style={{ width: 1, height: 72, background: "rgba(74,94,60,0.13)", marginRight: 12 }} />
          <div style={{ width: 7, height: 7, background: "rgba(46,61,38,0.18)", marginRight: 2 }} />
        </div>
      </div>

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

        {/* Screenshots */}
        {screenshots && screenshots.length > 0 && (
          <div className="mb-14 space-y-4">
            {screenshots.map((src, i) => (
              <div
                key={i}
                style={{
                  boxShadow: "0 4px 20px rgba(28,26,20,0.12), 0 1px 6px rgba(28,26,20,0.06)",
                  border: "1px solid rgba(28,26,20,0.07)",
                  overflow: "hidden",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="" style={{ width: "100%", display: "block" }} />
              </div>
            ))}
          </div>
        )}

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
