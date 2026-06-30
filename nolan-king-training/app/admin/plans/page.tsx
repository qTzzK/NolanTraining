import { createServiceClient } from "@/lib/supabase";
import AdminPlansClient from "./AdminPlansClient";

export const dynamic = "force-dynamic";

export default async function AdminPlansPage() {
  const db = createServiceClient();
  const { data: plans, error } = await db
    .from("plans")
    .select("*")
    .order("sort_order", { ascending: true });

  if (error) {
    return (
      <div style={{ padding: "32px" }}>
        <p style={{ color: "#ff6b6b" }}>Failed to load plans: {error.message}</p>
      </div>
    );
  }

  return <AdminPlansClient initialPlans={plans ?? []} />;
}
