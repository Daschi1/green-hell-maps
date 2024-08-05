<script lang="ts">
  import NavbarA from "$lib/extension/NavbarA.svelte";
  import { Span } from "flowbite-svelte";
  import { page } from "$app/stores";

  let activePathname = $derived($page.url.pathname);
</script>

<div class="flex flex-row items-center gap-2">
  <NavbarA {activePathname} href="/{$page.url.search}"><Span>Green Hell Maps</Span></NavbarA>
  <NavbarA {activePathname} href="/story-mode{$page.url.search}">Story Mode</NavbarA>
  <NavbarA {activePathname} href="/spirits-of-amazonia{$page.url.search}"
    >Spirits of Amazonia
  </NavbarA>
</div>
