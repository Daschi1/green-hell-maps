<script lang="ts">
  import type { PageData } from "./$types";

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
  let licenses = $derived(data.licenses);
</script>

{#each Object.entries(licenses) as [packageId, packageLicense]}
  <div>
    {packageId} - {packageLicense.publisher}
  </div>
{/each}
