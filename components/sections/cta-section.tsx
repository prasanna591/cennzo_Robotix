"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/buttons/button";
import { Magnetic } from "@/components/motion/magnetic";
import { MaskLines } from "@/components/motion/mask-lines";
import { BackgroundObjects } from "@/components/decor/background-objects";
import { DURATION, EASE, viewportOnce } from "@/lib/animations";

export function CTASection({
  eyebrow = "Cennzo Robotix",
  lines,
  body,
  primary = { label: "Partner With Cennzo", href: "/contact" },
  secondary,
}: {
  eyebrow?: string;
  lines: string[];
  body?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  const reduced = useReducedMotion();

  return (
    <section className="dark-section relative overflow-hidden">
      <motion.div
        aria-hidden="true"
        initial={reduced ? false : { scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={viewportOnce}
        transition={{ duration: DURATION.cinematic + 0.6, ease: EASE.out }}
        className="absolute inset-0"
      >
        <BackgroundObjects variant="dark" />
      </motion.div>

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center px-6 py-section text-center md:px-10">
        <motion.p
          initial={reduced ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: DURATION.standard }}
          className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-mist"
        >
          <span aria-hidden="true" className="h-px w-8 bg-teal" />
          {eyebrow}
          <span aria-hidden="true" className="h-px w-8 bg-teal" />
        </motion.p>

        <h2 className="mt-8 text-display font-semibold leading-[1.05] tracking-[-0.02em] text-bone">
          <MaskLines lines={lines} lineClassName="text-bone" />
        </h2>

        {body && (
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: DURATION.standard, ease: EASE.out, delay: 0.15 }}
            className="mt-6 max-w-xl text-subhead text-mist"
          >
            {body}
          </motion.p>
        )}

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: DURATION.standard, ease: EASE.out, delay: 0.25 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <Magnetic>
            <Button href={primary.href} variant="light">
              {primary.label}
            </Button>
          </Magnetic>
          {secondary && (
            <Magnetic>
              <Button href={secondary.href} variant="ghost">
                {secondary.label}
              </Button>
            </Magnetic>
          )}
        </motion.div>
      </div>
    </section>
  );
}
