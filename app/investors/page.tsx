import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CTASection } from "@/components/sections/cta-section";
import { StaggerGroup, StaggerItem, Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Investors",
  description:
    "Investing in the next generation of robotics. Cennzo Robotix is building a scalable humanoid robotics platform with hardware, software and recurring service value layers.",
};

const VALUE_LAYERS = [
  "Robot sales",
  "Robotics-as-a-Service",
  "Leasing",
  "Mission services",
  "Software",
  "AI capabilities",
  "Fleet management",
  "Predictive maintenance",
  "Data and analytics",
  "Lifecycle support",
  "Specialized payloads",
];

const THESIS = [
  {
    index: "01",
    title: "Large emerging robotics market",
  },
  {
    index: "02",
    title: "Platform-based product architecture",
  },
  {
    index: "03",
    title: "Multiple commercial applications",
  },
  {
    index: "04",
    title: "Recurring software and service opportunities",
  },
  {
    index: "05",
    title: "Expanding autonomy capabilities",
  },
  {
    index: "06",
    title: "Hardware + software integration",
  },
  {
    index: "07",
    title: "Long-term international market potential",
  },
];

export default function InvestorsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Investors"
        lines={["Investing In The Next", "Generation Of Robotics."]}
        intro="We are building a robotics platform, not a single product."
        meta="Cennzo Robotix is developing a scalable humanoid robotics platform designed to support multiple industries and mission configurations."
      />

      <section className="border-b border-black/[0.08]">
        <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-6 py-section md:px-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-mist">
                Long-Term Value Layers
              </p>
              <p className="mt-6 max-w-md text-body leading-relaxed text-mist">
                The opportunity extends beyond hardware.
              </p>
            </Reveal>
            <StaggerGroup stagger={0.04} className="mt-8">
              {VALUE_LAYERS.map((layer, i) => (
                <StaggerItem key={layer}>
                  <p className="flex items-baseline gap-5 border-b border-black/[0.08] py-3.5 text-sm text-mist transition-colors duration-300 hover:text-bone">
                    <span className="font-mono text-[9px] tracking-[0.2em] text-faint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {layer}
                  </p>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>

          <div className="lg:pt-24">
            <Reveal>
              <h2 className="text-headline font-semibold uppercase tracking-tight text-bone">
                Investment Thesis
              </h2>
            </Reveal>
            <StaggerGroup stagger={0.07} className="mt-10 space-y-6">
              {THESIS.map((item) => (
                <StaggerItem key={item.index}>
                  <div className="flex items-baseline gap-5 border-l border-black/[0.12] pl-6 transition-colors duration-300 hover:border-accent">
                    <span className="font-mono text-[10px] tracking-[0.25em] text-faint">
                      {item.index}
                    </span>
                    <p className="text-base font-medium text-bone">{item.title}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      <section className="border-b border-black/[0.08]">
        <div className="mx-auto w-full max-w-[1440px] px-6 pb-section md:px-10">
          <Reveal>
            <p className="max-w-3xl border-l-2 border-accent pl-8 font-mono text-[11px] leading-relaxed tracking-[0.08em] text-faint">
              INVESTOR MATERIALS SHOULD CONTAIN VERIFIED FINANCIAL ASSUMPTIONS,
              VALIDATED TECHNICAL MILESTONES, CAPITALIZATION DETAILS AND
              COMMERCIALLY DEFENSIBLE FORECASTS.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection
        lines={["Build With", "The Platform."]}
        body="Request the investor information package."
        primary={{ label: "Request Investor Information", href: "/contact" }}
        secondary={{ label: "About Cennzo", href: "/about" }}
      />
    </main>
  );
}
