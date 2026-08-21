"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FOOTER_EXPLORE,
  FOOTER_COMPANY,
  FOOTER_LEGAL,
} from "@/lib/content/site";
import { DURATION, EASE, viewportOnce } from "@/lib/animations";

const SOCIALS = ["LinkedIn", "YouTube", "Instagram", "X"];

function MissionClock() {
  const reduced = useReducedMotion();
  const [utc, setUtc] = useState("--:--:--");

  useEffect(() => {
    if (reduced) return;
    const tick = () => setUtc(new Date().toISOString().slice(11, 19));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [reduced]);

  return (
    <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-faint tabular-nums">
      <span aria-hidden="true" className="h-1 w-1 rounded-full bg-teal" />
      UTC {utc} · 24.71°N 46.68°E
    </p>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-faint">
        {title}
      </p>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="group relative inline-block cursor-pointer text-[13px] text-mist transition-colors duration-300 hover:text-bone"
            >
              {link.label}
              <span
                aria-hidden="true"
                className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-black/[0.08] bg-void">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
      />

      <div className="mx-auto w-full max-w-[1440px] px-6 pb-10 pt-20 md:px-10 md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: DURATION.standard, ease: EASE.out }}
          className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]"
        >
          <div>
            <Link href="/" className="flex items-baseline gap-2" aria-label="Cennzo Robotix — Home">
              <span className="text-lg font-semibold tracking-[0.22em] text-bone">
                CENNZO
              </span>
              <span className="font-mono text-[11px] font-medium tracking-[0.3em] text-mist">
                ROBOTIX
              </span>
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-mist">
              Building intelligent robotic systems for complex and demanding
              environments.
            </p>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.3em] text-faint">
              Innovate · Automate · Elevate
            </p>
          </div>

          <FooterColumn title="Explore" links={FOOTER_EXPLORE} />
          <FooterColumn title="Company" links={FOOTER_COMPANY} />
          <div>
            <FooterColumn title="Legal" links={FOOTER_LEGAL} />
            <div className="mt-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-faint">
                Follow
              </p>
              <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
                {SOCIALS.map((social) => (
                  <li
                    key={social}
                    className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint"
                  >
                    {social}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <div className="mt-20 select-none overflow-hidden" aria-hidden="true">
          <motion.p
            initial={{ y: "40%", opacity: 0 }}
            whileInView={{ y: "12%", opacity: 1 }}
            viewport={{ once: true, margin: "-5% 0px" }}
            transition={{ duration: DURATION.cinematic + 0.4, ease: EASE.out }}
            className="whitespace-nowrap bg-[linear-gradient(180deg,rgba(37,99,235,0.22),rgba(37,99,235,0.03))] bg-clip-text text-center text-[clamp(3rem,11vw,10rem)] font-semibold uppercase leading-none tracking-[-0.02em] text-transparent"
          >
            Cennzo Robotix
          </motion.p>
        </div>

        <div className="mt-6 flex flex-col gap-4 border-t border-black/[0.08] pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
            © 2026 Cennzo Robotix. All rights reserved.
          </p>
          <MissionClock />
          <p className="max-w-md font-mono text-[10px] normal-case leading-relaxed tracking-[0.05em] text-faint">
            The future belongs to machines that can understand the world, move
            through it and act within it.
          </p>
        </div>
      </div>
    </footer>
  );
}
