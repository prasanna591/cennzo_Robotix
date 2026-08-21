"use client";

import { motion, useReducedMotion } from "framer-motion";
import { DURATION, EASE } from "@/lib/animations";

export function MaskLines({
  lines,
  className = "",
  lineClassName = "",
  delay = 0,
  animateOnLoad = false,
}: {
  lines: string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  animateOnLoad?: boolean;
}) {
  const reduced = useReducedMotion();

  return (
    <span className={`block ${className}`}>
      {lines.map((line, i) => (
        <span
          key={`${line}-${i}`}
          className="block overflow-hidden pb-[0.1em] -mb-[0.1em]"
        >
          {reduced ? (
            <span className={`block ${lineClassName}`}>{line}</span>
          ) : (
            <motion.span
              className={`block will-change-transform ${lineClassName}`}
              initial={{ y: "112%" }}
              {...(animateOnLoad
                ? { animate: { y: "0%" } }
                : {
                    whileInView: { y: "0%" },
                    viewport: { once: true, margin: "-10% 0px" },
                  })}
              transition={{
                duration: DURATION.cinematic * 0.82,
                ease: EASE.out,
                delay: delay + i * 0.09,
              }}
            >
              {line}
            </motion.span>
          )}
        </span>
      ))}
    </span>
  );
}
