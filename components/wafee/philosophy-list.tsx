"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { DURATION, EASE, viewportOnce } from "@/lib/animations";

type Item = { word: string; body: string };

export function PhilosophyList() {
  const reduced = useReducedMotion();
  const t = useTranslations("wafeePage.philosophy");
  const items = t.raw("items") as Item[];

  return (
    <div className="mt-12">
      {items.map((item, i) => (
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
          </div>
          <p className="mt-3 max-w-md pl-10 text-sm leading-relaxed text-faint md:pl-[4.25rem] md:text-base lg:opacity-0 lg:transition-all lg:duration-500 lg:group-hover:opacity-100">
            {item.body}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
