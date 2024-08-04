<script lang="ts">
  import "../app.css";
  import { Span } from "flowbite-svelte";
  import { page } from "$app/stores";
  import NavbarA from "$lib/extension/NavbarA.svelte";

  let activePathname = $derived($page.url.pathname);
</script>

<div class="flex flex-col gap-2 p-2">
  <div class="flex flex-row gap-2">
    <NavbarA {activePathname} href="/"><Span>Green Hell Maps</Span></NavbarA>
    <NavbarA {activePathname} href="/story-mode">Story Mode</NavbarA>
    <NavbarA {activePathname} href="/spirits-of-amazonia">Spirits of Amazonia</NavbarA>
  </div>

  <slot></slot>
</div>
