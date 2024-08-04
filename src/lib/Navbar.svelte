<script lang="ts">
  import NavbarA from "$lib/extension/NavbarA.svelte";
  import { Span } from "flowbite-svelte";
  import { page } from "$app/stores";

  let activePathname = $derived($page.url.pathname);
</script>

<div class="flex flex-row gap-2">
  <NavbarA {activePathname} href="/"><Span>Green Hell Maps</Span></NavbarA>
  <NavbarA {activePathname} href="/story-mode">Story Mode</NavbarA>
  <NavbarA {activePathname} href="/spirits-of-amazonia">Spirits of Amazonia</NavbarA>
</div>
