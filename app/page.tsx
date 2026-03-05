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
    rotation: -0.6,
  },
  {
    name: "movie search.",
    description: "react SPA for searching and saving movies from an external API. favorites via context API, client-side routing with react router.",
    tags: ["react", "javascript", "vite", "react router"],
    href: "/projects/movie-search",
    rotation: 0.5,
  },
];

const HOME_SKILLS = [
  { name: "typescript", logo: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "next.js",    logo: "https://cdn.simpleicons.org/nextdotjs/f0f0e8" },
  { name: "react",      logo: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "python",     logo: "https://cdn.simpleicons.org/python/FFD43B" },
  { name: "postgres",   logo: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "docker",     logo: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "prisma",     logo: "https://cdn.simpleicons.org/prisma/f0f0e8" },
  { name: "tailwindcss",   logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "git",        logo: "https://cdn.simpleicons.org/git/F05032" },
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
    <div className="min-h-screen" style={{ backgroundColor: "#2c3424", color: "#f0f0e8" }}>
      <Navbar poweredCount={powered.size} onContactClick={scrollToContact} />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative flex min-h-screen items-center pb-16 pt-24 overflow-hidden">
        {/* Generator spots — scattered around hero */}
        <div className="absolute top-32 right-16 z-10">
          <GeneratorSpot id={0} powered={powered.has(0)} onPower={handlePower} />
        </div>
        <div className="absolute top-1/2 left-8 z-10">
          <GeneratorSpot id={1} powered={powered.has(1)} onPower={handlePower} />
        </div>
        <div className="absolute top-40 left-1/2 z-10">
          <GeneratorSpot id={2} powered={powered.has(2)} onPower={handlePower} />
        </div>

        <div className="mx-auto w-full max-w-6xl px-10">
          <div className="grid grid-cols-[1fr_1fr] items-center gap-16">

            {/* left — text */}
            <div className="space-y-10">
              <div className="space-y-7 text-center">
                <h1 className="text-[2.75rem] leading-[1.08]">
                  welcome to kyles site.
                </h1>
                <div className="space-y-5">
                  <p className="text-[1.5rem] leading-[1.45]">
                    i&apos;m a 21 yo engineering and
                    <br />
                    education student from Sweden.
                  </p>
                  <p className="text-[1.5rem] leading-[1.45]">
                    full-stack by passion.
                    <br />
                    student by trade.
                  </p>
                </div>
              </div>

              {/* action bar */}
              <div
                className="flex h-20 w-full items-center gap-4 px-4"
                style={{ backgroundColor: "#d9d9d9" }}
              >
                <div 
                  className="flex items-center gap-5 px-2 py-2"
                  style={{ backgroundColor: "#181818", color: "#f0f0e8" }}>
                  <p className="px-2">resume</p>
                  <a
                    href="/cv-sv.pdf"
                    download="Kyle_Bostrom_Balthazar_CV(sv).pdf"
                    className="flex items-center gap-2.5 rounded-lg px-2 py-2 text-[1.05rem] transition-colors"
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#000")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#181818")}
                  >
                    sv
                    <FileText size={20} />
                  </a>
                  <a
                    href="/cv-eng.pdf"
                    download="Kyle_Bostrom_Balthazar_CV(eng).pdf"
                    className="flex items-center gap-2.5 rounded-lg px-2 py-2 text-[1.05rem] transition-colors"
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#000")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#181818")}
                  >
                    eng
                    <FileText size={20} />
                  </a>
                </div>
                <div className="flex items-center gap-5 pl-1">
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
                      className="transition-opacity hover:opacity-45"
                      style={{ color: "#2c3424" }}
                    >
                      <Icon size={26} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* right — photo placeholder */}
            <div className="flex justify-end space-y-10">
              <div
                className="flex items-center justify-center"
                style={{
                  backgroundColor: "#d9d9d9",
                  width: 400,
                  height: 400,
                  padding: 80,
                }}
              >
                <div style={{ backgroundColor: "#111111", width: "100%", height: "100%" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects ─────────────────────────────────────── */}
      <section
        id="project"
        className="relative py-28"
        style={{ borderTop: "1px solid rgba(240,240,232,0.1)" }}
      >
        <div className="absolute top-14 left-1/3 z-10">
          <GeneratorSpot id={3} powered={powered.has(3)} onPower={handlePower} />
        </div>
        <div className="mx-auto max-w-6xl px-10">
          <div className="flex items-baseline justify-between mb-14">
            <h2 className="text-[2.8rem]">projects.</h2>
            <a href="/projects" className="text-[1rem] leading-[1.5] transition-opacity hover:opacity-55">
              view all →
            </a>
          </div>
          <div className="grid grid-cols-2 gap-12 pt-4">
            {FEATURED_PROJECTS.map((p) => (
              <PaperProjectCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills (lowkey) ──────────────────────────────── */}
      <section className="py-14" style={{ borderTop: "1px solid rgba(240,240,232,0.06)" }}>
        <div className="mx-auto max-w-6xl px-10">
          <p
            className="text-xs uppercase tracking-widest mb-7"
            style={{ color: "rgba(240,240,232,0.22)" }}
          >
            tech i use
          </p>
          <div className="flex flex-wrap gap-7 items-center">
            {HOME_SKILLS.map(({ name, logo }) => (
              <div
                key={name}
                className="flex items-center gap-2"
                style={{ opacity: 0.38 }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo} alt="" width={18} height={18} style={{ objectFit: "contain" }} />
                <span className="text-xs" style={{ color: "#f0f0e8" }}>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────── */}
      <section
        id="contact"
        className="relative py-28"
        style={{ borderTop: "1px solid rgba(240,240,232,0.1)" }}
      >
        {/* 5th generator spot */}
        <div className="absolute top-8 right-20 z-10">
          <GeneratorSpot id={4} powered={powered.has(4)} onPower={handlePower} />
        </div>

        <div className="mx-auto max-w-6xl px-10">
          <h2 className="mb-12 text-[2.8rem]">contact.</h2>
          <div className="grid grid-cols-[1fr_1fr] items-start gap-16">
            <div className="space-y-4">
              <p className="text-[1.25rem] leading-[1.5]">
                got a project in mind?
                <br />
                let&apos;s build something.
              </p>
              <p
                className="text-[1rem] leading-[1.75]"
                style={{ color: "rgba(240,240,232,0.5)" }}
              >
                open to freelance work, collaborations, and interesting
                conversations. reach out through any of the channels below.
              </p>
            </div>
            <div className="space-y-5">
              {CONTACT_LINKS.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 text-[1rem] transition-opacity hover:opacity-55"
                  style={{ color: "#f0f0e8" }}
                >
                  <Icon size={20} />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────── */}
      <footer
        className="py-8"
        style={{ borderTop: "1px solid rgba(240,240,232,0.1)" }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-10">
          <span className="text-sm" style={{ color: "rgba(240,240,232,0.3)" }}>
            kyle b. — {new Date().getFullYear()}
          </span>
          <button
            onClick={scrollTop}
            className="text-sm transition-opacity hover:opacity-85"
            style={{ color: "rgba(240,240,232,0.3)" }}
          >
            back to top ↑
          </button>
        </div>
      </footer>
    </div>
  );
}
