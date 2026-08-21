"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

function parseWord(word: string): { text: string; tone: string } {
  if (word.length > 2 && word.startsWith("*") && word.endsWith("*")) {
    return { text: word.slice(1, -1), tone: "text-accent" };
  }
  if (word.length > 2 && word.startsWith("~") && word.endsWith("~")) {
    return { text: word.slice(1, -1), tone: "text-teal" };
  }
  return { text: word, tone: "" };
}

function FillWord({
  progress,
  start,
  end,
  reduced,
  tone,
  children,
}: {
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
  reduced: boolean | null;
  tone: string;
  children: ReactNode;
}) {
  const opacity = useTransform(progress, [start, end], [0.14, 1]);
  const y = useTransform(progress, [start, end], [8, 0]);

  if (reduced) {
    return <span className={`inline-block ${tone}`}>{children}&nbsp;</span>;
  }
  return (
    <motion.span
      style={{ opacity, y }}
      className={`inline-block will-change-transform ${tone}`}
    >
      {children}&nbsp;
    </motion.span>
  );
}

export function ScrollFillText({
  lines,
  className = "",
}: {
  lines: string[];
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.92", "end 0.42"],
  });

  const total = lines.reduce((n, line) => n + line.split(" ").length, 0);
  let wordIndex = 0;

  return (
    <span ref={ref} className={`block ${className}`}>
      {lines.map((line, li) => (
        <span key={`${line}-${li}`} className="block">
          {line.split(" ").map((raw) => {
            const i = wordIndex++;
            const { text, tone } = parseWord(raw);
            const start = (i / total) * 0.82;
            const end = Math.min(1, ((i + 1.6) / total) * 0.82 + 0.08);
            return (
              <FillWord
                key={`${raw}-${i}`}
                progress={scrollYProgress}
                start={start}
                end={end}
                reduced={reduced}
                tone={tone}
              >
                {text}
              </FillWord>
            );
          })}
        </span>
      ))}
    </span>
  );
}
