"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { viewportOnce } from "@/lib/animations";

export type DomainCard = {
  id: string;
  index: string;
  name: string;
  tag: string;
  missions: number;
  img?: string;
  bar?: string;
  chip?: string;
};

const GLYPHS = "01<>/#ABCDEF";
const SETTLE_FRAMES = 7;

function useDecode(target: string, active: boolean) {
  const [text, setText] = useState(target);

  useEffect(() => {
    if (!active) {
      setText(target);
      return;
    }
    let frame = 0;
    const id = setInterval(() => {
      frame += 1;
      setText(
        target
          .split("")
          .map((ch, idx) =>
            ch === " " || frame > SETTLE_FRAMES + idx * 2
              ? ch
              : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
          )
          .join("")
      );
      if (frame > SETTLE_FRAMES + target.length * 2) setText(target);
    }, 42);
    return () => clearInterval(id);
  }, [active, target]);

  return text;
}

const BRACKETS = [
  "left-3 top-3 border-l border-t -translate-x-1.5 -translate-y-1.5 group-hover:translate-x-0 group-hover:translate-y-0",
  "right-3 top-3 border-r border-t translate-x-1.5 -translate-y-1.5 group-hover:translate-x-0 group-hover:translate-y-0",
  "bottom-3 left-3 border-b border-l -translate-x-1.5 translate-y-1.5 group-hover:translate-x-0 group-hover:translate-y-0",
  "bottom-3 right-3 border-b border-r translate-x-1.5 translate-y-1.5 group-hover:translate-x-0 group-hover:translate-y-0",
];

function DomainTile({ domain, delay }: { domain: DomainCard; delay: number }) {
  const reduced = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const decodedIndex = useDecode(domain.index, hovered);

  const jump = () => {
    const el = document.getElementById(domain.id);
    if (!el) return;
    window.scrollTo({ top: el.offsetTop - 120, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <motion.button
      initial={reduced ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      onClick={jump}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-black/[0.08] bg-graphite p-7 text-left shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-faint hover:shadow-lift"
    >
      <span
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-700 ease-out group-hover:scale-x-100 ${
          domain.bar || "bg-gradient-to-r from-accent to-teal"
        }`}
      />

      {domain.img && (
        <>
          <Image
            src={domain.img}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover opacity-80 transition-all duration-700 group-hover:scale-[1.04] group-hover:opacity-100"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-graphite via-graphite/45 to-transparent transition-opacity duration-500"
          />
        </>
      )}

      {BRACKETS.map((pos) => (
        <span
          key={pos}
          aria-hidden="true"
          className={`absolute h-4 w-4 border-accent/70 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 ${pos}`}
        />
      ))}

      <div
        aria-hidden="true"
        className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(21,94,239,0.08),transparent_70%)] opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100"
      />

      <div className="relative flex items-start justify-between">
        <span className="relative font-mono text-[10px] tracking-[0.25em] text-faint transition-colors duration-300 group-hover:text-accent">
          {hovered && !reduced && (
            <span aria-hidden="true" className="absolute -right-5 top-1/2 flex h-2 w-2 -translate-y-1/2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
          )}
          {decodedIndex}
        </span>
        <span
          className={`rounded-full border px-3 py-1 font-mono text-[9px] uppercase tracking-[0.18em] transition-colors duration-300 ${
            domain.chip ||
            "border-black/[0.08] text-faint group-hover:border-accent/30 group-hover:text-accent"
          }`}
        >
          {domain.tag}
        </span>
      </div>

      <h3 className="relative mt-6 text-xl font-semibold tracking-tight text-bone md:text-2xl">
        {domain.name}
      </h3>

      <div className="relative mt-6 flex items-center justify-between">
        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-faint">
          {domain.missions} mission{domain.missions === 1 ? "" : "s"}
        </span>
        <span
          aria-hidden="true"
          className={`font-mono text-lg transition-all duration-300 ${
            reduced
              ? "text-faint"
              : "translate-x-0 text-faint group-hover:translate-x-1.5 group-hover:text-accent"
          }`}
        >
          &rarr;
        </span>
      </div>
    </motion.button>
  );
}

export function DomainGrid({ domains }: { domains: DomainCard[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {domains.map((domain, i) => (
        <DomainTile key={domain.id} domain={domain} delay={(i % 3) * 0.08} />
      ))}
    </div>
  );
}
