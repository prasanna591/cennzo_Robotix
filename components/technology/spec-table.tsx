"use client";

export function SpecTable({
  points,
  dark = false,
}: {
  points: string[];
  dark?: boolean;
}) {
  const stripe = dark
    ? "odd:bg-white/[0.03] hover:bg-white/[0.07]"
    : "odd:bg-black/[0.02] hover:bg-black/[0.05]";

  return (
    <div className="overflow-hidden rounded-lg border border-black/[0.08]">
      <div
        className={`grid grid-cols-[2.5rem_1fr] items-center border-b px-0 font-mono text-[9px] uppercase tracking-[0.25em] ${
          dark ? "border-white/10 text-white/40" : "border-black/[0.08] text-faint"
        }`}
      >
        <span className="py-2 pl-3">No.</span>
        <span className="py-2">Specification</span>
      </div>
      {points.map((point, i) => (
        <div
          key={point}
          className={`group grid grid-cols-[2.5rem_1fr] items-center text-sm transition-colors duration-200 ${stripe}`}
        >
          <span
            className={`py-3 pl-3 font-mono text-[10px] tracking-[0.15em] ${
              dark ? "text-teal/70" : "text-accent"
            }`}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <span
            className={`py-3 pr-2 leading-relaxed transition-colors duration-200 ${
              dark
                ? "text-white/70 group-hover:text-white"
                : "text-mist group-hover:text-bone"
            }`}
          >
            {point}
          </span>
        </div>
      ))}
    </div>
  );
}