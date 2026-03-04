import { Navbar } from "@/components/Navbar";

const SKILLS = [
  { name: "typescript",  logo: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "next.js",     logo: "https://cdn.simpleicons.org/nextdotjs/000000" },
  { name: "react",       logo: "https://cdn.simpleicons.org/react/087EA4" },
  { name: "python",      logo: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "postgres",    logo: "https://cdn.simpleicons.org/postgresql/336791" },
  { name: "docker",      logo: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "prisma",      logo: "https://cdn.simpleicons.org/prisma/000000" },
  { name: "tailwindcss",    logo: "https://cdn.simpleicons.org/tailwindcss/0F172A" },
  { name: "git",         logo: "https://cdn.simpleicons.org/git/F05032" },
];

export default function About() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#2c3424", color: "#f0f0e8" }}>
      <Navbar />

      <main className="mx-auto max-w-6xl px-10 pt-36 pb-24">
        <h1 className="text-[3rem] mb-16">about.</h1>

        {/* Bio */}
        <div className="grid grid-cols-[1fr_1fr] gap-16 mb-20">
          <div className="space-y-5">
            <p
              className="text-[1.1rem] leading-[1.85]"
              style={{ color: "rgba(240,240,232,0.82)" }}
            >
              heya! i&apos;m kyle boström balthazar — an
              <a href="https://www.kth.se/utbildning/civilingenjor/civing-larare/civilingenjor-och-larare-300-hp-1.4108" 
                target="_blank" rel="noreferrer" 
                className="underline"
              >
              engineering and teaching student</a> studying at KTH Royal Institute of Technology in
              Stockholm, Sweden. <br />
              i spend my time building things for the web, studying
              pedagogy, and thinking about how software can make learning more
              effective.
            </p>
            <p
              className="text-[1.1rem] leading-[1.85]"
              style={{ color: "rgba(240,240,232,0.82)" }}
            >
              teaching has made me a better developer. breaking complex problems
              into clear, digestible steps is a skill that transfers directly to
              writing clean, readable code.
            </p>
            <p
              className="text-[1.1rem] leading-[1.85]"
              style={{ color: "rgba(240,240,232,0.82)" }}
            >
              feel free to take a look at my projects, or reach out if you want
              to know more about my experience and skillset!
            </p>
          </div>

          {/* Quick facts */}
          <div className="space-y-8">
            <div>
              <p
                className="text-xs uppercase tracking-widest mb-3"
                style={{ color: "rgba(240,240,232,0.4)" }}
              >
                currently working on
              </p>
              <p className="text-[1.05rem]" style={{ color: "rgba(240,240,232,0.82)" }}>
                <a href="/projects" target="_blank" rel="noreferrer" className="underline">
                  project fuchs<br />
                </a>
                and this website!
              </p>
            </div>
            <div>
              <p
                className="text-xs uppercase tracking-widest mb-3"
                style={{ color: "rgba(240,240,232,0.4)" }}
              >
                currently studying
              </p>
              <p className="text-[1.05rem]" style={{ color: "rgba(240,240,232,0.82)" }}>
                3rd year of engineering & education programme
              </p>
            </div>
            <div>
              <p
                className="text-xs uppercase tracking-widest mb-3"
                style={{ color: "rgba(240,240,232,0.4)" }}
              >
                based in
              </p>
              <p className="text-[1.05rem]" style={{ color: "rgba(240,240,232,0.82)" }}>
                Stockholm, Sweden
              </p>
            </div>
            <div>
              <p
                className="text-xs uppercase tracking-widest mb-3"
                style={{ color: "rgba(240,240,232,0.4)" }}
              >
                interests
              </p>
              <p className="text-[1.05rem]" style={{ color: "rgba(240,240,232,0.82)" }}>
                full-stack development, education technology, chemical process systems
              </p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div
          className="pt-16"
          style={{ borderTop: "1px solid rgba(240,240,232,0.1)" }}
        >
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
                style={{ backgroundColor: "#d9d9d9", color: "#2c3424" }}
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
