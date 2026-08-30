"use client";

import { motion, useReducedMotion } from "framer-motion";
import { viewportOnce } from "@/lib/animations";

export function SpecTable({
  points,
  dark = false,
}: {
  points: string[];
  dark?: boolean;
}) {
  const reduced = useReducedMotion();
  const stripe = dark
    ? "odd:bg-white/[0.03] hover:bg-white/[0.07]"
    : "odd:bg-black/[0.02] hover:bg-black/[0.05]";

  return (
    <div className="overflow-hidden rounded-lg border border-black/[0.08]">
      <div
        className={`grid grid-cols-[2.5rem_1fr_2rem] items-center border-b px-0 font-mono text-[9px] uppercase tracking-[0.25em] ${
          dark ? "border-white/10 text-white/40" : "border-black/[0.08] text-faint"
        }`}
      >
        <span className="pl-3 py-2">No.</span>
        <span className="py-2">Specification</span>
        <span aria-hidden="true" className="pr-3 py-2 text-right">▸</span>
      </div>
      {points.map((point, i) => (
        <motion.div
          key={point}
          initial={reduced ? false : { opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.4, delay: (i % 8) * 0.04 }}
          className={`group grid grid-cols-[2.5rem_1fr_2rem] items-center text-sm transition-colors duration-200 ${stripe}`}
        >
          <span
            className={`pl-3 py-3 font-mono text-[10px] tracking-[0.15em] ${
              dark ? "text-teal/70" : "text-accent"
            }`}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <span
            className={`py-3 pr-2 leading-relaxed transition-colors duration-200 group-hover:translate-x-1 ${
              dark ? "text-white/70 group-hover:text-white" : "text-mist group-hover:text-bone"
            }`}
          >
            {point}
          </span>
          <span
            aria-hidden="true"
            className={`pr-3 py-3 text-right transition-colors duration-200 ${
              dark ? "text-white/20 group-hover:text-teal" : "text-black/15 group-hover:text-accent"
            }`}
          >
            +
          </span>
        </motion.div>
      ))}
    </div>
  );
}
