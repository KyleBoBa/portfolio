"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type Result = "great" | "success" | "fail" | null;

const CX = 110;
const CY = 110;
const R = 80; // ring radius
const RING_W = 20;
const IND_R = 72; // indicator tip radius
const SPEED = 125; // degrees per second

// Convert degrees (0 = top, clockwise) to SVG point
function pt(deg: number) {
  const rad = ((deg - 90) * Math.PI) / 180;
  return { x: CX + R * Math.cos(rad), y: CY + R * Math.sin(rad) };
}

// SVG arc path for a ring segment
function arc(startDeg: number, sweepDeg: number): string {
  const s = pt(startDeg);
  const e = pt(startDeg + sweepDeg);
  const large = sweepDeg > 180 ? 1 : 0;
  return `M ${s.x.toFixed(2)} ${s.y.toFixed(2)} A ${R} ${R} 0 ${large} 1 ${e.x.toFixed(2)} ${e.y.toFixed(2)}`;
}

function inArc(angle: number, start: number, sweep: number): boolean {
  const a = ((angle % 360) + 360) % 360;
  const s = ((start % 360) + 360) % 360;
  const e = (s + sweep) % 360;
  return s <= e ? a >= s && a <= e : a >= s || a <= e;
}

interface Props {
  onSuccess: () => void;
  onFail: () => void;
  onClose: () => void;
}

export function SkillCheck({ onSuccess, onFail, onClose }: Props) {
  const [angle, setAngle] = useState(0);
  const [result, setResult] = useState<Result>(null);
  const angleRef = useRef(0);
  const resultRef = useRef<Result>(null);

  const zone = useMemo(() => {
    const start = Math.random() * 360;
    const width = 55;
    const greatStart = start + width / 2 - 9;
    return { start, width, greatStart, greatWidth: 18 };
  }, []);

  // Rotation animation
  useEffect(() => {
    let lastTime: number | null = null;
    let frameId: number;

    const tick = (time: number) => {
      if (lastTime !== null) {
        const delta = time - lastTime;
        angleRef.current = (angleRef.current + SPEED * (delta / 1000)) % 360;
        setAngle(angleRef.current);
      }
      lastTime = time;
      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, []);

  const attempt = useCallback(() => {
    if (resultRef.current) return;

    const a = angleRef.current;
    let r: Result;
    if (inArc(a, zone.greatStart, zone.greatWidth)) r = "great";
    else if (inArc(a, zone.start, zone.width)) r = "success";
    else r = "fail";

    resultRef.current = r;
    setResult(r);

    setTimeout(
      () => {
        if (r !== "fail") onSuccess();
        else onFail();
        onClose();
      },
      r === "fail" ? 750 : 550
    );
  }, [zone, onSuccess, onFail, onClose]);

  // Space bar support
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        attempt();
      }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [attempt]);

  // Indicator tip position
  const tipRad = ((angle - 90) * Math.PI) / 180;
  const tip = {
    x: CX + IND_R * Math.cos(tipRad),
    y: CY + IND_R * Math.sin(tipRad),
  };

  const zoneColor =
    result === null
      ? "#e8c547"
      : result === "great"
        ? "#f97316"
        : result === "success"
          ? "#86efac"
          : "#f87171";

  const greatColor = result === null ? "#f97316" : zoneColor;

  const label =
    result === null
      ? "skill check"
      : result === "great"
        ? "great!"
        : result === "success"
          ? "success!"
          : "missed!";

  const labelColor =
    result === null
      ? "rgba(255,255,255,0.4)"
      : result === "fail"
        ? "#f87171"
        : result === "great"
          ? "#f97316"
          : "#86efac";

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center cursor-pointer select-none"
      style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
      onClick={attempt}
    >
      <div className="flex flex-col items-center gap-3">
        {/* Label */}
        <span
          className="text-xs uppercase tracking-[0.3em]"
          style={{ color: labelColor, letterSpacing: "0.3em" }}
        >
          {label}
        </span>

        <svg width="220" height="220" viewBox="0 0 220 220">
          {/* Ring track */}
          <circle
            cx={CX} cy={CY} r={R}
            fill="none"
            stroke="rgba(255,255,255,0.07)"
            strokeWidth={RING_W}
          />
          {/* Dark inner fill */}
          <circle cx={CX} cy={CY} r={R - RING_W / 2 - 1} fill="#0d0d0d" />

          {/* Success zone */}
          <path
            d={arc(zone.start, zone.width)}
            fill="none"
            stroke={zoneColor}
            strokeWidth={RING_W}
            strokeLinecap="butt"
          />

          {/* Great zone (drawn on top) */}
          <path
            d={arc(zone.greatStart, zone.greatWidth)}
            fill="none"
            stroke={greatColor}
            strokeWidth={RING_W}
            strokeLinecap="butt"
          />

          {/* Rotating indicator */}
          {!result && (
            <>
              <line
                x1={CX} y1={CY}
                x2={tip.x} y2={tip.y}
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx={tip.x} cy={tip.y} r="4.5" fill="white" />
            </>
          )}

          {/* Center dot */}
          <circle cx={CX} cy={CY} r="4" fill="rgba(255,255,255,0.7)" />
        </svg>

        {!result && (
          <span
            className="text-[10px] uppercase tracking-widest"
            style={{ color: "rgba(255,255,255,0.18)" }}
          >
            click or space
          </span>
        )}
      </div>
    </div>
  );
}
