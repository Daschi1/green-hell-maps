<script lang="ts">
  import Map from "$lib/Map.svelte";
  import type { PageData } from "./$types";

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
</script>

<svelte:head>
  <title>Green Hell Maps - Heatmap</title>
  <meta name="description" content="Green Hell interactive map heatmap" />
</svelte:head>

<Map blend="soa-map-updated.png" heatmapData={data.heatmapData} src="sm-map-updated.png" />
