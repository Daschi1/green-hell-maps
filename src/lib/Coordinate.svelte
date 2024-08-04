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

  let clicked = $state($clickedCoordinates?.includes(coordinate) ?? false);
  let hovered = $state(false);
  let visible = $derived($alwaysShowCoordinateOverlay || clicked || hovered);
  let opacity = $derived(visible ? $coordinateOverlayOpacity : 0);

  function toggleClicked() {
    clicked = !clicked;
    clickedCoordinates.update((coordinates) => {
      // assign array if empty
      if (!coordinates) coordinates = [];
      if (clicked) {
        // add coordinate if they don't exist
        if (!coordinates.includes(coordinate)) coordinates = [...coordinates, coordinate];
      } else {
        // remove coordinate if they exist
        coordinates = coordinates.filter((c) => c !== coordinate);
      }
      // null array if empty
      if (coordinates.length === 0) coordinates = null;
      return coordinates;
    });
  }
</script>

<div
  style="opacity: {visible ? 100 : 0}"
  class="relative m-0.5 select-none"
  aria-checked={clicked}
  onclick={toggleClicked}
  onkeydown={() => {}}
  onmouseenter={() => (hovered = true)}
  onmouseleave={() => (hovered = false)}
  role="checkbox"
  tabindex="0"
>
  <!-- filled background -->
  <div style="--tw-bg-opacity: {opacity}" class="absolute h-full w-full bg-primary-500"></div>
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
