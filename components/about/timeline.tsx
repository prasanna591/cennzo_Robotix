"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { SectionHeading } from "@/components/sections/section-heading";
import { viewportOnce } from "@/lib/animations";

const PHASES = [
  {
    phase: "Phase 01",
    title: "Foundation",
    body: "Architecture definition, reference design and the engineering doctrine behind WAFEE.",
    status: "Current focus",
    active: true,
  },
  {
    phase: "Phase 02",
    title: "Development",
    body: "Subsystem integration — actuation, perception, compute and power — built and bench-validated as one machine.",
    status: "Next",
    active: false,
  },
  {
    phase: "Phase 03",
    title: "Validation",
    body: "Controlled laboratory testing, subsystem qualification and full-system verification against mission requirements.",
    status: "Planned",
    active: false,
  },
  {
    phase: "Phase 04",
    title: "Deployment",
    body: "Progressive environmental qualification — extending WAFEE across land, sea, fire, air and space domains.",
    status: "Long-term",
    active: false,
  },
];

export function Timeline() {
  const reduced = useReducedMotion();
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 0.8", "end 0.6"],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 90, damping: 26 });

  return (
    <section className="relative border-b border-black/[0.08]">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
      />
      <div className="mx-auto grid w-full max-w-[1440px] gap-16 px-6 py-section md:px-10 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="The Road Ahead"
            lines={["From Blueprint", "To *Breach.*"]}
            body={
              <p>
                Every frontier starts as a drawing. Ours is a phased engineering
                campaign — each stage unlocking the next, each claim earned
                before it is made.
              </p>
            }
          />
        </div>

        <div ref={listRef} className="relative pl-8 md:pl-12">
          <div aria-hidden="true" className="absolute bottom-2 left-[7px] top-2 w-px bg-black/[0.08] md:left-[11px]" />
          <motion.div
            aria-hidden="true"
            style={reduced ? { scaleY: 1 } : { scaleY: fill }}
            className="absolute bottom-2 left-[7px] top-2 w-[2px] origin-top bg-gradient-to-b from-accent to-teal md:left-[11px]"
          />

          <div className="space-y-14">
            {PHASES.map((phase, i) => (
              <motion.div
                key={phase.phase}
                initial={reduced ? false : { opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-15% 0px" }}
                transition={{ duration: 0.8, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <span
                  aria-hidden="true"
                  className={`absolute -left-8 top-2 h-[15px] w-[15px] rounded-full border-2 md:-left-12 ${
                    phase.active
                      ? "border-accent bg-accent shadow-[0_0_14px_rgba(21,94,239,0.5)]"
                      : "border-black/[0.15] bg-graphite"
                  }`}
                />
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-faint">
                    {phase.phase}
                  </p>
                  <span
                    className={`rounded-full border px-3 py-1 font-mono text-[9px] uppercase tracking-[0.18em] ${
                      phase.active
                        ? "border-accent/30 bg-accent/[0.06] text-accent"
                        : "border-black/[0.1] text-faint"
                    }`}
                  >
                    {phase.status}
                  </span>
                </div>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-bone md:text-3xl">
                  {phase.title}
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-mist md:text-base">
                  {phase.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
