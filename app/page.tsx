"use client";

import { useCallback, useState } from "react";
import { FileText, Github, Linkedin, Mail } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { GeneratorSpot } from "@/components/GeneratorSpot";
import { PaperProjectCard } from "@/components/PaperProjectCard";

const CONTACT_LINKS = [
  { Icon: Mail,     label: "kylebb1[at]gmail.com",           href: "mailto:kylebb1@gmail.com" },
  { Icon: Github,   label: "github.com/kyleboba",             href: "https://github.com/kyleboba" },
  { Icon: Linkedin, label: "linkedin.com/in/kyle",            href: "https://www.linkedin.com/in/kyle-bostr%C3%B6m-balthazar/" },
];

const FEATURED_PROJECTS = [
  {
    name: "project fuchs.",
    description: "a dashboard for the sample flow and analysis of a chemical process. real-time data, auth, and full-stack infra.",
    tags: ["next.js", "typescript", "postgres", "docker", "prisma", "tailwind", "python"],
    href: "/projects/fuchsdash",
    rotation: -1.2,
  },
  {
    name: "movie search.",
    description: "react SPA for searching and saving movies from an external API. favorites via context API, client-side routing with react router.",
    tags: ["react", "javascript", "vite", "react router"],
    href: "/projects/movie-search",
    rotation: 0.8,
  },
];

const HOME_SKILLS = [
  { name: "typescript",  logo: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "next.js",     logo: "https://cdn.simpleicons.org/nextdotjs/f4f0e6" },
  { name: "react",       logo: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "tailwindcss", logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "python",      logo: "https://cdn.simpleicons.org/python/FFD43B" },
  { name: "postgres",    logo: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "docker",      logo: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "git",         logo: "https://cdn.simpleicons.org/git/F05032" },
  { name: "supabase",    logo: "https://cdn.simpleicons.org/supabase/3FCF70" },
];

