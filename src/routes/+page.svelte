<script lang="ts">
  import { A, Heading, P, List, Li } from "flowbite-svelte";
  import { HeartOutline } from "flowbite-svelte-icons";
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
    <Heading tag="h5">Features</Heading>
    <List class="list-disc pl-5" tag="ul">
      <Li><strong>Three Interactive Maps:</strong></Li>
      <List class="list-disc pl-5" tag="ul">
        <Li><A href="/story-mode{$page.url.search}">Story Mode</A></Li>
        <Li><A href="/spirits-of-amazonia{$page.url.search}">Spirits of Amazonia</A></Li>
        <Li
          ><A href="/comparison{$page.url.search}">Comparison</A>: A blend of the Story Mode and
          Spirits of Amazonia maps, where you can configure the blend ratio for better comparison.
        </Li>
      </List>
      <Li><strong>Mark Coordinates:</strong> Left-click on any coordinate to mark it.</Li>
      <Li
        ><strong>Shareable URLs:</strong> Marked coordinates are automatically reflected in the URL,
        allowing you to share or save the URL to easily retrieve your coordinates later.
      </Li>
      <Li><strong>Coordinate Overlay Customization:</strong></Li>
      <List class="list-disc pl-5" tag="ul">
        <Li>Adjust the opacity of the coordinate overlay to suit your preference.</Li>
        <Li>Toggle between always showing all coordinates or only displaying them on hover.</Li>
      </List>
    </List>
  </div>

  <div>
    <Heading tag="h5">Credits</Heading>
    <div class="flex flex-col gap-2">
      <div>
        <P>
          Map design by <A href="https://www.reddit.com/user/alex3omg/" target="_blank"
            >u/alex3omg</A
          >, originally posted <A href="https://www.reddit.com/r/GreenHell/" target="_blank">here</A
          > on <A
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
          Created by <A href="https://github.com/Daschi1" target="_blank">Daschi</A> with
          <HeartOutline
            class="group-hover:fill-red-500 group-hover:text-red-500 group-hover:motion-safe:animate-pulse"
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
