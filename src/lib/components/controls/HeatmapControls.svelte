<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { Select, Label } from "flowbite-svelte";
  import { heatmapDateRange, maxHeatmapValue } from "$lib/settings";

  const dateRanges = [
    { value: "day", name: "Current Day" },
    { value: "7d", name: "Last 7 Days" },
    { value: "30d", name: "Last 30 Days" },
    { value: "6mo", name: "Last 6 Months" },
    { value: "12mo", name: "Last 12 Months" },
    { value: "year", name: "Current Year" },
    { value: "all", name: "All Time" },
  ];

  onMount(() => {
    if (!$heatmapDateRange) {
      $heatmapDateRange = "30d";
    }
  });

  onDestroy(() => {
    $heatmapDateRange = null;
  });
</script>

<div class="mt-2 flex flex-col gap-5 border-t border-gray-700 pt-4">
  <div class="flex flex-col gap-2">
    <Label class="text-sm font-medium text-gray-300">Date Range</Label>
    <Select
      class="border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:border-primary-500 focus:ring-primary-500"
      items={dateRanges}
      size="sm"
      bind:value={$heatmapDateRange}
    />
  </div>

  <div class="flex flex-col gap-2">
    <Label class="text-sm font-medium text-gray-300">Visitors (0 - {$maxHeatmapValue})</Label>
    <div
      class="relative h-4 w-full overflow-hidden rounded-full border border-gray-600 shadow-inner"
    >
      <div class="absolute inset-0 bg-gradient-to-r from-[#FFFF00] to-[#FF0000]"></div>
    </div>
    <div class="flex justify-between font-mono text-xs text-gray-400">
      <span>Min: 0</span>
      <span>Max: {$maxHeatmapValue}</span>
    </div>
  </div>
</div>
