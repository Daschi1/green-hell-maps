<script lang="ts">
  import { Checkbox, Label, Range, Select } from "flowbite-svelte";
  import { CloseOutline, UndoOutline } from "flowbite-svelte-icons";
  import { page } from "$app/state";
  import {
    alwaysShowCoordinateOverlay,
    clickedCoordinates,
    coordinateOverlayOpacity,
    heatmapDateRange,
    mapOverlayOpacity,
    maxHeatmapValue,
  } from "$lib/settings";

  const dateRanges = [
    { value: "day", name: "Current Day" },
    { value: "7d", name: "Last 7 Days" },
    { value: "30d", name: "Last 30 Days" },
    { value: "6mo", name: "Last 6 Months" },
    { value: "12mo", name: "Last 12 Months" },
    { value: "year", name: "Current Year" },
    { value: "all", name: "All Time" },
  ];

  $effect(() => {
    if (page.url.pathname === "/heatmap") {
      if (!$heatmapDateRange) {
        $heatmapDateRange = "30d";
      }
    } else if ($heatmapDateRange) {
      $heatmapDateRange = null;
    }
  });
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

  {#if ["/comparison", "/heatmap"].includes(page.url.pathname)}
    <Label class="flex items-center gap-2">
      <span class="flex-shrink-0">Map overlay opacity</span>
      <span><Range max={1} min={0} step={0.05} bind:value={$mapOverlayOpacity} /></span>
      <UndoOutline
        class="cursor-pointer hover:text-red-500"
        onclick={() => ($mapOverlayOpacity = 0.5)}
      />
    </Label>
  {/if}

  {#if page.url.pathname === "/heatmap"}
    <Select class="!w-32" items={dateRanges} size="sm" bind:value={$heatmapDateRange} />
    <div class="flex items-center gap-2 text-sm text-gray-900 dark:text-gray-300">
      <span class="font-bold">0</span>
      <div
        class="h-4 w-32 rounded border border-gray-400 bg-gradient-to-r from-[#FFFF00] to-[#FF0000]"
      ></div>
      <span class="font-bold">{$maxHeatmapValue}</span>
    </div>
  {/if}
</div>
