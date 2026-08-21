"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { SectionHeading } from "@/components/sections/section-heading";
import { Button } from "@/components/buttons/button";
import { Magnetic } from "@/components/motion/magnetic";
import { StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { TECHNOLOGY_SYSTEMS } from "@/lib/content/site";

export function TechnologySection() {
  const reduced = useReducedMotion();

  return (
    <section id="technology" className="relative border-b border-black/[0.08]">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-section md:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Technology"
            lines={["Engineering The", "Complete Machine."]}
          />
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="shrink-0"
          >
            <Magnetic>
              <Button href="/technology" variant="ghost">
                Explore Our Technology
              </Button>
            </Magnetic>
          </motion.div>
        </div>

        <StaggerGroup stagger={0.06} className="mt-16 border-t border-black/[0.1]">
          {TECHNOLOGY_SYSTEMS.map((system) => (
            <StaggerItem key={system.id}>
              <Link
                href={`/technology#${system.id}`}
                className="group relative grid cursor-pointer grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-2 border-b border-black/[0.1] py-6 transition-colors duration-300 md:grid-cols-[80px_1fr_1.2fr_auto] md:py-7"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100"
                />
                <span className="font-mono text-[11px] tracking-[0.2em] text-faint transition-colors duration-300 group-hover:text-accent">
                  {system.index}
                </span>
                <h3 className="text-xl font-semibold tracking-tight text-mist transition-colors duration-300 group-hover:text-bone md:text-2xl">
                  {system.name}
                </h3>
                <p className="col-span-2 max-w-xl text-sm leading-relaxed text-faint transition-colors duration-300 group-hover:text-mist md:col-span-1">
                  {system.summary}
                </p>
                <span
                  aria-hidden="true"
                  className="hidden justify-self-end font-mono text-lg text-faint transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent md:block"
                >
                  →
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
