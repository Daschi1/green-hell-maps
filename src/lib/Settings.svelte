<script lang="ts">
  import { Checkbox, Label, Range } from "flowbite-svelte";
  import { CloseOutline } from "flowbite-svelte-icons";
  import { alwaysShowCoordinateOverlay, coordinateOverlayOpacity } from "$lib/settings";
</script>

<div class="flex flex-row items-center gap-2">
  <Label>Coordinate overlay opacity:</Label>
  <span>
    <Range max={1} min={0} step={0.05} bind:value={$coordinateOverlayOpacity} />
  </span>
  <!-- TODO reset to default range -->
  <Checkbox bind:checked={$alwaysShowCoordinateOverlay}>Always show coordinate overlay</Checkbox>
  <!-- TODO unselect all coordinates -->
  <CloseOutline id="unselectAllCoordinates" />
  <Label for="unselectAllCoordinates">Unselect all coordinates</Label>
</div>
