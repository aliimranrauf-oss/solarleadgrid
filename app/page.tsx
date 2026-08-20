import Image from "next/image";
import {
  Sun, Zap, Wrench, Battery, ClipboardCheck, SprayCan, MessageCircle,
  MousePointerClick, Eye, ArrowRight, TrendingUp, ShieldCheck, Sparkles, Target,
} from "lucide-react";
import GridBackdrop from "@/components/GridBackdrop";
import { Badge, StatBlock, PrimaryLink, GhostLink } from "@/components/UI";
import LeadForm from "@/components/LeadForm";

const verticals = [
  {
    icon: Sun,
    title: "Solar Installers",
    desc: "Fill your calendar with homeowners ready to book a site survey.",
    image: "/images/verticals/solar-installers.jpg",
  },
  {
    icon: Zap,
    title: "Solar Sellers & Dealers",
    desc: "Move panel, inverter and battery stock with qualified buyer leads.",
    image: "/images/verticals/solar-sellers.jpg",
  },
  {
    icon: Wrench,
    title: "Solar Technicians",
    desc: "Steady repair and service call volume in your coverage area.",
    image: "/images/verticals/solar-technicians.jpg",
  },
  {
    icon: Battery,
    title: "Inverter Dealers",
    desc: "Targeted leads for inverter sales, upgrades and replacements.",
    image: "/images/verticals/inverter-dealers.jpg",
  },
  {
    icon: ClipboardCheck,
    title: "Solar Checkup / Inspection",
    desc: "Book recurring inspection and performance-audit appointments.",
    image: "/images/verticals/solar-checkup.jpg",
  },
  {
    icon: SprayCan,
    title: "Solar Panel Cleaning",
    desc: "Fill your route with seasonal and recurring cleaning bookings.",
    image: "/images/verticals/solar-cleaning.jpg",
  },
];

const formats = [
  { icon: MousePointerClick, title: "Instant Form Leads", desc: "Meta's native lead form — zero-friction sign-up inside the app." },
  { icon: MessageCircle, title: "WhatsApp Leads", desc: "One tap from the ad straight into a WhatsApp conversation." },
  { icon: Target, title: "Website Traffic", desc: "Send warm visitors to your site or landing page to convert." },
  { icon: Eye, title: "Brand Awareness", desc: "Build local recognition before your sales season ramps up." },
];

