<script>
  import "../app.css";
  import { Navbar, NavBrand, NavHamburger, NavLi, NavUl } from "flowbite-svelte";
  import { page } from "$app/stores";

  let activeUrl = $derived($page.url.pathname);
  $inspect(activeUrl)
</script>

<Navbar>
  <NavBrand>Green Hell Maps</NavBrand>
  <NavHamburger />
  <NavUl {activeUrl}>
    <NavLi href="/story-mode">Story Mode</NavLi>
    <NavLi href="/spirits-of-amazonia">Spirits of Amazonia</NavLi>
  </NavUl>
</Navbar>

<slot></slot>
