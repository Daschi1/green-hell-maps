<script lang="ts">
  import { alwaysShowCoordinateOverlay, coordinateOverlayOpacity } from "$lib/settings";

  interface Props {
    west: number;
    south: number;
  }

  let { west, south }: Props = $props();

  let clicked = $state(false);
  let hovered = $state(false);
  let visible = $derived($alwaysShowCoordinateOverlay || clicked || hovered);
  let opacity = $derived(visible ? $coordinateOverlayOpacity : 0);
</script>

<div
  style="opacity: {visible ? 100 : 0}"
  class="relative m-0.5"
  aria-checked={clicked}
  onclick={() => clicked = !clicked}
  onkeydown={() => {}}
  onmouseenter={() => hovered = true}
  onmouseleave={() => hovered = false}
  role="checkbox"
  tabindex="0"
>
  <div style="--tw-bg-opacity: {opacity}" class="bg-primary-500 h-full w-full absolute"></div>
  <div
    class="flex h-full w-full flex-col items-center justify-center font-mono text-xl text-black absolute"
  >
    <div>
      <span class="font-bold">{west}</span>'W
    </div>
    <div>
      <span class="font-bold">{south}</span>'S
    </div>
  </div>
</div>
