"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ScrollFillText } from "@/components/motion/scroll-fill-text";
import { Reveal } from "@/components/motion/reveal";
import { DURATION, EASE, viewportOnce } from "@/lib/animations";

export function IntroSection() {
  const reduced = useReducedMotion();
  const t = useTranslations("home");

  return (
    <section className="relative border-b border-black/[0.08]">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-section md:px-10">
        <Reveal mode="fadeIn">
          <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-mist">
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
            {t("introEyebrow")}
          </p>
        </Reveal>

        <h2 className="mt-8 max-w-5xl text-headline font-semibold leading-[1.08] tracking-[-0.02em] text-bone md:text-display">
          <ScrollFillText
            lines={[t("introL1"), t("introL2"), t("introL3")].filter(Boolean)}
          />
        </h2>

        <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: DURATION.standard, ease: EASE.out }}
            className="space-y-6 text-body leading-relaxed text-mist"
          >
            <p>{t("introP1")}</p>
            <p>{t("introP2")}</p>
            <p>{t("introP3")}</p>
          </motion.div>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: DURATION.standard, ease: EASE.out, delay: 0.12 }}
            className="relative border-l border-steel pl-8"
          >
            <span
              aria-hidden="true"
              className="absolute -left-px top-0 h-16 w-px bg-accent"
            />
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-faint">
              {t("introGoalLabel")}
            </p>
            <p className="mt-4 text-subhead leading-relaxed text-bone">
              {t("introGoal")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
