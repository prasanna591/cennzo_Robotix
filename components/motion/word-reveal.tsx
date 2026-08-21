"use client";

import { motion, useReducedMotion } from "framer-motion";
import { DURATION, EASE, viewportOnce } from "@/lib/animations";

export function WordReveal({
  lines,
  className = "",
  wordClassName = "",
  delay = 0,
  stagger = 0.045,
}: {
  lines: string[];
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
}) {
  const reduced = useReducedMotion();
  let wordIndex = 0;

  return (
    <span className={`block ${className}`}>
      {lines.map((line, li) => (
        <span key={`${line}-${li}`} className="block">
          {line.split(" ").map((word) => {
            const i = wordIndex++;
            return (
              <span
                key={`${word}-${i}`}
                className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom"
              >
                {reduced ? (
                  <span className={`inline-block ${wordClassName}`}>{word}</span>
                ) : (
                  <motion.span
                    className={`inline-block will-change-transform ${wordClassName}`}
                    initial={{ y: "112%" }}
                    whileInView={{ y: "0%" }}
                    viewport={{ once: true, margin: "-8% 0px" }}
                    transition={{
                      duration: DURATION.cinematic * 0.75,
                      ease: EASE.out,
                      delay: delay + i * stagger,
                    }}
                  >
                    {word}
                  </motion.span>
                )}
                <span className="inline-block">&nbsp;</span>
              </span>
            );
          })}
        </span>
      ))}
    </span>
  );
}
