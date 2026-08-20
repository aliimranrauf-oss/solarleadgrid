import { CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";
import GridBackdrop from "@/components/GridBackdrop";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing — SolarLeadGrid",
  description: "Simple pricing for solar Meta ads — pay our fee after your first order.",
};

const plans = [
  {
    name: "Starter",
    desc: "Solo installers, technicians or cleaning routes testing Meta ads for the first time.",
    points: [
      "Instant form + WhatsApp campaign setup",
      "1 service area",
      "Weekly performance check-in",
      "Pay agency fee after first order",
    ],
  },
  {
    name: "Growth",
    desc: "Established solar sellers or installers ready to scale lead volume.",
    points: [
      "Everything in Starter",
      "Call + website traffic campaigns",
      "Up to 3 service areas",
      "Bi-weekly optimization calls",
      "Pay agency fee after first order",
    ],
    featured: true,
  },
  {
    name: "Scale",
    desc: "Multi-location solar businesses or inverter dealer networks.",
    points: [
      "Everything in Growth",
      "Unlimited service areas",
      "Dedicated account manager",
      "Custom creative production",
      "Pay agency fee after first order",
    ],
  },
];

export default function PricingPage() {
  return (
    <section className="relative overflow-hidden bg-ink px-5 py-20 sm:px-8 sm:py-28">
      <GridBackdrop />
      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <span className="font-mono text-[13px] uppercase tracking-wider text-wire">Pricing</span>
          <h1 className="mt-3 font-display text-[34px] font-semibold tracking-tight text-white sm:text-[44px]">
            Simple plans. One shared rule: you pay after your first order.
          </h1>
          <p className="mt-4 font-body text-[15.5px] leading-relaxed text-[#B9C4D0]">
            Ad spend to Meta is billed separately by Meta and set based on your area and
            goals — we&apos;ll size it together on your strategy call. Our agency fee below is
            only due once your first order closes.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col rounded-2xl p-8 ${
                p.featured
                  ? "border border-solar bg-solar text-ink"
                  : "border border-white/10 bg-white/[0.03] text-white"
              }`}
            >
              {p.featured && (
                <span className="mb-4 self-start rounded-full bg-ink px-3 py-1 font-body text-[11.5px] font-semibold text-solar">
                  MOST CHOSEN
                </span>
              )}
              <h3 className="font-display text-[22px] font-semibold">{p.name}</h3>
              <p
                className={`mt-2 font-body text-[13.5px] leading-relaxed ${
                  p.featured ? "text-ink/75" : "text-[#B9C4D0]"
                }`}
              >
                {p.desc}
              </p>
              <div className="mt-6 flex flex-1 flex-col gap-3">
                {p.points.map((pt) => (
                  <div key={pt} className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={17}
                      className={`mt-0.5 ${p.featured ? "text-ink" : "text-circuit"}`}
                    />
                    <span className="font-body text-[13.5px]">{pt}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/#contact"
                className={`mt-8 inline-flex items-center justify-center rounded-lg px-5 py-3 font-body text-[14px] font-semibold transition-transform hover:-translate-y-0.5 ${
                  p.featured ? "bg-ink text-white" : "bg-solar text-ink"
                }`}
              >
                Book Strategy Call
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-2xl font-body text-[13px] text-[#6E7C8A]">
          &ldquo;First order&rdquo; refers to the first customer order your business closes as
          a direct result of a SolarLeadGrid campaign, confirmed together on your check-in
          call. Exact terms are set out in your service agreement before launch.
        </p>
      </div>
    </section>
  );
}
