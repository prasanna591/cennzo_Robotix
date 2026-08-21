"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export function ScaleMedia({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const innerScale = useTransform(scrollYProgress, [0, 1], [1.14, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [36, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.45], [0.4, 1]);

  return (
    <div ref={ref} className={className}>
      <motion.div
        style={
          reduced
            ? undefined
            : { scale, opacity, transformOrigin: "center center" }
        }
        className="will-change-transform"
      >
        <motion.div
          style={reduced ? undefined : { scale: innerScale }}
          className="will-change-transform"
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}
