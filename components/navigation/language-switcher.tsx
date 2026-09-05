"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { LANGUAGES, LOCALE_COOKIE, type Locale } from "@/i18n/config";

export function LanguageSwitcher() {
  const router = useRouter();
  const locale = useLocale() as Locale;
  const t = useTranslations("header");
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("mousedown", onDown);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const pick = (code: Locale) => {
    setOpen(false);
    if (code === locale) return;
    document.cookie = `${LOCALE_COOKIE}=${code}; path=/; max-age=31536000; samesite=lax`;
    router.refresh();
  };

  const current = LANGUAGES.find((l) => l.code === locale);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("language")}
        title={t("language")}
        className="flex h-10 cursor-pointer items-center gap-2 rounded-full border border-black/[0.09] bg-white/60 px-4 transition-[border-color,background-color,transform] duration-300 hover:border-black/20 hover:bg-white active:translate-y-px"
      >
        <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="text-faint">
          <circle cx="8" cy="8" r="6.2" stroke="currentColor" strokeWidth="1.3" />
          <path d="M1.8 8h12.4M8 1.8c-4.4 4-4.4 8.4 0 12.4M8 1.8c4.4 4 4.4 8.4 0 12.4" stroke="currentColor" strokeWidth="1.3" />
        </svg>
        <span className="font-mono text-[10px] font-medium tracking-[0.18em] text-mist">
          {(current?.code ?? "en").toUpperCase()}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            aria-label={t("language")}
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.97 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 top-full z-[60] mt-2 w-44 overflow-hidden rounded-xl border border-black/[0.08] bg-white p-1 shadow-lift"
          >
            {LANGUAGES.map((lang) => {
              const active = lang.code === locale;
              return (
                <li key={lang.code}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={active}
                    onClick={() => pick(lang.code)}
                    className={`flex w-full cursor-pointer items-center justify-between rounded-lg px-3 py-2.5 text-left text-[13px] transition-colors duration-150 ${
                      active ? "bg-accent/[0.07] text-accent" : "text-bone hover:bg-charcoal/60"
                    }`}
                  >
                    <span>{lang.native}</span>
                    <span
                      className={`font-mono text-[9px] tracking-[0.15em] ${
                        active ? "text-accent" : "text-transparent"
                      }`}
                    >
                      ✓
                    </span>
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
