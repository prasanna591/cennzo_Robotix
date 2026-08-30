"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { viewportOnce, DURATION, EASE } from "@/lib/animations";

function RegistrationMarks({ dark = false }: { dark?: boolean }) {
  const c = dark ? "border-white/20" : "border-black/20";
  const base = `absolute h-2.5 w-2.5 ${c}`;
  return (
    <>
      <span aria-hidden="true" className={`${base} left-2.5 top-2.5 border-l border-t`} />
      <span aria-hidden="true" className={`${base} right-2.5 top-2.5 border-r border-t`} />
      <span aria-hidden="true" className={`${base} bottom-2.5 left-2.5 border-b border-l`} />
      <span aria-hidden="true" className={`${base} bottom-2.5 right-2.5 border-b border-r`} />
    </>
  );
}

function ReadinessMeter({
  value,
  dark = false,
}: {
  value: number;
  dark?: boolean;
}) {
  const reduced = useReducedMotion();
  return (
    <div className="pt-5">
      <div className="mb-2 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.22em] text-faint">
        <span>Readiness</span>
        <span className={dark ? "text-teal" : "text-accent"}>
          {Math.round(value * 100)}%
        </span>
      </div>
      <div
        className={`h-1.5 w-full overflow-hidden rounded-full ${
          dark ? "bg-white/15" : "bg-black/[0.08]"
        }`}
      >
        <motion.div
          initial={reduced ? false : { width: "0%" }}
          whileInView={{ width: `${value * 100}%` }}
          viewport={viewportOnce}
          transition={{ duration: 1, ease: EASE.out }}
          className={`h-full rounded-full bg-gradient-to-r from-accent to-teal`}
        />
      </div>
    </div>
  );
}

export function BlueprintPanel({
  id,
  index,
  name,
  intro,
  children,
  note,
  readiness = 1,
  dark = false,
  className = "",
  split = false,
}: {
  id?: string;
  index: string;
  name: string;
  intro: string;
  children?: ReactNode;
  note?: string;
  readiness?: number;
  dark?: boolean;
  className?: string;
  split?: boolean;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.article
      id={id}
      initial={reduced ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: DURATION.standard, ease: EASE.out }}
      className={`group relative flex scroll-mt-32 flex-col overflow-hidden rounded-2xl border p-6 transition-colors duration-500 md:p-8 ${
        dark
          ? "dark-section border-white/10"
          : "border-black/[0.08] bg-graphite shadow-soft hover:border-faint"
      } ${className}`}
    >
      {/* blueprint grid backdrop */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 opacity-[0.5]`}
        style={{
          backgroundImage: `linear-gradient(rgba(22,22,26,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(22,22,26,0.05) 1px, transparent 1px)`,
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 30% 0%, black 20%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 30% 0%, black 20%, transparent 85%)",
        }}
      />

      <RegistrationMarks dark={dark} />

      <span
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent`}
      />

      {/* header */}
      <div className="relative flex items-start justify-between gap-4">
        <span
          className={`font-mono text-5xl font-semibold leading-none tracking-tight md:text-6xl ${
            dark ? "text-white/[0.12]" : "text-black/[0.1]"
          }`}
        >
          {index}
        </span>
        <span
          className={`rounded-full border px-3 py-1 font-mono text-[9px] uppercase tracking-[0.25em] ${
            dark
              ? "border-teal/30 bg-teal/[0.08] text-teal"
              : "border-accent/25 bg-accent/[0.05] text-accent"
          }`}
        >
          SYS·{index}
        </span>
      </div>

      <div className={`relative ${split ? "lg:grid lg:grid-cols-[1fr_1.35fr] lg:gap-10" : ""}`}>
        <div>
          <h2 className="mt-4 text-headline font-semibold tracking-tight text-bone">
            {name}
          </h2>
          <p className="mt-3 max-w-2xl text-body leading-relaxed text-mist">
            {intro}
          </p>
        </div>

        {/* body */}
        <div className={split ? "mt-8 lg:mt-0" : "mt-8"}>
          {children}

          {note && (
            <p
              className={`mt-8 border-l-2 pl-5 text-sm leading-relaxed ${
                dark ? "border-teal/70 text-white/70" : "border-accent/60 text-bone"
              }`}
            >
              <span
                className={`mb-1 block font-mono text-[9px] uppercase tracking-[0.25em] ${
                  dark ? "text-teal/80" : "text-accent"
                }`}
              >
                Note
              </span>
              {note}
            </p>
          )}
        </div>
      </div>

      <ReadinessMeter value={readiness} dark={dark} />
    </motion.article>
  );
}
