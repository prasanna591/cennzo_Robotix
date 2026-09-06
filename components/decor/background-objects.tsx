export function BackgroundObjects({
  variant = "light",
  className = "",
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const isDark = variant === "dark";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div
        className={`absolute -right-[12%] -top-[22%] h-[560px] w-[560px] rounded-full blur-3xl ${
          isDark
            ? "bg-[radial-gradient(circle,rgba(21,94,239,0.16),transparent_65%)]"
            : "bg-[radial-gradient(circle,rgba(21,94,239,0.09),transparent_65%)]"
        }`}
      />
      <div
        className={`absolute -bottom-[28%] -left-[14%] h-[520px] w-[520px] rounded-full blur-3xl ${
          isDark
            ? "bg-[radial-gradient(circle,rgba(124,58,237,0.13),transparent_68%)]"
            : "bg-[radial-gradient(circle,rgba(124,58,237,0.07),transparent_68%)]"
        }`}
      />
      <div
        className={`absolute bottom-[6%] right-[4%] h-[300px] w-[300px] rounded-full blur-3xl ${
          isDark
            ? "bg-[radial-gradient(circle,rgba(0,168,168,0.10),transparent_70%)]"
            : "bg-[radial-gradient(circle,rgba(245,158,11,0.07),transparent_70%)]"
        }`}
      />
      <div
        className={`absolute right-[10%] top-[16%] h-[380px] w-[380px] rounded-full border ${
          isDark ? "border-white/[0.06]" : "border-black/[0.05]"
        }`}
      >
        <div
          className={`absolute left-[18%] top-[18%] h-[220px] w-[220px] rounded-full border ${
            isDark ? "border-white/[0.04]" : "border-black/[0.04]"
          }`}
        />
        <span
          className={`absolute -left-[3px] -top-[3px] h-1.5 w-1.5 rounded-full ${
            isDark ? "bg-teal/70" : "bg-accent/50"
          }`}
        />
      </div>
      <div
        className={`absolute bottom-[12%] right-[26%] hidden h-[280px] w-[340px] lg:block ${
          isDark
            ? "[background-image:radial-gradient(rgba(255,255,255,0.09)_1px,transparent_1px)]"
            : "[background-image:radial-gradient(rgba(17,19,24,0.10)_1px,transparent_1px)]"
        } [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_72%)]`}
      />
      <div
        className={`absolute left-[8%] top-[38%] hidden font-mono text-[10px] tracking-[0.3em] md:block ${
          isDark ? "text-white/[0.08]" : "text-black/[0.10]"
        }`}
      >
        <span className="block">+&nbsp;&nbsp;SYS</span>
        <span className="mt-2 block">+&nbsp;&nbsp;NAV</span>
      </div>
    </div>
  );
}