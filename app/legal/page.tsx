import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Legal",
  description:
    "Privacy policy, terms of use, responsible AI & robotics principles, and safety & compliance information for Cennzo Robotix",
};

const SECTIONS = [
  {
    id: "privacy",
    title: "Privacy Policy",
    body: [
      "Cennzo Robotix respects your privacy. Information submitted through this website â€” such as your name, organization and contact details â€” is used solely to respond to your inquiry and is not sold or shared with third parties for marketing purposes",
      "This website does not use tracking cookies beyond what is strictly necessary for site operation. You may request deletion of any personal data you have shared with us at any time by contacting us",
    ],
  },
  {
    id: "terms",
    title: "Terms of Use",
    body: [
      "The content of this website is provided for general information about Cennzo Robotix and the WAFEE platform. It does not constitute a technical specification, an offer, or a contractual commitment",
      "All product descriptions, capabilities and environmental claims represent engineering targets or roadmap intentions under active development. Nothing on this site should be interpreted as a guarantee of performance",
      "All trademarks, text and visual assets are the property of Cennzo Robotix unless otherwise stated",
    ],
  },
  {
    id: "responsible-ai",
    title: "Responsible AI & Robotics",
    body: [
      "We believe autonomous systems must operate within defined safety boundaries, with traceability and human oversight where required",
      "Cennzo Robotix develops robotics for missions that reduce human exposure to danger. We pursue applications that improve safety, reach and operational capability, and we decline uses that conflict with responsible deployment principles and applicable law",
    ],
  },
  {
    id: "compliance",
    title: "Safety & Compliance",
    body: [
      "Safety is engineered into every layer of our platforms â€” mechanical, electrical, software and operational. Environmental capability claims will be published only after controlled laboratory testing, subsystem qualification and full-system validation",
      "Our validation philosophy separates design targets, prototype results, validated performance and certified performance. All deployments are subject to applicable law, safety requirements and responsible-use principles",
    ],
  },
];

export default function LegalPage() {
  return (
    <main>
      <PageHero
        eyebrow="Legal"
        lines={["Policies &", "Principles"]}
        meta="Last updated: August 2026"
      />

      <section className="border-b border-black/[0.08]">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-section md:px-10">
          <div className="max-w-3xl space-y-20">
            {SECTIONS.map((section) => (
              <Reveal key={section.id}>
                <article id={section.id} className="scroll-mt-28">
                  <h2 className="text-headline font-semibold uppercase tracking-tight text-bone">
                    {section.title}
                  </h2>
                  <div className="mt-6 space-y-5 text-body leading-relaxed text-mist">
                    {section.body.map((paragraph) => (
                      <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
