"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { DURATION, EASE } from "@/lib/animations";

const STORAGE_KEY = "cr_preloaded";

const BOOT_KEYS = ["line1", "line2", "line3", "line4", "line5"] as const;

const PROGRESS_DURATION = 1400;

// Ease-out cubic: progress follows a decelerating curve to 100.
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function Preloader() {
  const reduced = useReducedMotion();
  const t = useTranslations("preloader");
  const [visible, setVisible] = useState(true);
  const [ready, setReady] = useState(false);
  const [progress, setProgress] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);
  const started = useRef(false);

  const release = useCallback(() => {
    setReady(true);
    document.documentElement.dataset.ready = "true";
    window.dispatchEvent(new Event("cennzo:ready"));
  }, []);

  useEffect(() => {
    // useReducedMotion() can return null before the reduced-motion preference
    // settles on the client. Wait for a definitive boolean before deciding, so
    // we don't start-and-then-cancel the ticker on a null -> false transition.
    if (reduced === null) return;

    if (started.current) return;
    started.current = true;

    if (reduced === true || sessionStorage.getItem(STORAGE_KEY)) {
      setVisible(false);
      release();
      return;
    }

    sessionStorage.setItem(STORAGE_KEY, "1");

    // Self-contained rAF progress ticker. Avoids depending on the animation
    // driver so the preloader is guaranteed to advance and release the UI.
    let raf = 0;
    let released = false;
    const lineTimer = window.setInterval(
      () => setLineIndex((i) => (i + 1) % BOOT_KEYS.length),
      240
    );
    const releaseOnce = () => {
      if (released) return;
      released = true;
      window.clearInterval(lineTimer);
      release();
      setVisible(false);
    };
    // Absolute failsafe: never trap the UI, even if rAF stalls for any reason.
    const failsafe = window.setTimeout(releaseOnce, 4000);
    const startTime = performance.now();
    const tick = (now: number) => {
      const tElapsed = Math.min((now - startTime) / PROGRESS_DURATION, 1);
      setProgress(Math.round(easeOutCubic(tElapsed) * 100));
      if (tElapsed < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        window.clearTimeout(failsafe);
        window.setTimeout(releaseOnce, 250);
      }
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.clearInterval(lineTimer);
      window.clearTimeout(failsafe);
    };
  }, [reduced, release]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          id="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: DURATION.standard + 0.15, ease: EASE.mechanical }}
          className={`fixed inset-0 z-[95] flex flex-col items-center justify-center bg-void ${
            ready ? "pointer-events-none" : ""
          }`}
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
