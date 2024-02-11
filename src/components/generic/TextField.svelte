<script lang="ts">
  export let label = "",
    placeholder = "",
    type = "text",
    name: string;
</script>

<div class="flex flex-col">
  {#if label}
    <label for={name} class="text-lg font-bold tracking-wide">{label}</label>
  {/if}
  <input
    {name}
    {type}
    {placeholder}
    class="outline-none border p-4 border-white rounded text-xl bg-transparent hover:border-2 focus:border-2"
  />
</div>
