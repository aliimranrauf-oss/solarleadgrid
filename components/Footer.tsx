import Link from "next/link";
import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-inkSoft px-5 py-14 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-solar">
              <Zap size={16} strokeWidth={2.5} className="text-ink" />
            </span>
            <span className="font-display text-base font-semibold text-white">
              SolarLead<span className="text-solar">Grid</span>
            </span>
          </div>
          <p className="max-w-xs font-body text-[13.5px] leading-relaxed text-[#8494A3]">
            A Meta ads agency built only for solar businesses — installers, sellers, technicians,
            inverter dealers, checkup and cleaning services.
          </p>
        </div>
        <div>
          <h4 className="mb-4 font-body text-[13px] font-semibold uppercase tracking-wider text-wire">
            Company
          </h4>
          <div className="flex flex-col gap-2.5">
            <Link href="/" className="font-body text-[14px] text-[#B9C4D0] hover:text-solar">
              Home
            </Link>
            <Link href="/about" className="font-body text-[14px] text-[#B9C4D0] hover:text-solar">
              About Us
            </Link>
            <Link href="/pricing" className="font-body text-[14px] text-[#B9C4D0] hover:text-solar">
              Pricing
            </Link>
          </div>
        </div>
        <div>
          <h4 className="mb-4 font-body text-[13px] font-semibold uppercase tracking-wider text-wire">
            Legal
          </h4>
          <div className="flex flex-col gap-2.5">
            <Link href="/privacy" className="font-body text-[14px] text-[#B9C4D0] hover:text-solar">
              Privacy Policy
            </Link>
            <Link href="/terms" className="font-body text-[14px] text-[#B9C4D0] hover:text-solar">
              Terms of Service
            </Link>
          </div>
        </div>
        <div>
          <h4 className="mb-4 font-body text-[13px] font-semibold uppercase tracking-wider text-wire">
            Get in touch
          </h4>
          <p className="mb-1 font-body text-[14px] text-[#B9C4D0]">hello@solarleadgrid.com</p>
          <p className="font-body text-[14px] text-[#B9C4D0]">Mon–Sat, 10am–7pm</p>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
        <p className="font-mono text-[12.5px] text-[#5C6A78]">
          © {new Date().getFullYear()} SolarLeadGrid. All rights reserved.
        </p>
        <p className="font-mono text-[12.5px] text-[#5C6A78]">Solar Vertical Ads Specialist</p>
      </div>
    </footer>
  );
}
