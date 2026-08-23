"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
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
  const t = useTranslations("home");

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
          {t("visionEyebrow")}
          <span aria-hidden="true" className="h-px w-8 bg-teal" />
        </motion.p>

        <h2 className="mx-auto mt-8 max-w-5xl text-headline font-semibold leading-[1.08] tracking-[-0.02em] text-bone md:text-display">
          <WordReveal
            lines={[t("visionL1"), t("visionL2")]}
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
          <p>{t("visionP1")}</p>
          <p>{t("visionP2")}</p>
          <p className="text-bone">{t("visionP3")}</p>
        </motion.div>

        <Reveal className="mx-auto mt-16 max-w-5xl">
          <Parallax speed={0.06}>
            <MediaFrame
              code="IMG-02"
              label={t("visionImgLabel")}
              ratio="21/9"
            src="/images/img-02-extreme-environments.webp"
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
              {t("visionCta")}
            </Button>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}
