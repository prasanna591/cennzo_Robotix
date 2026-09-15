import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { SectorPage } from "@/components/sections/sector-page";
import { IMAGES } from "@/lib/content/images";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("spacePage.meta");
  return { title: t("title"), description: t("description") };
}

export default async function SpacePage() {
  return (
    <SectorPage
      namespace="spacePage"
      hero={IMAGES.spaceTwo}
      pillarImages={[
        IMAGES.wafeeStudio,
        IMAGES.mountainScene,
        IMAGES.spaceTwo,
        IMAGES.wafeeCinematic,
      ]}
    />
  );
}