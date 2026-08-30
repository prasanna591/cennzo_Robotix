export const LOCALES = [
  "en",
  "hi",
  "ta",
  "te",
  "ml",
  "kn",
  "ja",
  "zh",
  "fr",
  "es",
] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_COOKIE = "NEXT_LOCALE";

export const LANGUAGES: {
  code: Locale;
  native: string;
  english: string;
}[] = [
  { code: "en", native: "English", english: "English" },
  { code: "hi", native: "हिन्दी", english: "Hindi" },
  { code: "ta", native: "தமிழ்", english: "Tamil" },
  { code: "te", native: "తెలుగు", english: "Telugu" },
  { code: "ml", native: "മലയാളം", english: "Malayalam" },
  { code: "kn", native: "ಕನ್ನಡ", english: "Kannada" },
  { code: "ja", native: "日本語", english: "Japanese" },
  { code: "zh", native: "中文", english: "Chinese" },
  { code: "fr", native: "Français", english: "French" },
  { code: "es", native: "Español", english: "Spanish" },
];

export function isLocale(value: string | undefined | null): value is Locale {
  return Boolean(value && (LOCALES as readonly string[]).includes(value));
}
