"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { DURATION, EASE } from "@/lib/animations";
import { IMAGES } from "@/lib/content/images";

type ProductCard = {
  title: string;
  desc: string;
  href: string;
  image: string;
};

type MenuLink = {
  label: string;
  href: string;
  image?: string;
};

const tabVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: DURATION.fast, ease: EASE.out },
};

export function ProductsMegaMenu({
  onNavigate,
}: {
  onNavigate: () => void;
}) {
  const tNav = useTranslations("nav");
  const tFooter = useTranslations("footer");
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const [tab, setTab] = useState<"products" | "solutions">("products");

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const products: ProductCard[] = [
    {
      title: tNav("productsWafee"),
      desc: tNav("productsWafeeDesc"),
      href: "/wafee",
      image: "/new_image/updated_hero.png",
    },
    {
      title: tNav("productsIndustry"),
      desc: tNav("productsIndustryDesc"),
      href: "/industries",
      image: "/new_image/industry_robot.png",
    },
    {
      title: tNav("productsHousehold"),
      desc: tNav("productsHouseholdDesc"),
      href: "/household",
      image: "/new_image/friendlyrobot.png",
    },
  ];

  const sectors: MenuLink[] = [
    { label: tNav("army"), href: "/army", image: IMAGES.armyScene },
    { label: tNav("aerospace"), href: "/aerospace", image: IMAGES.airPhoto },
    { label: tNav("space"), href: "/space", image: IMAGES.spaceTwo },
    { label: tNav("defence"), href: "/defence", image: IMAGES.wafeeCinematic },
  ];

  const solutions: MenuLink[] = [
    { label: tFooter("linkApplications"), href: "/applications" },
    { label: tFooter("linkPlatform"), href: "/platform" },
    { label: tNav("technology"), href: "/technology" },
    { label: tFooter("linkResearch"), href: "/research" },
    { label: tFooter("linkSafety"), href: "/safety" },
    { label: tFooter("linkPartnerships"), href: "/partnerships" },
  ];

  const arrow = (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="h-3.5 w-3.5 shrink-0 text-accent"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
  );

  return (
    <div className="relative overflow-hidden rounded-2xl border border-black/[0.06] bg-white/95 shadow-lift backdrop-blur-xl">
      <span
        aria-hidden="true"
        className="hairline-spectrum absolute inset-x-0 top-0 h-px"
      />

      {/* Tab bar */}
      <div role="tablist" className="relative flex items-center gap-2 px-6 pt-5">
        {(["products", "solutions"] as const).map((t) => (
          <button
            key={t}
            type="button"
            role="tab"
            aria-selected={tab === t}
            onClick={() => setTab(t)}
            className={`relative px-4 py-2.5 text-[12px] font-semibold uppercase tracking-[0.16em] transition-colors duration-300 ${
              tab === t ? "text-bone" : "text-mist hover:text-bone"
            }`}
          >
            {t === "products" ? tNav("products") : tNav("solutionsTab")}
            {tab === t && (
              <motion.span
                layoutId="mega-tab-underline"
                className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-accent via-violet-500 to-teal"
              />
            )}
          </button>
        ))}
        <span className="ml-auto hidden pr-2 font-mono text-[10px] uppercase tracking-[0.25em] text-faint sm:block">
          Innovate · Automate · Elevate
        </span>
      </div>

      {/* Tab content */}
      <div className="px-5 pb-5 pt-4">
        <AnimatePresence mode="wait" initial={false}>
          {tab === "products" ? (
            <motion.div key="products" {...(reduced ? {} : tabVariants)}>
              {/* Product cards */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {products.map((product) => (
                  <Link
                    key={product.href}
                    href={product.href}
                    onClick={onNavigate}
                    aria-current={
                      isActive(product.href) ? "page" : undefined
                    }
                    className={`group/card relative flex flex-col overflow-hidden rounded-xl border p-3 transition-all duration-300 hover:border-accent/30 hover:bg-void/[0.03] ${
                      isActive(product.href)
                        ? "border-accent/30 bg-void/[0.03]"
                        : "border-black/[0.05] bg-void/[0.02]"
                    }`}
                  >
                    <div className="relative h-40 w-full overflow-hidden rounded-lg bg-void">
                      <Image
                        src={product.image}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-contain object-center transition-transform duration-500 group-hover/card:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col pt-4">
                      <h3
                        className={`text-[15px] font-semibold tracking-tight transition-colors ${
                          isActive(product.href) ? "text-accent" : "text-bone"
                        }`}
                      >
                        {product.title}
                      </h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-mist">
                        {product.desc}
                      </p>
                      <span className="mt-auto flex items-center gap-1.5 pt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                        {tNav("explore")}
                        <span className="transition-transform duration-200 group-hover/card:translate-x-0.5">
                          {arrow}
                        </span>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Sectors */}
              <div className="mt-5 border-t border-black/[0.05] pt-4">
                <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-faint">
                  <span className="h-px w-6 bg-accent" />
                  {tNav("sectors")}
                </p>
                <div className="mt-3 grid grid-cols-2 gap-3 lg:grid-cols-4">
                  {sectors.map((sector) => (
                    <Link
                      key={sector.href}
                      href={sector.href}
                      onClick={onNavigate}
                      aria-current={
                        isActive(sector.href) ? "page" : undefined
                      }
                      className={`group/sector flex items-center gap-3 rounded-xl border p-3 transition-all duration-300 hover:border-accent/30 hover:bg-void/[0.03] ${
                        isActive(sector.href)
                          ? "border-accent/30 bg-void/[0.04]"
                          : "border-black/[0.05] bg-void/[0.02]"
                      }`}
                    >
                      {sector.image && (
                        <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-void">
                          <Image
                            src={sector.image}
                            alt=""
                            fill
                            sizes="40px"
                            className="object-contain object-center transition-transform duration-300 group-hover/sector:scale-110"
                          />
                        </span>
                      )}
                      <span className="flex min-w-0 flex-1 items-center justify-between gap-2">
                        <span
                          className={`truncate text-[12px] font-semibold uppercase tracking-[0.14em] transition-colors ${
                            isActive(sector.href) ? "text-accent" : "text-bone"
                          }`}
                        >
                          {sector.label}
                        </span>
                        <span className="shrink-0 opacity-60 transition-opacity duration-200 group-hover/sector:opacity-100">
                          {arrow}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="solutions"
              {...(reduced ? {} : tabVariants)}
              className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3"
            >
              {solutions.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onNavigate}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`group/link flex items-center justify-between gap-4 rounded-xl border px-3.5 py-3 transition-all duration-200 hover:border-accent/30 hover:bg-void/[0.03] ${
                    isActive(link.href)
                      ? "border-accent/30 bg-void/[0.03] text-accent"
                      : "border-black/[0.05] bg-void/[0.02] text-mist"
                  }`}
                >
                  <span className="text-[12px] font-medium uppercase tracking-[0.14em] transition-colors duration-200 group-hover/link:text-bone">
                    {link.label}
                  </span>
                  <span className="opacity-0 transition-opacity duration-200 group-hover/link:opacity-100">
                    {arrow}
                  </span>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Power footer */}
      <div className="flex items-center gap-2 px-6 py-3.5">
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-[2px] bg-teal shadow-[0_0_10px_rgba(0,168,168,0.55)]" />
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-faint">
          Earth / Water / Fire / Air / Space
        </p>
      </div>
    </div>
  );
}