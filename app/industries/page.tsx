import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CTASection } from "@/components/sections/cta-section";
import { Reveal } from "@/components/motion/reveal";
import { MediaFrame } from "@/components/media/media-frame";
import { HorizontalShowcase, type ShowcaseItem } from "@/components/sections/horizontal-showcase";
import { INDUSTRIES } from "@/lib/content/site";

const INDUSTRY_DETAIL: Record<string, string> = {
  Manufacturing:
    "Machine tending, inspection and material handling on live floors — without stopping the line.",
  Energy: "Inspection and maintenance of plants, substations and renewables in high-risk zones.",
  Utilities: "Round-the-clock monitoring of critical infrastructure, day or night, any weather.",
  "Oil & Gas":
    "Confined-space entry, leak response and offshore operations where human exposure is costly.",
  Mining: "Deep-shaft reconnaissance and haulage support in unstable, low-visibility conditions.",
  Construction:
    "Site surveying, heavy-part positioning and progress verification across active projects.",
  Logistics: "Continuous loading, sorting and inventory flows inside warehouses that never sleep.",
  Marine: "Hull inspection, port operations and subsea support in corrosive, wave-beaten settings.",
  Infrastructure:
    "Bridge, tunnel and rail inspection without lane closures or scaffold crews.",
  Government:
    "Disaster response, reconnaissance and security patrol support for public agencies.",
  "Space Technology":
    "Terrain-ready mobility research for exploration beyond Earth's atmosphere.",
};

const SHOWCASE_ITEMS: ShowcaseItem[] = INDUSTRIES.filter(
  (industry) => INDUSTRY_DETAIL[industry]
).map((industry) => ({
  title: industry,
  tag: "Sector",
  body: INDUSTRY_DETAIL[industry],
}));

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
        lines={["Engineered For Industries", "That *Cannot Stop.*"]}
      />

      <HorizontalShowcase
        eyebrow="Sectors"
        lines={["Where WAFEE", "goes to *work.*"]}
        items={SHOWCASE_ITEMS}
      />

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
        lines={["Automate The Tasks", "*Nobody Should Do.*"]}
        body="Explore a mission configuration for your industry."
        primary={{ label: "Start a Conversation", href: "/contact" }}
        secondary={{ label: "See Applications", href: "/applications" }}
      />
    </main>
  );
}
