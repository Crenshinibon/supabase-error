<script>
  import { supabaseClient } from 'supabase-client'
  import { VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY  } from '$env/static/public'

  let sb = supabaseClient(VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY)

</script>

{#await sb}
<h1>CONNECTING</h1>
{:then client}
<h1>SUCCESS</h1>
<form method="POST">
  <input type="text" name="something" value="">
  <button>Submit</button>
</form>

{@debug client}
{:catch error}
<h1>ERROR</h1>
{@debug error}
{/await}



<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
