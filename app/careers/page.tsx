import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CTASection } from "@/components/sections/cta-section";
import { StaggerGroup, StaggerItem, Reveal } from "@/components/motion/reveal";
import { MediaFrame } from "@/components/media/media-frame";

export const metadata: Metadata = {
  title: "Robotics Careers | Cennzo Robotix",
  description:
    "Build machines that change what is possible. Open domains across robotics, mechanical, electrical, embedded, AI/ML, control, thermal, materials and software engineering.",
};

const DOMAINS = [
  "Robotics",
  "Mechanical Engineering",
  "Mechatronics",
  "Electrical Engineering",
  "Embedded Systems",
  "Motor Control",
  "Power Electronics",
  "Battery Systems",
  "AI/ML",
  "Computer Vision",
  "Reinforcement Learning",
  "Motion Planning",
  "Control Systems",
  "Thermal Engineering",
  "Materials Engineering",
  "CAD & Simulation",
  "Manufacturing",
  "Product Design",
  "Software Engineering",
  "Testing & Validation",
];

const CULTURE = [
  "Think deeply.",
  "Build quickly.",
  "Test honestly.",
  "Learn continuously.",
  "Take ownership.",
  "Respect safety.",
  "Solve real problems.",
];

export default function CareersPage() {
  return (
    <main>
      <PageHero
        eyebrow="Careers"
        lines={["Build Machines That", "Change What Is Possible."]}
        intro="If you want to build the future, build it with us."
        meta="Don't just work in robotics. Push robotics forward."
      />

      <section className="border-b border-black/[0.08]">
        <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-6 py-section md:px-10 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-mist">
                Open Domains
              </p>
              <p className="mt-6 max-w-lg text-body leading-relaxed text-mist">
                We are looking for engineers, researchers, designers, builders
                and problem solvers who want to work on difficult problems with
                real physical consequences.
              </p>
            </Reveal>
            <StaggerGroup
              stagger={0.02}
              className="mt-10 grid gap-x-10 sm:grid-cols-2"
            >
              {DOMAINS.map((domain) => (
                <StaggerItem key={domain}>
                  <p className="flex items-center gap-3 border-b border-black/[0.08] py-3 text-sm text-mist transition-colors duration-300 hover:text-bone">
                    <span aria-hidden="true" className="h-1 w-1 shrink-0 rounded-full bg-faint" />
                    {domain}
                  </p>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>

          <div className="lg:pt-24">
            <Reveal delay={0.1}>
              <MediaFrame
                code="IMG-12"
                label="Life at Cennzo Robotix — Culture Concept"
                ratio="16/9"
              />
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 rounded-2xl border border-black/[0.1] bg-graphite p-8 shadow-soft md:p-10">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                  Culture
                </p>
                <div className="mt-6 space-y-3">
                  {CULTURE.map((line) => (
                    <p
                      key={line}
                      className="text-xl font-semibold tracking-tight text-bone"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection
        lines={["Push Robotics Forward."]}
        body="Send your profile and tell us what you want to build."
        primary={{ label: "View Open Roles", href: "/contact" }}
        secondary={{ label: "Send Your Profile", href: "/contact" }}
      />
    </main>
  );
}
