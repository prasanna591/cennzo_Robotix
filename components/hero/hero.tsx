"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/buttons/button";
import { MaskLines } from "@/components/motion/mask-lines";
import { DURATION, EASE } from "@/lib/animations";

const ENVIRONMENTS = ["EARTH", "WATER", "FIRE", "AIR", "SPACE"];

function Atmosphere() {
  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: DURATION.cinematic + 0.6, ease: EASE.out }}
      className="absolute inset-0"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_72%_28%,rgba(38,38,45,0.6),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_40%_at_15%_85%,rgba(255,77,28,0.05),transparent_70%)]" />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,245,247,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(245,245,247,0.025) 1px, transparent 1px)",
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
      <span className="relative h-px w-10 overflow-hidden bg-white/10">
        <motion.span
          className="absolute inset-y-0 left-0 w-full bg-ember"
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

export function Hero() {
  const reduced = useReducedMotion();
  const enter = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: DURATION.standard, ease: EASE.out, delay },
        };

  return (
    <section className="relative flex min-h-svh flex-col overflow-hidden">
      <Atmosphere />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center px-6 pb-16 pt-[120px] md:px-10">
        <motion.p
          {...enter(0.25)}
          className="mb-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-mist"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ember" />
          </span>
          WAFEE — Unified Multi-Environment Humanoid Platform
        </motion.p>

        <h1 className="text-hero font-semibold uppercase text-bone">
          <MaskLines
            lines={["The Humanoid For", "The Hard Places."]}
            delay={0.4}
            animateOnLoad
            lineClassName="text-bone"
          />
        </h1>

        <motion.p
          {...enter(0.8)}
          className="mt-8 max-w-xl text-subhead text-mist"
        >
          WAFEE is Cennzo Robotix&rsquo;s unified multi-environment humanoid
          platform — engineered to bring intelligent mobility, perception and
          manipulation into environments where conventional robots reach their
          limits.
        </motion.p>

        <motion.div {...enter(0.95)} className="mt-12 flex flex-wrap gap-4">
          <Button href="#wafee">Explore WAFEE</Button>
          <Button href="#contact" variant="ghost">
            Build the Future With Us
          </Button>
        </motion.div>
      </div>

      <motion.div
        {...enter(1.1)}
        className="relative border-t border-white/[0.06]"
      >
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-6 px-6 py-5 md:px-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-faint sm:text-[11px]">
            {ENVIRONMENTS.map((env, i) => (
              <span key={env}>
                <span className="text-mist">{env}</span>
                {i < ENVIRONMENTS.length - 1 && (
                  <span className="mx-2 text-white/20">/</span>
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
    </section>
  );
}
