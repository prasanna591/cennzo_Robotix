"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/buttons/button";
import { MaskLines } from "@/components/motion/mask-lines";
import { BackgroundObjects } from "@/components/decor/background-objects";
import { useReady } from "@/hooks/use-ready";
import { DURATION, EASE } from "@/lib/animations";

const ENVIRONMENTS = ["EARTH", "WATER", "FIRE", "AIR", "SPACE"];

function Atmosphere() {
  const reduced = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: DURATION.cinematic + 0.6, ease: EASE.out }}
      className="absolute inset-0"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_72%_28%,rgba(22,22,26,0.05),transparent_70%)]" />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_45%_40%_at_15%_85%,rgba(37,99,235,0.10),transparent_70%)]"
        {...(reduced
          ? {}
          : {
              animate: { x: [0, 60, 0], y: [0, -30, 0] },
              transition: {
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
              },
            })}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_35%_30%_at_80%_65%,rgba(37,99,235,0.08),transparent_70%)]"
        {...(reduced
          ? {}
          : {
              animate: { x: [0, -45, 0], y: [0, 25, 0] },
              transition: {
                duration: 22,
                repeat: Infinity,
                ease: "easeInOut",
              },
            })}
      />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(22,22,26,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(22,22,26,0.04) 1px, transparent 1px)",
          backgroundSize: "88px 88px",
          maskImage:
            "radial-gradient(ellipse 80% 65% at 50% 40%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 65% at 50% 40%, black 30%, transparent 75%)",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-[40vh] bg-gradient-to-t from-void to-transparent" />
    </motion.div>
  );
}

function ScrollCue() {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-faint">
        Scroll
      </span>
      <span className="relative h-px w-10 overflow-hidden bg-black/10">
        <motion.span
          className="absolute inset-y-0 left-0 w-full bg-accent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{
            duration: 2.2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0.6,
          }}
        />
      </span>
    </div>
  );
}

function OrbitDecor({ y }: { y?: unknown }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      aria-hidden="true"
      style={reduced ? undefined : { y: y as never }}
      className="pointer-events-none absolute -right-[12%] top-[8%] hidden h-[720px] w-[720px] lg:block"
    >
      <motion.svg
        viewBox="0 0 400 400"
        fill="none"
        className="h-full w-full"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
      >
        <motion.g
          animate={reduced ? undefined : { rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 200px" }}
        >
          <circle cx="200" cy="200" r="150" stroke="rgba(17,19,24,0.08)" strokeDasharray="3 7" />
          <circle cx="350" cy="200" r="4" fill="rgba(21,94,239,0.55)" />
          <circle cx="350" cy="200" r="9" stroke="rgba(21,94,239,0.25)" />
        </motion.g>
        <motion.g
          animate={reduced ? undefined : { rotate: -360 }}
          transition={{ duration: 140, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 200px" }}
        >
          <circle cx="200" cy="200" r="110" stroke="rgba(17,19,24,0.06)" />
          <circle cx="200" cy="90" r="3" fill="rgba(0,168,168,0.5)" />
        </motion.g>
        <motion.g
          animate={reduced ? undefined : { rotate: 360 }}
          transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 200px" }}
        >
          <circle cx="200" cy="200" r="185" stroke="rgba(17,19,24,0.05)" strokeDasharray="1 9" />
        </motion.g>
        <line x1="200" y1="8" x2="200" y2="-6" stroke="rgba(17,19,24,0.16)" strokeWidth="1" />
        <line x1="200" y1="392" x2="200" y2="406" stroke="rgba(17,19,24,0.16)" strokeWidth="1" />
        <line x1="8" y1="200" x2="-6" y2="200" stroke="rgba(17,19,24,0.16)" strokeWidth="1" />
        <line x1="392" y1="200" x2="406" y2="200" stroke="rgba(17,19,24,0.16)" strokeWidth="1" />
        <circle cx="200" cy="200" r="2.5" fill="rgba(21,94,239,0.5)" />
      </motion.svg>
    </motion.div>
  );
}

export function Hero() {
  const reduced = useReducedMotion();
  const ready = useReady();

  const { scrollYProgress } = useScroll();
  const contentY = useTransform(scrollYProgress, [0, 0.3], [0, -110]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.24], [1, 0]);
  const barOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0]);
  const decorY = useTransform(scrollYProgress, [0, 0.3], [0, -80]);

  const enter = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
          transition: { duration: DURATION.standard, ease: EASE.out, delay },
        };

  return (
    <section className="relative flex min-h-svh flex-col overflow-hidden">
      <Atmosphere />
      <BackgroundObjects variant="light" />
      <OrbitDecor y={decorY} />

      <motion.div
        style={reduced ? undefined : { y: contentY, opacity: contentOpacity }}
        className="relative mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center px-6 pb-16 pt-[120px] md:px-10"
      >
        <motion.p
          {...enter(0.2)}
          className="mb-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-mist"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          WAFEE — Unified Multi-Environment Humanoid Platform
        </motion.p>

        <h1 className="text-hero font-semibold tracking-[-0.02em] text-bone">
          <MaskLines
            key={ready ? "ready" : "hold"}
            lines={["The Humanoid For", "The *Hard Places.*"]}
            delay={0.15}
            animateOnLoad
            lineClassName="text-bone"
          />
        </h1>

        <motion.p
          {...enter(0.55)}
          className="mt-8 max-w-xl text-subhead text-mist"
        >
          WAFEE is Cennzo Robotix&rsquo;s unified multi-environment humanoid
          platform — engineered to bring intelligent mobility, perception and
          manipulation into environments where conventional robots reach their
          limits.
        </motion.p>

        <motion.div {...enter(0.7)} className="mt-12 flex flex-wrap gap-4">
          <Button href="/wafee">Explore WAFEE</Button>
          <Button href="/contact" variant="ghost">
            Build the Future With Us
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        style={reduced ? undefined : { opacity: barOpacity }}
        className="relative border-t border-black/[0.08]"
      >
        <motion.div {...enter(0.85)}>
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-6 px-6 py-5 md:px-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-faint sm:text-[11px]">
            {ENVIRONMENTS.map((env, i) => (
              <span key={env}>
                <span className="text-mist">{env}</span>
                {i < ENVIRONMENTS.length - 1 && (
                  <span className="mx-2 text-black/25">/</span>
                )}
              </span>
            ))}
          </p>
          <p className="hidden font-mono text-[10px] uppercase tracking-[0.25em] text-faint lg:block">
            One platform. Multiple mission environments.
          </p>
          <ScrollCue />
        </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
