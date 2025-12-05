<script lang="ts">
  import { alwaysShowCoordinateOverlay, coordinateOverlayOpacity } from "$lib/settings";

  interface Props {
    west: number;
    south: number;
    amount?: number;
    intensity?: number;
  }

  let { west, south, amount, intensity }: Props = $props();

  let hovered = $state(false);
  let hasData = $derived((intensity ?? 0) > 0);

  let bgOpacity = $derived(hasData ? $coordinateOverlayOpacity : 0);

  // Text is visible if there is data, OR if we are hovering, OR if always show is on.
  // If no data, it behaves like a normal empty cell (hidden unless hovered/alwaysOn).
  let textOpacity = $derived(hasData || hovered || $alwaysShowCoordinateOverlay ? 1 : 0);

  let bgStyle = $derived.by(() => {
    const val = intensity ?? 0;
    const g = Math.round(255 * (1 - val));
    return `background-color: rgb(255, ${g}, 0); opacity: ${bgOpacity}`;
  });
</script>

<div
  class="relative m-0.5 cursor-default select-none"
  onmouseenter={() => (hovered = true)}
  onmouseleave={() => (hovered = false)}
  role="cell"
  tabindex="-1"
>
  <!-- heatmap background -->
  <div style={bgStyle} class="absolute h-full w-full"></div>

  <!-- coordinates/value text -->
  <div
    style="opacity: {textOpacity}"
    class="absolute flex h-full w-full flex-col items-center justify-center font-mono text-xl text-black"
  >
    {#if !hovered && !$alwaysShowCoordinateOverlay}
      <span class="font-bold">{amount ?? 0}</span>
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
