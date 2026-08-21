"use client";

import { useEffect, useState } from "react";

export function useReady(): boolean {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (document.documentElement.dataset.ready === "true") {
      setReady(true);
      return;
    }
    const onReady = () => setReady(true);
    window.addEventListener("cennzo:ready", onReady, { once: true });
    return () => window.removeEventListener("cennzo:ready", onReady);
  }, []);

  return ready;
}
