// lib/supabaseClient.ts

import { createClient } from "@supabase/supabase-js";

// In a real deployment, set these env vars in .env.local; using placeholder values for now.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://your-project.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "public-anon-key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
