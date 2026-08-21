"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

const GLYPHS = "!<>-_\\/[]{}=+*^?#01";

export function DecodeText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (!inView || reduced) return;
    let frame = 0;
    const total = Math.max(14, Math.round(text.length * 0.85));
    const id = setInterval(() => {
      frame += 1;
      const reveal = Math.floor((frame / total) * text.length);
      if (reveal >= text.length) {
        setDisplay(text);
        clearInterval(id);
        return;
      }
      let next = text.slice(0, reveal);
      for (let i = reveal; i < text.length; i++) {
        const ch = text[i];
        next += ch === " " ? " " : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      }
      setDisplay(next);
    }, 30);
    return () => clearInterval(id);
  }, [inView, reduced, text]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
