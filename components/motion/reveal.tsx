"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import {
  fadeUp,
  fadeIn,
  scaleReveal,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

type RevealMode = "fadeUp" | "fadeIn" | "scale";

const MODES: Record<RevealMode, Variants> = {
  fadeUp,
  fadeIn,
  scale: scaleReveal,
};

export function Reveal({
  children,
  mode = "fadeUp",
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  mode?: RevealMode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "span" | "figure" | "li";
}) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as];

  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      variants={MODES[mode]}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerGroup({
  children,
  stagger = 0.08,
  delayChildren = 0,
  className,
}: {
  children: ReactNode;
  stagger?: number;
  delayChildren?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={staggerContainer(stagger, delayChildren)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}
