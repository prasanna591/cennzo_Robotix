"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { MaskLines } from "@/components/motion/mask-lines";
import { useReady } from "@/hooks/use-ready";
import { DURATION, EASE } from "@/lib/animations";

export function PageHero({
  eyebrow,
  lines,
  intro,
  meta,
  children,
}: {
  eyebrow: string;
  lines: string[];
  intro?: ReactNode;
  meta?: string;
  children?: ReactNode;
}) {
  const reduced = useReducedMotion();
  const ready = useReady();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const enter = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
          transition: { duration: DURATION.standard, ease: EASE.out, delay },
        };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-b border-black/[0.08]"
    >
      <motion.div
        aria-hidden="true"
        style={reduced ? undefined : { y: bgY }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_75%_20%,rgba(22,22,26,0.05),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_35%_at_10%_90%,rgba(37,99,235,0.08),transparent_70%)]" />
        <div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(22,22,26,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(22,22,26,0.04) 1px, transparent 1px)",
            backgroundSize: "88px 88px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 30%, black 30%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 30%, black 30%, transparent 75%)",
          }}
        />
      </motion.div>

      <motion.div
        style={reduced ? undefined : { y: contentY, opacity: contentOpacity }}
        className="relative mx-auto w-full max-w-[1440px] px-6 pb-16 pt-[168px] md:px-10 md:pb-20 md:pt-[200px]"
      >
        <motion.p
          {...enter(0.05)}
          className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-mist"
        >
          <span aria-hidden="true" className="h-px w-8 bg-accent" />
          {eyebrow}
        </motion.p>

        <h1 className="mt-8 max-w-5xl text-display font-semibold leading-[1.04] tracking-[-0.02em] text-bone md:text-hero">
          <MaskLines
            key={ready ? "ready" : "hold"}
            lines={lines}
            delay={0.15}
            animateOnLoad
            lineClassName="text-bone"
          />
        </h1>

        {intro && (
          <motion.div
            {...enter(0.4)}
            className="mt-8 max-w-2xl text-subhead leading-relaxed text-mist"
          >
            {intro}
          </motion.div>
        )}

        {children && (
          <motion.div {...enter(0.55)} className="mt-10">
            {children}
          </motion.div>
        )}

        {meta && (
          <motion.p
            {...enter(0.65)}
            className="mt-12 font-mono text-[10px] uppercase tracking-[0.3em] text-faint"
          >
            {meta}
          </motion.p>
        )}

        <motion.span
          aria-hidden="true"
          initial={reduced ? false : { scaleX: 0 }}
          animate={ready ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{
            duration: DURATION.cinematic,
            ease: EASE.mechanical,
            delay: 0.6,
          }}
          className="mt-14 block h-px w-full origin-left bg-black/[0.1]"
        />
      </motion.div>
    </section>
  );
}
