"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { animate } from "framer-motion";
import { useTranslations } from "next-intl";
import { DURATION, EASE } from "@/lib/animations";

const STORAGE_KEY = "cr_preloaded";

const BOOT_KEYS = ["line1", "line2", "line3", "line4", "line5"] as const;

export function Preloader() {
  const reduced = useReducedMotion();
  const t = useTranslations("preloader");
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);
  const started = useRef(false);

  const release = () => {
    document.documentElement.dataset.ready = "true";
    window.dispatchEvent(new Event("cennzo:ready"));
  };

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    if (reduced || sessionStorage.getItem(STORAGE_KEY)) {
      setVisible(false);
      release();
      return;
    }

    sessionStorage.setItem(STORAGE_KEY, "1");
    const lineTimer = window.setInterval(
      () => setLineIndex((i) => (i + 1) % BOOT_KEYS.length),
      240
    );
    const controls = animate(0, 100, {
      duration: 1.4,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => setProgress(Math.round(v)),
      onComplete: () => {
        window.clearInterval(lineTimer);
        window.setTimeout(() => {
          release();
          setVisible(false);
        }, 250);
      },
    });
    return () => {
      controls.stop();
      window.clearInterval(lineTimer);
    };
  }, [reduced]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          id="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: DURATION.standard + 0.15, ease: EASE.mechanical }}
          className="fixed inset-0 z-[95] flex flex-col items-center justify-center bg-void"
          aria-hidden="true"
        >
          <noscript>
            <style>{"#preloader{display:none !important}"}</style>
          </noscript>

          <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col items-center"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-mist">
              {t("initializing")}
              <motion.span
                animate={{ opacity: [1, 0.15, 1] }}
                transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
                className="ml-1 text-accent"
              >
                _
              </motion.span>
            </p>

            <div className="mt-8 h-px w-48 overflow-hidden bg-black/10">
              <div
                className="h-full bg-accent transition-[width] duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>

            <p className="mt-4 font-mono text-[10px] tabular-nums tracking-[0.3em] text-faint">
              {String(progress).padStart(3, "0")}%
            </p>

            <motion.p
              key={lineIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.18 }}
              className="mt-5 h-4 font-mono text-[9px] uppercase tracking-[0.28em] text-mist"
            >
              {t(BOOT_KEYS[lineIndex])}
              <span className="text-teal"> ··· OK</span>
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
