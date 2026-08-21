"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/buttons/button";
import { Magnetic } from "@/components/motion/magnetic";
import { MaskLines } from "@/components/motion/mask-lines";
import { StaggerGroup, StaggerItem, Reveal } from "@/components/motion/reveal";
import { Counter } from "@/components/technical/counter";
import { MediaFrame } from "@/components/media/media-frame";
import { DURATION, EASE, viewportOnce } from "@/lib/animations";
import { WAFEE_ATTRIBUTES } from "@/lib/content/site";

const STATS = [
  { value: 178, suffix: " cm", decimals: 0, label: "Humanoid-Class Height" },
  { value: 5, suffix: "", decimals: 0, label: "Mission Environments" },
  { value: 9, suffix: "", decimals: 0, label: "Core Platform Attributes" },
];

export function WafeeSection() {
  const reduced = useReducedMotion();

  return (
    <section id="wafee" className="relative overflow-hidden border-b border-black/[0.08] bg-graphite">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_85%_30%,rgba(22,22,26,0.05),transparent_70%)]"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 py-section md:px-10">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
          <div>
            <Reveal mode="fadeIn">
              <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-mist">
                <span aria-hidden="true" className="h-px w-8 bg-accent" />
                The Platform
              </p>
            </Reveal>

            <h2 className="mt-8 text-display font-semibold tracking-[-0.02em] text-bone">
              <MaskLines lines={["Meet WAFEE."]} lineClassName="text-bone" />
            </h2>

            <motion.div
              initial={reduced ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: DURATION.standard, ease: EASE.out }}
              className="mt-8 max-w-xl space-y-6 text-body leading-relaxed text-mist"
            >
              <p>
                WAFEE is a 178&nbsp;cm-class humanoid robotic platform engineered
                around a modular architecture for mobility, manipulation,
                perception and autonomous operation.
              </p>
              <p>
                Designed as a platform rather than a single-purpose machine,
                WAFEE can evolve across industries, mission profiles and future
                generations of robotic intelligence.
              </p>
            </motion.div>

            <motion.div
              initial={reduced ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewportOnce}
              transition={{ duration: DURATION.cinematic, delay: 0.2 }}
              className="mt-12 grid grid-cols-3 gap-6 border-t border-black/[0.1] pt-8 sm:gap-10"
            >
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="font-mono text-3xl text-bone tabular-nums md:text-4xl">
                    <Counter value={stat.value} decimals={stat.decimals} />
                    <span className="text-lg text-mist">{stat.suffix}</span>
                  </p>
                  <p className="mt-2 font-mono text-[9px] uppercase leading-relaxed tracking-[0.18em] text-faint">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={reduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: DURATION.standard, ease: EASE.out, delay: 0.15 }}
              className="mt-12"
            >
              <Magnetic>
                <Button href="/wafee">Discover the WAFEE Platform</Button>
              </Magnetic>
            </motion.div>
          </div>

          <StaggerGroup stagger={0.05} className="lg:pt-24">
            {WAFEE_ATTRIBUTES.map((attribute, i) => (
              <StaggerItem key={attribute}>
                <div className="group flex cursor-default items-center justify-between gap-6 border-b border-black/[0.08] py-4 transition-colors duration-300 hover:border-steel">
                  <span className="flex items-baseline gap-5">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-faint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px] text-mist transition-colors duration-300 group-hover:text-bone">
                      {attribute}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-1 w-1 shrink-0 rounded-full bg-faint transition-colors duration-300 group-hover:bg-accent"
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        <Reveal className="mt-20">
          <MediaFrame
            code="IMG-01"
            label="WAFEE Full-Body Platform — Concept Render"
            ratio="21/9"
          />
        </Reveal>
      </div>
    </section>
  );
}
