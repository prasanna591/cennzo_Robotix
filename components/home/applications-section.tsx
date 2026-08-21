"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/sections/section-heading";
import { Button } from "@/components/buttons/button";
import { Magnetic } from "@/components/motion/magnetic";
import { DURATION, EASE, viewportOnce } from "@/lib/animations";
import { APPLICATION_DOMAINS } from "@/lib/content/site";

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const items = [...APPLICATION_DOMAINS];
  const doubled = [...items, ...items];

  return (
    <div className="relative flex overflow-hidden" aria-hidden="true">
      <div
        className={`flex shrink-0 items-center gap-0 whitespace-nowrap ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center">
            <span className="px-6 text-[clamp(1.4rem,3vw,2.4rem)] font-semibold tracking-tight text-black/[0.18]">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rotate-45 bg-accent/40" />
          </span>
        ))}
      </div>
    </div>
  );
}

export function ApplicationsSection() {
  const reduced = useReducedMotion();

  return (
    <section id="applications" className="relative overflow-hidden border-b border-black/[0.08]">
      <div className="mx-auto w-full max-w-[1440px] px-6 pt-section md:px-10">
        <SectionHeading
          eyebrow="Applications"
          lines={["From Industry", "To The Impossible."]}
          body={
            <p>
              The first generation of WAFEE applications will focus on
              practical, measurable problems where robotic deployment can create
              clear safety, productivity or operational advantages.
            </p>
          }
        />
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: DURATION.standard, ease: EASE.out, delay: 0.2 }}
          className="mt-10"
        >
          <Magnetic>
            <Button href="/applications" variant="ghost">
              Explore Applications
            </Button>
          </Magnetic>
        </motion.div>
      </div>

      <motion.div
        initial={reduced ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewportOnce}
        transition={{ duration: DURATION.cinematic }}
        className="marquee-hover mt-16 space-y-2 border-y border-black/[0.08] py-8 md:space-y-3"
      >
        <MarqueeRow />
        <MarqueeRow reverse />
      </motion.div>

      <div className="h-16" aria-hidden="true" />
    </section>
  );
}
