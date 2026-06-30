import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(url, anonKey);

export function createServiceClient() {
  return createClient(url, process.env.SUPABASE_SERVICE_ROLE_KEY!);
}

export type Plan = {
  id: string;
  name: string;
  duration: string;
  price: string;
  price_in_cents: number;
  description: string;
  features: string[];
  cta: string;
  highlight: boolean;
  sort_order: number;
  type: string;
  created_at: string;
};
