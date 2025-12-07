<script lang="ts">
  import { Navbar, NavBrand, NavUl, NavHamburger } from "flowbite-svelte";
  import { page } from "$app/state";

  let activeUrl = $derived(page.url.pathname);
  let search = $derived(page.url.search);

  const navItems = [
    { path: "/story-mode", label: "Story Mode" },
    { path: "/spirits-of-amazonia", label: "Spirits of Amazonia" },
    { path: "/comparison", label: "Comparison" },
    { path: "/heatmap", label: "Heatmap" },
    { path: "/licenses", label: "Licenses" },
  ];
</script>

<Navbar
  fluid
  class="fixed top-0 z-50 w-full border-b border-gray-700 bg-gray-900/80 px-4 py-3 backdrop-blur-md transition-colors duration-300 sm:px-6"
>
  <NavBrand href="/{search}">
    <span
      class="self-center whitespace-nowrap text-xl font-bold tracking-wide text-primary-500 transition-colors hover:text-primary-400"
    >
      Green Hell Maps
    </span>
  </NavBrand>
  <NavHamburger />
  <NavUl class="ml-auto">
    {#each navItems as item}
      {@const isActive = activeUrl === item.path}
      <li>
        <a
          href="{item.path}{search}"
          class="block rounded px-3 py-2 font-medium transition-colors md:p-0 {isActive
            ? 'text-primary-500'
            : 'text-gray-300 hover:bg-gray-700 hover:text-white md:hover:bg-transparent md:hover:text-primary-400'}"
          aria-current={isActive ? "page" : undefined}
        >
          {item.label}
        </a>
      </li>
    {/each}
  </NavUl>
</Navbar>
