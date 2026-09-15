import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { SectorPage } from "@/components/sections/sector-page";
import { IMAGES } from "@/lib/content/images";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("defencePage.meta");
  return { title: t("title"), description: t("description") };
}

export default async function DefencePage() {
  return (
    <SectorPage
      namespace="defencePage"
      hero={IMAGES.wafeeCinematic}
      pillarImages={[
        IMAGES.armyScene,
        IMAGES.constructionScene,
        IMAGES.wafeeCinematic,
        IMAGES.fire,
      ]}
    />
  );
}