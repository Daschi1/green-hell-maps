<script lang="ts">
  import "../app.css";
  import { Checkbox, Label, Range } from "flowbite-svelte";
  import Navbar from "$lib/Navbar.svelte";
  import { alwaysShowCoordinateOverlay, coordinateOverlayOpacity } from "$lib/settings";
</script>

<div class="flex flex-col gap-2 p-2">
  <div class="flex flex-row gap-4 items-center">
    <Navbar />
    <div class="flex flex-row gap-2 items-center">
      <Label>Coordinate overlay opacity:</Label>
      <span>
        <Range max={1} min={0} step={0.05}
               bind:value={$coordinateOverlayOpacity} />
      </span>
      <Checkbox bind:checked={$alwaysShowCoordinateOverlay}>Always show coordinate overlay
      </Checkbox>
    </div>
  </div>

  <slot></slot>
</div>
