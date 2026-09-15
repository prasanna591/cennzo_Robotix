import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { SectorPage } from "@/components/sections/sector-page";
import { IMAGES } from "@/lib/content/images";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("aerospacePage.meta");
  return { title: t("title"), description: t("description") };
}

export default async function AerospacePage() {
  return (
    <SectorPage
      namespace="aerospacePage"
      hero={IMAGES.airPhoto}
      pillarImages={[
        IMAGES.airPhoto,
        IMAGES.logisticsScene,
        IMAGES.manufacturingScene,
        IMAGES.airFlying,
      ]}
    />
  );
}