"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const METRICS = [
  { label: "PWR", unit: "%", min: 82, max: 93, step: 0.6, start: 87.4, digits: 1, dot: "bg-teal" },
  { label: "CORE", unit: "\u00b0C", min: 34.5, max: 38.5, step: 0.4, start: 36.2, digits: 1, dot: "bg-accent" },
  { label: "LINK", unit: "ms", min: 8, max: 22, step: 2.5, start: 12, digits: 0, dot: "bg-amber-500" },
];

export function Telemetry() {
  const reduced = useReducedMotion();
  const [values, setValues] = useState(METRICS.map((m) => m.start));

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => {
      setValues((prev) =>
        prev.map((v, i) => {
          const m = METRICS[i];
          const next = v + (Math.random() - 0.5) * 2 * m.step;
          return Math.min(m.max, Math.max(m.min, next));
        })
      );
    }, 1700);
    return () => clearInterval(id);
  }, [reduced]);

  return (
    <p className="hidden items-center gap-5 font-mono text-[10px] uppercase tracking-[0.2em] text-faint lg:flex">
      {METRICS.map((m, i) => (
        <span key={m.label} className="flex items-center gap-2 tabular-nums">
          <span
            className={`h-1 w-1 rounded-full ${m.dot}`}
            style={
              reduced
                ? undefined
                : { animation: "telemetry-blink 2.4s ease-in-out infinite", animationDelay: `${i * 0.5}s` }
            }
          />
          <span>{m.label}</span>
          <span className="text-mist">
            {values[i].toFixed(m.digits)}
            {m.unit}
          </span>
        </span>
      ))}
    </p>
  );
}
