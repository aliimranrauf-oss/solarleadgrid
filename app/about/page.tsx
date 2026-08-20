import { Sun, Users, Award } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — SolarLeadGrid",
  description: "Why SolarLeadGrid exists and how we run Meta ads for solar businesses.",
};

const values = [
  { icon: Sun, title: "Solar-only", desc: "Every campaign, every landing page, every offer is built around this one industry." },
  { icon: Users, title: "Hands-on", desc: "We manage your account directly — no black-box reporting, no guesswork." },
  { icon: Award, title: "Aligned incentives", desc: "Our pay-after-order structure means we only win when you do." },
];

export default function AboutPage() {
  return (
    <section className="bg-paper px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <span className="font-mono text-[13px] uppercase tracking-wider text-wire">About us</span>
        <h1 className="mt-3 font-display text-[34px] font-semibold tracking-tight text-ink sm:text-[44px]">
          Built by someone who&apos;s already run the campaigns.
        </h1>
        <div className="mt-8 space-y-5 font-body text-[16px] leading-relaxed text-[#3D4A57]">
          <p>
            SolarLeadGrid started after running Meta ad campaigns for solar clients and
            watching the same pattern repeat: good installers, good technicians, good
            pricing — but an inconsistent flow of new customers. The gap usually wasn&apos;t
            the product. It was that nobody was running ads built specifically for how solar
            actually gets sold.
          </p>
          <p>
            We&apos;ve managed Meta campaigns that generated real leads and closed orders for
            solar clients, learning what actually converts in this category — homeowner
            targeting, seasonal demand shifts, and the exact language that gets someone to
            submit a form or send a WhatsApp message instead of scrolling past.
          </p>
          <p>
            SolarLeadGrid is that experience turned into a dedicated agency, focused only on
            solar — installers, sellers, technicians, inverter dealers, checkup services and
            panel cleaning businesses.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-xl border border-ink/[0.08] bg-white p-6">
              <v.icon size={20} className="text-solar" />
              <h3 className="mt-4 font-display text-[16px] font-semibold text-ink">{v.title}</h3>
              <p className="mt-2 font-body text-[13.5px] leading-relaxed text-[#5C6A78]">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
