<script lang="ts">
  import { Checkbox, Label, Range } from "flowbite-svelte";
  import { CloseOutline } from "flowbite-svelte-icons";
  import {
    alwaysShowCoordinateOverlay,
    clickedCoordinates,
    coordinateOverlayOpacity,
  } from "$lib/settings";
</script>

<div class="flex items-center gap-4">
  <Label class="flex items-center gap-2">
    Coordinate overlay opacity
    <span>
      <Range max={1} min={0} step={0.05} bind:value={$coordinateOverlayOpacity} />
    </span>
  </Label>
  <!-- TODO reset to default range -->
  <Label class="flex items-center gap-2">
    Always show coordinate overlay
    <Checkbox bind:checked={$alwaysShowCoordinateOverlay}></Checkbox>
  </Label>
  <button
    class="flex items-center gap-2 hover:text-red-600"
    onclick={() => ($clickedCoordinates = null)}
  >
    Unselect all coordinates
    <CloseOutline class="-ml-1.5" />
  </button>
</div>
