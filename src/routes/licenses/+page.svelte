<script lang="ts">
  import type { PageData } from "./$types";
  import { A, Card, Heading, P } from "flowbite-svelte";

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
  let licenses = $derived(data.licenses);
</script>

<div
  class="grid grid-cols-1 gap-2 break-words sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
>
  {#each Object.entries(licenses) as [packageId, packageLicense]}
    <Card size="md">
      <Heading tag="h5">
        {#if packageLicense.repository}
          <A href={packageLicense.repository} target="_blank">{packageId}</A>
        {:else}
          {packageId}
        {/if}
      </Heading>
      {#if packageLicense.description}
        <P>{packageLicense.description}</P>
      {/if}
      {#if packageLicense.publisher}
        <P>Published by: {packageLicense.publisher}</P>
      {/if}
      {#if packageLicense.copyright}
        <P>{packageLicense.copyright}</P>
      {/if}
      {#if packageLicense.licenses}
        <P>License: {packageLicense.licenses}</P>
      {/if}
    </Card>
  {/each}
</div>
