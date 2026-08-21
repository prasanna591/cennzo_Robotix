import type { Transition, Variants } from "framer-motion";

export const DURATION = {
  fast: 0.22,
  standard: 0.55,
  cinematic: 1.1,
} as const;

export const EASE = {
  out: [0.16, 1, 0.3, 1],
  inOut: [0.83, 0, 0.17, 1],
  mechanical: [0.65, 0, 0.35, 1],
} as const;

export const transitionFast: Transition = {
  duration: DURATION.fast,
  ease: EASE.out,
};

export const transitionStandard: Transition = {
  duration: DURATION.standard,
  ease: EASE.out,
};

export const transitionCinematic: Transition = {
  duration: DURATION.cinematic,
  ease: EASE.out,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionStandard,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.cinematic, ease: EASE.out },
  },
};

export const scaleReveal: Variants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION.cinematic + 0.4, ease: EASE.out },
  },
};

export const maskRise: Variants = {
  hidden: { y: "110%" },
  visible: (i: number = 0) => ({
    y: "0%",
    transition: {
      duration: DURATION.cinematic * 0.82,
      ease: EASE.out,
      delay: i * 0.09,
    },
  }),
};

export const lineDraw: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: DURATION.standard, ease: EASE.mechanical },
  },
};

export const staggerContainer = (
  stagger = 0.08,
  delayChildren = 0
): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

export const viewportOnce = { once: true, margin: "-12% 0px" } as const;
