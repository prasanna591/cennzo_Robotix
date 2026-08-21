"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { DURATION, EASE } from "@/lib/animations";

const NAV_LINKS = [
  { label: "Technology", href: "#technology" },
  { label: "Applications", href: "#applications" },
  { label: "Vision", href: "#vision" },
  { label: "Company", href: "#company" },
];

function Wordmark() {
  return (
    <Link
      href="/"
      className="flex items-baseline gap-2"
      aria-label="Cennzo Robotix — Home"
    >
      <span className="text-[15px] font-semibold tracking-[0.22em] text-bone">
        CENNZO
      </span>
      <span className="font-mono text-[10px] font-medium tracking-[0.3em] text-mist">
        ROBOTIX
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={reduced ? false : { y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: DURATION.standard,
          ease: EASE.out,
          delay: 0.9,
        }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled && !menuOpen
            ? "border-b border-white/[0.06] bg-void/80 backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-6 md:px-10">
          <Wordmark />

          <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative text-[11px] font-medium uppercase tracking-[0.18em] text-mist transition-colors duration-300 hover:text-bone"
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-ember transition-transform duration-300 ease-out group-hover:scale-x-100"
                />
              </Link>
            ))}
            <Link
              href="#contact"
              className="ml-2 border border-steel px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-bone transition-colors duration-300 hover:border-ember hover:text-ember"
            >
              [ Contact ]
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[7px] lg:hidden"
          >
            <span
              className={`h-px w-6 bg-bone transition-transform duration-300 ${
                menuOpen ? "translate-y-[4px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-bone transition-transform duration-300 ${
                menuOpen ? "-translate-y-[4px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: DURATION.fast }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-void px-6 pb-10 pt-28"
          >
            <nav aria-label="Mobile" className="flex flex-col gap-2">
              {[...NAV_LINKS, { label: "Contact", href: "#contact" }].map(
                (link, i) => (
                  <div key={link.href} className="overflow-hidden">
                    <motion.div
                      initial={reduced ? false : { y: "110%" }}
                      animate={{ y: "0%" }}
                      exit={{ y: "110%" }}
                      transition={{
                        duration: DURATION.standard,
                        ease: EASE.out,
                        delay: 0.05 + i * 0.06,
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="block py-3 text-[2rem] font-semibold uppercase leading-none tracking-tight text-bone"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  </div>
                )
              )}
            </nav>

            <motion.div
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: DURATION.standard }}
              className="flex items-end justify-between border-t border-white/[0.08] pt-6"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-faint">
                Innovate · Automate · Elevate
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-faint">
                EST. 2026
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
