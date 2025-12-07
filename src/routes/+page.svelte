<script lang="ts">
  import { Button, Card, Heading, P, A } from "flowbite-svelte";
  import { ArrowRightOutline, HeartOutline } from "flowbite-svelte-icons";
  import { page } from "$app/state";
  import PageShell from "$lib/layouts/PageShell.svelte";
</script>

<svelte:head>
  <title>Green Hell Maps</title>
  <meta name="description" content="Green Hell interactive maps" />
</svelte:head>

<PageShell>
  {#snippet hero()}
    <section
      class="relative -mt-16 flex min-h-[70vh] flex-col items-center justify-center overflow-hidden bg-gray-900 px-4 text-center"
    >
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900/40 via-gray-900 to-gray-900"
      ></div>
      <div class="relative z-10 max-w-4xl">
        <Heading
          tag="h1"
          class="mb-6 text-5xl font-extrabold tracking-tight text-white drop-shadow-lg md:text-7xl"
        >
          Green Hell <span class="text-primary-500">Maps</span>
        </Heading>
        <P class="mb-8 text-xl font-light text-gray-300 lg:text-2xl">
          The ultimate interactive companion for your survival journey. Explore the Amazon with
          precision, mark coordinates, and share your discoveries.
        </P>
        <div class="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button
            href="/story-mode{page.url.search}"
            size="xl"
            color="primary"
            class="gap-2 shadow-lg shadow-primary-500/30"
          >
            Open Story Mode Map <ArrowRightOutline class="h-5 w-5" />
          </Button>
          <Button
            href="/spirits-of-amazonia{page.url.search}"
            size="xl"
            color="light"
            class="border-gray-600 bg-transparent text-white hover:bg-gray-800 focus:ring-gray-700"
          >
            Spirits of Amazonia
          </Button>
        </div>
      </div>
    </section>
  {/snippet}

  <!-- Content Grid -->
  <div class="grid gap-8 md:grid-cols-3">
    <!-- Comparison Card -->
    <Card class="border-gray-700 bg-gray-800 shadow-xl" padding="xl">
      <Heading tag="h3" class="mb-2 text-2xl font-bold text-white">Comparison Mode</Heading>
      <P class="mb-6 text-gray-400">
        Seamlessly compare the landscapes of Story Mode and Spirits of Amazonia with an adjustable
        blend overlay.
      </P>
      <Button href="/comparison{page.url.search}" outline color="primary" class="w-full">
        Launch Comparison
      </Button>
    </Card>

    <!-- Heatmap Card -->
    <Card class="border-gray-700 bg-gray-800 shadow-xl" padding="xl">
      <Heading tag="h3" class="mb-2 text-2xl font-bold text-white">Visitor Heatmap</Heading>
      <P class="mb-6 text-gray-400">
        Discover popular locations and player traffic patterns with real-time analytics data
        visualised on the map.
      </P>
      <Button href="/heatmap{page.url.search}" outline color="primary" class="w-full">
        View Heatmap
      </Button>
    </Card>

    <!-- Features Card -->
    <Card class="border-gray-700 bg-gray-800 shadow-xl" padding="xl">
      <Heading tag="h3" class="mb-2 text-2xl font-bold text-white">Features</Heading>
      <ul class="mb-6 space-y-2 text-gray-400">
        <li class="flex items-center gap-2">
          <span class="h-1.5 w-1.5 rounded-full bg-primary-500"></span> Shareable Coordinates
        </li>
        <li class="flex items-center gap-2">
          <span class="h-1.5 w-1.5 rounded-full bg-primary-500"></span> Interactive Selection
        </li>
        <li class="flex items-center gap-2">
          <span class="h-1.5 w-1.5 rounded-full bg-primary-500"></span> Custom Overlays
        </li>
      </ul>
      <P class="text-sm text-gray-500">Everything you need for navigation.</P>
    </Card>
  </div>

  <!-- Credits Footer -->
  <div class="mt-16 border-t border-gray-800 pt-8 text-center">
    <P class="mb-2 text-gray-400">
      Map design by <A
        href="https://www.reddit.com/user/alex3omg/"
        target="_blank"
        class="text-primary-500 hover:text-primary-400">u/alex3omg</A
      >
      on
      <A
        href="https://www.reddit.com/r/GreenHell/"
        target="_blank"
        class="text-primary-500 hover:text-primary-400">r/GreenHell</A
      >.
    </P>
    <P class="flex items-center justify-center gap-1 text-gray-500">
      Created by
      <A
        href="https://github.com/Daschi1"
        target="_blank"
        class="text-primary-500 hover:text-primary-400">Daschi</A
      >
      with
      <HeartOutline class="h-4 w-4 text-red-500 hover:animate-pulse" />
      and <A href="/licenses" class="text-primary-500 hover:text-primary-400">open source</A>.
    </P>
    <P class="mt-4 text-xs text-gray-600">
      Green Hell is a trademark of Creepy Jar. This site is not affiliated with Creepy Jar.
    </P>
  </div>
</PageShell>
