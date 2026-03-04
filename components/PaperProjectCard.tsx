"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";

interface Props {
  name: string;
  description: string;
  tags: string[];
  href: string;
  rotation?: number;
}

export function PaperProjectCard({ name, description, tags, href, rotation = 0 }: Props) {
  const router = useRouter();
  const cardRef = useRef<HTMLAnchorElement>(null);
  const isNavigable = href !== "#";

  const handleClick = (e: React.MouseEvent) => {
    if (!isNavigable) return;
    e.preventDefault();
    const card = cardRef.current;
    if (!card) { router.push(href); return; }

    card.style.transition = "transform 0.42s cubic-bezier(0.4, 0, 1, 1), opacity 0.42s ease";
    card.style.transformOrigin = "bottom center";
    card.style.transform = `rotate(${rotation}deg) perspective(900px) rotateX(-88deg)`;
    card.style.opacity = "0";

    setTimeout(() => router.push(href), 440);
  };

  return (
    <div style={{ perspective: "1000px" }}>
      <a
        ref={cardRef}
        href={href}
        onClick={handleClick}
        style={{
          display: "block",
          background: "#f4efe5",
          color: "#1c1c16",
          padding: "2rem 2rem 1.75rem",
          position: "relative",
          boxShadow: "0 8px 32px rgba(0,0,0,0.38)",
          transform: `rotate(${rotation}deg)`,
          transition: "box-shadow 0.22s, transform 0.22s",
          textDecoration: "none",
          cursor: isNavigable ? "pointer" : "default",
        }}
        onMouseEnter={(e) => {
          if (!isNavigable) return;
          const el = e.currentTarget;
          el.style.boxShadow = "0 18px 52px rgba(0,0,0,0.52)";
          el.style.transform = `rotate(${rotation}deg) translateY(-7px)`;
        }}
        onMouseLeave={(e) => {
          if (!isNavigable) return;
          const el = e.currentTarget;
          el.style.boxShadow = "0 8px 32px rgba(0,0,0,0.38)";
          el.style.transform = `rotate(${rotation}deg)`;
        }}
      >
        {/* Tape strip */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: -13,
            left: "50%",
            transform: "translateX(-50%)",
            width: 68,
            height: 22,
            background: "rgba(238, 212, 42, 0.72)",
          }}
        />

        <h3 style={{ fontSize: "1.2rem", marginBottom: "0.7rem", fontFamily: "inherit" }}>{name}</h3>

        <p style={{ fontSize: "0.88rem", lineHeight: 1.75, color: "rgba(28,28,22,0.62)", marginBottom: "1.2rem" }}>
          {description}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "1.5rem" }}>
          {tags.map((t) => (
            <span
              key={t}
              style={{
                padding: "0.2rem 0.55rem",
                fontSize: "0.68rem",
                background: "rgba(28,28,22,0.08)",
                borderRadius: 3,
                fontFamily: "inherit",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <span style={{ fontSize: "0.82rem", color: isNavigable ? "rgba(28,28,22,0.42)" : "rgba(28,28,22,0.28)" }}>
          {isNavigable ? "view project →" : "coming soon"}
        </span>
      </a>
    </div>
  );
}
