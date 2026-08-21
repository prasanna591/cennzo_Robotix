"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MaskLines } from "@/components/motion/mask-lines";
import { Reveal } from "@/components/motion/reveal";
import { DURATION, EASE, drawStroke, viewportOnce } from "@/lib/animations";
import { ENVIRONMENTS } from "@/lib/content/site";

function EnvironmentGlyph({ id }: { id: string }) {
  const common = "stroke-mist/40";
  switch (id) {
    case "earth":
      return (
        <svg viewBox="0 0 400 400" fill="none" className="h-full w-full" aria-hidden="true">
          {[60, 100, 140, 180, 220].map((r, i) => (
            <motion.ellipse
              key={r}
              cx="200"
              cy="230"
              rx={r}
              ry={r * 0.42}
              className={common}
              strokeWidth="1"
              variants={drawStroke}
              custom={i}
            />
          ))}
          <motion.path
            d="M80 260 Q 160 210 240 250 T 360 235"
            className="stroke-accent"
            strokeWidth="1.5"
            variants={drawStroke}
            custom={2}
          />
        </svg>
      );
    case "water":
      return (
        <svg viewBox="0 0 400 400" fill="none" className="h-full w-full" aria-hidden="true">
          {Array.from({ length: 7 }).map((_, i) => (
            <motion.path
              key={i}
              d={`M20 ${120 + i * 30} q 45 -18 90 0 t 90 0 t 90 0 t 90 0`}
              className={i === 3 ? "stroke-accent" : common}
              strokeWidth={i === 3 ? "1.5" : "1"}
              variants={drawStroke}
              custom={i}
            />
          ))}
        </svg>
      );
    case "fire":
      return (
        <svg viewBox="0 0 400 400" fill="none" className="h-full w-full" aria-hidden="true">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.rect
              key={i}
              x={70 + i * 34}
              y={340 - (i % 4) * 55 - 40}
              width="14"
              height={(i % 4) * 55 + 40}
              className={i === 3 || i === 4 ? "fill-accent/25 stroke-accent" : "fill-black/[0.04] stroke-mist/40"}
              strokeWidth="1"
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ duration: DURATION.standard, ease: EASE.mechanical, delay: i * 0.06 }}
              style={{ transformOrigin: "bottom" }}
            />
          ))}
        </svg>
      );
    case "air":
      return (
        <svg viewBox="0 0 400 400" fill="none" className="h-full w-full" aria-hidden="true">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.path
              key={i}
              d={`M${30 + i * 12} ${90 + i * 42} C ${140 + i * 10} ${50 + i * 42}, ${240 - i * 8} ${150 + i * 38}, ${380 - i * 14} ${95 + i * 40}`}
              className={i === 2 ? "stroke-accent" : common}
              strokeWidth={i === 2 ? "1.5" : "1"}
              variants={drawStroke}
              custom={i}
            />
          ))}
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 400 400" fill="none" className="h-full w-full" aria-hidden="true">
          {[70, 110, 150].map((r, i) => (
            <motion.circle
              key={r}
              cx="200"
              cy="200"
              r={r}
              className={i === 1 ? "stroke-accent" : common}
              strokeWidth="1"
              variants={drawStroke}
              custom={i}
            />
          ))}
          <motion.circle cx="200" cy="200" r="4" className="fill-bone" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} />
          <motion.circle cx="310" cy="200" r="3" className="fill-accent" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} />
          {Array.from({ length: 14 }).map((_, i) => (
            <motion.circle
              key={`s-${i}`}
              cx={30 + ((i * 71) % 350)}
              cy={35 + ((i * 113) % 330)}
              r="1"
              className="fill-bone/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.04 }}
            />
          ))}
        </svg>
      );
  }
}

