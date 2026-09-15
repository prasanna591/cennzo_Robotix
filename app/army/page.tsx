import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { SectorPage } from "@/components/sections/sector-page";
import { IMAGES } from "@/lib/content/images";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("armyPage.meta");
  return { title: t("title"), description: t("description") };
}

export default async function ArmyPage() {
  return (
    <SectorPage
      namespace="armyPage"
      hero={IMAGES.armyScene}
      pillarImages={[
        IMAGES.armyScene,
        IMAGES.mountainScene,
        IMAGES.constructionScene,
        IMAGES.airPhoto,
      ]}
    />
  );
}