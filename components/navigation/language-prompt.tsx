"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { DEFAULT_LOCALE, LANGUAGES, LOCALE_COOKIE, type Locale } from "@/i18n/config";

function hasLocaleCookie() {
  return document.cookie
    .split("; ")
    .some((c) => c.startsWith(`${LOCALE_COOKIE}=`));
}

export function LanguagePrompt() {
  const router = useRouter();
  const locale = useLocale() as Locale;
  const t = useTranslations("langPrompt");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (hasLocaleCookie()) return;
    const id = window.setTimeout(() => setVisible(true), 900);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = prevOverflow;
    };
  }, [visible]);

  const choose = useCallback(
    (code: Locale) => {
      document.cookie = `${LOCALE_COOKIE}=${code}; path=/; max-age=31536000; samesite=lax`;
      setVisible(false);
      if (code !== locale) router.refresh();
    },
    [locale, router]
  );

  const skip = useCallback(() => choose(DEFAULT_LOCALE), [choose]);

  useEffect(() => {
    if (!visible) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") skip();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [visible, skip]);

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed inset-0 z-[92] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-bone/25 backdrop-blur-sm"
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={t("title")}
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-md overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-lift"
          >
            <span className="hairline-spectrum absolute inset-x-0 top-0 h-px opacity-80" />

            <div className="p-7 sm:p-8">
              <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-faint">
                System Setup · 01
              </p>
              <h2 className="mt-3 text-xl font-semibold tracking-tight text-bone">
                {t("title")}
              </h2>
              <p className="mt-2 text-[13px] leading-relaxed text-mist">
                {t("subtitle")}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-2">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => choose(lang.code)}
                    className="group cursor-pointer rounded-xl border border-black/[0.09] px-4 py-3 text-left transition-[border-color,background-color,transform] duration-200 hover:border-accent/50 hover:bg-accent/[0.05] active:translate-y-px"
                  >
                    <span className="block text-sm font-medium text-bone group-hover:text-accent">
                      {lang.native}
                    </span>
                    <span className="mt-0.5 block font-mono text-[9px] uppercase tracking-[0.18em] text-faint">
                      {lang.english}
                    </span>
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={skip}
                className="mt-5 w-full cursor-pointer rounded-lg py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-faint transition-colors duration-200 hover:text-bone active:translate-y-px"
              >
                {t("skip")}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