const steps = [
  { n: "01", title: "Free Strategy Call", desc: "We look at your area, your services and your current sales gap." },
  { n: "02", title: "Campaign Setup", desc: "We build your funnel — creative, targeting, forms — and launch on Meta." },
  { n: "03", title: "Leads Start Flowing", desc: "Instant form and WhatsApp leads land directly with your team." },
  { n: "04", title: "You Pay After Your First Order", desc: "No order, no fee. We're only paid once your business actually earns." },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink">
        <Image
          src="/images/hero-solar-roof.jpg"
          alt="Solar panels installed on a residential rooftop"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
        <GridBackdrop />
        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Badge>
                <Sparkles size={14} /> Meta Ads Agency for Solar Businesses
              </Badge>
              <h1 className="mt-6 font-display text-[42px] font-semibold leading-[1.05] tracking-tight text-white sm:text-[58px]">
                Not getting orders?
                <br />
                <span className="text-solar">
                  We turn ad spend into
                  <br className="hidden sm:block" /> booked solar jobs.
                </span>
              </h1>
              <p className="mt-6 max-w-lg font-body text-[16px] leading-relaxed text-[#B9C4D0] sm:text-[17px]">
                SolarLeadGrid runs Meta lead campaigns built only for solar businesses —
                installers, sellers, technicians, inverter dealers, checkup and cleaning
                services. Instant form, WhatsApp, call and website leads, delivered straight
                to your team.
              </p>
              <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
                <PrimaryLink href="#contact">
                  Get More Solar Leads <ArrowRight size={17} />
                </PrimaryLink>
                <GhostLink href="/about">See How It Works</GhostLink>
              </div>
              <div className="mt-4 flex items-center gap-2 font-body text-[13.5px] text-[#8494A3]">
                <ShieldCheck size={16} className="text-circuit" />
                Pay after your first order — not before.
              </div>
            </div>

            <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <p className="mb-6 font-mono text-[12.5px] uppercase tracking-wider text-wire">
                Live Grid Snapshot
              </p>
              <div className="grid grid-cols-2 gap-y-8">
                <StatBlock value="500+" label="Solar leads generated" />
                <StatBlock value="4.2×" label="Average return on ad spend" />
                <StatBlock value="100+" label="Solar projects scaled" />
                <StatBlock value="5+ yrs" label="Running Meta ads" />
              </div>
              <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6">
                <TrendingUp size={18} className="text-circuit" />
                <p className="font-body text-[13.5px] text-[#B9C4D0]">
                  Results built running solar campaigns for real clients — case studies on
                  request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VERTICALS */}
      <section className="bg-paper px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-xl">
            <span className="font-mono text-[13px] uppercase tracking-wider text-wire">
              Who we serve
            </span>
            <h2 className="mt-3 font-display text-[32px] font-semibold tracking-tight text-ink sm:text-[40px]">
              Every corner of the solar business.
            </h2>
            <p className="mt-4 font-body text-[16px] leading-relaxed text-[#4B5A68]">
              One playbook, six solar verticals. If it runs on Meta and it&apos;s solar,
              we&apos;ve built the funnel for it.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {verticals.map((v) => (
              <div
                key={v.title}
                className="group overflow-hidden rounded-xl border border-ink/[0.08] bg-white transition-shadow hover:shadow-[0_16px_40px_-12px_rgba(10,20,32,0.15)]"
              >
                <div className="relative h-44 w-full overflow-hidden bg-ink/5">
                  <Image
                    src={v.image}
                    alt={v.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-ink/90 backdrop-blur-sm">
                    <v.icon size={18} className="text-solar" />
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-[18px] font-semibold text-ink">{v.title}</h3>
                  <p className="mt-2 font-body text-[14px] leading-relaxed text-[#5C6A78]">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD FORMATS */}
      <section className="bg-ink px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-xl">
            <span className="font-mono text-[13px] uppercase tracking-wider text-wire">
              Lead formats
            </span>
            <h2 className="mt-3 font-display text-[32px] font-semibold tracking-tight text-white sm:text-[40px]">
              Wherever your customer wants to reach out.
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {formats.map((f) => (
              <div key={f.title} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <f.icon size={20} className="text-solar" />
                <h3 className="mt-4 font-body text-[15px] font-semibold text-white">{f.title}</h3>
                <p className="mt-2 font-body text-[13px] leading-relaxed text-[#8494A3]">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-paper px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-xl">
            <span className="font-mono text-[13px] uppercase tracking-wider text-wire">
              The process
            </span>
            <h2 className="mt-3 font-display text-[32px] font-semibold tracking-tight text-ink sm:text-[40px]">
              From free call to your first order.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="relative rounded-xl border border-ink/[0.08] bg-white p-6">
                <span className="font-mono text-[13px] font-semibold text-solar">{s.n}</span>
                <h3 className="mt-3 font-display text-[17px] font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 font-body text-[13.5px] leading-relaxed text-[#5C6A78]">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAY AFTER ORDER CALLOUT */}
      <section className="relative overflow-hidden bg-ink px-5 py-20 sm:px-8 sm:py-24">
        <GridBackdrop />
        <div className="relative mx-auto max-w-5xl rounded-2xl border border-circuit/25 bg-circuit/[0.06] p-8 text-center sm:p-14">
          <ShieldCheck size={30} className="mx-auto text-circuit" />
          <h2 className="mt-5 font-display text-[28px] font-semibold tracking-tight text-white sm:text-[36px]">
            No orders yet? You don&apos;t pay yet.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-[15.5px] leading-relaxed text-[#B9C4D0]">
            We know solar businesses have been burned by agencies before. That&apos;s why our
            first engagement is structured so you pay our fee after your first closed order —
            our incentive is your result, not just your ad spend.
          </p>
          <PrimaryLink href="/pricing" className="mt-8">
            See Pricing <ArrowRight size={17} />
          </PrimaryLink>
        </div>
      </section>

      {/* CONTACT / LEAD FORM */}
      <section id="contact" className="bg-ink px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <span className="font-mono text-[13px] uppercase tracking-wider text-wire">
              Get started
            </span>
            <h2 className="mt-3 font-display text-[30px] font-semibold tracking-tight text-white sm:text-[36px]">
              Book your free strategy call.
            </h2>
            <p className="mt-4 max-w-md font-body text-[15px] leading-relaxed text-[#B9C4D0]">
              Tell us about your solar business and coverage area. We&apos;ll come back to you
              with a custom lead-gen plan — no obligation, no cost.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  );
}
