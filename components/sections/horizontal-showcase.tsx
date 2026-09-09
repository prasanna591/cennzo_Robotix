"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import {
  useScroll,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import { WordReveal } from "@/components/motion/word-reveal";

export type ShowcaseItem = {
  title: string;
  body: string;
  tag: string;
  img?: string;
};

export function HorizontalShowcase({
  eyebrow,
  lines,
  items,
  children,
  headingScale = "display",
}: {
  eyebrow: string;
  lines: string[];
  items: ShowcaseItem[];
  children?: ReactNode;
  headingScale?: "display" | "headline";
}) {
  const wrapRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const hovering = useRef(false);
  const dragging = useRef(false);
  const [pinHeight, setPinHeight] = useState<number | null>(null);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const mqDesktop = window.matchMedia(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)"
    );
    const mqMobile = window.matchMedia("(max-width: 1023px)");

    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      const distance = Math.max(0, track.scrollWidth - window.innerWidth);
      if (mqDesktop.matches && distance > 0) {
        setPinHeight(window.innerHeight + distance);
      } else {
        setPinHeight(null);
      }
    };

    // On mobile the showcase runs as a continuous low-speed marquee unless the
    // user prefers reduced motion (falls back to a static drag-to-scroll row).
    const applied = reduced === null ? mqMobile.matches : mqMobile.matches && !reduced;
    setMobile(applied);

    measure();
    mqDesktop.addEventListener("change", measure);
    const onResize = () => {
      measure();
      setMobile(mqMobile.matches && reduced !== true);
    };
    window.addEventListener("resize", onResize);
    return () => {
      mqDesktop.removeEventListener("change", measure);
      window.removeEventListener("resize", onResize);
    };
  }, [reduced]);

  // Continuous low-speed marquee for the mobile track.
  useEffect(() => {
    if (!mobile || !trackRef.current) return;
    const track = trackRef.current;
    let raf = 0;
    let last = 0;
    let offset = 0;
    const speed = 0.1; // px per ms (@60fps ~100px/s) — deliberately slow

    const step = (now: number) => {
      if (last === 0) last = now;
      const dt = now - last;
      last = now;
      if (!hovering.current && !dragging.current) {
        offset = (offset + speed * dt) % (track.scrollWidth / 2);
        track.style.transform = `translate3d(${-offset}px, 0, 0)`;
      }
      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(raf);
      track.style.transform = "";
    };
  }, [mobile]);

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: pinHeight != null ? ["start start", "end end"] : undefined,
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const track = trackRef.current;
    if (!track) return;
    if (pinHeight == null) return;
    const maxScroll = track.scrollWidth - window.innerWidth;
    if (maxScroll <= 0) return;
    track.style.transform = `translateX(${-v * maxScroll}px)`;
    if (progressRef.current) {
      progressRef.current.style.transform = `scaleX(${v})`;
    }
  });

  const renderCards = () =>
    items.map((item, i) => (
      <article
        key={item.title}
        className="group relative flex h-[420px] w-[82vw] shrink-0 flex-col justify-between overflow-hidden rounded-3xl border border-black/[0.08] bg-graphite p-8 shadow-soft transition-colors duration-500 hover:border-faint sm:w-[54vw] md:p-10 lg:h-[46vh] lg:min-h-[340px] lg:w-[30vw] lg:max-w-[420px]"
      >
        {item.img ? (
          <div className="absolute inset-0">
            <Image
              src={item.img}
              alt=""
              fill
              sizes="(max-width: 640px) 82vw, (max-width: 1024px) 54vw, 30vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent"
            />
          </div>
        ) : null}
        <span
          aria-hidden="true"
          className="absolute left-0 top-0 z-10 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-accent to-teal transition-transform duration-700 ease-out group-hover:scale-x-100"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-20 -right-20 z-10 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(21,94,239,0.07),transparent_70%)] opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100"
        />
        <div className="flex items-start justify-between">
          <span className="relative font-mono text-[11px] tracking-[0.25em] text-white/60 transition-colors duration-300 group-hover:text-accent">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="relative rounded-full border border-white/20 bg-black/25 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm">
            {item.tag}
          </span>
        </div>
        <div className="relative">
          <h3 className="text-2xl font-semibold tracking-tight text-white">
            {item.title}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            {item.body}
          </p>
        </div>
      </article>
    ));

  return (
    <section
      ref={wrapRef}
      className="relative border-b border-black/[0.08]"
      style={pinHeight != null ? { height: pinHeight } : undefined}
    >
      <div
        className="flex flex-col justify-center py-20 md:py-16 lg:pt-2 lg:pb-28"
        style={
          pinHeight != null
            ? { position: "sticky", top: 0, height: "100vh" }
            : { minHeight: "100vh" }
        }
      >
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10">
          <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-mist">
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
            {eyebrow}
          </p>
          <h2
            className={`mt-4 max-w-3xl ${
              headingScale === "headline" ? "text-headline" : "text-display"
            } font-semibold leading-[1.05] tracking-[-0.02em] text-bone`}
          >
            <WordReveal lines={lines} />
          </h2>
          {children}
        </div>

        <div
          onPointerEnter={() => (hovering.current = true)}
          onPointerLeave={() => (hovering.current = false)}
          onPointerDown={() => (dragging.current = true)}
          onPointerUp={() => (dragging.current = false)}
          className={`mt-8 pb-6 [scrollbar-width:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden lg:mt-8 lg:pb-0 ${
            mobile && !reduced ? "overflow-hidden" : "overflow-x-auto"
          }`}
        >
          <div
            ref={trackRef}
            className={`flex w-max gap-5 px-6 will-change-transform md:px-10 lg:pl-[max(2.5rem,calc((100vw-1440px)/2+2.5rem))] ${
              mobile && !reduced ? "lg:pl-0" : ""
            }`}
          >
            {renderCards()}
            {mobile && !reduced ? (
              renderCards()
            ) : (
              <div
                aria-hidden="true"
                className="flex h-[420px] w-[40vw] shrink-0 items-center lg:h-[46vh] lg:min-h-[340px] lg:w-[24vw]"
              >
                <p className="font-mono text-[11px] uppercase leading-loose tracking-[0.22em] text-faint">
                  End of sequence
                  <span className="mt-3 block text-accent">
                    — Contact for a mission brief
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="mx-auto mt-8 hidden w-full max-w-[1440px] px-6 md:px-10 lg:block">
          <div className="h-px w-full overflow-hidden bg-black/[0.08]">
            <div
              ref={progressRef}
              className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-accent to-teal"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
