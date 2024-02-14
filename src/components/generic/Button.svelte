<script lang="ts">
  export let className = "",
    variant: "outlined" | "filled" = "filled",
    onClick = () => {};

  const variantClass =
    variant === "filled"
      ? "bg-white text-background"
      : "border-2 border-white text-white";
</script>

<button
  class={`outline-none py-3 text-xl tracking-wider rounded px-6 ${variantClass} ${className}`}
  on:click={onClick}
>
  <slot />
</button>
