import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";
import { DEFAULT_LOCALE, LOCALE_COOKIE, isLocale, type Locale } from "./config";

async function importMessages(locale: Locale) {
  switch (locale) {
    case "hi":
      return (await import("@/messages/hi.json")).default;
    case "ta":
      return (await import("@/messages/ta.json")).default;
    case "te":
      return (await import("@/messages/te.json")).default;
    case "ml":
      return (await import("@/messages/ml.json")).default;
    case "kn":
      return (await import("@/messages/kn.json")).default;
    case "ja":
      return (await import("@/messages/ja.json")).default;
    case "zh":
      return (await import("@/messages/zh.json")).default;
    case "fr":
      return (await import("@/messages/fr.json")).default;
    case "es":
      return (await import("@/messages/es.json")).default;
    default:
      return (await import("@/messages/en.json")).default;
  }
}

async function importBaseMessages() {
  return (await import("@/messages/en.json")).default;
}

function deepMerge(base: object, override: object): object {
  const out: Record<string, unknown> = { ...base };
  for (const [key, value] of Object.entries(override)) {
    if (
      value &&
      typeof value === "object" &&
      !Array.isArray(value) &&
      base[key as keyof object] &&
      typeof base[key as keyof object] === "object" &&
      !Array.isArray(base[key as keyof object])
    ) {
      out[key] = deepMerge(
        base[key as keyof object] as object,
        value as object
      );
    } else {
      out[key] = value;
    }
  }
  return out;
}

export default getRequestConfig(async () => {
  const store = await cookies();
  const cookieLocale = store.get(LOCALE_COOKIE)?.value;
  const locale: Locale = isLocale(cookieLocale) ? cookieLocale : DEFAULT_LOCALE;

  /* English is the canonical base — untranslated keys gracefully fall back */
  const messages = deepMerge(await importBaseMessages(), await importMessages(locale));

  return { locale, messages };
});
