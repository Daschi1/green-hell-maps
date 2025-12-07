<script lang="ts">
  import type { PageData } from "./$types";
  import { A, Card, Heading, P } from "flowbite-svelte";
  import PageShell from "$lib/layouts/PageShell.svelte";

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
  let licenses = $derived(data.licenses);
</script>

<PageShell>
  <div class="mb-8 text-center">
    <Heading tag="h1" class="mb-4 text-4xl font-extrabold text-white">Open Source Licenses</Heading>
    <P class="text-gray-400">We stand on the shoulders of giants. Thanks to all these projects.</P>
  </div>

  <div
    class="grid grid-cols-1 gap-6 break-words sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
  >
    {#each Object.entries(licenses) as [packageId, packageLicense]}
      <Card
        class="flex h-full flex-col border-gray-700 bg-gray-800 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-500/10"
        padding="lg"
      >
        <div class="flex-grow">
          <Heading tag="h5" class="mb-3 text-lg font-bold tracking-tight text-white">
            {#if packageLicense.repository}
              <A
                href={packageLicense.repository}
                target="_blank"
                class="text-primary-500 hover:text-primary-400 hover:underline"
              >
                {packageId}
              </A>
            {:else}
              {packageId}
            {/if}
          </Heading>

          {#if packageLicense.description}
            <P class="mb-3 line-clamp-3 text-sm text-gray-400" title={packageLicense.description}>
              {packageLicense.description}
            </P>
          {/if}
        </div>

        <div class="mt-4 space-y-1 border-t border-gray-700 pt-3 text-xs text-gray-500">
          {#if packageLicense.publisher}
            <div class="flex justify-between">
              <span>Publisher:</span>
              <span class="max-w-[60%] truncate text-right font-medium text-gray-300"
                >{packageLicense.publisher}</span
              >
            </div>
          {/if}
          {#if packageLicense.licenses}
            <div class="flex justify-between">
              <span>License:</span>
              <span class="font-mono font-medium text-primary-400">{packageLicense.licenses}</span>
            </div>
          {/if}
          {#if packageLicense.copyright}
            <div class="mt-1 line-clamp-1 text-gray-600" title={packageLicense.copyright}>
              {packageLicense.copyright}
            </div>
          {/if}
        </div>
      </Card>
    {/each}
  </div>
</PageShell>
