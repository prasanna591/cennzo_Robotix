"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import { DURATION } from "@/lib/animations";

export function BackToTop() {
  const [show, setShow] = useState(false);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll, { passive: true } as never);
  }, []);

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          onClick={toTop}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 12 }}
          transition={{ duration: DURATION.fast }}
          className="fixed bottom-8 right-8 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-steel bg-void/85 backdrop-blur-md transition-colors duration-300 hover:border-accent"
        >
          <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="absolute inset-0 h-full w-full -rotate-90">
            <circle cx="24" cy="24" r="22" stroke="rgba(22,22,26,0.12)" strokeWidth="1.5" />
            <motion.circle
              cx="24"
              cy="24"
              r="22"
              stroke="#2563eb"
              strokeWidth="1.5"
              strokeLinecap="round"
              style={{ pathLength }}
            />
          </svg>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M8 13V3M3.5 7.5 8 3l4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" className="text-bone" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
