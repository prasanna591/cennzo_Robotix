"use client";

import { motion, useReducedMotion } from "framer-motion";
import { DURATION, EASE, viewportOnce } from "@/lib/animations";

export function FlowStack({ items }: { items: string[] }) {
  const reduced = useReducedMotion();

  return (
    <ol className="border-l border-black/[0.12]">
      {items.map((item, i) => (
        <li key={item} className="relative pl-8">
          <motion.span
            aria-hidden="true"
            className="absolute -left-[5px] top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 bg-faint"
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
            className="block border-b border-black/[0.08] py-4 font-mono text-sm uppercase tracking-[0.14em] text-bone"
            initial={reduced ? false : { opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{
              duration: DURATION.standard,
              ease: EASE.out,
              delay: i * 0.09,
            }}
          >
            {item}
          </motion.span>
        </li>
      ))}
    </ol>
  );
}
