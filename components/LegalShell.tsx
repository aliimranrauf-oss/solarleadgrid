import { ReactNode } from "react";

export function LegalShell({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <section className="bg-paper px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <span className="font-mono text-[13px] uppercase tracking-wider text-wire">{eyebrow}</span>
        <h1 className="mt-3 font-display text-[32px] font-semibold tracking-tight text-ink sm:text-[40px]">
          {title}
        </h1>
        <p className="mt-3 font-mono text-[13.5px] text-[#8494A3]">Last updated: {updated}</p>
        <div className="mt-10 space-y-8 font-body text-[15px] leading-relaxed text-[#3D4A57]">
          {children}
        </div>
      </div>
    </section>
  );
}

export function LegalBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="mb-2.5 font-display text-[18px] font-semibold text-ink">{title}</h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
}
