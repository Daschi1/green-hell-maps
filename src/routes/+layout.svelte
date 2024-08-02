<script>
  import "../app.css";
  import {
    Sidebar, SidebarBrand, SidebarGroup, SidebarItem,
    SidebarWrapper,
  } from "flowbite-svelte";
  import { page } from "$app/stores";

  let activeUrl = $derived($page.url.pathname);
  const site = {
    name: "Green Hell Maps",
    href: "/",
    img: "",
  };
</script>

<Sidebar {activeUrl}>
  <SidebarWrapper>
    <SidebarGroup>
      <SidebarBrand {site}></SidebarBrand>
      <SidebarItem href="/story-mode" label="Story Mode" />
      <SidebarItem href="/spirits-of-amazonia" label="Spirits of Amazonia" />
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>

<slot></slot>
