<script lang="ts">
  import { A, Heading, P } from "flowbite-svelte";
  import { page } from "$app/stores";
</script>

<svelte:head>
  <title>Green Hell Maps</title>
  <meta name="description" content="Green Hell interactive maps" />
</svelte:head>

<div class="flex flex-col gap-4">
  <div>
    <Heading tag="h5">Green Hell Maps</Heading>
    <P>
      Available for <A href="/story-mode{$page.url.search}">Story Mode</A> and <A
        href="/spirits-of-amazonia{$page.url.search}">Spirits of Amazonia</A
      >.
    </P>
  </div>
  <div>
    <P>
      Map design by <A href="https://www.reddit.com/user/alex3omg/" target="_blank">u/alex3omg</A>,
      originally posted <A href="https://www.reddit.com/r/GreenHell/" target="_blank">here</A> on <A
        href="https://www.reddit.com/r/GreenHell/comments/11miatv/green_hell_full_map_with_icons_spoilers_story_and/"
        target="_blank">r/GreenHell</A
      >.
    </P>
    <P>Modifications include the addition of coordinate axes on both sides of the maps.</P>
  </div>
  <div>
    <P>
      <A href="https://greenhell-game.com/" target="_blank">Green Hell</A> is a game developed by <A
        href="https://creepyjar.com/en/"
        target="_blank">Creepy Jar</A
      >.
    </P>
  </div>
</div>
