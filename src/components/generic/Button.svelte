<script lang="ts">
  export let className = "";
</script>

<button
  class={`outline-none py-3 text-xl tracking-wider rounded px-6 bg-white text-background ${className}`}
>
  <slot />
</button>
