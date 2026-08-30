"use client";

import { motion, useReducedMotion } from "framer-motion";
import { viewportOnce } from "@/lib/animations";

export function LayerStack({ items }: { items: string[] }) {
  const reduced = useReducedMotion();

  return (
    <div className="flex flex-col gap-px overflow-hidden rounded-lg border border-black/[0.08] bg-black/[0.06]">
      {items.map((item, i) => {
        const width = 62 + ((i * 37) % 38); // staggered bar widths for blueprint feel
        return (
          <motion.div
            key={item}
            initial={reduced ? false : { opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "left" }}
            className="group flex items-center gap-3 bg-graphite px-3 py-2.5"
          >
            <span className="w-6 shrink-0 font-mono text-[9px] tracking-[0.15em] text-faint">
              L{i + 1}
            </span>
            <span
              aria-hidden="true"
              className="hidden h-3 shrink-0 rounded-sm bg-gradient-to-r from-accent/70 to-teal/70 transition-all duration-300 group-hover:from-accent group-hover:to-teal sm:block"
              style={{ width: `${width}%` }}
            />
            <span className="truncate font-mono text-[11px] uppercase tracking-[0.18em] text-bone">
              {item}
            </span>
            <span
              aria-hidden="true"
              className="ml-auto shrink-0 font-mono text-[9px] tracking-[0.15em] text-faint"
            >
              {width}%
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}
