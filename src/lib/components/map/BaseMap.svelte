<script lang="ts">
  import { mapOverlayOpacity } from "$lib/settings";
  import { GRID, MAP_DIMENSIONS } from "$lib/constants";
  import type { Snippet } from "svelte";

  interface Props {
    src: string;
    blend?: string;
    cell: Snippet<[{ west: number; south: number; id: string }]>;
  }

  let { src, blend, cell }: Props = $props();
</script>

<div class="relative h-[2899px] w-[2751px]">
  <!-- Base Map -->
  <img
    style="opacity: {blend ? 1 - $mapOverlayOpacity : '100'}"
    class="pointer-events-none {blend ? 'opacity-50' : ''}"
    alt={src}
    {src}
  />

  <!-- Blend Map (Optional) -->
  {#if blend}
    <img
      style="opacity: {$mapOverlayOpacity}"
      class="pointer-events-none absolute left-0 top-0"
      alt={blend}
      src={blend}
    />
  {/if}

  <!-- Grid Overlay -->
  <div
    class="absolute left-0 top-0 grid h-full w-full grid-cols-[repeat(37,_minmax(0,_1fr))] grid-rows-[repeat(39,_minmax(0,_1fr))]"
  >
    <!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
    {#each { length: GRID.ROWS } as _, southIndex}
      <!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
      {#each { length: GRID.COLS } as _, westIndex}
        {@const s = MAP_DIMENSIONS.SOUTH_START + southIndex}
        {@const w = MAP_DIMENSIONS.WEST_START - westIndex}
        {@const id = w.toString() + s.toString()}
        {@render cell({ west: w, south: s, id })}
      {/each}
    {/each}
  </div>
</div>
