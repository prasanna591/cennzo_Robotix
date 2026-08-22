"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { DURATION, EASE, viewportOnce } from "@/lib/animations";

type Row = { label: string; value: string };

const SCAN_VALUES = ["ONLINE", "ACTIVE", "SCAN", "SYNC", "TRACK", "MAPPED"];

type Phase = "idle" | "scanning" | "done";

export function HudPanel({ className = "" }: { className?: string }) {
  const reduced = useReducedMotion();
  const t = useTranslations("wafeePage.hud");
  const baseRows: Row[] = t.raw("rows") as Row[];
  const [rows, setRows] = useState(baseRows);
  const [latency, setLatency] = useState(12);
  const [confidence, setConfidence] = useState(98.4);
  const [phase, setPhase] = useState<Phase>("idle");
  const timers = useRef<ReturnType<typeof setInterval>[]>([]);

  useEffect(() => {
    return () => timers.current.forEach(clearInterval);
  }, []);

  const runDiagnostic = () => {
    if (phase !== "idle") return;

    if (reduced) {
      setPhase("done");
      window.setTimeout(() => setPhase("idle"), 1200);
      return;
    }

    setPhase("scanning");
    const scramble = setInterval(() => {
      setRows(
        baseRows.map((row) => ({
          ...row,
          value: SCAN_VALUES[Math.floor(Math.random() * SCAN_VALUES.length)],
        }))
      );
      setLatency(8 + Math.round(Math.random() * 32));
      setConfidence(92 + Math.random() * 7.9);
    }, 90);
    timers.current.push(scramble);

    window.setTimeout(() => {
      clearInterval(scramble);
      setRows(baseRows);
      setLatency(12);
      setConfidence(98.4);
      setPhase("done");
      window.setTimeout(() => setPhase("idle"), 1600);
    }, 1400);
  };

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: DURATION.standard, ease: EASE.out }}
      className={`relative overflow-hidden rounded-2xl border border-steel bg-graphite/80 shadow-soft backdrop-blur-sm ${className}`}
    >
      <div className="flex items-center justify-between border-b border-steel px-5 py-3">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-mist">
          {t("title")}
        </p>
        <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-faint">
          <span className="h-1 w-1 rounded-full bg-teal" />
          {t("conceptDemo")}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-x-6 gap-y-4 px-5 py-5">
        {rows.map((row) => (
          <div key={row.label} className="flex items-center justify-between gap-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
              {row.label}
            </span>
            <span
              className={`flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors duration-150 ${
                phase === "scanning" ? "text-accent" : "text-bone"
              }`}
            >
              <motion.span
                className="h-1 w-1 rounded-full bg-teal"
                {...(reduced
                  ? {}
                  : {
                      animate: { opacity: [1, 0.35, 1] },
                      transition: {
                        duration: phase === "scanning" ? 0.5 : 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    })}
              />
              {row.value}
            </span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 divide-x divide-steel border-t border-steel">
        <div className="px-5 py-4">
          <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-faint">
            {t("latency")}
          </p>
          <p className="mt-1 font-mono text-xl tabular-nums text-bone">
            {latency}
            <span className="text-xs text-mist">ms</span>
          </p>
        </div>
        <div className="px-5 py-4">
          <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-faint">
            {t("confidence")}
          </p>
          <p className="mt-1 font-mono text-xl tabular-nums text-bone">
            {confidence.toFixed(1)}
            <span className="text-xs text-mist">%</span>
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 border-t border-steel px-5 py-3">
        <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-faint">
          {phase === "scanning"
            ? t("stateScanning")
            : phase === "done"
              ? t("stateDone")
              : t("stateIdle")}
        </p>
        <button
          type="button"
          onClick={runDiagnostic}
          disabled={phase !== "idle"}
          aria-live="polite"
          className={`shrink-0 cursor-pointer rounded-lg border px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.18em] transition-colors duration-300 ${
            phase === "scanning"
              ? "cursor-wait border-accent/50 text-accent/70"
              : phase === "done"
                ? "border-accent text-accent"
                : "border-steel text-mist hover:border-accent hover:text-accent"
          }`}
        >
          {phase === "scanning" ? t("btnScanning") : phase === "done" ? t("btnDone") : t("btnIdle")}
        </button>
      </div>
    </motion.div>
  );
}
