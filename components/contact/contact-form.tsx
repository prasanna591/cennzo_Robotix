"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { DURATION, EASE } from "@/lib/animations";

const INPUT_CLASS =
  "w-full cursor-text rounded-xl border border-steel bg-white px-4 py-3.5 text-sm text-bone placeholder:text-faint transition-all duration-300 focus:border-accent focus:shadow-[0_0_0_1px_rgba(21,94,239,0.35),0_0_24px_rgba(21,94,239,0.12)] focus:outline-none";

const LABEL_CLASS = "mb-2 block font-mono text-[10px] uppercase tracking-[0.22em] text-mist";

const ERROR_CLASS = "mt-2 font-mono text-[9px] uppercase tracking-[0.14em] text-red-600";

type Errors = { name?: string; email?: string; message?: string };

const EMAIL_RE = /^\S+@\S+\.\S+$/;

const CONTACT_EMAIL = "info@cennzo.com";

function buildMailto(data: FormData): string {
  const get = (key: string) => String(data.get(key) ?? "").trim();
  const interest = get("interest");
  const subject = `Website Inquiry${interest ? ` — ${interest}` : ""}`;
  const lines = [
    `Name: ${get("name")}`,
    get("company") ? `Company: ${get("company")}` : "",
    `Email: ${get("email")}`,
    get("phone") ? `Phone: ${get("phone")}` : "",
    get("country") ? `Country: ${get("country")}` : "",
    get("orgType") ? `Organization Type: ${get("orgType")}` : "",
    interest ? `Area of Interest: ${interest}` : "",
    "",
    "Message:",
    get("message"),
  ].filter(Boolean);
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(lines.join("\n"))}`;
}

function validateField(
  field: keyof Errors,
  value: string,
  messages: (key: string) => string
): string | undefined {
  const v = value.trim();
  if (field === "name") {
    if (!v) return messages("errors.nameRequired");
    if (v.length < 2) return messages("errors.nameShort");
  }
  if (field === "email") {
    if (!v) return messages("errors.emailRequired");
    if (!EMAIL_RE.test(v)) return messages("errors.emailInvalid");
  }
  if (field === "message") {
    if (!v) return messages("errors.messageRequired");
    if (v.length < 10) return messages("errors.messageShort");
  }
  return undefined;
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [msgCount, setMsgCount] = useState(0);
  const t = useTranslations("contactPage.form");

  const handleBlur = (field: keyof Errors, value: string) => {
    const error = validateField(field, value, t);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nextErrors: Errors = {
      name: validateField("name", String(data.get("name") ?? ""), t),
      email: validateField("email", String(data.get("email") ?? ""), t),
      message: validateField("message", String(data.get("message") ?? ""), t),
    };
    setErrors(nextErrors);
    if (!nextErrors.name && !nextErrors.email && !nextErrors.message) {
      window.location.href = buildMailto(data);
      setSubmitted(true);
    }
  };

  const inputState = (field: keyof Errors) =>
    errors[field] ? "border-red-500" : "";

  const orgTypes = t.raw("options.orgTypes") as string[];
  const interests = t.raw("options.interests") as string[];

  return (
    <div className="relative rounded-2xl border border-black/[0.1] bg-graphite p-8 shadow-soft md:p-12">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.standard, ease: EASE.out }}
            className="flex min-h-[480px] flex-col items-center justify-center text-center"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-accent">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <motion.path
                  d="M4 12.5 9.5 18 20 6.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="text-accent"
                  strokeLinecap="square"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                />
              </svg>
            </span>
            <h2 className="mt-8 text-headline font-semibold tracking-tight text-bone">
              {t("success.title")}
            </h2>
            <p className="mt-4 max-w-sm text-body leading-relaxed text-mist">
              {t.rich("success.body", {
                email: (chunks) => (
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-accent underline-offset-4 transition-colors duration-300 hover:underline"
                  >
                    {chunks}
                  </a>
                ),
              })}
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setErrors({});
                setMsgCount(0);
              }}
              className="mt-10 cursor-pointer border border-steel px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-bone transition-[border-color,color,transform] duration-300 hover:border-accent hover:text-accent active:translate-y-px"
            >
              {t("success.again")}
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: DURATION.fast }}
            className="grid gap-6 sm:grid-cols-2"
          >
            <div>
              <label htmlFor="name" className={LABEL_CLASS}>
                {t("labels.name")}
              </label>
              <input
                id="name"
                name="name"
                required
                aria-invalid={Boolean(errors.name)}
                onBlur={(e) => handleBlur("name", e.target.value)}
                className={`${INPUT_CLASS} ${inputState("name")}`}
                placeholder={t("placeholders.name")}
              />
              {errors.name && <p className={ERROR_CLASS}>{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="company" className={LABEL_CLASS}>
                {t("labels.company")}
              </label>
              <input id="company" name="company" className={INPUT_CLASS} placeholder={t("placeholders.company")} />
            </div>
            <div>
              <label htmlFor="email" className={LABEL_CLASS}>
                {t("labels.email")}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                aria-invalid={Boolean(errors.email)}
                onBlur={(e) => handleBlur("email", e.target.value)}
                className={`${INPUT_CLASS} ${inputState("email")}`}
                placeholder={t("placeholders.email")}
              />
              {errors.email && <p className={ERROR_CLASS}>{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="phone" className={LABEL_CLASS}>
                {t("labels.phone")}
              </label>
              <input id="phone" name="phone" type="tel" className={INPUT_CLASS} placeholder="+1 000 000 0000" />
            </div>
            <div>
              <label htmlFor="country" className={LABEL_CLASS}>
                {t("labels.country")}
              </label>
              <input id="country" name="country" className={INPUT_CLASS} placeholder={t("placeholders.country")} />
            </div>
            <div>
              <label htmlFor="org-type" className={LABEL_CLASS}>
                {t("labels.orgType")}
              </label>
              <select
                id="org-type"
                name="orgType"
                className={`${INPUT_CLASS} cursor-pointer appearance-none`}
                defaultValue=""
              >
                <option value="" disabled>
                  {t("selectOrgType")}
                </option>
                {orgTypes.map((type) => (
                  <option key={type} value={type} className="bg-void">
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="interest" className={LABEL_CLASS}>
                {t("labels.interest")}
              </label>
              <select
                id="interest"
                name="interest"
                className={`${INPUT_CLASS} cursor-pointer appearance-none`}
                defaultValue=""
              >
                <option value="" disabled>
                  {t("selectInterest")}
                </option>
                {interests.map((item) => (
                  <option key={item} value={item} className="bg-void">
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <div className="flex items-baseline justify-between">
                <label htmlFor="message" className={LABEL_CLASS}>
                  {t("labels.message")}
                </label>
                <span className="font-mono text-[9px] tabular-nums tracking-[0.18em] text-faint">
                  {msgCount} / 1000
                </span>
              </div>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                maxLength={1000}
                aria-invalid={Boolean(errors.message)}
                aria-describedby="message-counter"
                onChange={(e) => {
                  setMsgCount(e.target.value.length);
                  if (errors.message) {
                    setErrors((prev) => ({
                      ...prev,
                      message: validateField("message", e.target.value, t),
                    }));
                  }
                }}
                onBlur={(e) => handleBlur("message", e.target.value)}
                className={`${INPUT_CLASS} resize-y ${inputState("message")}`}
                placeholder={t("placeholders.message")}
              />
              {errors.message && <p className={ERROR_CLASS}>{errors.message}</p>}
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="btn-sheen btn-primary group inline-flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl px-7 py-4 text-xs font-medium uppercase tracking-[0.14em] text-white sm:w-auto"
              >
                <span>{t("submit")}</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className="transition-transform duration-300 ease-out group-hover:translate-x-1"
                >
                  <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                </svg>
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
