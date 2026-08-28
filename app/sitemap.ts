import type { MetadataRoute } from "next";

const ROUTES = [
  "",
  "/about",
  "/applications",
  "/careers",
  "/contact",
  "/industries",
  "/investors",
  "/legal",
  "/partnerships",
  "/platform",
  "/research",
  "/safety",
  "/technology",
  "/wafee",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://cennzo.com";
  const lastModified = new Date();

  return ROUTES.map((route) => ({
    url: `${base}${route}`,
    lastModified,
    changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "" ? 1 : 0.7,
  }));
}
