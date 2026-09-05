"use client";

import type { ReactNode } from "react";
import { MaskLines } from "@/components/motion/mask-lines";
import { Reveal } from "@/components/motion/reveal";
import { DecodeText } from "@/components/motion/decode-text";
import {
  SectionEyebrow,
  SectionRail,
} from "@/components/sections/section-eyebrow";

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
        <SectionEyebrow centered={centered}>
          <DecodeText text={eyebrow} />
        </SectionEyebrow>
      </Reveal>
      <h2 className="mt-5 text-display font-semibold tracking-[-0.02em] text-bone">
        <MaskLines lines={lines} lineClassName="text-bone" delay={0.08} />
      </h2>
      <SectionRail centered={centered} />
      {body && (
        <Reveal delay={0.15}>
          <div
            className={`mt-4 text-body leading-relaxed text-mist ${
              centered ? "mx-auto max-w-2xl" : "max-w-2xl"
            }`}
          >
            {body}
          </div>
        </Reveal>
      )}
    </div>
  );
}