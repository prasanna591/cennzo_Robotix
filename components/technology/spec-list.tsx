"use client";

import { motion, useReducedMotion } from "framer-motion";
import { viewportOnce } from "@/lib/animations";

export function SpecList({
  points,
  teal = false,
  dark = false,
  dotClass = "",
}: {
  points: string[];
  teal?: boolean;
  dark?: boolean;
  dotClass?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <ul className="grid gap-x-10 sm:grid-cols-2">
      {points.map((point, i) => (
        <motion.li
          key={point}
          initial={reduced ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, delay: (i % 8) * 0.05, ease: [0.22, 1, 0.36, 1] }}
          className={`group flex cursor-default items-start gap-3 py-3.5 text-sm leading-relaxed transition-all duration-300 hover:pl-2 ${
            dark
              ? "border-b border-white/10 text-white/60 hover:text-white"
              : "border-b border-black/[0.08] text-mist hover:text-bone"
          }`}
        >
          <span
            aria-hidden="true"
            className={`mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full transition-all duration-300 group-hover:scale-150 ${
              dotClass ||
              (dark
                ? "bg-teal/50 group-hover:bg-teal"
                : teal
                  ? "bg-teal/40 group-hover:bg-teal"
                  : "bg-accent/40 group-hover:bg-accent")
            }`}
          />
          <span
            className={`font-mono text-[9px] tracking-[0.15em] opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
              dark ? "text-teal" : "text-faint"
            }`}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          {point}
        </motion.li>
      ))}
    </ul>
  );
}
