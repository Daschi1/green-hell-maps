<script lang="ts">
  import Navbar from "$lib/Navbar.svelte";
  import type { Snippet } from "svelte";

  interface Props {
    children: Snippet;
    hero?: Snippet;
  }

  let { children, hero }: Props = $props();
</script>

<div class="min-h-screen bg-gray-900 text-gray-100">
  <Navbar />
  {#if hero}
    {@render hero()}
  {/if}
  <main class="container mx-auto max-w-7xl px-4 pb-12 {hero ? 'pt-12' : 'pt-24'}">
    {@render children()}
  </main>
</div>
