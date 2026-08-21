"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";

const NODES = [0.14, 0.3, 0.46, 0.62, 0.78, 0.92];

function SpineNode({
  progress,
  at,
}: {
  progress: MotionValue<number>;
  at: number;
}) {
  const opacity = useTransform(progress, [at - 0.05, at], [0.15, 1]);
  const scale = useTransform(progress, [at - 0.05, at], [0.5, 1]);
  return (
    <motion.span
      aria-hidden="true"
      style={{ opacity, scale, top: `${at * 100}%` }}
      className="absolute -left-[4px] h-[9px] w-[9px] rotate-45 rounded-[2px] border border-accent/70 bg-void"
    />
  );
}

export function CircuitSpine() {
  const { scrollYProgress } = useScroll();
  const fill = useSpring(scrollYProgress, { stiffness: 90, damping: 26 });
  const headTop = useTransform(fill, (v) => `${v * 100}%`);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-8 top-0 z-30 hidden h-screen w-px bg-black/[0.07] xl:block"
    >
      <motion.div
        style={{ scaleY: fill }}
        className="h-full w-full origin-top bg-gradient-to-b from-accent via-violet-500 to-teal"
      />
      <motion.div
        style={{ top: headTop }}
        className="absolute -left-[3.5px] h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(21,94,239,0.7)]"
      />
      {NODES.map((n) => (
        <SpineNode key={n} progress={fill} at={n} />
      ))}
    </div>
  );
}
