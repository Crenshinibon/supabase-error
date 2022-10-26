import { supabaseServer } from 'supabase-server';
import { VITE_SUPABASE_URL, SUPABASE_ADMIN_KEY } from '$env/static/private'

export const actions = {
  default: async (event) => {
    let supabase = await supabaseServer(VITE_SUPABASE_URL, SUPABASE_ADMIN_KEY)
    const { data: { users }, error } = await supabase.auth.admin.listUsers()
    console.log("error:", error)
    console.log("users:", users)
  }
}