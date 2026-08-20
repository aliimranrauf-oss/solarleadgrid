import { createClient } from "@supabase/supabase-js";

// Server-only client. Uses the service role key so it can insert into
// the `leads` table even with Row Level Security enabled. This file must
// never be imported into a "use client" component.
export function getSupabaseServerClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) {
    throw new Error(
      "Missing Supabase env vars. Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY."
    );
  }

  return createClient(url, serviceKey, {
    auth: { persistSession: false },
  });
}