export function EnvironmentsSection() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const env = ENVIRONMENTS[active];

  const onTablistKeyDown = (e: React.KeyboardEvent) => {
    const n = ENVIRONMENTS.length;
    let next: number | null = null;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (active + 1) % n;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (active - 1 + n) % n;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = n - 1;
    if (next !== null) {
      e.preventDefault();
      setActive(next);
      tabRefs.current[next]?.focus();
    }
  };

  return (
    <section id="environments" className="relative overflow-hidden border-b border-black/[0.08]">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-section md:px-10">
        <Reveal mode="fadeIn">
          <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-mist">
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
            The Five Environments
          </p>
        </Reveal>

                  <h2 className="mt-8 text-display font-semibold tracking-[-0.02em] text-bone">
          <MaskLines lines={["One Platform.", "Multiple Worlds."]} lineClassName="text-bone" />
        </h2>

        <div className="mt-16 grid gap-12 lg:grid-cols-[380px_1fr] lg:gap-20">
          <div
            role="tablist"
            aria-label="Mission environments"
            onKeyDown={onTablistKeyDown}
            className="flex flex-col"
          >
            {ENVIRONMENTS.map((item, i) => {
              const selected = i === active;
              return (
                <button
                  key={item.id}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  role="tab"
                  id={`env-tab-${item.id}`}
                  aria-selected={selected}
                  aria-controls={`env-panel-${item.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  className={`group relative cursor-pointer border-b border-black/[0.1] py-5 text-left transition-colors duration-300 ${
                    selected ? "" : "hover:border-steel"
                  }`}
                >
                  {selected && (
                    <motion.span
                      layoutId="env-indicator"
                      className="absolute inset-y-0 left-0 w-[2px] bg-accent"
                      transition={{ duration: DURATION.fast, ease: EASE.out }}
                    />
                  )}
                  <span className="flex items-baseline justify-between gap-4 pl-6">
                    <span className="flex items-baseline gap-4">
                      <span className="font-mono text-[10px] tracking-[0.2em] text-faint">
                        {item.index}
                      </span>
                      <span
                        className={`text-xl font-semibold uppercase tracking-tight transition-colors duration-300 md:text-2xl ${
                          selected ? "text-bone" : "text-faint group-hover:text-mist"
                        }`}
                      >
                        {item.name}
                      </span>
                    </span>
                    <span className="hidden font-mono text-[9px] uppercase tracking-[0.18em] text-faint sm:block">
                      {item.status}
                    </span>
                  </span>
                </button>
              );
            })}

            <p className="mt-8 max-w-sm font-mono text-[10px] leading-relaxed tracking-[0.08em] text-faint">
              WAFEE&rsquo;s multi-environment vision represents a long-term
              engineering roadmap. Individual environmental capabilities depend
              on mission-specific configuration, validation and certification.
            </p>
          </div>

          <div
            role="tabpanel"
            id={`env-panel-${env.id}`}
            aria-labelledby={`env-tab-${env.id}`}
              className="relative min-h-[420px] overflow-hidden rounded-2xl border border-steel bg-graphite shadow-soft md:min-h-[480px]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={env.id}
                initial={reduced ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: DURATION.fast }}
                className="absolute inset-0"
              >
                <div className="absolute inset-0 flex items-center justify-center p-10 opacity-70 md:p-16">
                  <EnvironmentGlyph id={env.id} />
                </div>
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-graphite via-graphite/70 to-transparent" />

                <motion.div
                  key={`${env.id}-content`}
                  initial={reduced ? false : { opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: DURATION.standard, ease: EASE.out, delay: 0.1 }}
                  className="absolute inset-x-0 bottom-0 p-8 md:p-12"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                    {env.index} / 05 — {env.domain}
                  </p>
                    <h3 className="mt-4 text-headline font-semibold tracking-[-0.01em] text-bone">
                    {env.name}
                  </h3>
                  <p className="mt-4 max-w-lg text-body leading-relaxed text-mist">
                    {env.description}
                  </p>
                </motion.div>

                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-8 top-8 select-none font-mono text-[7rem] font-semibold leading-none text-black/[0.05] md:text-[10rem]"
                >
                  {env.index}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
