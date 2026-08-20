"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Zap, Menu, X, ArrowRight } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
];

const legal = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex h-[72px] items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-solar">
              <Zap size={19} strokeWidth={2.5} className="text-ink" />
            </span>
            <span className="font-display text-lg font-semibold tracking-tight text-white">
              SolarLead<span className="text-solar">Grid</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-md px-4 py-2 font-body text-[14px] font-medium transition-colors ${
                  pathname === l.href ? "text-solar" : "text-[#B9C4D0] hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-lg bg-solar px-5 py-2.5 font-body text-[14px] font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              Get More Leads <ArrowRight size={16} />
            </Link>
          </div>

          <button className="text-white md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-ink px-5 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {[...links, ...legal].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-3 text-left font-body text-[15px] font-medium ${
                  pathname === l.href ? "bg-white/5 text-solar" : "text-[#B9C4D0]"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/pricing"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-solar px-5 py-3 font-body text-[15px] font-semibold text-ink"
            >
              Get More Leads <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