export default function Home() {
  const [powered, setPowered] = useState<Set<number>>(new Set());

  const handlePower = useCallback((id: number) => {
    setPowered((prev) => new Set(prev).add(id));
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollToContact = useCallback(
    () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }),
    []
  );

  return (
    <>
      <style>{`
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      background: var(--ws-cream); 
    }
    ::-webkit-scrollbar-thumb {
      background: #888; 
    }
    ::-webkit-scrollbar-thumb:hover {
      background: var(--ws-sage-muted); 
    }
    `}</style>
      <div className="min-h-screen page-slide-enter sage-surface" style={{ color: "var(--ws-cream)" }}>
      <Navbar poweredCount={powered.size} onContactClick={scrollToContact} />

      {/* ── Hero — dark sage wall ──────────────────────── */}
      <section
        className="relative overflow-hidden"
      >
        {/* Amber lamp glow — upper right corner */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background: "radial-gradient(ellipse at 88% 10%, rgba(200,128,8,0.24) 0%, transparent 55%)",
          }}
        />

        {/* Generator spots scattered in hero */}
        <div className="absolute top-32 right-16 z-10">
          <GeneratorSpot id={0} powered={powered.has(0)} onPower={handlePower} />
        </div>
        <div className="absolute top-1/2 left-8 z-10">
          <GeneratorSpot id={1} powered={powered.has(1)} onPower={handlePower} />
        </div>
        <div className="absolute top-40 left-1/2 z-10">
          <GeneratorSpot id={2} powered={powered.has(2)} onPower={handlePower} />
        </div>

        <div
          className="mx-auto w-full max-w-6xl px-10"
          style={{ minHeight: "60vh", display: "flex", paddingTop: "20vh"}}
        >
          <div className="grid w-full grid-cols-1 items-center gap-16 sm:grid-cols-2">

            {/* left — text */}
            <div className="space-y-8 text-center sm:text-left">
              <div className="space-y-5">
                <div>
                  <h1 className="text-[2.6rem] leading-[1.08] sm:text-[2.6rem]">
                    Welcome to kyles site.
                  </h1>
                  <div style={{ width: 36, height: 2, backgroundColor: "var(--ws-sage-muted)", marginTop: "0.6rem" }} />
                </div>
                <div className="space-y-4">
                  <p
                    className="text-[1.15rem] leading-[1.65]"
                    style={{ color: "rgba(244,240,230,0.75)", fontFamily: "var(--font-space-mono), monospace" }}
                  >
                    Hiya! I&apos;m a 21 yo engineering and
                    <br />
                    education student specializing in system architecture.
                  </p>
                  <p
                    className="text-[1.15rem] leading-[1.65]"
                    style={{ color: "rgba(244,240,230,0.75)", fontFamily: "var(--font-space-mono), monospace" }}
                  >
                    I dedicate a lot of time to exploring open-source projects
                    to learn how things are built and integrated.
                  </p>
                </div>
              </div>

              {/* action bar */}
              <div
                className="flex flex-wrap items-center gap-4"
                style={{
                  backgroundColor: "rgba(14,13,10,0.70)",
                  padding: "0.85rem 1.25rem",
                  border: "1px solid rgba(244,240,230,0.08)",
                }}
              >
                <span
                  style={{
                    fontSize: "0.68rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "rgba(244,240,230,0.80)",
                    fontFamily: "var(--font-space-mono), monospace",
                  }}
                >
                  resume
                </span>

                {[
                  { label: "sv",  file: "/cv-sv.pdf",  name: "Kyle_Bostrom_Balthazar_CV(sv).pdf" },
                  { label: "eng", file: "/cv-eng.pdf", name: "Kyle_Bostrom_Balthazar_CV(eng).pdf" },
                ].map(({ label, file, name }) => (
                  <a
                    key={label}
                    href={file}
                    download={name}
                    className="flex items-center gap-2 transition-opacity hover:opacity-60"
                    style={{
                      color: "var(--ws-cream)",
                      fontSize: "0.85rem",
                      fontFamily: "var(--font-space-mono), monospace",
                      padding: "0.35rem 0.75rem",
                      border: "1px solid rgba(244,240,230,0.20)",
                    }}
                  >
                    {label} <FileText size={15} />
                  </a>
                ))}

                {/* Divider */}
                <div style={{ width: 1, height: 22, backgroundColor: "rgba(244,240,230,0.16)" }} />

                {[
                  { Icon: Github,   href: "https://github.com/kyleboba" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/in/kyle-bostr%C3%B6m-balthazar/" },
                  { Icon: Mail,     href: "mailto:kylebb1@gmail.com" },
                ].map(({ Icon, href }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-opacity hover:opacity-50"
                    style={{ color: "rgba(244,240,230,0.80)", lineHeight: 0 }}
                  >
                    <Icon size={22} />
                  </a>
                ))}
              </div>
            </div>

            {/* right — cream-matted photo */}
            <div className="flex justify-center sm:justify-end">
              <div
                style={{
                  backgroundColor: "var(--ws-cream)",
                  padding: "36px 36px 18px",
                  width: 400,
                  flexShrink: 0,
                  boxShadow: "0 10px 36px rgba(0,0,0,0.40)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/full-body-draft.jpg"
                  alt="Kyle Boström Balthazar"
                  style={{
                    width: "100%",
                    height: 320,
                    objectFit: "cover",
                    objectPosition: "top center",
                    display: "block",
                  }}
                />
                <p
                  style={{
                    marginTop: 12,
                    fontSize: "0.62rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(28,26,20,0.40)",
                    fontFamily: "var(--font-space-mono), monospace",
                    textAlign: "center",
                    flexShrink: 0,
                  }}
                >
                  stockholm, sweden
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Skills ──────────────────────────────────────── */}
      <section
        id="skills"
        className="relative py-36"
      >
        <div className="mx-auto max-w-6xl px-10">
          <div className="mb-10">
            <h2 className="mb-3 text-[2.4rem]">most used technologies.</h2>
            <div style={{ width: 36, height: 2, backgroundColor: "var(--ws-sage-muted)" }} />
          </div>
          <div className="grid grid-cols-3 gap-3">
            {HOME_SKILLS.map(({ name, logo }) => (
              <SkillTile key={name} name={name} logo={logo} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects — pinned paper cards ────────────────── */}
      <section
        id="project"
        className="relative"
      >
        <div className="absolute top-14 left-1/3 z-10">
          <GeneratorSpot id={3} powered={powered.has(3)} onPower={handlePower} />
        </div>
        <div className="mx-auto max-w-6xl px-10">
          <div className="mb-14 flex items-start justify-between">
            <div>
              <h2 className="mb-3 text-[2.4rem]">projects.</h2>
              <div style={{ width: 36, height: 2, backgroundColor: "var(--ws-sage-muted)" }} />
            </div>
            <a
              href="/projects"
              className="mt-3 text-[0.88rem] transition-opacity hover:opacity-55"
              style={{ color: "rgba(244,240,230,0.45)", fontFamily: "var(--font-space-mono), monospace" }}
            >
              view all →
            </a>
          </div>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
            {FEATURED_PROJECTS.map((p) => (
              <PaperProjectCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────── */}
      <section
        id="contact"
        className="relative py-28"
      >
        <div className="absolute top-8 right-20 z-10">
          <GeneratorSpot id={4} powered={powered.has(4)} onPower={handlePower} />
        </div>

        <div className="mx-auto max-w-6xl px-10">
          <div className="mb-12">
            <h2 className="mb-3 text-[2.4rem]">contact.</h2>
            <div style={{ width: 36, height: 2, backgroundColor: "var(--ws-sage-muted)" }} />
          </div>
          <div className="grid grid-cols-1 items-start gap-16 sm:grid-cols-2">
            <div className="space-y-4">
              <p
                className="text-[1.2rem] leading-[1.55]"
                style={{ fontFamily: "var(--font-russo-one), sans-serif" }}
              >
                Got a project in mind?
                <br />
                Let&apos;s build something.
              </p>
              <p
                className="text-[0.9rem] leading-[1.8]"
                style={{ color: "rgba(244,240,230,0.52)", fontFamily: "var(--font-space-mono), monospace" }}
              >
                Open to freelance work, collaborations, and interesting
                conversations. Reach out through the channels provided.
              </p>
            </div>
            <div className="space-y-5">
              {CONTACT_LINKS.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 text-[0.88rem] transition-opacity hover:opacity-55"
                  style={{ color: "var(--ws-cream)", fontFamily: "var(--font-space-mono), monospace" }}
                >
                  <Icon size={22} style={{ color: "var(--ws-cream)", flexShrink: 0 }} />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer — cream ─────────────────────────────── */}
      <footer
        className="py-8"
        style={{ backgroundColor: "var(--ws-cream)", borderTop: "1px solid rgba(28,26,20,0.10)" }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-10">
          <span
            className="text-xs"
            style={{ color: "rgba(28,26,20,0.42)", fontFamily: "var(--font-space-mono), monospace" }}
          >
            kyle bb. — {new Date().getFullYear()}
          </span>
          <button
            onClick={scrollTop}
            className="text-xs transition-opacity hover:opacity-85"
            style={{ color: "rgba(28,26,20,0.42)", fontFamily: "var(--font-space-mono), monospace", background: "none", border: "none", padding: 0, cursor: "pointer" }}
          >
            back to top ↑
          </button>
        </div>
      </footer>
    </div>
    </>
  );
}

// Corner bracket positions
const CORNERS = [
  { top: -5, left: -5 },
  { top: -5, right: -5 },
  { bottom: -5, left: -5 },
  { bottom: -5, right: -5 },
] as const;

function SkillTile({ name, logo }: { name: string; logo: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex cursor-default flex-col items-center justify-center gap-3"
      style={{
        padding: "1.75rem 1rem",
        background: hovered
          ? "linear-gradient(145deg, rgba(64,76,54,0.85) 0%, rgba(40,50,32,0.70) 100%)"
          : "linear-gradient(145deg, rgba(44,54,38,0.55) 0%, rgba(32,40,25,0.45) 100%)",
        border: hovered
          ? "1px solid rgba(198,202,181,0.28)"
          : "1px solid rgba(198,202,181,0.10)",
        transition: "background 200ms, border-color 200ms",
        zIndex: hovered ? 1 : 0,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Corner bracket marks */}
      {CORNERS.map((pos, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: 8,
            height: 8,
            backgroundColor: "#c6cab5",
            opacity: hovered ? 1 : 0,
            transition: "opacity 150ms",
            ...pos,
          }}
        />
      ))}

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logo}
        alt=""
        width={38}
        height={38}
        style={{
          objectFit: "contain",
          flexShrink: 0,
          transition: "transform 200ms",
          transform: hovered ? "scale(1.12)" : "scale(1)",
        }}
      />
      <span
        className="text-center text-sm"
        style={{
          color: hovered ? "var(--ws-cream)" : "rgba(244,240,230,0.60)",
          fontFamily: "var(--font-space-mono), monospace",
          transition: "color 200ms",
        }}
      >
        {name}
      </span>
    </div>
  );
}
