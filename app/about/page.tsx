import { Navbar } from "@/components/Navbar";

const SKILLS = [
  "typescript",
  "next.js",
  "react",
  "python",
  "postgres",
  "docker",
  "prisma",
  "tailwind",
  "git",
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
              i&apos;m kyle — an engineering and teaching student based in
              Sweden. i spend my time building things for the web, studying
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
                currently studying
              </p>
              <p className="text-[1.05rem]" style={{ color: "rgba(240,240,232,0.82)" }}>
                engineering + teaching programme
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
          <h2 className="text-[2rem] mb-10">tech stack.</h2>
          <div className="flex flex-wrap gap-3">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="rounded px-4 py-2 text-sm"
                style={{ backgroundColor: "#d9d9d9", color: "#2c3424" }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
