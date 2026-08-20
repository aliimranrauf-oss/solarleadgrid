"use client";

import { useState, FormEvent } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";

const services = [
  "Solar Installation",
  "Solar Sales / Dealer",
  "Solar Technician / Repair",
  "Inverter Dealer",
  "Solar Checkup / Inspection",
  "Solar Panel Cleaning",
  "Other",
];

export default function LeadForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      full_name: (form.elements.namedItem("full_name") as HTMLInputElement).value,
      business_name: (form.elements.namedItem("business_name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      service_type: (form.elements.namedItem("service_type") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Something went wrong. Please try again.");
      setStatus("success");
      form.reset();
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-circuit/30 bg-circuit/[0.06] p-8 text-center">
        <CheckCircle2 className="mx-auto text-circuit" size={30} />
        <h3 className="mt-4 font-display text-[19px] font-semibold text-white">Request received.</h3>
        <p className="mt-2 font-body text-[14px] text-[#B9C4D0]">
          We'll reach out within one business day to schedule your free strategy call.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="full_name"
          required
          placeholder="Your name"
          className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 font-body text-[14px] text-white placeholder:text-[#5C6A78] focus:border-solar focus:outline-none"
        />
        <input
          name="business_name"
          required
          placeholder="Business name"
          className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 font-body text-[14px] text-white placeholder:text-[#5C6A78] focus:border-solar focus:outline-none"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="phone"
          required
          placeholder="Phone / WhatsApp number"
          className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 font-body text-[14px] text-white placeholder:text-[#5C6A78] focus:border-solar focus:outline-none"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Email address"
          className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 font-body text-[14px] text-white placeholder:text-[#5C6A78] focus:border-solar focus:outline-none"
        />
      </div>
      <select
        name="service_type"
        required
        defaultValue=""
        className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 font-body text-[14px] text-white focus:border-solar focus:outline-none"
      >
        <option value="" disabled>
          What does your business do?
        </option>
        {services.map((s) => (
          <option key={s} value={s} className="bg-ink">
            {s}
          </option>
        ))}
      </select>
      <textarea
        name="message"
        rows={3}
        placeholder="Anything else we should know? (optional)"
        className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 font-body text-[14px] text-white placeholder:text-[#5C6A78] focus:border-solar focus:outline-none"
      />

      {status === "error" && (
        <p className="font-body text-[13px] text-red-400">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-solar px-6 py-3.5 font-body text-[15px] font-semibold text-ink transition-transform hover:-translate-y-0.5 disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={17} className="animate-spin" /> Sending...
          </>
        ) : (
          "Book Free Strategy Call"
        )}
      </button>
    </form>
  );
}
