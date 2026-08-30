import { describe, it, expect } from "vitest";
import { LOCALES, DEFAULT_LOCALE, isLocale, LANGUAGES } from "@/i18n/config";

describe("i18n config", () => {
  describe("LOCALES", () => {
    it("contains 10 locales", () => {
      expect(LOCALES).toHaveLength(10);
    });

    it("includes English as first locale", () => {
      expect(LOCALES[0]).toBe("en");
    });

    it("includes all expected locales", () => {
      expect(LOCALES).toContain("en");
      expect(LOCALES).toContain("hi");
      expect(LOCALES).toContain("ta");
      expect(LOCALES).toContain("te");
      expect(LOCALES).toContain("ml");
      expect(LOCALES).toContain("kn");
      expect(LOCALES).toContain("ja");
      expect(LOCALES).toContain("zh");
      expect(LOCALES).toContain("fr");
      expect(LOCALES).toContain("es");
    });
  });

  describe("DEFAULT_LOCALE", () => {
    it("is English", () => {
      expect(DEFAULT_LOCALE).toBe("en");
    });
  });

  describe("isLocale", () => {
    it("returns true for valid locales", () => {
      expect(isLocale("en")).toBe(true);
      expect(isLocale("hi")).toBe(true);
      expect(isLocale("ja")).toBe(true);
    });

    it("returns false for invalid locales", () => {
      expect(isLocale("de")).toBe(false);
      expect(isLocale("pt")).toBe(false);
    });

    it("returns false for undefined", () => {
      expect(isLocale(undefined)).toBe(false);
    });

    it("returns false for null", () => {
      expect(isLocale(null)).toBe(false);
    });

    it("returns false for empty string", () => {
      expect(isLocale("")).toBe(false);
    });
  });

  describe("LANGUAGES", () => {
    it("has entries for all locales", () => {
      expect(LANGUAGES).toHaveLength(LOCALES.length);
    });

    it("each entry has code, native, and english", () => {
      for (const lang of LANGUAGES) {
        expect(lang).toHaveProperty("code");
        expect(lang).toHaveProperty("native");
        expect(lang).toHaveProperty("english");
      }
    });

    it("English has correct native name", () => {
      const en = LANGUAGES.find((l) => l.code === "en");
      expect(en?.native).toBe("English");
    });

    it("Japanese has correct native name", () => {
      const ja = LANGUAGES.find((l) => l.code === "ja");
      expect(ja?.native).toBe("日本語");
    });
  });
});
