<script lang="ts">
  import "../app.css";
  import {
    A, Span,
  } from "flowbite-svelte";
  import { page } from "$app/stores";

  let activeUrl = $derived($page.url.pathname);
</script>

<div class="flex flex-col gap-2 p-2">
  <div class="flex flex-row gap-2">
    <A href="/"><Span>Green Hell Maps</Span></A>
    <A href="/story-mode">Story Mode</A>
    <A href="/spirits-of-amazonia">Spirits of Amazonia</A>
  </div>

  <slot></slot>
</div>
