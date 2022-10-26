import { createClient } from '@supabase/supabase-js'

let supabase;
export const supabaseServer = async (url, key) => {
  if (! supabase) {
    supabase = await createClient(url, key);
  }
  return supabase;
}