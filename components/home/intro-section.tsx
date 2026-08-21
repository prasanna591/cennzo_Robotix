"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ScrollFillText } from "@/components/motion/scroll-fill-text";
import { Reveal } from "@/components/motion/reveal";
import { DURATION, EASE, viewportOnce } from "@/lib/animations";

export function IntroSection() {
  const reduced = useReducedMotion();

  return (
    <section className="relative border-b border-black/[0.08]">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-section md:px-10">
        <Reveal mode="fadeIn">
          <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-mist">
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
            The Mission
          </p>
        </Reveal>

        <h2 className="mt-8 max-w-5xl text-headline font-semibold leading-[1.08] tracking-[-0.02em] text-bone md:text-display">
          <ScrollFillText
            lines={[
              "Intelligence should not stop",
              "at the *edge*",
              "of the environment.",
            ]}
          />
        </h2>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: DURATION.standard, ease: EASE.out }}
            className="space-y-6 text-body leading-relaxed text-mist"
          >
            <p>
              The world&rsquo;s most difficult missions are rarely confined to
              controlled environments.
            </p>
            <p>
              Industrial facilities, disaster zones, offshore assets,
              infrastructure sites, extreme-temperature environments and future
              off-world operations demand machines that can move, perceive,
              decide and act with greater resilience.
            </p>
            <p>
              Cennzo Robotix is developing WAFEE as a new class of humanoid
              robotic platform — combining human-compatible form, advanced
              actuation, intelligent perception, autonomous control and
              engineered environmental protection.
            </p>
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
              Our Goal
            </p>
            <p className="mt-4 text-subhead leading-relaxed text-bone">
              Put capable machines where human exposure, operational complexity
              or environmental uncertainty make conventional approaches
              inefficient or unsafe.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
