<script lang="ts">
  import { Checkbox, Label, Range } from "flowbite-svelte";
  import { CloseOutline, UndoOutline } from "flowbite-svelte-icons";
  import { page } from "$app/stores";
  import {
    alwaysShowCoordinateOverlay,
    clickedCoordinates,
    coordinateOverlayOpacity,
    mapOverlayOpacity,
  } from "$lib/settings";
</script>

<div class="flex items-center gap-4">
  <Label class="flex cursor-pointer items-center gap-2">
    Always show coordinate overlay
    <Checkbox class="cursor-pointer" bind:checked={$alwaysShowCoordinateOverlay}></Checkbox>
  </Label>

  <Label class="flex items-center gap-2">
    <span class="flex-shrink-0">Coordinate overlay opacity</span>
    <span><Range max={1} min={0} step={0.05} bind:value={$coordinateOverlayOpacity} /></span>
    <UndoOutline
      class="cursor-pointer hover:text-red-500"
      onclick={() => ($coordinateOverlayOpacity = 0.6)}
    />
  </Label>

  <button
    class="flex items-center gap-2 text-gray-900 hover:text-red-500 dark:text-gray-300"
    onclick={() => ($clickedCoordinates = null)}
  >
    Unselect all coordinates
    <CloseOutline class="-ml-1" />
  </button>

  {#if "/comparison".includes($page.url.pathname)}
    <Label class="flex items-center gap-2">
      <span class="flex-shrink-0">Map overlay opacity</span>
      <span><Range max={1} min={0} step={0.05} bind:value={$mapOverlayOpacity} /></span>
      <UndoOutline
        class="cursor-pointer hover:text-red-500"
        onclick={() => ($mapOverlayOpacity = 0.5)}
      />
    </Label>
  {/if}
</div>
