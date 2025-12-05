<script lang="ts">
  import Coordinate from "./Coordinate.svelte";
  import { mapOverlayOpacity, maxHeatmapValue as maxHeatmapValueStore } from "$lib/settings";

  interface Props {
    src: string;
    blend?: string;
    heatmapData?: Record<string, number>;
  }

  let { src, blend, heatmapData }: Props = $props();

  let maxHeatmapValue = $derived(heatmapData ? Math.max(...Object.values(heatmapData)) : 0);

  $effect(() => {
    $maxHeatmapValueStore = maxHeatmapValue;
  });

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
        {@const s = southStart + south}
        {@const w = westStart - west}
        {@const id = w.toString() + s.toString()}
        <Coordinate
          heatmapAmount={heatmapData?.[id]}
          heatmapIntensity={heatmapData?.[id] && maxHeatmapValue
            ? heatmapData[id] / maxHeatmapValue
            : undefined}
          heatmapMode={!!heatmapData}
          south={s}
          west={w}
        />
      {/each}
    {/each}
  </div>
</div>
