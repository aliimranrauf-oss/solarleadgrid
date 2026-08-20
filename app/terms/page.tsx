import type { Metadata } from "next";
import { LegalShell, LegalBlock } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Terms of Service — SolarLeadGrid",
};

export default function TermsPage() {
  return (
    <LegalShell eyebrow="Legal" title="Terms of Service" updated="20 August 2026">
      <p className="text-[13.5px] italic text-[#6E7C8A]">
        This is placeholder terms text for design purposes. Have it reviewed by a qualified
        lawyer before publishing, and replace the pay-after-order description with your
        actual, legally reviewed agreement terms.
      </p>
      <LegalBlock title="1. Services">
        <p>
          SolarLeadGrid provides Meta (Facebook and Instagram) advertising management and
          lead generation services for solar businesses, including installers, sellers,
          technicians, inverter dealers, checkup/inspection providers and cleaning services.
        </p>
      </LegalBlock>
      <LegalBlock title="2. Ad spend & fees">
        <p>
          Advertising spend is paid directly to Meta and is separate from our agency fee. Our
          agency fee structure, including any &ldquo;pay after first order&rdquo;
          arrangement, is confirmed in writing in your individual service agreement prior to
          campaign launch.
        </p>
      </LegalBlock>
      <LegalBlock title="3. Client responsibilities">
        <p>
          Clients agree to respond to leads promptly, provide accurate business information,
          and report closed orders honestly so campaign performance and billing can be
          tracked correctly.
        </p>
      </LegalBlock>
      <LegalBlock title="4. No guarantee of results">
        <p>
          While we manage campaigns using solar-specific strategies, advertising performance
          depends on factors including market conditions, budget, and client follow-up, and
          specific results cannot be guaranteed.
        </p>
      </LegalBlock>
      <LegalBlock title="5. Termination">
        <p>
          Either party may end services with notice as specified in the service agreement.
          Outstanding fees for orders already closed remain payable.
        </p>
      </LegalBlock>
      <LegalBlock title="6. Contact">
        <p>Questions about these terms can be sent to hello@solarleadgrid.com.</p>
      </LegalBlock>
    </LegalShell>
  );
}
