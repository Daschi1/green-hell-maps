<script lang="ts">
  interface Props {
    west: number;
    south: number;
  }

  let { west, south }: Props = $props();

  let visible = $state(false);

  function toggleVisibility() {
    visible = !visible;
  }
</script>

<div class="p-0.5 {visible ? 'opacity-100' : 'opacity-0'} hover:opacity-100" aria-checked={visible}
     onclick={toggleVisibility} onkeydown={() => {}}
     role="checkbox" tabindex="0">
  <div
    class="w-full h-full bg-blue-500/60 text-xl font-mono text-black select-none flex flex-col items-center justify-center">
    <div>
      <span class="font-bold">{west}</span>'W
    </div>
    <div>
      <span class="font-bold">{south}</span>'S
    </div>
  </div>
</div>
