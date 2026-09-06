import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CTASection } from "@/components/sections/cta-section";
import { StaggerGroup, StaggerItem, Reveal } from "@/components/motion/reveal";
import { MediaFrame } from "@/components/media/media-frame";
import { IMAGES } from "@/lib/content/images";

export const metadata: Metadata = {
  title: "Research & Engineering",
  description:
    "From first principles to field validation â€” Cennzo Robotix R&D across locomotion, actuation, perception, AI, materials, thermal management and digital engineering.",
};

const DOMAINS = [
  "Humanoid locomotion",
  "Whole-body control",
  "High-torque actuation",
  "Energy-dense power systems",
  "Thermal management",
  "Advanced materials",
  "Environmental protection",
  "Sensor fusion",
  "Robotic perception",
  "AI planning",
  "Manipulation",
  "Human-robot interaction",
  "Autonomous navigation",
  "Digital simulation",
  "Predictive maintenance",
  "Robot fleet intelligence",
];

const DIGITAL_TOOLS = [
  "CAD",
  "Multibody dynamics",
  "Finite element analysis",
  "Computational fluid dynamics",
  "Thermal simulation",
  "Electrical simulation",
  "Control simulation",
  "Digital twins",
  "Software-in-the-loop",
  "Hardware-in-the-loop",
];

const CYCLE = [
  "Design",
  "Simulation",
  "Prototype",
  "Bench Test",
  "Subsystem Validation",
  "Integrated Test",
  "Environmental Test",
  "Field Trial",
  "Production Readiness",
];

export default function ResearchPage() {
  return (
    <main>
      <PageHero
        eyebrow="Research & Engineering"
        lines={["From First Principles", "To Field Validation."]}
        intro="Deep-tech robotics is built through engineering discipline. Our R&D roadmap covers the full stack."
      />

      <section className="border-b border-black/[0.08]">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-section md:px-10">
          <Reveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-mist">
              Research Domains
            </p>
          </Reveal>
          <StaggerGroup
            stagger={0.03}
            className="mt-8 grid gap-x-12 sm:grid-cols-2 lg:grid-cols-4"
          >
            {DOMAINS.map((domain, i) => (
              <StaggerItem key={domain}>
                <p className="flex items-baseline gap-4 border-b border-black/[0.08] py-3.5 text-sm text-mist transition-colors duration-300 hover:text-bone">
                  <span className="font-mono text-[9px] tracking-[0.2em] text-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {domain}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="border-b border-black/[0.08]">
        <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-6 py-section md:px-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <h2 className="text-headline font-semibold tracking-tight text-bone">
                Digital Engineering
              </h2>
              <p className="mt-6 max-w-md text-body leading-relaxed text-mist">
                Before expensive physical testing, robotic systems can be
                evaluated through simulation.
              </p>
            </Reveal>
            <StaggerGroup stagger={0.04} className="mt-8 grid grid-cols-2 gap-x-8">
              {DIGITAL_TOOLS.map((tool) => (
                <StaggerItem key={tool}>
                  <p className="flex items-center gap-3 border-b border-black/[0.08] py-3 text-sm text-mist">
                    <span aria-hidden="true" className="h-1 w-1 shrink-0 rounded-full bg-faint" />
                    {tool}
                  </p>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>

          <Reveal delay={0.15}>
            <MediaFrame
              code="IMG-10"
              label="Digital Twin Simulation â€” Concept Visualization"
              ratio="16/9"
            src={IMAGES.seeThrough}
            />
            <div className="mt-10 border-l-2 border-accent pl-8 lg:mt-16">
              <p className="text-subhead leading-relaxed text-bone">
                Simulation does not replace physical validation.
              </p>
              <p className="mt-4 text-body leading-relaxed text-mist">
                It accelerates engineering decisions and reduces unnecessary
                prototype iterations.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-black/[0.08]">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-section md:px-10">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-mist">
              <span aria-hidden="true" className="h-px w-8 bg-accent" />
              Build â†’ Test â†’ Measure â†’ Learn
            </p>
            <h2 className="mt-6 max-w-2xl text-headline font-semibold tracking-tight text-bone">
              Every Subsystem Moves Through The Cycle.
            </h2>
          </Reveal>

          <StaggerGroup stagger={0.06} className="mt-14 flex flex-wrap gap-x-3 gap-y-4">
            {CYCLE.map((step, i) => (
              <StaggerItem key={step}>
                <span className="flex items-center gap-3">
                  <span
                    className={`inline-block border px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] ${
                      i === CYCLE.length - 1
                        ? "border-accent text-accent"
                        : "border-steel text-mist"
                    }`}
                  >
                    {step}
                  </span>
                  {i < CYCLE.length - 1 && (
                    <span aria-hidden="true" className="font-mono text-faint">â†’</span>
                  )}
                </span>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CTASection
        lines={["Engineering", "Is The Strategy."]}
        body="Collaborate with our research and engineering teams."
        primary={{ label: "Partner With Us", href: "/partnerships" }}
        secondary={{ label: "See the Technology", href: "/technology" }}
      />
    </main>
  );
}
