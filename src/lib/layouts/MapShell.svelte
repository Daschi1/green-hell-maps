<script lang="ts">
  import Navbar from "$lib/Navbar.svelte";
  import MapControls from "$lib/components/controls/MapControls.svelte";
  import { CogOutline } from "flowbite-svelte-icons";
  import type { Snippet } from "svelte";
  import { fly } from "svelte/transition";

  interface Props {
    children: Snippet;
    extraControls?: Snippet;
    showMapOverlayControl?: boolean;
  }

  let { children, extraControls, showMapOverlayControl = false }: Props = $props();

  let isOpen = $state(true);
</script>

<div class="relative min-h-screen bg-gray-900">
  <Navbar />

  <!-- Toggle Button (Visible when closed) -->
  {#if !isOpen}
    <button
      class="fixed right-4 top-24 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 text-white shadow-lg transition-transform hover:scale-110 hover:bg-primary-500 focus:outline-none focus:ring-4 focus:ring-primary-800"
      onclick={() => (isOpen = true)}
      aria-label="Open Settings"
    >
      <CogOutline class="h-6 w-6" />
    </button>
  {/if}

  <!-- Settings Panel -->
  {#if isOpen}
    <div
      transition:fly={{ x: 300, duration: 300 }}
      class="fixed right-4 top-20 z-40 w-80 rounded-xl border border-gray-700 bg-gray-900/95 p-5 shadow-2xl backdrop-blur-md"
    >
      <div class="mb-4 flex items-center justify-between border-b border-gray-700 pb-2">
        <h2 class="text-lg font-bold tracking-wide text-primary-500">Map Settings</h2>
        <button
          class="text-gray-400 transition-colors hover:text-white"
          onclick={() => (isOpen = false)}
          aria-label="Close Settings"
        >
          ✕
        </button>
      </div>

      <div class="flex flex-col gap-6">
        <MapControls {showMapOverlayControl} />
        {@render extraControls?.()}
      </div>
    </div>
  {/if}

  <!-- Map Content -->
  <main class="overflow-x-auto pt-16">
    {@render children()}
  </main>
</div>
