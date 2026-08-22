"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WordReveal } from "@/components/motion/word-reveal";

export type ShowcaseItem = {
  title: string;
  body: string;
  tag: string;
};

export function HorizontalShowcase({
  eyebrow,
  lines,
  items,
  children,
}: {
  eyebrow: string;
  lines: string[];
  items: ShowcaseItem[];
  children?: ReactNode;
}) {
  const wrapRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
      () => {
        const track = trackRef.current;
        const wrap = wrapRef.current;
        if (!track || !wrap) return;

        const distance = () => Math.max(0, track.scrollWidth - window.innerWidth);

        const tween = gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            onUpdate: (self) => {
              if (progressRef.current) {
                progressRef.current.style.transform = `scaleX(${self.progress})`;
              }
            },
          },
        });

        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      }
    );

    return () => mm.revert();
  }, []);

  return (
    <section ref={wrapRef} className="relative overflow-hidden border-b border-black/[0.08]">
      <div className="flex min-h-screen flex-col justify-center py-20 md:py-16 lg:min-h-screen lg:pt-2 lg:pb-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10">
          <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-mist">
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
            {eyebrow}
          </p>
          <h2 className="mt-4 max-w-3xl text-display font-semibold leading-[1.05] tracking-[-0.02em] text-bone">
            <WordReveal lines={lines} />
          </h2>
          {children}
        </div>

        <div className="mt-12 overflow-x-auto pb-6 lg:mt-10 lg:overflow-hidden lg:pb-0">
          <div
            ref={trackRef}
            className="flex w-max snap-x snap-mandatory gap-5 px-6 will-change-transform md:px-10 lg:snap-none lg:pl-[max(2.5rem,calc((100vw-1440px)/2+2.5rem))]"
          >
            {items.map((item, i) => (
              <article
                key={item.title}
                className="group relative flex h-[420px] w-[82vw] shrink-0 snap-center flex-col justify-between overflow-hidden rounded-3xl border border-black/[0.08] bg-graphite p-8 shadow-soft transition-colors duration-500 hover:border-faint sm:w-[54vw] md:p-10 lg:h-[46vh] lg:min-h-[340px] lg:w-[30vw] lg:max-w-[420px]"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-accent to-teal transition-transform duration-700 ease-out group-hover:scale-x-100"
                />
                <div
                  aria-hidden="true"
                  className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(21,94,239,0.07),transparent_70%)] opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100"
                />
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[11px] tracking-[0.25em] text-faint transition-colors duration-300 group-hover:text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-full border border-black/[0.08] px-3 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-faint">
                    {item.tag}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-bone">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-mist">
                    {item.body}
                  </p>
                </div>
              </article>
            ))}

            <div
              aria-hidden="true"
              className="flex h-[420px] w-[40vw] shrink-0 items-center lg:h-[46vh] lg:min-h-[340px] lg:w-[24vw]"
            >
              <p className="font-mono text-[11px] uppercase leading-loose tracking-[0.22em] text-faint">
                End of sequence
                <span className="mt-3 block text-accent">— Contact for a mission brief</span>
              </p>
            </div>
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
