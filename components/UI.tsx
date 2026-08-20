import { ReactNode } from "react";

export function Badge({
  children,
  tone = "amber",
}: {
  children: ReactNode;
  tone?: "amber" | "green" | "light";
}) {
  const tones: Record<string, string> = {
    amber: "bg-solar/10 text-solar border-solar/30",
    green: "bg-circuit/10 text-circuit border-circuit/30",
    light: "bg-white text-ink border-ink/10",
  };
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-body text-[13px] font-medium ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

export function StatBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-mono text-3xl font-semibold text-solar sm:text-4xl">{value}</span>
      <span className="font-body text-[13px] text-[#B9C4D0]">{label}</span>
    </div>
  );
}

export function PrimaryLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-lg bg-solar px-6 py-3.5 font-body text-[15px] font-semibold text-ink transition-transform hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-8px_rgba(255,182,39,0.6)] active:translate-y-0 ${className}`}
    >
      {children}
    </a>
  );
}

export function GhostLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-lg border border-[#2A3A4A] px-6 py-3.5 font-body text-[15px] font-semibold text-white transition-colors hover:border-wire hover:bg-white/5 ${className}`}
    >
      {children}
    </a>
  );
}
