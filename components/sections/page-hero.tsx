"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import type { ReactNode } from "react";
import { BlurLines } from "@/components/motion/blur-lines";
import { DecodeText } from "@/components/motion/decode-text";
import { BackgroundObjects } from "@/components/decor/background-objects";
import { useReady } from "@/hooks/use-ready";
import { useNaturalAspect } from "@/hooks/use-natural-aspect";
import { DURATION, EASE } from "@/lib/animations";

const GRID_COLS_LEFT =
  "lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16";
const GRID_COLS_RIGHT =
  "lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16 lg:justify-items-end";

export function PageHero({
  eyebrow,
  lines,
  intro,
  meta,
  media,
  children,
  contentRight = false,
  contentTop = false,
  headlineSize = "hero",
  contentClassName = "",
}: {
  eyebrow?: string;
  lines?: string[];
  intro?: ReactNode;
  meta?: string;
  media?: { src: string; alt: string; ratio?: string; fit?: "cover" | "contain"; maxWidth?: string; background?: boolean; backgroundClass?: string };
  children?: ReactNode;
  contentRight?: boolean;
  contentTop?: boolean;
  headlineSize?: "hero" | "display" | "headline";
  contentClassName?: string;
}) {
  const reduced = useReducedMotion();
  const ready = useReady();
  const mediaNatural = useNaturalAspect(media?.src);

  const headlineClass =
    headlineSize === "hero"
      ? "text-display md:text-hero"
      : headlineSize === "display"
        ? "text-headline md:text-display"
        : "text-headline";

  const enter = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
          transition: { duration: DURATION.standard, ease: EASE.out, delay },
        };

  return (
    <section
      className={`relative overflow-hidden border-b border-black/[0.08] ${
        media?.background
            ? `flex min-h-svh flex-col ${contentTop ? "justify-start" : "justify-center"}`
            : ""
      }`}
    >
      {media?.background && (
        <Image
          src={media.src}
          alt={media.alt}
          fill
          priority
          sizes="100vw"
          className={`object-contain ${media.backgroundClass ?? "object-center"}`}
        />
      )}
      {media?.background && (
        <div aria-hidden="true" className="absolute inset-0 bg-void/10" />
      )}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_75%_20%,rgba(22,22,26,0.05),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_35%_at_10%_90%,rgba(37,99,235,0.08),transparent_70%)]" />
        <div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(22,22,26,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(22,22,26,0.04) 1px, transparent 1px)",
            backgroundSize: "88px 88px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 30%, black 30%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 30%, black 30%, transparent 75%)",
          }}
        />
      </div>

      <BackgroundObjects variant="light" />

      <motion.div
        className={`relative z-10 w-full max-w-[1440px] px-6 pb-16 pt-[168px] md:px-10 md:pb-20 md:pt-[200px] ${
          contentRight ? "lg:ml-auto lg:mr-0" : "mx-auto"
        } ${
          media ? (contentRight ? GRID_COLS_RIGHT : GRID_COLS_LEFT) : ""
        }`}
      >
        <div className={contentRight ? `lg:col-start-2 ${contentClassName}` : contentClassName}>
          {eyebrow && (
            <motion.p
              {...enter(0.05)}
              className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-mist"
            >
              <span aria-hidden="true" className="h-px w-8 bg-accent" />
              <DecodeText text={eyebrow} />
            </motion.p>
          )}

          {lines && lines.length > 0 && (
            <h1 className={`mt-8 max-w-5xl font-bold uppercase leading-[1.02] tracking-[-0.02em] text-bone ${headlineClass}`}>
              <BlurLines
                key={ready ? "ready" : "hold"}
                lines={lines}
                delay={0.15}
                start={Boolean(ready) || Boolean(reduced)}
                lineClassName={["text-bone", "text-accent"]}
              />
            </h1>
          )}

          {intro && (
            <motion.div
              {...enter(0.4)}
              className="mt-8 max-w-2xl text-subhead leading-relaxed text-mist"
            >
              {intro}
            </motion.div>
          )}

          {children && (
            <motion.div {...enter(0.55)} className="mt-8">
              {children}
            </motion.div>
          )}

          {meta && (
            <motion.p
              {...enter(0.65)}
              className="mt-8 font-mono text-[10px] uppercase tracking-[0.3em] text-faint"
            >
              {meta}
            </motion.p>
          )}

          {(eyebrow || (lines && lines.length > 0)) && (
            <motion.div
              aria-hidden="true"
              initial={reduced ? false : { scaleX: 0 }}
              animate={ready ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{
                duration: DURATION.cinematic,
                ease: EASE.mechanical,
                delay: 0.6,
              }}
              className="mt-8 flex h-px w-full max-w-[480px] origin-left items-center"
            >
              <span className="hairline-spectrum absolute inset-x-0 top-0 h-px" />
              <span className="relative h-1.5 w-1.5 rounded-[2px] bg-teal shadow-[0_0_10px_rgba(0,168,168,0.55)]" />
            </motion.div>
          )}
        </div>

        {media && !media.background && (
          <motion.div {...enter(0.5)} className="relative lg:pl-6">
            <div
              className={`relative mx-auto w-full ${
                media.maxWidth ?? "max-w-[560px]"
              } ${media.ratio ?? "aspect-[4/5]"}`}
              style={mediaNatural ? { aspectRatio: `${mediaNatural}` } : undefined}
            >
              <Image
                src={media.src}
                alt={media.alt}
                fill
                priority
                sizes="(max-width: 1024px) 560px, 760px"
                className={`${
                  media.fit === "contain"
                    ? "object-contain"
                    : "object-cover object-top"
                }`}
              />
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}