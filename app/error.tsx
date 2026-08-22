"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
        System Fault
      </p>
      <h1 className="mt-6 max-w-xl font-semibold tracking-tight text-bone text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.02]">
        Something went off-course.
      </h1>
      <p className="mt-6 max-w-md text-body leading-relaxed text-mist">
        An unexpected error interrupted this page. Our team has been notified —
        try again, or head back to base.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <button
          type="button"
          onClick={reset}
          className="cursor-pointer rounded-xl bg-ink px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-[#14274d]"
        >
          Retry
        </button>
        <Link
          href="/"
          className="rounded-xl border border-steel px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-bone transition-colors duration-300 hover:border-accent hover:text-accent"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
