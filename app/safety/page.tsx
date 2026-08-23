import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CTASection } from "@/components/sections/cta-section";
import { StaggerGroup, StaggerItem, Reveal } from "@/components/motion/reveal";
import { Spotlight } from "@/components/motion/spotlight";
import { MediaFrame } from "@/components/media/media-frame";

export const metadata: Metadata = {
  title: "Validation & Safety",
  description:
    "Trust is engineered. Cennzo Robotix safety architecture across mechanical, electrical, software and operational layers â€” with a rigorous validation philosophy.",
};

const LAYERS = [
  {
    index: "01",
    name: "Mechanical Safety",
    points: [
      "Structural margins",
      "Joint limits",
      "Mechanical stops",
      "Controlled failure modes",
    ],
  },
  {
    index: "02",
    name: "Electrical Safety",
    points: [
      "Isolation",
      "Overcurrent protection",
      "Short-circuit protection",
      "Battery monitoring",
      "Emergency shutdown",
    ],
  },
  {
    index: "03",
    name: "Software Safety",
    points: [
      "Watchdogs",
      "Fault detection",
      "Safe-state transitions",
      "Control limits",
      "Redundant monitoring",
    ],
  },
  {
    index: "04",
    name: "Operational Safety",
    points: [
      "Geofencing",
      "Mission boundaries",
      "Human override",
      "Remote emergency stop",
      "Event logging",
    ],
  },
];

const VALIDATION_LEVELS = [
  {
    level: "Design Target",
    description: "An engineering objective. Not yet demonstrated.",
  },
  {
    level: "Prototype Result",
    description: "Observed on prototype hardware under test conditions.",
  },
  {
    level: "Validated Performance",
    description: "Confirmed through defined, documented test procedures.",
  },
  {
    level: "Certified Performance",
    description: "Verified by recognized third-party certification.",
  },
];

export default function SafetyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Validation & Safety"
        lines={["Trust Is Engineered."]}
        intro="A humanoid robot operating around people cannot rely on intelligence alone. Safety must exist at every layer."
      />

      <section className="border-b border-black/[0.08]">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-section md:px-10">
          <Reveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-mist">
              Safety Architecture
            </p>
          </Reveal>
          <Spotlight>
          <StaggerGroup
            stagger={0.1}
            className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-black/[0.1] bg-black/[0.1] shadow-soft sm:grid-cols-2 lg:grid-cols-4"
          >
            {LAYERS.map((layer) => (
              <StaggerItem key={layer.index}>
                <article className="spotlight-card group h-full bg-graphite p-8 transition-colors duration-500 hover:bg-charcoal/60">
                  <p className="font-mono text-[11px] tracking-[0.25em] text-faint transition-colors duration-300 group-hover:text-accent">
                    {layer.index}
                  </p>
                  <h2 className="mt-5 text-lg font-semibold tracking-tight text-bone">
                    {layer.name}
                  </h2>
                  <ul className="mt-5 space-y-2.5">
                    {layer.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm leading-relaxed text-mist"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-faint"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
          </Spotlight>
        </div>
      </section>

      <section className="border-b border-black/[0.08]">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-section md:px-10">
          <Reveal>
            <MediaFrame
              code="IMG-11"
              label="Environmental Test Chamber â€” Concept Visualization"
              ratio="16/9"
            src="/images/img-11-test-chamber.webp"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-b border-black/[0.08]">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-section md:px-10">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-mist">
              <span aria-hidden="true" className="h-px w-8 bg-accent" />
              Validation Philosophy
            </p>
            <h2 className="mt-6 max-w-3xl text-headline font-semibold leading-tight tracking-[-0.01em] text-bone">
              We Separate What We Claim From What We Have Proven.
            </h2>
            <p className="mt-6 max-w-xl text-body leading-relaxed text-mist">
              This distinction is essential to credible deep-tech engineering.
              Environmental capability claims will be supported by defined test
              conditions and documented validation.
            </p>
          </Reveal>

          <StaggerGroup stagger={0.08} className="mt-14 border-t border-black/[0.1]">
            {VALIDATION_LEVELS.map((item, i) => (
              <StaggerItem key={item.level}>
                <div className="group grid grid-cols-[auto_1fr] items-baseline gap-x-8 gap-y-2 border-b border-black/[0.1] py-6 md:grid-cols-[80px_320px_1fr]">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-faint transition-colors duration-300 group-hover:text-accent">
                    L{i + 1}
                  </span>
                  <span
                    className={`text-lg font-semibold tracking-tight ${
                      i === VALIDATION_LEVELS.length - 1 ? "text-accent" : "text-bone"
                    }`}
                  >
                    {item.level}
                  </span>
                  <span className="col-span-2 text-sm leading-relaxed text-mist md:col-span-1">
                    {item.description}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CTASection
        lines={["Credibility Is", "The Product."]}
        body="Review our validation approach for your deployment scenario."
        primary={{ label: "Contact Us", href: "/contact" }}
        secondary={{ label: "Explore WAFEE", href: "/wafee" }}
      />
    </main>
  );
}
