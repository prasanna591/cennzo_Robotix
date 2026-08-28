"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { DURATION, EASE } from "@/lib/animations";
import { useReady } from "@/hooks/use-ready";
import { LanguageSwitcher } from "@/components/navigation/language-switcher";

const NAV_LINKS = [
  { href: "/about", key: "about" },
  { href: "/wafee", key: "wafee" },
  { href: "/technology", key: "technology" },
  { href: "/applications", key: "applications" },
  { href: "/industries", key: "industries" },
] as const;

const MOBILE_LINKS = [
  ...NAV_LINKS,
  { href: "/contact", key: "contact" },
] as const;

function Wordmark() {
  const tHeader = useTranslations("header");
  return (
    <Link
      href="/"
      className="group flex items-center gap-2.5 md:gap-3"
      aria-label={tHeader("home")}
    >
      <Image
        src="/logo/cennzo-icon.png"
        alt=""
        width={245}
        height={239}
        priority
        className="h-8 w-auto object-contain transition-transform duration-500 group-hover:scale-[1.04] md:h-10"
      />
      <span className="flex items-baseline gap-2">
        <span className="text-[15px] font-semibold tracking-[0.22em] text-bone md:text-lg">
          CENNZO
        </span>
        <span className="font-mono text-[10px] font-medium tracking-[0.3em] text-mist md:text-xs">
          ROBOTIX
        </span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduced = useReducedMotion();
  const ready = useReady();
  const pathname = usePathname();
  const tNav = useTranslations("nav");
  const tHeader = useTranslations("header");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll, { passive: true } as never);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <motion.header
        initial={reduced ? false : { y: -24, opacity: 0 }}
        animate={ready || reduced ? { y: 0, opacity: 1 } : { y: -24, opacity: 0 }}
        transition={{
          duration: DURATION.standard,
          ease: EASE.out,
          delay: 0.35,
        }}
        className="fixed inset-x-0 top-0 z-50 px-4 md:px-6"
      >
        <div
          className={`mx-auto flex max-w-[1380px] items-center justify-between border-b transition-all duration-500 ${
            scrolled && !menuOpen
              ? "mt-3 h-[58px] rounded-2xl border-black/[0.06] bg-white/75 px-5 shadow-soft backdrop-blur-xl md:px-6"
              : "mt-0 h-[72px] rounded-none border-transparent bg-transparent px-2 backdrop-blur-none md:px-4"
          }`}
        >
          <Wordmark />

          <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`group relative text-[11px] font-medium uppercase tracking-[0.18em] transition-colors duration-300 ${
                  isActive(link.href) ? "text-bone" : "text-mist hover:text-bone"
                }`}
              >
                {tNav(link.key)}
                <span
                  aria-hidden="true"
                  className={`absolute -bottom-1.5 left-0 h-[2px] w-full origin-left rounded-full bg-gradient-to-r from-accent via-violet-500 to-teal transition-transform duration-300 ease-out ${
                    isActive(link.href)
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
            <span className="ml-2 flex items-center gap-2">
              <LanguageSwitcher />
            </span>
            <Link
              href="/contact"
              aria-current={isActive("/contact") ? "page" : undefined}
              className={`cursor-pointer rounded-full px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-white transition-all duration-300 active:translate-y-px ${
                isActive("/contact")
                  ? "bg-gradient-to-r from-accent to-violet-600 shadow-lift"
                  : "bg-gradient-to-r from-ink to-[#1b2a55] hover:from-accent hover:to-violet-600 hover:shadow-lift"
              }`}
            >
              {tNav("contact")}
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? tHeader("closeMenu") : tHeader("openMenu")}
            className="relative z-50 flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-[7px] lg:hidden"
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
            className="fixed inset-0 z-40 flex flex-col justify-between overflow-y-auto bg-void px-6 pb-10 pt-24"
          >
            <nav aria-label="Mobile" className="flex flex-col gap-1">
              {MOBILE_LINKS.map((link, i) => (
                <div key={link.href} className="overflow-hidden">
                  <motion.div
                    initial={reduced ? false : { y: "110%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "110%" }}
                    transition={{
                      duration: DURATION.standard,
                      ease: EASE.out,
                      delay: 0.04 + i * 0.035,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      aria-current={isActive(link.href) ? "page" : undefined}
                      className={`flex items-baseline justify-between py-2.5 text-[1.65rem] font-semibold leading-none tracking-tight transition-colors ${
                        isActive(link.href) ? "text-accent" : "text-bone"
                      }`}
                    >
                      {tNav(link.key)}
                      <span className="font-mono text-[10px] tracking-[0.2em] text-faint">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </Link>
                  </motion.div>
                </div>
              ))}
            </nav>

            <motion.div
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: DURATION.standard }}
              className="mt-10 flex items-end justify-between gap-4 border-t border-black/[0.1] pt-6"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-faint">
                Innovate · Automate · Elevate
              </p>
              <LanguageSwitcher />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
