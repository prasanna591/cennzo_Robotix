"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

export function ScrollScale({
  children,
  className = "",
  scaleFrom = 1.12,
}: {
  children: ReactNode;
  className?: string;
  scaleFrom?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [scaleFrom, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [18, -18]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={reduced ? undefined : { scale, y }}
    >
      {children}
    </motion.div>
  );
}