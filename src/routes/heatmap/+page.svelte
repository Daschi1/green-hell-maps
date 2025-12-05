<script lang="ts">
  import MapShell from "$lib/layouts/MapShell.svelte";
  import BaseMap from "$lib/components/map/BaseMap.svelte";
  import HeatmapCell from "$lib/components/map/HeatmapCell.svelte";
  import HeatmapControls from "$lib/components/controls/HeatmapControls.svelte";
  import { maxHeatmapValue as maxHeatmapValueStore } from "$lib/settings";
  import type { PageData } from "./$types";

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();

  let maxHeatmapValue = $derived(
    data.heatmapData ? Math.max(...Object.values(data.heatmapData)) : 0,
  );

  $effect(() => {
    $maxHeatmapValueStore = maxHeatmapValue;
  });
</script>

<svelte:head>
  <title>Green Hell Maps - Heatmap</title>
  <meta name="description" content="Green Hell interactive map heatmap" />
</svelte:head>

<MapShell showMapOverlayControl={true}>
  {#snippet extraControls()}
    <HeatmapControls />
  {/snippet}

  <BaseMap blend="soa-map-updated.png" src="sm-map-updated.png">
    {#snippet cell({ west, south, id })}
      {@const amount = data.heatmapData?.[id]}
      {@const intensity = amount && maxHeatmapValue ? amount / maxHeatmapValue : undefined}
      <HeatmapCell {amount} {intensity} {south} {west} />
    {/snippet}
  </BaseMap>
</MapShell>
