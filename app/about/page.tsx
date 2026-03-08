import { Navbar } from "@/components/Navbar";
import { MapPin } from "lucide-react";

const SKILLS = [
  { name: "typescript",  logo: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "next.js",     logo: "https://cdn.simpleicons.org/nextdotjs/1c1a14" },
  { name: "react",       logo: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "python",      logo: "https://cdn.simpleicons.org/python/FFD43B" },
  { name: "postgres",    logo: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "tailwindcss", logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "git",         logo: "https://cdn.simpleicons.org/git/F05032" },
];

const FACTS: { id: string; label: React.ReactNode; content: React.ReactNode }[] = [
  {
    id: "working-on",
    label: "currently working on",
    content: (
      <>
        <a href="/projects/fuchsdash" className="underline" style={{ color: "var(--ws-cream)" }}>project fuchs</a>
        <br />
        <a href="/projects/biljett" className="underline" style={{ color: "var(--ws-cream)" }}>biljett</a>
        <br />
        and this website!
      </>
    ),
  },
  {
    id: "studying",
    label: "currently studying",
    content: "3rd year of engineering & education programme",
  },
  {
    id: "based-in",
    label: (
      <span className="flex items-center gap-1.5">
        based in <MapPin size={13} style={{ display: "inline-block", flexShrink: 0 }} />
      </span>
    ),
    content: "Stockholm, Sweden",
  },
  {
    id: "interests",
    label: "interests",
    content: "full-stack development, educational technology, deadlock",
  },
];

export default function About() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--ws-sage)", color: "var(--ws-cream)" }}
    >
      <Navbar />

      <main className="page-slide-enter mx-auto max-w-7xl px-10 pb-24 pt-20">
        {/* Heading */}
        <div className="mb-16 px-16">
          <h1 className="mb-3 text-[2.8rem]">about.</h1>
          <div style={{ width: 36, height: 2, backgroundColor: "var(--ws-sage-muted)" }} />
        </div>

        {/* Bio */}
        <div className="grid grid-cols-1 gap-14 mb-20 sm:grid-cols-2">
          {/* Left — bio text on paper card */}
          <div
            className="space-y-5"
            style={{
              backgroundColor: "var(--ws-paper)",
              backgroundImage:
                "repeating-linear-gradient(to bottom, transparent, transparent 31px, rgba(175,158,130,0.16) 31px, rgba(175,158,130,0.16) 32px)",
              padding: "2rem 1.75rem",
              boxShadow: "0 4px 18px rgba(50,35,10,0.30), 0 1px 4px rgba(50,35,10,0.15)",
            }}
          >
            <p
              className="text-[1rem] leading-[2]"
              style={{ color: "var(--ws-ink)", fontFamily: "var(--font-space-mono), monospace" }}
            >
              I&apos;m{" "}
              <strong className="tracking-widest" style={{ color: "var(--ws-sage)", fontFamily: "var(--font-russo-one), sans-serif" }}>
                Kyle Boström Balthazar
              </strong>{" "}
              — an{" "}
              <a
                href="https://www.kth.se/utbildning/civilingenjor/civing-larare/civilingenjor-och-larare-300-hp-1.4108"
                target="_blank"
                rel="noreferrer"
                style={{ color: "var(--ws-sage)", textDecoration: "underline" }}
              >
                engineering and teaching student
              </a>{" "}
              studying at{" "}
              <strong style={{ color: "var(--ws-sage)" }}>KTH</strong> Royal Institute of
              Technology in{" "}
              <strong style={{ color: "var(--ws-sage)" }}>Stockholm, Sweden</strong>.{" "}
              When focused on my projects, I spend my time picking up knowledge and skills for the
              web, studying, and thinking about how software can make learning more effective.
            </p>
            <p
              className="text-[1rem] leading-[2]"
              style={{ color: "var(--ws-ink)", fontFamily: "var(--font-space-mono), monospace" }}
            >
              Teaching has made me a better developer. Breaking complex problems into clear,
              digestible steps transfers directly to writing clean, readable code.
            </p>
            <p
              className="text-[1rem] leading-[2]"
              style={{ color: "var(--ws-ink)", fontFamily: "var(--font-space-mono), monospace" }}
            >
              Outside of school and projects, I enjoy playing video games (you might notice the
              easter eggs), finding recipes to cook or bake, reading books — currently The Witcher:
              Baptism of Fire — and spending time with friends.
            </p>
            <p
              className="text-[1rem] leading-[2]"
              style={{ color: "var(--ws-ink)", fontFamily: "var(--font-space-mono), monospace" }}
            >
              Feel free to take a look at my projects, or reach out if you want to know more about
              my experience and skill set!
            </p>
          </div>

          {/* Right — quick facts */}
          <div className="space-y-8 pt-1">
            {FACTS.map(({ id, label, content }) => (
              <div
                key={id}
                style={{
                  borderLeft: "2px solid var(--ws-sage-mid)",
                  paddingLeft: "1rem",
                }}
              >
                <p
                  className="text-xs mb-1.5 uppercase tracking-widest"
                  style={{ color: "rgba(244,240,230,0.65)", fontFamily: "var(--font-space-mono), monospace" }}
                >
                  {label}
                </p>
                <p
                  className="text-[1.05rem]"
                  style={{ color: "var(--ws-cream)", fontFamily: "var(--font-space-mono), monospace" }}
                >
                  {content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div
          className="pt-14 px-16"
          style={{ borderTop: "1px solid rgba(244,240,230,0.08)" }}
        >
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-[1.8rem]">tech stack.</h2>
            <a
              href="/projects"
              className="text-[0.88rem] transition-opacity hover:opacity-55"
              style={{ color: "var(--ws-cream)", fontFamily: "var(--font-space-mono), monospace" }}
            >
              see them in use →
            </a>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {SKILLS.map(({ name, logo }) => (
              <span
                key={name}
                className="flex items-center gap-2 text-xs"
                style={{
                  backgroundColor: "rgba(64,76,54,0.65)",
                  border: "1px solid rgba(198,202,181,0.18)",
                  color: "var(--ws-cream)",
                  padding: "0.4rem 0.75rem",
                  fontFamily: "var(--font-space-mono), monospace",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo}
                  alt=""
                  width={14}
                  height={14}
                  style={{ objectFit: "contain", flexShrink: 0 }}
                />
                {name}
              </span>
            ))}
            <span
              className="flex items-center gap-2 text-xs"
              style={{
                backgroundColor: "rgba(64,76,54,0.65)",
                border: "1px solid rgba(198,202,181,0.18)",
                color: "var(--ws-cream)",
                padding: "0.4rem 0.75rem",
                fontFamily: "var(--font-space-mono), monospace",
              }}
            >
              and more
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
