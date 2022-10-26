import { createClient } from '@supabase/supabase-js'

let supabase;
export const supabaseClient = async (url, key) => {
  if (! supabase) {
    supabase = await createClient(url, key);
  }
  return supabase;
}