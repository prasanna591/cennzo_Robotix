"use client";

import { motion, useReducedMotion } from "framer-motion";
import { DURATION, EASE } from "@/lib/animations";

function parseWord(word: string): { text: string; tone: string } {
  if (word.length > 2 && word.startsWith("*") && word.endsWith("*")) {
    return { text: word.slice(1, -1), tone: "text-accent" };
  }
  if (word.length > 2 && word.startsWith("~") && word.endsWith("~")) {
    return { text: word.slice(1, -1), tone: "text-teal" };
  }
  return { text: word, tone: "" };
}

export function BlurLines({
  lines,
  className = "",
  lineClassName = "",
  delay = 0,
  stagger = 0.016,
  start = true,
}: {
  lines: string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
  start?: boolean;
}) {
  const reduced = useReducedMotion();
  let charIndex = 0;

  return (
    <span className={`block ${className}`}>
      {lines.map((line, li) => (
        <span key={`${line}-${li}`} className={`block ${lineClassName}`}>
          {line.split(" ").map((rawWord) => {
            const { text, tone } = parseWord(rawWord);
            return (
              <span key={`${rawWord}-${li}`} className="inline-block whitespace-nowrap">
                {text.split("").map((ch) => {
                  const i = charIndex++;
                  const d = delay + li * 0.14 + i * stagger;
                  return reduced ? (
                    <span key={i} className={`inline-block ${tone}`}>
                      {ch}
                    </span>
                  ) : (
                    <motion.span
                      key={i}
                      className={`inline-block will-change-[filter,transform] ${tone}`}
                      initial={{ opacity: 0, y: "0.28em", filter: "blur(10px)" }}
                      animate={
                        start
                          ? { opacity: 1, y: "0em", filter: "blur(0px)" }
                          : { opacity: 0, y: "0.28em", filter: "blur(10px)" }
                      }
                      transition={{ duration: DURATION.standard, ease: EASE.out, delay: d }}
                    >
                      {ch}
                    </motion.span>
                  );
                })}
                <span className="inline-block">&nbsp;</span>
              </span>
            );
          })}
        </span>
      ))}
    </span>
  );
}
