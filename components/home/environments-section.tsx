"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MaskLines } from "@/components/motion/mask-lines";
import { Reveal } from "@/components/motion/reveal";
import { drawStroke, viewportOnce } from "@/lib/animations";
import { ENVIRONMENTS } from "@/lib/content/site";

const STATUS_STYLE: Record<string, string> = {
  "PRIMARY DEVELOPMENT": "border-accent/30 bg-accent/[0.06] text-accent",
  "ENGINEERING ROADMAP": "border-black/[0.12] bg-black/[0.03] text-mist",
  RESEARCH: "border-teal/30 bg-teal/[0.06] text-teal",
  "LONG-TERM VISION": "border-teal/30 bg-teal/[0.06] text-teal",
};

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
              transition={{ duration: 0.55, ease: [0.65, 0, 0.35, 1], delay: i * 0.06 }}
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
  const reduced = useReducedMotion();

  return (
    <section id="environments" className="relative border-b border-black/[0.08]">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
      />

      <div className="mx-auto w-full max-w-[1440px] px-6 py-section md:px-10">
        <Reveal mode="fadeIn">
          <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-mist">
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
            The Journey — Five Environments
          </p>
        </Reveal>

        <h2 className="mt-8 max-w-3xl text-display font-semibold tracking-[-0.02em] text-bone">
          <MaskLines lines={["One Platform.", "Multiple Worlds."]} lineClassName="text-bone" />
        </h2>

        <p className="mt-6 max-w-xl font-mono text-[10px] uppercase leading-loose tracking-[0.22em] text-faint">
          Scroll to travel the roadmap
          <span className="text-accent"> — Earth to Space.</span>
        </p>

        <div className="mt-16">
          {ENVIRONMENTS.map((env, i) => (
            <div
              key={env.id}
              className="sticky mb-10 last:mb-0"
              style={{ top: `${88 + i * 26}px`, zIndex: i + 1 }}
            >
              <motion.article
                initial={reduced ? false : { opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="relative grid overflow-hidden rounded-3xl border border-black/[0.08] bg-graphite shadow-lift lg:min-h-[440px] lg:grid-cols-2"
              >
                <div className="relative order-2 flex flex-col justify-center p-8 md:p-14 lg:order-1">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute right-6 top-4 select-none font-mono text-[6rem] font-semibold leading-none text-black/[0.04] md:text-[8rem]"
                  >
                    {env.index}
                  </span>
                  <span
                    className={`inline-flex w-fit items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-[9px] uppercase tracking-[0.2em] ${
                      STATUS_STYLE[env.status] ?? STATUS_STYLE["ENGINEERING ROADMAP"]
                    }`}
                  >
                    <span aria-hidden="true" className="h-1 w-1 rounded-full bg-current" />
                    {env.status}
                  </span>
                  <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.25em] text-faint">
                    {env.index} / 05 — {env.domain}
                  </p>
                  <h3 className="mt-4 text-4xl font-semibold tracking-tight text-bone md:text-5xl">
                    {env.name}
                  </h3>
                  <p className="mt-5 max-w-md text-body leading-relaxed text-mist">
                    {env.description}
                  </p>
                  <span
                    aria-hidden="true"
                    className="mt-8 h-px w-24 origin-left bg-gradient-to-r from-accent to-teal"
                  />
                </div>

                <div className="relative order-1 min-h-[280px] overflow-hidden bg-charcoal/50 md:min-h-[360px] lg:order-2 lg:min-h-[440px]">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-15% 0px" }}
                    className="absolute inset-0 flex items-center justify-center p-10 opacity-75 md:p-16"
                  >
                    <EnvironmentGlyph id={env.id} />
                  </motion.div>
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-graphite to-transparent lg:hidden" />
                </div>
              </motion.article>
            </div>
          ))}
        </div>

        <Reveal mode="fadeIn">
          <p className="mx-auto mt-16 max-w-2xl text-center font-mono text-[10px] leading-relaxed tracking-[0.08em] text-faint">
            WAFEE&rsquo;s multi-environment vision represents a long-term
            engineering roadmap. Individual environmental capabilities depend on
            mission-specific configuration, validation and certification.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
