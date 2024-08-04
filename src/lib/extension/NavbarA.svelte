<script lang="ts">
  import { A } from "flowbite-svelte";

  interface Props {
    href: string;
    activePathname: string;
  }

  let { href, activePathname }: Props = $props();
  let underlineClass = $derived(href == activePathname ? "underline" : "");
</script>

<A class={underlineClass} {href}>
  <slot></slot>
</A>
