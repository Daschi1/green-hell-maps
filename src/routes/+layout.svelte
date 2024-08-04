<script lang="ts">
  import "../app.css";
  import { Checkbox, Label, Range } from "flowbite-svelte";
  import Navbar from "$lib/Navbar.svelte";
  import { CloseOutline } from "flowbite-svelte-icons";
  import { alwaysShowCoordinateOverlay, coordinateOverlayOpacity } from "$lib/settings";
</script>

<div class="flex flex-col gap-2 p-2">
  <div class="flex flex-row items-center gap-4">
    <Navbar />
    <div class="flex flex-row items-center gap-2">
      <Label>Coordinate overlay opacity:</Label>
      <span>
        <Range max={1} min={0} step={0.05} bind:value={$coordinateOverlayOpacity} />
      </span>
      <!-- TODO reset to default range -->
      <Checkbox bind:checked={$alwaysShowCoordinateOverlay}
        >Always show coordinate overlay
      </Checkbox>
      <!-- TODO unselect all coordinates -->
      <CloseOutline id="unselectAllCoordinates" />
      <Label for="unselectAllCoordinates">Unselect all coordinates</Label>
    </div>
  </div>

  <slot></slot>
</div>
