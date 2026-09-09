"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { lineDraw, viewportOnce } from "@/lib/animations";

export function SectionEyebrow({
  children,
  centered = false,
  className = "",
}: {
  children: ReactNode;
  centered?: boolean;
  className?: string;
}) {
  return (
    <p
      className={`relative flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] ${
        centered ? "justify-center" : ""
      } ${className}`}
    >
      <motion.span
        aria-hidden="true"
        variants={lineDraw}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className={`hairline-spectrum relative h-px ${
          centered ? "min-w-16 flex-1" : "w-8"
        } origin-left`}
      />
      <span aria-hidden="true" className="font-normal text-faint">
        [
      </span>
      <span className="text-accent">{children}</span>
      <span aria-hidden="true" className="font-normal text-faint">
        ]
      </span>
      <motion.span
        aria-hidden="true"
        variants={lineDraw}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className={`hairline-spectrum relative h-px ${
          centered ? "min-w-16 flex-1" : "min-w-12 flex-1"
        } origin-right`}
      />
      <span
        aria-hidden="true"
        className="absolute right-0 top-1/2 block h-1 w-1 -translate-y-1/2 rounded-full bg-teal"
      />
    </p>
  );
}

export function SectionRail({
  centered = false,
  className = "",
}: {
  centered?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`relative mt-6 flex h-px w-full max-w-[220px] items-center ${
        centered ? "mx-auto" : ""
      } ${className}`}
    >
      <motion.span
        aria-hidden="true"
        variants={lineDraw}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="hairline-spectrum absolute inset-x-0 top-0 h-px origin-left"
      />
      <span className="relative h-1.5 w-1.5 rounded-[2px] bg-teal shadow-[0_0_10px_rgba(0,168,168,0.55)]" />
      {centered && (
        <span className="relative ml-auto h-1.5 w-1.5 rounded-[2px] bg-teal shadow-[0_0_10px_rgba(0,168,168,0.55)]" />
      )}
    </span>
  );
}