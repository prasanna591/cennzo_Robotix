"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { DURATION, EASE, fadeUp } from "@/lib/animations";

const CONFIGS = {
  earth: {
    name: "Earth",
    focus:
      "Industrial, infrastructure and disaster environments built around human-scale spaces.",
    modules: [
      "Inspection payloads",
      "Manipulation tools",
      "Navigation payloads",
      "Environmental sensing",
    ],
    status: "Primary development",
  },
  water: {
    name: "Water",
    focus:
      "Marine and offshore assets requiring protected architectures and remote operation.",
    modules: [
      "Environmental sensing",
      "Communication modules",
      "Inspection payloads",
      "Mission-specific protective systems",
    ],
    status: "Engineering roadmap",
  },
  fire: {
    name: "Fire",
    focus:
      "High-temperature zones where thermal protection and cooling define the configuration.",
    modules: [
      "Thermal sensing",
      "Mission-specific protective systems",
      "Specialized end effectors",
      "Environmental sensing",
    ],
    status: "Engineering roadmap",
  },
  air: {
    name: "Air",
    focus:
      "Elevated and exposed structures reached through intelligent mobility and comms.",
    modules: [
      "Navigation payloads",
      "Communication modules",
      "Thermal sensing",
      "Inspection payloads",
    ],
    status: "Research",
  },
  space: {
    name: "Space",
    focus:
      "Vacuum, radiation and off-world operations on the long-term research frontier.",
    modules: [
      "Communication modules",
      "Mission-specific protective systems",
      "Specialized end effectors",
      "Navigation payloads",
    ],
    status: "Long-term vision",
  },
} as const;

type EnvId = keyof typeof CONFIGS;

const ENVS = Object.keys(CONFIGS) as EnvId[];

export function MissionConfigurator() {
  const [env, setEnv] = useState<EnvId>("earth");
  const reduced = useReducedMotion();
  const cfg = CONFIGS[env];

  return (
    <div className="mt-16 overflow-hidden rounded-2xl border border-black/[0.1] bg-graphite shadow-soft">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/[0.1] px-6 py-4 md:px-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-mist">
          Mission Configurator
        </p>
        <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-faint">
          <motion.span
            className="h-1 w-1 rounded-full bg-teal"
            {...(reduced
              ? {}
              : {
                  animate: { opacity: [1, 0.3, 1] },
                  transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                })}
          />
          Interactive
        </span>
      </div>

      <div className="flex flex-wrap gap-2 border-b border-black/[0.1] px-6 py-5 md:px-8">
        {ENVS.map((id) => {
          const selected = id === env;
          return (
            <button
              key={id}
              type="button"
              onClick={() => setEnv(id)}
              aria-pressed={selected}
              className={`cursor-pointer border px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors duration-300 ${
                selected
                  ? "border-accent text-accent"
                  : "border-steel text-mist hover:border-faint hover:text-bone"
              }`}
            >
              {CONFIGS[id].name}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={env}
          initial={reduced ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: DURATION.standard, ease: EASE.out }}
          className="grid gap-8 px-6 py-8 md:grid-cols-[1fr_1.3fr] md:gap-12 md:px-8 md:py-10"
        >
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
              {cfg.status}
            </p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-bone">
              {cfg.name}
            </h3>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-mist">
              {cfg.focus}
            </p>
          </div>

          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-faint">
              Recommended Mission Modules
            </p>
            <motion.div
              initial={reduced ? false : "hidden"}
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
              className="mt-4 grid gap-2 sm:grid-cols-2"
            >
              {cfg.modules.map((module) => (
                <motion.span
                  key={module}
                  variants={fadeUp}
                  className="flex items-center gap-3 rounded-xl border border-black/[0.1] bg-void/60 px-4 py-3 text-sm text-bone"
                >
                  <span aria-hidden="true" className="h-1 w-1 shrink-0 rotate-45 bg-accent" />
                  {module}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <p className="border-t border-black/[0.1] px-6 py-4 font-mono text-[9px] leading-relaxed tracking-[0.12em] text-faint md:px-8">
        ILLUSTRATIVE CONFIGURATION ONLY — FINAL MISSION SETUPS DEPEND ON
        REQUIREMENTS, VALIDATION AND CERTIFICATION.
      </p>
    </div>
  );
}
