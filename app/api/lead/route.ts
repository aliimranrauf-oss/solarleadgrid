import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabaseServer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { full_name, business_name, phone, email, service_type, message } = body;

    if (!full_name || !business_name || !phone || !email || !service_type) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const supabase = getSupabaseServerClient();
    const { error } = await supabase.from("leads").insert([
      {
        full_name,
        business_name,
        phone,
        email,
        service_type,
        message: message || null,
        source: "solarleadgrid.com",
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: "Could not save your request." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Lead route error:", err);
    return NextResponse.json({ error: "Unexpected server error." }, { status: 500 });
  }
}
