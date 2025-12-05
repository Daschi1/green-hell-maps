<script lang="ts">
  import Navbar from "$lib/Navbar.svelte";
  import MapControls from "$lib/components/controls/MapControls.svelte";
  import type { Snippet } from "svelte";

  interface Props {
    children: Snippet;
    extraControls?: Snippet;
    showMapOverlayControl?: boolean;
  }

  let { children, extraControls, showMapOverlayControl = false }: Props = $props();
</script>

<div class="flex flex-col gap-2 p-2">
  <div class="flex flex-row items-center gap-4">
    <Navbar />
    <MapControls {showMapOverlayControl} />
    {@render extraControls?.()}
  </div>

  {@render children()}
</div>
