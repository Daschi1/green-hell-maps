<script lang="ts">
  import "../app.css";
  import { Checkbox, Label, Range } from "flowbite-svelte";
  import Navbar from "$lib/Navbar.svelte";
  import { alwaysShowCoordinateOverlay } from "$lib/settings";
</script>

<div class="flex flex-col gap-2 p-2">
  <div class="flex flex-row gap-4 items-center">
    <Navbar />
    <div class="flex flex-row gap-2 items-center">
      <Label>Overlay opacity:</Label>
      <span>
        <Range max={100} min={0} value={60} />
      </span>
      <Checkbox bind:checked={$alwaysShowCoordinateOverlay}>Always show coordinate overlay
      </Checkbox>
    </div>
  </div>

  <slot></slot>
</div>
