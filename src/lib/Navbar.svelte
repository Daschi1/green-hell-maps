<script lang="ts">
  import NavbarA from "$lib/extension/NavbarA.svelte";
  import { Span } from "flowbite-svelte";
  import { page } from "$app/stores";

  let activePathname = $derived($page.url.pathname);
</script>

<div class="flex flex-row items-center gap-2">
  <NavbarA {activePathname} href="/{$page.url.search}" pathname="/"
    ><Span>Green Hell Maps</Span>
  </NavbarA>
  <NavbarA {activePathname} href="/story-mode{$page.url.search}" pathname="/story-mode"
    >Story Mode
  </NavbarA>
  <NavbarA
    {activePathname}
    href="/spirits-of-amazonia{$page.url.search}"
    pathname="/spirits-of-amazonia"
    >Spirits of Amazonia
  </NavbarA>
</div>
