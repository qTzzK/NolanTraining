import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { isAuthenticated } from "@/lib/auth";
import { createServiceClient } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const body = await req.json();

  const allowed = ["name", "duration", "price", "price_in_cents", "description", "features", "cta", "highlight"];
  const payload: Record<string, unknown> = {};
  for (const key of allowed) {
    if (key in body) payload[key] = body[key];
  }

  const db = createServiceClient();
  const { data, error } = await db
    .from("plans")
    .update(payload)
    .eq("id", id)
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  revalidatePath("/services");
  return NextResponse.json(data);
}
