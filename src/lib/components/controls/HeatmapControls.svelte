<script lang="ts">
  import { Select } from "flowbite-svelte";
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

  $effect(() => {
    if (!$heatmapDateRange) {
      $heatmapDateRange = "30d";
    }
    return () => {
      $heatmapDateRange = null;
    };
  });
</script>

<div class="flex items-center gap-4">
  <Select class="!w-32" items={dateRanges} size="sm" bind:value={$heatmapDateRange} />
  <div class="flex items-center gap-2 text-sm text-gray-900 dark:text-gray-300">
    <span class="font-bold">0</span>
    <div
      class="h-4 w-32 rounded border border-gray-400 bg-gradient-to-r from-[#FFFF00] to-[#FF0000]"
    ></div>
    <span class="font-bold">{$maxHeatmapValue}</span>
  </div>
</div>
