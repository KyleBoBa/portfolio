"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";

const TAPE_COLORS = ["#e4c820", "#6120e4", "#e4208f", "#39b828", "#2ca5c7"];

function tapeColorForName(name: string): string {
  const hash = name.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return TAPE_COLORS[hash % TAPE_COLORS.length];
}

interface Props {
  name: string;
  description: string;
  tags: string[];
  href: string;
  rotation?: number;
  /** Show a large watermark index number (used on /projects listing) */
  index?: number;
  /** Enables view-transition click + sets viewTransitionName on the heading */
  viewTransitionSlug?: string;
}

export function PaperProjectCard({
  name,
  description,
  tags,
  href,
  rotation = 0,
  index,
  viewTransitionSlug,
}: Props) {
  const tapeColor = tapeColorForName(name);
  const router = useRouter();
  const cardRef = useRef<HTMLAnchorElement>(null);
  const isNavigable = href !== "#";

  const handleClick = (e: React.MouseEvent) => {
    if (!isNavigable) return;
    e.preventDefault();

    if (viewTransitionSlug) {
      // Projects listing: shared-element expand transition
      document.documentElement.dataset.navDir = "expand";
      if ("startViewTransition" in document) {
        (document as Document & { startViewTransition: (cb: () => void) => void })
          .startViewTransition(() => router.push(href));
      } else {
        router.push(href);
      }
      return;
    }

    // Home featured cards: fold-down animation
    const card = cardRef.current;
    if (!card) { router.push(href); return; }
    card.style.transition = "transform 0.42s cubic-bezier(0.4, 0, 1, 1), opacity 0.42s ease";
    card.style.transformOrigin = "bottom center";
    card.style.transform = `rotate(${rotation}deg) perspective(900px) rotateX(-88deg)`;
    card.style.opacity = "0";
    setTimeout(() => router.push(href), 440);
  };

  return (
    /* paddingTop creates room for the tape to overflow above */
    <div style={{ perspective: "1000px", paddingTop: "18px", overflow: "visible" }}>
      <a
        ref={cardRef}
        href={href}
        onClick={handleClick}
        style={{
          display: "block",
          position: "relative",
          overflow: "visible",
          background: "#f9f5ed",
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent, transparent 27px, rgba(175,158,130,0.20) 27px, rgba(175,158,130,0.20) 28px)",
          color: "#1c1a14",
          padding: "2.25rem 1.75rem 1.75rem",
          boxShadow: "0 6px 24px rgba(50,35,10,0.18), 0 2px 6px rgba(50,35,10,0.10)",
          transform: `rotate(${rotation}deg)`,
          transition: "box-shadow 0.22s, transform 0.22s",
          textDecoration: "none",
          cursor: isNavigable ? "pointer" : "default",
        }}
        onMouseEnter={(e) => {
          if (!isNavigable) return;
          const el = e.currentTarget;
          el.style.boxShadow = "0 16px 48px rgba(50,35,10,0.26), 0 4px 12px rgba(50,35,10,0.14)";
          el.style.transform = `rotate(${rotation}deg) translateY(-8px)`;
        }}
        onMouseLeave={(e) => {
          if (!isNavigable) return;
          const el = e.currentTarget;
          el.style.boxShadow = "0 6px 24px rgba(50,35,10,0.18), 0 2px 6px rgba(50,35,10,0.10)";
          el.style.transform = `rotate(${rotation}deg)`;
        }}
      >
        {/* Tape strip — hardcoded amber so it always resolves */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: -18,
            left: "50%",
            transform: "translateX(-50%)",
            width: 72,
            height: 22,
            zIndex: 10,
            backgroundColor: tapeColor,
            opacity: 0.82,
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(0,0,0,0.05) 3px, rgba(0,0,0,0.05) 4px)",
          }}
        />

        {/* Optional watermark index number */}
        {index !== undefined && (
          <span
            aria-hidden
            style={{
              position: "absolute",
              bottom: "-0.75rem",
              right: "1rem",
              fontSize: "6rem",
              lineHeight: 1,
              color: "rgba(28,26,20,0.25)",
              fontFamily: "var(--font-russo-one), sans-serif",
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        )}

        <h3
          style={{
            fontSize: "1.1rem",
            marginBottom: "0.65rem",
            fontFamily: "var(--font-russo-one), sans-serif",
            color: "#1c1a14",
            ...(viewTransitionSlug
              ? ({ viewTransitionName: `project-${viewTransitionSlug}` } as React.CSSProperties)
              : {}),
          }}
        >
          {name}
        </h3>

        <p
          style={{
            fontSize: "0.82rem",
            lineHeight: 1.8,
            color: "rgba(28,26,20,0.52)",
            marginBottom: "1.25rem",
            fontFamily: "var(--font-space-mono), monospace",
          }}
        >
          {description}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "1.5rem" }}>
          {tags.map((t) => (
            <span
              key={t}
              style={{
                padding: "0.18rem 0.5rem",
                fontSize: "0.65rem",
                background: "rgba(46,61,38,0.10)",
                color: "#4a5e3c",
                fontFamily: "var(--font-space-mono), monospace",
                letterSpacing: "0.02em",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <span
          style={{
            fontSize: "0.78rem",
            fontFamily: "var(--font-space-mono), monospace",
            color: isNavigable ? "rgba(28,26,20,0.36)" : "rgba(28,26,20,0.22)",
          }}
        >
          {isNavigable ? "view project →" : "coming soon"}
        </span>
      </a>
    </div>
  );
}
