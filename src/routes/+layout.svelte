<script lang="ts">
  import "../app.css";
  import Navbar from "$lib/Navbar.svelte";
  import Settings from "$lib/Settings.svelte";
</script>

<div class="flex flex-col gap-2 p-2">
  <div class="flex flex-row items-center gap-4">
    <Navbar />
    <Settings />
  </div>

  <slot></slot>
</div>
