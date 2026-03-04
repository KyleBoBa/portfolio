"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Monitor } from "lucide-react";

interface Props {
  poweredCount?: number;
  onContactClick?: () => void;
}

export function Navbar({ poweredCount = 0, onContactClick }: Props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(44,52,36,0.15)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(240,240,232,0.08)" : "none",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-10 py-5">
        {/* Logo → home */}
        <Link
          href="/"
          aria-label="Home"
          className="transition-opacity hover:opacity-55"
          style={{ color: "#f0f0e8" }}
        >
          <Monitor size={32} strokeWidth={1.5} />
        </Link>

        <div className="flex items-center gap-10">
          {/* Generator lights */}
          <div
            className="flex items-center gap-[7px]"
            title={`${poweredCount}/5 generators powered`}
          >
            {Array.from({ length: 5 }, (_, i) => (
              <div
                key={i}
                className="rounded-full transition-all duration-500"
                style={{
                  width: 8,
                  height: 8,
                  backgroundColor:
                    i < poweredCount
                      ? "#e8c547"
                      : "rgba(240,240,232,0.12)",
                  boxShadow:
                    i < poweredCount
                      ? "0 0 8px 2px rgba(232,197,71,0.55)"
                      : "none",
                  transform: i < poweredCount ? "scale(1.2)" : "scale(1)",
                }}
              />
            ))}
          </div>

          {/* Nav links */}
          <div className="flex gap-14">
            <Link
              href="/about"
              className="text-[17px] transition-opacity hover:opacity-55"
              style={{ color: "#f0f0e8" }}
            >
              about
            </Link>
            <Link
              href="/projects"
              className="text-[17px] transition-opacity hover:opacity-55"
              style={{ color: "#f0f0e8" }}
            >
              projects
            </Link>
            {onContactClick ? (
              <button
                onClick={onContactClick}
                className="text-[17px] transition-opacity hover:opacity-55"
                style={{ color: "#f0f0e8" }}
              >
                contact
              </button>
            ) : (
              <Link
                href="/#contact"
                className="text-[17px] transition-opacity hover:opacity-55"
                style={{ color: "#f0f0e8" }}
              >
                contact
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
