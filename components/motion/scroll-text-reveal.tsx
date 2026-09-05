"use client";

import { motion, useReducedMotion } from "framer-motion";
import { maskRise, staggerContainer, viewportOnce } from "@/lib/animations";

type ScrollTextRevealProps = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
};

export function ScrollTextReveal({
  text,
  className = "",
  delay = 0,
  stagger = 0.08,
}: ScrollTextRevealProps) {
  const reduced = useReducedMotion();
  const words = text.split(" ");

  if (reduced) {
    return <span className={`inline-block ${className}`}>{text}</span>;
  }

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={staggerContainer(stagger, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-bottom"
        >
          <motion.span
            className="inline-block will-change-transform"
            aria-hidden="true"
            variants={maskRise}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </motion.span>
  );
}