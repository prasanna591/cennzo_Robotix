import { getTranslations } from "next-intl/server";
import { Hero } from "@/components/hero/hero";
import { IntroSection } from "@/components/home/intro-section";
import { WafeeSection } from "@/components/home/wafee-section";
import { EnvironmentsSection } from "@/components/home/environments-section";
import { WhySection } from "@/components/home/why-section";
import { TechnologySection } from "@/components/home/technology-section";
import { ApplicationsSection } from "@/components/home/applications-section";
import { VisionSection } from "@/components/home/vision-section";
import { CTASection } from "@/components/sections/cta-section";

export default async function Home() {
  const t = await getTranslations("home");

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
        lines={[t("ctaL1"), t("ctaL2")]}
        body={t("ctaBody")}
        primary={{ label: t("ctaPrimary"), href: "/contact" }}
        secondary={{ label: t("ctaSecondary"), href: "/wafee" }}
      />
    </main>
  );
}
