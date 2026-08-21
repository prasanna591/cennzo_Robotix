"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/buttons/button";
import { Magnetic } from "@/components/motion/magnetic";
import { WordReveal } from "@/components/motion/word-reveal";
import { Reveal } from "@/components/motion/reveal";
import { MediaFrame } from "@/components/media/media-frame";
import { BackgroundObjects } from "@/components/decor/background-objects";
import { Parallax } from "@/components/motion/parallax";
import { DURATION, EASE, viewportOnce } from "@/lib/animations";

export function VisionSection() {
  const reduced = useReducedMotion();

  return (
    <section
      id="vision"
      className="dark-section relative overflow-hidden border-b border-black/[0.08]"
    >
      <motion.div
        aria-hidden="true"
        initial={reduced ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewportOnce}
        transition={{ duration: DURATION.cinematic + 0.4 }}
        className="absolute inset-0"
      >
        <BackgroundObjects variant="dark" />
      </motion.div>

      <div className="relative mx-auto w-full max-w-[1440px] px-6 py-section text-center md:px-10">
        <motion.p
          initial={reduced ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: DURATION.standard }}
          className="flex items-center justify-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-mist"
        >
          <span aria-hidden="true" className="h-px w-8 bg-teal" />
          Vision
          <span aria-hidden="true" className="h-px w-8 bg-teal" />
        </motion.p>

        <h2 className="mx-auto mt-8 max-w-5xl text-headline font-semibold leading-[1.08] tracking-[-0.02em] text-bone md:text-display">
          <WordReveal
            lines={[
              "A future where no environment",
              "is off-limits to ~machines.~",
            ]}
            wordClassName="text-bone"
          />
        </h2>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: DURATION.standard, ease: EASE.out, delay: 0.2 }}
          className="mx-auto mt-8 max-w-xl space-y-5 text-body leading-relaxed text-mist"
        >
          <p>
            Humans have always built tools to go farther, deeper, higher and
            closer to danger.
          </p>
          <p>
            The next step is intelligent machines that can do the same with
            greater persistence, precision and resilience.
          </p>
          <p className="text-bone">Cennzo Robotix is building toward that future.</p>
        </motion.div>

        <Reveal className="mx-auto mt-16 max-w-5xl">
          <Parallax speed={0.06}>
            <MediaFrame
              code="IMG-02"
              label="WAFEE in Extreme Environments — Concept Visualization"
              ratio="21/9"
            />
          </Parallax>
        </Reveal>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: DURATION.standard, ease: EASE.out, delay: 0.3 }}
          className="mt-12"
        >
          <Magnetic>
            <Button href="/partnerships" variant="light">
              Join the Journey
            </Button>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}
