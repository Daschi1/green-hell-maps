<script lang="ts">
  import Navbar from "$lib/Navbar.svelte";
  import type { Snippet } from "svelte";

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="flex flex-col gap-2 p-2">
  <div class="flex flex-row items-center gap-4">
    <Navbar />
  </div>

  {@render children()}
</div>
