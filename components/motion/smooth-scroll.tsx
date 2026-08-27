"use client";

import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.documentElement.classList.add("smooth-scroll");
    return () => document.documentElement.classList.remove("smooth-scroll");
  }, []);

  return null;
}
