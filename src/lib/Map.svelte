<script lang="ts">
  import Coordinate from "./Coordinate.svelte";
  import { mapOverlayOpacity } from "$lib/settings";

  interface Props {
    src: string;
    blend?: string;
  }

  let { src, blend }: Props = $props();

  const westStart = 56;
  const westEnd = 20;
  const westLength = westStart - westEnd + 1; // 36 + 1, used in grid-cols-

  const southStart = 12;
  const southEnd = 50;
  const southLength = southEnd - southStart + 1; // 38 + 1, used in grid-rows-
</script>

<div class="relative h-[2899px] w-[2751px]">
  <img
    style="opacity: {blend ? 1 - $mapOverlayOpacity : '100'}"
    class="pointer-events-none {blend ? 'opacity-50' : ''}"
    alt={src}
    {src}
  />
  {#if blend}
    <img
      style="opacity: {$mapOverlayOpacity}"
      class="pointer-events-none absolute left-0 top-0"
      alt={blend}
      src={blend}
    />
  {/if}

  <div
    class="absolute left-0 top-0 grid h-full w-full grid-cols-[repeat(37,_minmax(0,_1fr))] grid-rows-[repeat(39,_minmax(0,_1fr))]"
  >
    <!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
    {#each { length: southLength } as _, south}
      <!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
      {#each { length: westLength } as _, west}
        <Coordinate south={southStart + south} west={westStart - west} />
      {/each}
    {/each}
  </div>
</div>
