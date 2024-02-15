<script lang="ts">
  import Typography from "./Typography.svelte";
  import { slide } from "svelte/transition";

  export let header = "",
    open = false,
    onAccordionClicked: (value: boolean) => void;
</script>

<div role="button" tabindex="0" class="rounded border-2 border-white">
  <a
    class="flex justify-between p-4 bg-white rounded-t"
    on:click={() => onAccordionClicked(!open)}
  >
    <Typography variant="h4" className="text-background">{header}</Typography>
    <slot name="icons" />
  </a>
  {#if open}
    <div class="p-4" transition:slide>
      <slot />
    </div>
  {/if}
</div>
