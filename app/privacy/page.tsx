import type { Metadata } from "next";
import { LegalShell, LegalBlock } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Privacy Policy — SolarLeadGrid",
};

export default function PrivacyPage() {
  return (
    <LegalShell eyebrow="Legal" title="Privacy Policy" updated="20 August 2026">
      <p className="text-[13.5px] italic text-[#6E7C8A]">
        This is placeholder policy text for design purposes. Have it reviewed by a qualified
        lawyer for your specific business, jurisdiction and data practices before publishing.
      </p>
      <LegalBlock title="1. Information we collect">
        <p>
          When you contact us through our website, Meta lead forms, WhatsApp or phone, we may
          collect your name, business name, phone number, email address, location, and
          details about your solar business that you choose to share.
        </p>
      </LegalBlock>
      <LegalBlock title="2. How we use your information">
        <p>
          We use the information you provide to respond to inquiries, prepare strategy calls
          and proposals, manage ad campaigns on your behalf, and communicate about your
          account. We do not sell your personal information to third parties.
        </p>
      </LegalBlock>
      <LegalBlock title="3. Meta advertising & tracking">
        <p>
          Our website and campaigns may use the Meta Pixel and similar tools to measure ad
          performance and build audiences for advertising. You can control ad preferences
          through your Meta account settings.
        </p>
      </LegalBlock>
      <LegalBlock title="4. Data storage">
        <p>
          Lead and contact information submitted through this site is stored securely in our
          database (Supabase) and is accessible only to SolarLeadGrid staff via authenticated,
          server-side access — it is never exposed to the public or to other website visitors.
        </p>
      </LegalBlock>
      <LegalBlock title="5. Data sharing">
        <p>
          We share data with service providers strictly as needed to deliver our services (for
          example, Meta, our hosting and database providers), under confidentiality
          obligations. We do not share your data for unrelated marketing by third parties.
        </p>
      </LegalBlock>
      <LegalBlock title="6. Data retention & your rights">
        <p>
          We retain client and lead information only as long as needed for the purposes
          described here. You may request access to, correction of, or deletion of your
          information at any time by contacting hello@solarleadgrid.com.
        </p>
      </LegalBlock>
      <LegalBlock title="7. Contact">
        <p>Questions about this policy can be sent to hello@solarleadgrid.com.</p>
      </LegalBlock>
    </LegalShell>
  );
}
