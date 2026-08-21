"use client";

import { useRef, type ReactNode } from "react";

export function Spotlight({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent) => {
    const group = ref.current;
    if (!group) return;
    const cards = group.querySelectorAll<HTMLElement>(".spotlight-card");
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      card.style.setProperty("--my", `${e.clientY - rect.top}px`);
    });
  };

  return (
    <div ref={ref} onMouseMove={onMouseMove} className={`spotlight-group ${className}`}>
      {children}
    </div>
  );
}
