import { Navbar } from "@/components/Navbar";

const SKILLS = [
  { name: "typescript",  logo: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "next.js",     logo: "https://cdn.simpleicons.org/nextdotjs/f0f0e8" },
  { name: "react",       logo: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "python",      logo: "https://cdn.simpleicons.org/python/FFD43B" },
  { name: "postgres",    logo: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "docker",      logo: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "prisma",      logo: "https://cdn.simpleicons.org/prisma/f0f0e8" },
  { name: "tailwindcss", logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "git",         logo: "https://cdn.simpleicons.org/git/F05032" },
];

const FACTS = [
  {
    label: "currently working on",
    content: (
      <>
        <a href="/projects" className="underline">project fuchs</a>
        <br />and this website!
      </>
    ),
  },
  { label: "currently studying",  content: "3rd year of engineering & education programme" },
  { label: "based in",            content: "Stockholm, Sweden" },
  { label: "interests",           content: "full-stack development, education technology, chemical process systems" },
];

export default function About() {
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
          <h1 className="text-[3rem] mb-4">about.</h1>
          <div style={{ width: 44, height: 2, backgroundColor: "rgba(107,125,91,0.75)" }} />
        </div>

        {/* Bio */}
        <div className="grid grid-cols-[1fr_1fr] gap-16 mb-20">
          {/* Left — bio text in a subtle panel */}
          <div
            className="space-y-5 rounded-lg px-8 py-7"
            style={{
              backgroundColor: "rgba(54,64,48,0.45)",
              border: "1px solid rgba(198,202,181,0.1)",
            }}
          >
            <p className="text-[1.1rem] leading-[1.85]" style={{ color: "rgba(240,240,232,0.82)" }}>
              heya! i&apos;m <span style={{ color: "rgba(238, 212, 42, 0.80)" }}>kyle boström balthazar</span> — an{" "}
              <a
                href="https://www.kth.se/utbildning/civilingenjor/civing-larare/civilingenjor-och-larare-300-hp-1.4108"
                target="_blank"
                rel="noreferrer"
                style={{ color: "rgba(238, 212, 42, 0.80)" }}
              >
                engineering and teaching student
              </a>{" "}
              studying at <span style={{ color: "rgba(238, 212, 42, 0.72)" }}>KTH</span> Royal Institute of Technology in <span style={{ color: "rgba(238, 212, 42, 0.72)" }}>Stockholm, Sweden</span>.{" "}
              i spend my time picking up new skills for the web, studying, and thinking
              about how software can make learning more effective.
            </p>
            <p className="text-[1.1rem] leading-[1.85]" style={{ color: "rgba(240,240,232,0.82)" }}>
              teaching has made me a better developer. breaking complex problems into clear,
              digestible steps is a skill that transfers directly to writing clean, readable code.
            </p>
            <p className="text-[1.1rem] leading-[1.85]" style={{ color: "rgba(240,240,232,0.82)" }}>
              feel free to take a look at my projects, or reach out if you want to know more
              about my experience and skill set!
            </p>
          </div>

          {/* Right — quick facts with sage accent borders */}
          <div className="space-y-8 pt-2">
            {FACTS.map(({ label, content }) => (
              <div
                key={label}
                style={{ borderLeft: "2px solid rgba(107,125,91,0.55)", paddingLeft: "1rem" }}
              >
                <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "rgba(240,240,232,0.4)" }}>
                  {label}
                </p>
                <p className="text-[1.05rem]" style={{ color: "rgba(240,240,232,0.82)" }}>
                  {content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="pt-16" style={{ borderTop: "1px solid rgba(240,240,232,0.1)" }}>
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-[2rem]">tech stack.</h2>
            <a href="/projects" className="text-[1rem]">
              see them in use →
            </a>
          </div>
          <div className="flex flex-wrap gap-3">
            {SKILLS.map(({ name, logo }) => (
              <span
                key={name}
                className="rounded px-4 py-2 text-sm flex items-center gap-2"
                style={{
                  backgroundColor: "rgba(54,64,48,0.7)",
                  border: "1px solid rgba(107,125,91,0.3)",
                  color: "#f0f0e8",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo} alt="" width={16} height={16} style={{ objectFit: "contain", flexShrink: 0 }} />
                {name}
              </span>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
