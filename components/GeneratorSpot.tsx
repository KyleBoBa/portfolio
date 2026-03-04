"use client";

import { useCallback, useRef, useState } from "react";
import { Zap } from "lucide-react";
import { SkillCheck } from "./SkillCheck";

interface Props {
  id: number;
  powered: boolean;
  onPower: (id: number) => void;
}

export function GeneratorSpot({ id, powered, onPower }: Props) {
  const [active, setActive] = useState(false);
  const [cooldown, setCooldown] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startHover = useCallback(() => {
    if (powered || active || cooldown) return;
    timerRef.current = setTimeout(() => setActive(true), 600);
  }, [powered, active, cooldown]);

  const endHover = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  const handleSuccess = useCallback(() => onPower(id), [id, onPower]);

  const handleFail = useCallback(() => {
    setCooldown(true);
    setTimeout(() => setCooldown(false), 3500);
  }, []);

  const handleClose = useCallback(() => setActive(false), []);

  return (
    <>
      <div
        onMouseEnter={startHover}
        onMouseLeave={endHover}
        title={powered ? "generator powered" : ""}
        style={{ cursor: powered ? "default" : "crosshair", lineHeight: 0 }}
      >
        <Zap
          size={18}
          className="transition-all duration-300"
          style={{
            color: powered
              ? "#e8c547"
              : cooldown
                ? "rgba(248,113,113,0.35)"
                : "rgba(232,197,71,0.18)",
            fill: powered ? "#e8c547" : "none",
            filter: powered ? "drop-shadow(0 0 5px rgba(232,197,71,0.7))" : "none",
          }}
        />
      </div>

      {active && (
        <SkillCheck
          onSuccess={handleSuccess}
          onFail={handleFail}
          onClose={handleClose}
        />
      )}
    </>
  );
}
