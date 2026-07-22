import { createClient } from "@supabase/supabase-js";

export interface PageRecord {
  id?: string;
  service: string;
  area: string;
  city: string;
  title: string;
  description: string;
  content: string;
  faq: { q: string; a: string }[];
  schema: Record<string, unknown>;
  seoTitle: string;
  seoDescription: string;
  slug: string;
  keywords: string[];
  updatedAt?: string;
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://example.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.dummy";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function fetchSeoPage(service: string, area: string): Promise<PageRecord | null> {
  const slug = `/${service}/${area}`;
  try {
    const { data, error } = await supabase.from("pages").select("*").eq("slug", slug).single();
    if (error || !data) return null;
    return data as PageRecord;
  } catch {
    return null;
  }
}

export async function upsertSeoPage(page: PageRecord) {
  try {
    const { data, error } = await supabase.from("pages").upsert(page, { onConflict: "slug" });
    if (error) {
      console.error("Supabase upsert error:", error);
    }
    return data;
  } catch (err) {
    console.error("Supabase exception:", err);
  }
}
