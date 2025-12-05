<script lang="ts">
  import MapShell from "$lib/layouts/MapShell.svelte";
  import BaseMap from "$lib/components/map/BaseMap.svelte";
  import InteractiveCell from "$lib/components/map/InteractiveCell.svelte";
</script>

<svelte:head>
  <title>Green Hell Maps - Spirits of Amazonia</title>
  <meta name="description" content="Green Hell interactive map for Spirits of Amazonia" />
</svelte:head>

<MapShell>
  <BaseMap src="soa-map-updated.png">
    {#snippet cell({ west, south })}
      <InteractiveCell {south} {west} />
    {/snippet}
  </BaseMap>
</MapShell>
