<script lang="ts">
  import {
    alwaysShowCoordinateOverlay,
    clickedCoordinates,
    coordinateOverlayOpacity,
  } from "$lib/settings";

  interface Props {
    west: number;
    south: number;
  }

  let { west, south }: Props = $props();
  const coordinate = parseInt(west.toString() + south.toString());

  let hovered = $state(false);
  let isClicked = $derived($clickedCoordinates?.includes(coordinate) ?? false);
  let isVisible = $derived($alwaysShowCoordinateOverlay || isClicked || hovered);

  let bgOpacity = $derived(isVisible ? $coordinateOverlayOpacity : 0);

  function toggleClicked() {
    let nextClicked: boolean | undefined;
    let nextCount: number | undefined;

    clickedCoordinates.update((coordinates) => {
      if (!coordinates) coordinates = [];
      const exists = coordinates.includes(coordinate);
      if (!exists) {
        coordinates = [...coordinates, coordinate];
      } else {
        coordinates = coordinates.filter((c) => c !== coordinate);
      }
      nextClicked = !exists;
      nextCount = coordinates.length;
      if (coordinates.length === 0) coordinates = null;
      return coordinates;
    });

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
  style="opacity: {isVisible ? 100 : 0}"
  class="relative m-0.5 cursor-pointer select-none"
  aria-checked={isClicked}
  onclick={toggleClicked}
  onkeydown={() => {}}
  onmouseenter={() => (hovered = true)}
  onmouseleave={() => (hovered = false)}
  role="checkbox"
  tabindex="0"
>
  <!-- filled background -->
  <div style="--tw-bg-opacity: {bgOpacity}" class="absolute h-full w-full bg-primary-500"></div>

  <!-- coordinates text -->
  <div
    class="absolute flex h-full w-full flex-col items-center justify-center font-mono text-xl text-black"
  >
    <div>
      <span class="font-bold">{west}</span>'W
    </div>
    <div>
      <span class="font-bold">{south}</span>'S
    </div>
  </div>
</div>
