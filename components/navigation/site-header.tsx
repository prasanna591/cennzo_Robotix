"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { DURATION, EASE } from "@/lib/animations";
import { useReady } from "@/hooks/use-ready";
import { LanguageSwitcher } from "@/components/navigation/language-switcher";
import { ProductsMegaMenu } from "@/components/navigation/products-mega-menu";
import { IMAGES } from "@/lib/content/images";

type NavItem = {
  href?: string;
  key: string;
  children?: { href: string; key: string }[];
};

const NAV_LINKS: NavItem[] = [
  { href: "/about", key: "about" },
  {
    key: "products",
    children: [
      { href: "/household", key: "productsHousehold" },
      { href: "/industries", key: "productsIndustry" },
      { href: "/wafee", key: "productsWafee" },
      { href: "/army", key: "army" },
      { href: "/aerospace", key: "aerospace" },
      { href: "/space", key: "space" },
      { href: "/defence", key: "defence" },
    ],
  },
  { href: "/technology", key: "technology" },
  { href: "/applications", key: "applications" },
  { href: "/careers", key: "careers" },
];

const MOBILE_LINKS: NavItem[] = [
  ...NAV_LINKS,
  { href: "/contact", key: "contact" },
];

const PRODUCT_IMAGES: Record<string, string> = {
  productsWafee: "/new_image/updated_hero.png",
  productsIndustry: "/new_image/industry_robot.png",
  productsHousehold: "/new_image/friendlyrobot.png",
  army: IMAGES.armyScene,
  aerospace: IMAGES.airPhoto,
  space: IMAGES.spaceTwo,
  defence: IMAGES.wafeeCinematic,
};

