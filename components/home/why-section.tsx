"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/sections/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { Spotlight } from "@/components/motion/spotlight";
import { viewportOnce } from "@/lib/animations";
import { PRINCIPLES } from "@/lib/content/site";

export function WhySection() {
  const reduced = useReducedMotion();

  return (
    <section className="relative border-b border-black/[0.08]">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-section md:px-10">
        <SectionHeading
          eyebrow="Why Cennzo"
          lines={["Built For The Mission,", "Not The Demo."]}
          body={
            <>
              <p>
                Cennzo Robotix approaches humanoid robotics as a
                systems-engineering problem.
              </p>
              <p className="mt-4">
                Mechanical design, actuation, power, thermal management, sensing,
                control, AI, communications, materials and safety cannot be
                developed independently. We therefore design WAFEE as an
                integrated robotic system — where every subsystem contributes to
                mission performance.
              </p>
            </>
          }
        />

        <Spotlight>
        <StaggerGroup
          stagger={0.1}
          className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-black/[0.1] bg-black/[0.1] shadow-soft sm:grid-cols-2 lg:grid-cols-4"
        >
          {PRINCIPLES.map((principle) => (
            <StaggerItem key={principle.index}>
              <motion.article
                whileHover={reduced ? undefined : "hover"}
                className="spotlight-card group relative h-full bg-graphite p-8 transition-colors duration-500 hover:bg-charcoal/60 md:p-10"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100"
                />
                <p className="font-mono text-[11px] tracking-[0.25em] text-faint transition-colors duration-300 group-hover:text-accent">
                  {principle.index}
                </p>
                <h3 className="mt-6 text-lg font-semibold uppercase tracking-tight text-bone">
                  {principle.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-mist">
                  {principle.description}
                </p>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerGroup>
        </Spotlight>

        <motion.p
          initial={reduced ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 1 }}
          className="mt-10 font-mono text-[10px] uppercase tracking-[0.25em] text-faint"
        >
          Every joint. Every sensor. Every line of code. One system.
        </motion.p>
      </div>
    </section>
  );
}
