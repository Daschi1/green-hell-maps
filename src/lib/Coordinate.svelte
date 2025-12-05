<script lang="ts">
  import {
    alwaysShowCoordinateOverlay,
    clickedCoordinates,
    coordinateOverlayOpacity,
  } from "$lib/settings";

  interface CoordinateProps {
    west: number;
    south: number;
    heatmapMode?: boolean;
    heatmapIntensity?: number;
    heatmapAmount?: number;
  }

  let {
    west,
    south,
    heatmapMode = false,
    heatmapIntensity,
    heatmapAmount,
  }: CoordinateProps = $props();
  const coordinate = parseInt(west.toString() + south.toString());

  let isHeatmap = $derived(heatmapMode);
  let clicked = $derived(isHeatmap ? false : ($clickedCoordinates?.includes(coordinate) ?? false));
  let hovered = $state(false);
  let visible = $derived(isHeatmap || $alwaysShowCoordinateOverlay || clicked || hovered);
  let bgOpacity = $derived(
    isHeatmap
      ? (heatmapIntensity ?? 0) > 0
        ? $coordinateOverlayOpacity
        : 0
      : visible
        ? $coordinateOverlayOpacity
        : 0,
  );
  let textOpacity = $derived(
    isHeatmap
      ? (heatmapIntensity ?? 0) > 0 || hovered || $alwaysShowCoordinateOverlay
        ? 1
        : 0
      : 1,
  );

  let bgStyle = $derived.by(() => {
    if (isHeatmap) {
      const intensity = heatmapIntensity ?? 0;
      const g = Math.round(255 * (1 - intensity));
      return `background-color: rgb(255, ${g}, 0); opacity: ${bgOpacity}`;
    }
    return `--tw-bg-opacity: ${bgOpacity}`;
  });

  function toggleClicked() {
    if (isHeatmap) return;

    let nextClicked: boolean | undefined;
    let nextCount: number | undefined;

    clickedCoordinates.update((coordinates) => {
      // assign array if empty
      if (!coordinates) coordinates = [];
      const exists = coordinates.includes(coordinate);
      if (!exists) {
        // add coordinate if they don't exist
        coordinates = [...coordinates, coordinate];
      } else {
        // remove coordinate if they exist
        coordinates = coordinates.filter((c) => c !== coordinate);
      }
      nextClicked = !exists;
      nextCount = coordinates.length;
      // null array if empty
      if (coordinates.length === 0) coordinates = null;
      return coordinates;
    });

    // Send analytics event (safe for SSR and missing script)
    if (typeof window !== "undefined" && window.stonks?.event) {
      try {
        window.stonks.event("Coordinate Toggle", {
          coordinate_id: String(coordinate),
          west_deg: String(west),
          south_deg: String(south),
          selected: String(Boolean(nextClicked)),
          action: nextClicked ? "enable" : "disable",
          selected_count: String(nextCount ?? 0),
        });
      } catch {
        // no-op
      }
    }
  }
</script>

<div
  style="opacity: {visible ? 100 : 0}"
  class="relative m-0.5 cursor-pointer select-none"
  aria-checked={clicked}
  onclick={toggleClicked}
  onkeydown={() => {}}
  onmouseenter={() => (hovered = true)}
  onmouseleave={() => (hovered = false)}
  role="checkbox"
  tabindex="0"
>
  <!-- filled background -->
  <div style={bgStyle} class="absolute h-full w-full {isHeatmap ? '' : 'bg-primary-500'}"></div>
  <!-- coordinates text -->
  <div
    style="opacity: {textOpacity}"
    class="absolute flex h-full w-full flex-col items-center justify-center font-mono text-xl text-black"
  >
    {#if isHeatmap && !hovered && !$alwaysShowCoordinateOverlay}
      <span class="font-bold">{heatmapAmount ?? 0}</span>
    {:else}
      <div>
        <span class="font-bold">{west}</span>'W
      </div>
      <div>
        <span class="font-bold">{south}</span>'S
      </div>
    {/if}
  </div>
</div>
