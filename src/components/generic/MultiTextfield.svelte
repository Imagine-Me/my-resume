<script lang="ts">
  import TextField from "./TextField.svelte";
  import Button from "./Button.svelte";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let values: string[] = [],
    className = "",
    name: string,
    label = "",
    placeholder = "";
  let value = "";

  function addValue() {
    values.push(value);
    value = "";
    dispatch("input", values);
  }

  function removeItem(index: number) {
    values.splice(index, 1);
    dispatch("input", values);
  }
</script>

<div class={`flex w-full gap-2 ${className}`}>
  <TextField className="grow" {name} {label} bind:value {placeholder} />
  <Button className="mt-7 w-28" onClick={addValue}>ADD</Button>
</div>
<div class="flex gap-2 my-2">
  {#each values as item, i}
    <div
      class="flex text-white pl-4 pr-1 py-2 border-2 rounded items-center gap-3"
    >
      <div>
        {item}
      </div>
      <button
        on:click={() => removeItem(i)}
        tabindex={1}
        class="flex justify-center items-center cursor text-background bg-white w-6 h-6 block rounded-full"
      >
        x
      </button>
    </div>
  {/each}
</div>
