"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { DURATION, EASE } from "@/lib/animations";

export default function NotFound() {
  return (
    <main className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_60%,rgba(22,22,26,0.05),transparent_70%)]"
      />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: DURATION.standard, delay: 0.1 }}
        className="relative font-mono text-[11px] uppercase tracking-[0.3em] text-accent"
      >
        Error 404
      </motion.p>
      <h1 className="relative mt-6 overflow-hidden text-display font-semibold uppercase tracking-tight text-bone">
        <motion.span
          className="block"
          initial={{ y: "110%" }}
          animate={{ y: "0%" }}
          transition={{ duration: DURATION.cinematic * 0.8, ease: EASE.out, delay: 0.2 }}
        >
          Signal Lost.
        </motion.span>
      </h1>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: DURATION.standard, ease: EASE.out, delay: 0.5 }}
        className="relative mt-4 max-w-md text-body leading-relaxed text-mist"
      >
        The page you are looking for does not exist or has been moved.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: DURATION.standard, ease: EASE.out, delay: 0.65 }}
        className="relative mt-10"
      >
        <Link
          href="/"
          className="btn-sheen group relative inline-flex cursor-pointer items-center gap-3 border border-steel px-7 py-4 text-xs font-medium uppercase tracking-[0.14em] text-bone transition-colors duration-300 hover:border-accent hover:text-accent"
        >
          Return Home
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="transition-transform duration-300 ease-out group-hover:translate-x-1">
            <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
          </svg>
        </Link>
      </motion.div>
    </main>
  );
}
