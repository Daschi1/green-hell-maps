<script lang="ts">
  import { A, Heading, P } from "flowbite-svelte";
  import { HeartOutline } from "flowbite-svelte-icons";
  import { page } from "$app/stores";
</script>

<svelte:head>
  <title>Green Hell Maps</title>
  <meta name="description" content="Green Hell interactive maps" />
</svelte:head>

<div class="flex flex-col">
  <br />
  <div>
    <Heading tag="h5">Green Hell Maps</Heading>
    <P>
      Available for <A href="/story-mode{$page.url.search}">Story Mode</A> and <A
        href="/spirits-of-amazonia{$page.url.search}">Spirits of Amazonia</A
      >.
    </P>
  </div>
  <br />
  <div>
    <Heading tag="h5">Credits</Heading>
    <div class="flex flex-col gap-1">
      <div>
        <P>
          Map design by <A href="https://www.reddit.com/user/alex3omg/" target="_blank"
            >u/alex3omg</A
          >, originally posted <A href="https://www.reddit.com/r/GreenHell/" target="_blank">here</A
          >
          on
          <A
            href="https://www.reddit.com/r/GreenHell/comments/11miatv/green_hell_full_map_with_icons_spoilers_story_and/"
            target="_blank">r/GreenHell</A
          >.
        </P>
        <P>Slightly modified to include coordinates on both sides of the maps.</P>
      </div>

      <P>
        <A href="https://greenhell-game.com/" target="_blank">Green Hell</A> is a game developed by
        <A href="https://creepyjar.com/en/" target="_blank">Creepy Jar</A>.
      </P>

      <div>
        <P class="group flex w-fit items-center gap-1">
          Created with
          <HeartOutline
            class="group-hover:motion-safe:animate-pulse group-hover:fill-red-500 group-hover:text-red-500"
          />
          and many <span><A href="/licenses">open-source projects</A>!</span>
        </P>
        <P
          >Source code available on <A
            href="https://github.com/Daschi1/green-hell-maps"
            target="_blank">GitHub</A
          >.</P
        >
      </div>
    </div>
  </div>
</div>
