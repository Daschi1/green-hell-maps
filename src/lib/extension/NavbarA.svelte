<script lang="ts">
  import { A } from "flowbite-svelte";

  interface Props {
    href: string;
    pathname: string;
    activePathname: string;
  }

  let { href, activePathname, pathname }: Props = $props();
  let underlineClass = $derived(pathname === activePathname ? "underline" : "");
</script>

<A class={underlineClass} {href}>
  <slot></slot>
</A>
