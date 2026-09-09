"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { DURATION, EASE } from "@/lib/animations";
import { useNaturalAspect } from "@/hooks/use-natural-aspect";

const RATIOS = {
  "21/9": "aspect-[21/9]",
  "16/9": "aspect-[16/9]",
  "3/2": "aspect-[3/2]",
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
  "4/5": "aspect-[4/5]",
} as const;

export type FrameRatio = keyof typeof RATIOS;

function FrameIcon({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className="text-faint transition-colors duration-500 group-hover:text-mist"
    >
      <rect x="6" y="10" width="36" height="28" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="18" cy="20" r="3.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M6 33l11-9 8 7 7-6 10 8" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

function CornerBrackets() {
  const base = "absolute h-4 w-4 border-black/30 transition-colors duration-500 group-hover:border-accent/80";
  return (
    <>
      <span aria-hidden="true" className={`${base} left-3 top-3 border-l border-t`} />
      <span aria-hidden="true" className={`${base} right-3 top-3 border-r border-t`} />
      <span aria-hidden="true" className={`${base} bottom-3 left-3 border-b border-l`} />
      <span aria-hidden="true" className={`${base} bottom-3 right-3 border-b border-r`} />
    </>
  );
}

export function MediaVisual({
  code,
  label,
  large = false,
  src,
  tag = "Concept",
}: {
  code: string;
  label: string;
  large?: boolean;
  src?: string;
  tag?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <div className="absolute inset-0 select-none">
      {src && (
        <Image
          src={src}
          alt={label}
          fill
          sizes={large ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
          className="object-contain object-center"
        />
      )}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(22,22,26,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(22,22,26,0.06) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse 75% 70% at 50% 50%, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 70% at 50% 50%, black 30%, transparent 80%)",
        }}
      />

      {!reduced && (
        <motion.span
          aria-hidden="true"
          className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
          initial={{ top: "-2%" }}
          animate={{ top: "102%" }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "linear" }}
        />
      )}

      <CornerBrackets />

      {!src && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center">
          <FrameIcon size={large ? 56 : 40} />
          <p
            className={`font-mono uppercase tracking-[0.3em] text-faint ${
              large ? "text-[11px]" : "text-[9px]"
            }`}
          >
            Awaiting Imagery
          </p>
        </div>
      )}

      <div className="absolute left-4 top-4 rounded-sm bg-void/60 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.22em] text-faint backdrop-blur-sm">
        CR·{code}
      </div>
      <div className="absolute right-4 top-4 border border-accent/40 px-2 py-1 font-mono text-[8px] uppercase tracking-[0.22em] text-accent">
        {tag}
      </div>
      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
        <p className="rounded-sm bg-void/60 px-1.5 py-0.5 font-mono text-[10px] uppercase leading-relaxed tracking-[0.22em] text-mist backdrop-blur-sm">
          {label}
        </p>
        <p className="hidden shrink-0 rounded-sm bg-void/60 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.22em] text-faint backdrop-blur-sm sm:block">
          {large ? `${tag} Visualization` : "Expand +"}
        </p>
      </div>
    </div>
  );
}

function Lightbox({
  open,
  onClose,
  code,
  label,
  src,
  tag = "Concept",
  natural,
}: {
  open: boolean;
  onClose: () => void;
  code: string;
  label: string;
  src?: string;
  tag?: string;
  natural?: number | null;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`${
            tag === "Concept" ? "Placeholder preview" : "Preview"
          } — ${label}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: DURATION.fast }}
          className="fixed inset-0 z-[90] flex items-center justify-center p-4 md:p-10"
        >
          <button
            type="button"
            aria-label="Close preview"
            onClick={onClose}
            className="absolute inset-0 cursor-zoom-out bg-void/85 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 8 }}
            transition={{ duration: DURATION.standard, ease: EASE.out }}
            className="relative w-full max-w-5xl rounded-2xl border border-steel bg-graphite p-2 shadow-lift md:p-3"
          >
            <div
              className="relative overflow-hidden rounded-xl border border-black/[0.08] bg-void"
              style={natural ? { aspectRatio: `${natural}` } : undefined}
            >
              <MediaVisual code={code} label={label} large src={src} tag={tag} />
            </div>
            <div className="flex items-center justify-between px-2 pb-1 pt-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-mist">
                {label} —{" "}
                {tag === "Concept"
                  ? "Concept visualization, not production imagery"
                  : "Reference imagery"}
              </p>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                className="cursor-pointer border border-steel px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-bone transition-[border-color,color,transform] duration-300 hover:border-accent hover:text-accent active:translate-y-px"
              >
                [ Close ]
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function MediaFrame({
  code,
  label,
  ratio = "16/9",
  className = "",
  src,
  tag = "Concept",
}: {
  code: string;
  label: string;
  ratio?: FrameRatio;
  className?: string;
  src?: string;
  tag?: string;
}) {
  const [open, setOpen] = useState(false);
  const natural = useNaturalAspect(src);

  return (
    <figure className={`group ${className}`}>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={src ? `Expand imagery: ${label}` : `View placeholder imagery: ${label}`}
        className="block w-full cursor-pointer text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        <div
          className={`relative w-full overflow-hidden rounded-2xl border border-black/[0.08] bg-graphite shadow-soft transition-all duration-500 group-hover:border-faint group-hover:shadow-lift ${RATIOS[ratio]}`}
          style={natural ? { aspectRatio: `${natural}` } : undefined}
        >
          <MediaVisual code={code} label={label} src={src} tag={tag} />
        </div>
      </button>
      <figcaption className="mt-3 flex items-center justify-between gap-4 font-mono text-[9px] uppercase tracking-[0.22em] text-faint">
        <span>{label}</span>
        <span>
          {src
            ? tag === "Concept"
              ? "Concept visualization"
              : "Reference imagery"
            : "Placeholder — asset pending"}
        </span>
      </figcaption>
      <Lightbox
        open={open}
        onClose={() => setOpen(false)}
        code={code}
        label={label}
        src={src}
        tag={tag}
        natural={natural}
      />
    </figure>
  );
}
