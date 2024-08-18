<script lang="ts">
  import "../app.css";
  import Navbar from "$lib/Navbar.svelte";
  import Settings from "$lib/Settings.svelte";
  import { page } from "$app/stores";
</script>

<div class="flex flex-col gap-2 p-2">
  <div class="flex flex-row items-center gap-4">
    <Navbar />
    {#if ["/story-mode", "/spirits-of-amazonia", "/comparison"].includes($page.url.pathname)}
      <Settings />
    {/if}
  </div>

  <slot></slot>
</div>
