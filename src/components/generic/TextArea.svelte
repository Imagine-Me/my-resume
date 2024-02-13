<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let label = "",
    placeholder = "",
    value = "",
    name: string;
  const dispatch = createEventDispatcher();

  function onInputChange(event: any) {
    value = (event.target as HTMLInputElement).value;
    dispatch("input", value);
  }
</script>

<div class="flex flex-col">
  {#if label}
    <label for={name} class="text-lg font-bold tracking-wide">{label}</label>
  {/if}
  <textarea
    {name}
    {placeholder}
    bind:value
    on:input={onInputChange}
    class="outline-none border p-4 border-white rounded text-xl bg-transparent hover:border-2 focus:border-2"
  />
</div>
