"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { MaskLines } from "@/components/motion/mask-lines";
import { Reveal } from "@/components/motion/reveal";
import { lineDraw, viewportOnce } from "@/lib/animations";

export function SectionHeading({
  eyebrow,
  lines,
  body,
  align = "left",
  className = "",
}: {
  eyebrow: string;
  lines: string[];
  body?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  const centered = align === "center";
  return (
    <div
      className={`${centered ? "mx-auto text-center" : ""} max-w-3xl ${className}`}
    >
      <Reveal mode="fadeIn">
        <p
          className={`flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-mist ${
            centered ? "justify-center" : ""
          }`}
        >
          <motion.span
            aria-hidden="true"
            variants={lineDraw}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="h-px w-8 origin-left bg-accent"
          />
          {eyebrow}
          {centered && (
            <motion.span
              aria-hidden="true"
              variants={lineDraw}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="h-px w-8 origin-left bg-accent"
            />
          )}
        </p>
      </Reveal>
      <h2 className="mt-6 text-display font-semibold tracking-[-0.02em] text-bone">
        <MaskLines lines={lines} lineClassName="text-bone" />
      </h2>
      {body && (
        <Reveal delay={0.15}>
          <div className={`mt-6 text-body leading-relaxed text-mist ${centered ? "mx-auto max-w-2xl" : "max-w-2xl"}`}>
            {body}
          </div>
        </Reveal>
      )}
    </div>
  );
}
