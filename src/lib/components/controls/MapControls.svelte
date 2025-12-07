<script lang="ts">
  import { Checkbox, Label, Range, Button } from "flowbite-svelte";
  import { CloseOutline, UndoOutline } from "flowbite-svelte-icons";
  import {
    alwaysShowCoordinateOverlay,
    clickedCoordinates,
    coordinateOverlayOpacity,
    mapOverlayOpacity,
  } from "$lib/settings";

  interface Props {
    showMapOverlayControl?: boolean;
  }

  let { showMapOverlayControl = false }: Props = $props();
</script>

<div class="flex flex-col gap-5">
  <Label
    class="flex cursor-pointer items-center gap-3 text-sm font-medium text-gray-300 hover:text-white"
  >
    <Checkbox
      class="h-5 w-5 rounded border-gray-600 bg-gray-700 text-primary-500 focus:ring-primary-600 focus:ring-offset-gray-800"
      bind:checked={$alwaysShowCoordinateOverlay}
    />
    <span>Always show coordinates</span>
  </Label>

  <div class="flex flex-col gap-2">
    <div class="flex items-center justify-between">
      <Label class="text-sm font-medium text-gray-300">Coords Opacity</Label>
      <button
        class="text-gray-500 transition-colors hover:text-primary-400"
        onclick={() => ($coordinateOverlayOpacity = 0.6)}
        title="Reset to default"
      >
        <UndoOutline class="h-4 w-4" />
      </button>
    </div>
    <Range
      class="h-2 cursor-pointer appearance-none rounded-lg bg-gray-700"
      max={1}
      min={0}
      step={0.05}
      bind:value={$coordinateOverlayOpacity}
    />
  </div>

  {#if showMapOverlayControl}
    <div class="flex flex-col gap-2">
      <div class="flex items-center justify-between">
        <Label class="text-sm font-medium text-gray-300">Map Overlay Opacity</Label>
        <button
          class="text-gray-500 transition-colors hover:text-primary-400"
          onclick={() => ($mapOverlayOpacity = 0.5)}
          title="Reset to default"
        >
          <UndoOutline class="h-4 w-4" />
        </button>
      </div>
      <Range
        class="h-2 cursor-pointer appearance-none rounded-lg bg-gray-700"
        max={1}
        min={0}
        step={0.05}
        bind:value={$mapOverlayOpacity}
      />
    </div>
  {/if}

  <Button
    color="red"
    outline
    size="sm"
    class="mt-2 w-full gap-2 hover:bg-red-900/30"
    onclick={() => ($clickedCoordinates = null)}
    disabled={!$clickedCoordinates}
  >
    <CloseOutline class="h-4 w-4" />
    Unselect All
  </Button>
</div>
