import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CTASection } from "@/components/sections/cta-section";
import { StaggerGroup, StaggerItem, Reveal } from "@/components/motion/reveal";
import { Spotlight } from "@/components/motion/spotlight";
import { MediaFrame } from "@/components/media/media-frame";
import { INDUSTRIES } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Industries | Cennzo Robotix",
  description:
    "Engineered for industries that cannot stop — manufacturing, energy, utilities, oil & gas, mining, construction, logistics, marine, infrastructure, government and space technology.",
};

export default function IndustriesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Industries"
        lines={["Engineered For Industries", "That Cannot Stop."]}
      />

      <section className="border-b border-black/[0.08]">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-section md:px-10">
          <Spotlight>
          <StaggerGroup
            stagger={0.04}
            className="grid gap-px overflow-hidden rounded-2xl border border-black/[0.1] bg-black/[0.1] shadow-soft sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {INDUSTRIES.map((industry, i) => (
              <StaggerItem key={industry}>
                <div className="spotlight-card group relative h-full bg-graphite p-7 transition-colors duration-500 hover:bg-charcoal/60 md:p-8">
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100"
                  />
                  <p className="font-mono text-[10px] tracking-[0.25em] text-faint transition-colors duration-300 group-hover:text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-4 text-base font-semibold tracking-tight text-bone">
                    {industry}
                  </p>
                </div>
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
              code="IMG-09"
              label="WAFEE on the Industrial Floor — Concept Visualization"
              ratio="21/9"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-b border-black/[0.08]">
        <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-6 py-section md:px-10 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <h2 className="text-headline font-semibold leading-tight tracking-[-0.01em] text-bone">
              The Value Of A Humanoid Is Not Its Shape.
              <span className="mt-2 block text-mist">It Is What It Can Do.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="border-l-2 border-accent pl-8">
              <p className="text-body leading-relaxed text-mist">
                A human-compatible robot can potentially use environments, tools
                and workflows that already exist.
              </p>
              <p className="mt-4 text-body leading-relaxed text-bone">
                That creates an opportunity to automate tasks without rebuilding
                every environment around the machine.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        lines={["Automate The Tasks", "Nobody Should Do."]}
        body="Explore a mission configuration for your industry."
        primary={{ label: "Start a Conversation", href: "/contact" }}
        secondary={{ label: "See Applications", href: "/applications" }}
      />
    </main>
  );
}
