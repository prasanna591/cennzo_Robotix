"use client";

import { motion, useReducedMotion } from "framer-motion";
import { DURATION, EASE, viewportOnce } from "@/lib/animations";

const ITEMS = [
  {
    word: "Human-Compatible",
    body: "Built around people, tools and workflows that already exist.",
  },
  {
    word: "Modular",
    body: "Hardware and software designed to evolve mission by mission.",
  },
  {
    word: "Intelligent",
    body: "Perception and autonomy that turn raw data into decisions.",
  },
  {
    word: "Resilient",
    body: "Protected, robust and persistent when conditions turn hostile.",
  },
  {
    word: "Upgradeable",
    body: "An architecture that grows sharper with every generation.",
  },
];

export function PhilosophyList() {
  const reduced = useReducedMotion();

  return (
    <div className="mt-12">
      {ITEMS.map((item, i) => (
        <motion.div
          key={item.word}
          initial={reduced ? false : { opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOnce}
          transition={{
            duration: DURATION.cinematic * 0.7,
            ease: EASE.out,
            delay: i * 0.07,
          }}
          className="group relative cursor-default border-b border-black/[0.08] py-6 transition-all duration-500 hover:border-accent/40 md:py-7"
        >
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-accent to-teal transition-transform duration-700 ease-out group-hover:scale-x-100"
          />
          <div className="flex items-baseline gap-5 md:gap-8">
            <span className="font-mono text-xs tracking-[0.25em] text-faint transition-colors duration-300 group-hover:text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="text-3xl font-semibold tracking-tight text-mist transition-all duration-500 group-hover:translate-x-2 group-hover:text-bone md:text-5xl">
              {item.word}
            </h3>
            <span
              aria-hidden="true"
              className="ml-auto shrink-0 font-mono text-lg text-faint opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:text-accent group-hover:opacity-100"
            >
              &rarr;
            </span>
          </div>
          <p className="mt-3 max-w-md pl-10 text-sm leading-relaxed text-faint opacity-0 transition-all duration-500 group-hover:pl-12 group-hover:opacity-100 md:pl-[4.25rem] md:text-base">
            {item.body}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
