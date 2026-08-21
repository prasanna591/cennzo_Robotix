"use client";

import { motion, useReducedMotion } from "framer-motion";
import { DURATION, EASE, viewportOnce } from "@/lib/animations";

export function FlowStack({ items }: { items: string[] }) {
  const reduced = useReducedMotion();

  return (
    <ol className="border-l border-black/[0.12]">
      {items.map((item, i) => (
        <li key={item} className="group relative pl-8">
          <motion.span
            aria-hidden="true"
            className="absolute -left-[5px] top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 bg-faint transition-colors duration-300 group-hover:bg-accent"
            initial={reduced ? false : { scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: DURATION.fast, delay: i * 0.09 }}
          />
          {i < items.length - 1 && (
            <motion.span
              aria-hidden="true"
              className="absolute left-[-1px] top-full h-4 w-px origin-top bg-black/[0.16]"
              initial={reduced ? false : { scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={viewportOnce}
              transition={{ duration: DURATION.fast, delay: i * 0.09 + 0.05 }}
            />
          )}
          <motion.span
            className="block cursor-default border-b border-black/[0.08] py-4 font-mono text-sm uppercase tracking-[0.14em] text-bone transition-all duration-300 group-hover:translate-x-2 group-hover:border-accent/40 group-hover:text-accent"
            initial={reduced ? false : { opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{
              duration: DURATION.standard,
              ease: EASE.out,
              delay: i * 0.09,
            }}
          >
            <span className="mr-3 font-mono text-[9px] tracking-[0.2em] text-faint opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              L{i + 1}
            </span>
            {item}
          </motion.span>
        </li>
      ))}
    </ol>
  );
}
