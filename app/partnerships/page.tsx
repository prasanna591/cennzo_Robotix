import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CTASection } from "@/components/sections/cta-section";
import { StaggerGroup, StaggerItem, Reveal } from "@/components/motion/reveal";
import { MediaFrame } from "@/components/media/media-frame";
import { PARTNER_TYPES } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Partnerships",
  description:
    "Build the future with us. Technology, industrial, research, manufacturing and government partnerships around the WAFEE humanoid robotics platform.",
};

export default function PartnershipsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Partnerships"
        lines={["Build The Future", "With Us."]}
        intro="No deep-tech company builds the future alone. Cennzo Robotix is building an ecosystem across robotics, AI, advanced materials, motors and actuators, batteries, sensors, manufacturing, simulation, aerospace, research and industrial deployment."
      />

      <section className="border-b border-black/[0.08]">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-section md:px-10">
          <StaggerGroup stagger={0.07} className="border-t border-black/[0.1]">
            {PARTNER_TYPES.map((partner) => (
              <StaggerItem key={partner.index}>
                <div className="group grid grid-cols-[auto_1fr] items-baseline gap-x-8 gap-y-2 border-b border-black/[0.1] py-7 transition-colors duration-300 hover:bg-graphite/40 md:grid-cols-[80px_1fr_1.2fr]">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-faint transition-colors duration-300 group-hover:text-accent">
                    {partner.index}
                  </span>
                  <h2 className="text-xl font-semibold tracking-tight text-mist transition-colors duration-300 group-hover:text-bone md:text-2xl">
                    {partner.title}
                  </h2>
                  <p className="col-span-2 max-w-xl text-sm leading-relaxed text-faint transition-colors duration-300 group-hover:text-mist md:col-span-1">
                    {partner.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal delay={0.1}>
            <p className="mt-12 max-w-2xl font-mono text-[11px] leading-relaxed tracking-[0.06em] text-faint">
              YOUR TECHNOLOGY COULD BECOME PART OF THE NEXT GENERATION OF
              INTELLIGENT MACHINES.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-16">
            <MediaFrame
              code="IMG-13"
              label="The Cennzo Robotix Partner Ecosystem â€” Concept"
              ratio="21/9"
            src="/images/img-13-ecosystem.webp"
            />
          </Reveal>
        </div>
      </section>

      <CTASection
        lines={["Become A Partner."]}
        body="Bring your technology, your mission problems or your capital to the platform."
        primary={{ label: "Become a Partner", href: "/contact" }}
        secondary={{ label: "Investor Information", href: "/investors" }}
      />
    </main>
  );
}
