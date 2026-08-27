"use client";

import { useReducedMotion } from "framer-motion";

export function useScrollToElement() {
  const reduced = useReducedMotion();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
  };

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  };

  return { scrollTo, toTop };
}
