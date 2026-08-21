import { Hero } from "@/components/hero/hero";
import { IntroSection } from "@/components/home/intro-section";
import { WafeeSection } from "@/components/home/wafee-section";
import { EnvironmentsSection } from "@/components/home/environments-section";
import { WhySection } from "@/components/home/why-section";
import { TechnologySection } from "@/components/home/technology-section";
import { ApplicationsSection } from "@/components/home/applications-section";
import { VisionSection } from "@/components/home/vision-section";
import { CTASection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <IntroSection />
      <WafeeSection />
      <EnvironmentsSection />
      <WhySection />
      <TechnologySection />
      <ApplicationsSection />
      <VisionSection />
      <CTASection
        lines={["The Next Frontier Is Not A Place.", "It Is A *Capability.*"]}
        body="We are building intelligent machines for the missions that matter."
        primary={{ label: "Partner With Cennzo", href: "/contact" }}
        secondary={{ label: "Explore WAFEE", href: "/wafee" }}
      />
    </main>
  );
}
