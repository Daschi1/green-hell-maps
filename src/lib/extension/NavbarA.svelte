<script lang="ts">
  import { A } from "flowbite-svelte";
  import type { Snippet } from "svelte";

  interface Props {
    href: string;
    pathname: string;
    activePathname: string;
    children: Snippet;
  }

  let { href, activePathname, pathname, children }: Props = $props();
  let underlineClass = $derived(pathname === activePathname ? "underline" : "");
</script>

<A class={underlineClass} {href}>
  {@render children()}
</A>
