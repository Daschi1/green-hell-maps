<script lang="ts">
  import Coordinate from "./Coordinate.svelte";

  const westStart = 56;
  const westEnd = 20;
  const westLength = westStart - westEnd + 1; // 36 + 1

  const southStart = 12;
  const southEnd = 50;
  const southLength = southEnd - southStart + 1; // 38 + 1
</script>

<div class="relative w-[2751px] h-[2899px] cursor-crosshair">
  <img class="pointer-events-none" alt="soa-map.png" src="soa-map.png">

  <div
    class="absolute top-0 left-0 w-full h-full grid grid-cols-[repeat(37,_minmax(0,_1fr))] grid-rows-[repeat(39,_minmax(0,_1fr))]">
    {#each { length: southLength } as _, south}
      {#each { length: westLength } as _, west}
        <Coordinate south={southStart + south} west={westStart - west} />
      {/each}
    {/each}
  </div>
</div>
