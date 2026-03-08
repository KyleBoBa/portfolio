"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Presentation } from "lucide-react";

interface Props {
  poweredCount?: number;
  onContactClick?: () => void;
}

function getNavDir(from: string, to: string): "forward" | "back" | "lateral" {
  const path = (p: string) => p.split("#")[0] || "/";
  const f = path(from);
  const t = path(to);
  if (f === "/" && t !== "/") return "forward";
  if (f !== "/" && t === "/") return "back";
  return "lateral";
}

export function Navbar({ poweredCount = 0, onContactClick }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const t = setTimeout(() => {
      delete document.documentElement.dataset.navDir;
    }, 350);
    return () => clearTimeout(t);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigate = (to: string) => {
    const dir = getNavDir(pathname, to);
    document.documentElement.dataset.navDir = dir;
    router.push(to);
  };

  // onLight = navbar sits over a cream/light surface → use ink colors
  // !onLight = navbar sits over dark sage hero (home, unscrolled) → use cream colors
  const onLight = !isHome || scrolled;
  const textColor   = onLight ? "#1c1a14" : "#f4f0e6";
  const dotInactive = onLight ? "rgba(28,26,20,0.28)" : "rgba(244,240,230,0.20)";
  const bgColor     = onLight
    ? "linear-gradient(to bottom, rgba(244,240,230,0.97) 0%, rgba(244,240,230,0.88) 100%)"
    : "linear-gradient(to bottom, rgba(46,61,38,0.72) 0%, transparent 100%)";
  const border      = scrolled ? "1px solid rgba(28,26,20,0.10)" : "none";

  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        background: bgColor,
        backdropFilter: scrolled ? "blur(10px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: border,
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-10 py-5">
        {/* Logo → home */}
        <Link
          href="/"
          aria-label="Home"
          className="transition-opacity hover:opacity-50"
          style={{ color: textColor }}
          onClick={(e) => { e.preventDefault(); navigate("/"); }}
        >
          <Presentation size={28} strokeWidth={1.5} />
        </Link>

        <div className="flex items-center gap-10">
          {/* Generator lights */}
          <div
            className="flex items-center gap-1.5"
            title={`${poweredCount}/5 generators powered`}
          >
            {Array.from({ length: 5 }, (_, i) => (
              <div
                key={i}
                className="rounded-full transition-all duration-500"
                style={{
                  width: 7,
                  height: 7,
                  backgroundColor:
                    i < poweredCount
                      ? "#e8c547"
                      : dotInactive,
                  boxShadow:
                    i < poweredCount
                      ? "0 0 7px 2px rgba(232,197,71,0.55)"
                      : "none",
                  transform: i < poweredCount ? "scale(1.2)" : "scale(1)",
                }}
              />
            ))}
          </div>

          {/* Nav links */}
          <div className="flex gap-12">
            {(["about", "projects"] as const).map((page) => (
              <Link
                key={page}
                href={`/${page}`}
                className="text-[15px] tracking-wide transition-opacity hover:opacity-50"
                style={{ color: textColor }}
                onClick={(e) => { e.preventDefault(); navigate(`/${page}`); }}
              >
                {page}
              </Link>
            ))}
            {onContactClick ? (
              <button
                onClick={onContactClick}
                className="text-[15px] tracking-wide transition-opacity hover:opacity-50"
                style={{ color: textColor, background: "none", border: "none", padding: 0, cursor: "pointer" }}
              >
                contact
              </button>
            ) : (
              <Link
                href="/#contact"
                className="text-[15px] tracking-wide transition-opacity hover:opacity-50"
                style={{ color: textColor }}
                onClick={(e) => { e.preventDefault(); navigate("/#contact"); }}
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
