# SolarLeadGrid

Meta ads agency website for solar businesses (installers, sellers, technicians,
inverter dealers, checkup/inspection, and cleaning services). Built with
Next.js 14 (App Router), TypeScript, Tailwind CSS, and Supabase for lead
storage.

## Pages

- `/` — Home (hero, verticals, lead formats, process, pay-after-order callout, contact form)
- `/about` — About
- `/pricing` — Pricing
- `/privacy` — Privacy Policy
- `/terms` — Terms of Service
- `/api/lead` — API route that saves contact-form submissions to Supabase

---

## 1. Run it locally

```bash
npm install
cp .env.local.example .env.local   # then fill in your Supabase keys (see step 2)
npm run dev
```

Open http://localhost:3000

---

## 2. Set up Supabase (for the "Book Free Strategy Call" form)

1. Create a free project at https://supabase.com
2. Go to **SQL Editor > New query**, paste the contents of `supabase/schema.sql`,
   and run it. This creates a `leads` table with Row Level Security enabled.
3. Go to **Project Settings > API** and copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY` (not currently used
     client-side, but kept for future use — safe to include)
   - **service_role key** → `SUPABASE_SERVICE_ROLE_KEY` (⚠️ keep secret —
     server-only, never commit it or expose it in client code)
4. Paste these into `.env.local` (for local dev) and into Vercel's
   Environment Variables (for production — see step 4).
5. To view submitted leads: Supabase dashboard → **Table Editor > leads**.

---

## 3. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit — SolarLeadGrid site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/solarleadgrid.git
git push -u origin main
```

---

## 4. Deploy on Vercel

1. Go to https://vercel.com/new and import your GitHub repo.
2. Framework preset: **Next.js** (auto-detected).
3. Before deploying, add Environment Variables (same three as `.env.local`):
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
4. Click **Deploy**. Vercel builds and gives you a live URL
   (e.g. `solarleadgrid.vercel.app`).
5. To use your own domain: **Project > Settings > Domains** and add
   `solarleadgrid.com`, then point your domain's DNS to Vercel as instructed
   there.

---

## 5. Before going live — checklist

- [ ] Replace placeholder stats (500+, 4.2×, 100+, 5+ yrs) with your real numbers
- [ ] Have `/privacy` and `/terms` reviewed by a lawyer — especially the
      "pay after first order" clause, which needs precise legal wording
- [ ] Replace `hello@solarleadgrid.com` with your real contact email
- [ ] Connect a real Meta Pixel / Conversions API if you want ad platform
      tracking on this site (not included by default)
- [ ] Test the contact form end-to-end and confirm rows appear in Supabase

---

## Project structure

```
app/
  layout.tsx          — fonts, global nav/footer, metadata
  page.tsx             — home page
  about/page.tsx
  pricing/page.tsx
  privacy/page.tsx
  terms/page.tsx
  api/lead/route.ts    — POST endpoint, writes to Supabase
components/
  Nav.tsx, Footer.tsx, GridBackdrop.tsx, UI.tsx, LeadForm.tsx, LegalShell.tsx
lib/
  supabaseServer.ts    — server-only Supabase client
supabase/
  schema.sql           — run this once in the Supabase SQL editor
```