function Wordmark() {
  const tHeader = useTranslations("header");
  return (
    <Link
      href="/"
      className="group flex flex-col"
      aria-label={tHeader("home")}
    >
      <span className="flex items-center gap-2.5 md:gap-3">
        <Image
          src="/logo/cennzo-icon.png"
          alt=""
          width={245}
          height={239}
          priority
          className="h-8 w-auto object-contain transition-transform duration-500 group-hover:scale-[1.04] md:h-10"
        />
        <span className="text-[16px] font-semibold leading-none tracking-[0.2em] text-bone md:text-lg">
          CENNZO
        </span>
      </span>
      <span className="-mt-[6px] pl-[calc(2rem+0.625rem)] font-mono text-[10px] font-medium leading-none tracking-[0.28em] text-mist md:pl-[calc(2.5rem+0.75rem)] md:text-xs">
        ROBOTIX
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);
  const reduced = useReducedMotion();
  const ready = useReady();
  const pathname = usePathname();
  const tNav = useTranslations("nav");
  const tHeader = useTranslations("header");

  const openProducts = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = null;
    setProductsOpen(true);
  };

  const closeProducts = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = null;
    setProductsOpen(false);
  };

  const startCloseProducts = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(
      () => setProductsOpen(false),
      240,
    );
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll, { passive: true } as never);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (closeTimer.current) window.clearTimeout(closeTimer.current);
        closeTimer.current = null;
        setProductsOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = null;
    setProductsOpen(false);
  }, [pathname]);

  useEffect(() => {
    return () => {
      if (closeTimer.current) window.clearTimeout(closeTimer.current);
    };
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const productsItem = NAV_LINKS.find((item) => item.key === "products");
  const productsActive = productsItem?.children?.some(
    (child) => child.href !== "/" && isActive(child.href),
  );

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
              ? "mt-3 h-[54px] rounded-2xl border-black/[0.06] bg-white/75 px-5 shadow-soft backdrop-blur-xl md:px-6"
              : "mt-0 h-[60px] rounded-none border-transparent bg-transparent px-2 backdrop-blur-none md:px-4"
          }`}
        >
          <Wordmark />

          <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((item) =>
              item.children ? (
                <div
                  key={item.key}
                  className="relative"
                  onMouseEnter={openProducts}
                  onMouseLeave={startCloseProducts}
                >
                  <button
                    type="button"
                    aria-expanded={productsOpen}
                    aria-haspopup="menu"
                    onClick={() =>
                      productsOpen ? closeProducts() : openProducts()
                    }
                    className={`group relative flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.18em] transition-colors duration-300 ${
                      productsActive ? "text-bone" : "text-mist hover:text-bone"
                    }`}
                  >
                    {tNav(item.key)}
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 12 12"
                      className={`h-3 w-3 transition-transform duration-300 ${
                        productsOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2.5 4.5 6 8l3.5-3.5" />
                    </svg>
                    <span
                      aria-hidden="true"
                      className={`absolute -bottom-1.5 left-0 h-[2px] w-full origin-left rounded-full bg-gradient-to-r from-accent via-violet-500 to-teal transition-transform duration-300 ease-out ${
                        productsActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </button>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href ?? "/"}
                  aria-current={item.href ? (isActive(item.href) ? "page" : undefined) : undefined}
                  className={`group relative text-[11px] font-medium uppercase tracking-[0.18em] transition-colors duration-300 ${
                    item.href && isActive(item.href)
                      ? "text-bone"
                      : "text-mist hover:text-bone"
                  }`}
                >
                  {tNav(item.key)}
                  <span
                    aria-hidden="true"
                    className={`absolute -bottom-1.5 left-0 h-[2px] w-full origin-left rounded-full bg-gradient-to-r from-accent via-violet-500 to-teal transition-transform duration-300 ease-out ${
                      item.href && isActive(item.href)
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              ),
            )}
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
            onClick={() => {
              setMenuOpen((v) => !v);
              closeProducts();
            }}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? tHeader("closeMenu") : tHeader("openMenu")}
            className="relative z-50 flex h-11 w-11 cursor-pointer flex-col items-center justify-center gap-[7px] lg:hidden"
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

        <AnimatePresence>
          {productsOpen && !menuOpen && (
            <motion.div
              onMouseEnter={openProducts}
              onMouseLeave={startCloseProducts}
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, y: 12 }}
              transition={{ duration: DURATION.standard, ease: EASE.out }}
              className="relative z-40 mx-auto mt-3 w-full max-w-[1240px]"
            >
              <ProductsMegaMenu onNavigate={closeProducts} />
            </motion.div>
          )}
        </AnimatePresence>
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
              {MOBILE_LINKS.map((item, i) =>
                item.children ? (
                  <div key={item.key} className="overflow-hidden">
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
                      <div className="flex items-baseline justify-between py-2.5 text-[1.65rem] font-semibold leading-none tracking-tight text-bone">
                        {tNav(item.key)}
                        <span className="font-mono text-[10px] tracking-[0.2em] text-faint">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <div className="mb-3 ml-1 flex flex-col gap-0.5 border-l border-black/[0.08] pl-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMenuOpen(false)}
                            aria-current={
                              isActive(child.href) ? "page" : undefined
                            }
                            className="group flex items-center gap-3 py-2"
                          >
                            {PRODUCT_IMAGES[child.key] && (
                              <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg bg-white/5">
                                <Image
                                  src={PRODUCT_IMAGES[child.key]}
                                  alt=""
                                  fill
                                  sizes="36px"
                                  className="object-contain object-center transition-transform duration-300 group-hover:scale-105"
                                />
                              </span>
                            )}
                            <span
                              className={`text-lg font-medium leading-none tracking-tight transition-colors ${
                                isActive(child.href)
                                  ? "text-accent"
                                  : "text-mist group-hover:text-bone"
                              }`}
                            >
                              {tNav(child.key)}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                ) : (
                  <div key={item.href} className="overflow-hidden">
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
                        href={item.href ?? "/"}
                        onClick={() => setMenuOpen(false)}
                        aria-current={
                          item.href ? (isActive(item.href) ? "page" : undefined) : undefined
                        }
                        className={`flex items-baseline justify-between py-2.5 text-[1.65rem] font-semibold leading-none tracking-tight transition-colors ${
                          item.href && isActive(item.href)
                            ? "text-accent"
                            : "text-bone"
                        }`}
                      >
                        {tNav(item.key)}
                        <span className="font-mono text-[10px] tracking-[0.2em] text-faint">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </Link>
                    </motion.div>
                  </div>
                ),
              )}
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
