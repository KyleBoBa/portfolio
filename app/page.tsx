"use client";

import { useCallback, useState } from "react";
import { FileText, Github, Linkedin, Mail } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { GeneratorSpot } from "@/components/GeneratorSpot";

const CONTACT_LINKS = [
  { Icon: Mail, label: "kylebb1[at]gmail.com", href: "mailto:kylebb1@gmail.com" },
  { Icon: Github, label: "github.com/kyleboba", href: "https://github.com/kyleboba" },
  {
    Icon: Linkedin,
    label: "linkedin.com/in/kyle",
    href: "https://www.linkedin.com/in/kyle-bostr%C3%B6m-balthazar/",
  },
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
        <div className="absolute bottom-24 left-1/3 z-10">
          <GeneratorSpot id={2} powered={powered.has(2)} onPower={handlePower} />
        </div>
        <div className="absolute top-40 left-1/2 z-10">
          <GeneratorSpot id={3} powered={powered.has(3)} onPower={handlePower} />
        </div>

        <div className="mx-auto w-full max-w-6xl px-10">
          <div className="grid grid-cols-[1fr_1fr] items-center gap-16">

            {/* left — text */}
            <div className="space-y-10">
              <div className="space-y-7 text-center">
                <h1 className="text-[3rem] leading-[1.08]">
                  welcome to kyles site.
                </h1>
                <div className="space-y-5">
                  <p className="text-[1.5rem] leading-[1.45]">
                    i&apos;m a 21 yo engineering and
                    <br />
                    teaching student from Sweden.
                  </p>
                  <p className="text-[1.5rem] leading-[1.45]">
                    full-stack by passion.
                    <br />
                    educator by trade.
                  </p>
                </div>
              </div>

              {/* action bar */}
              <div
                className="flex w-fit items-center gap-5 px-5 py-5"
                style={{ backgroundColor: "#d9d9d9" }}
              >
                <button
                  className="flex items-center gap-2.5 rounded-lg px-5 py-2.5 text-[1.05rem] transition-colors"
                  style={{ backgroundColor: "#181818", color: "#f0f0e8" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#000")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#181818")
                  }
                >
                  resume
                  <FileText size={20} />
                </button>

                <div className="flex items-center gap-5 pl-1">
                  {[
                    { Icon: Github, href: "https://github.com/kyleboba" },
                    {
                      Icon: Linkedin,
                      href: "https://www.linkedin.com/in/kyle-bostr%C3%B6m-balthazar/",
                    },
                    { Icon: Mail, href: "mailto:kylebb1@gmail.com" },
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
            <div className="flex justify-end">
              <div
                className="flex items-center justify-center"
                style={{
                  backgroundColor: "#d9d9d9",
                  width: 500,
                  height: 500,
                  padding: 80,
                }}
              >
                <div style={{ backgroundColor: "#111111", width: "100%", height: "100%" }} />
              </div>
            </div>
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
