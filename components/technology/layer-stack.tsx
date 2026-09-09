"use client";

export function LayerStack({ items }: { items: string[] }) {
  return (
    <div className="flex flex-col gap-px overflow-hidden rounded-lg border border-black/[0.08] bg-black/[0.06]">
      {items.map((item, i) => (
        <div
          key={item}
          className="flex items-center gap-3 bg-graphite px-3 py-2.5"
        >
          <span className="w-6 shrink-0 font-mono text-[9px] tracking-[0.15em] text-faint">
            L{i + 1}
          </span>
          <span
            aria-hidden="true"
            className="h-px w-8 shrink-0 bg-gradient-to-r from-accent/70 to-teal/70"
          />
          <span className="truncate font-mono text-[11px] uppercase tracking-[0.18em] text-bone">
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}