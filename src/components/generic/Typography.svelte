<script lang="ts">
  type TypographyType = "h1" | "h2" | "h3" | "h4" | "h5" | "p";
  export let variant: TypographyType,
    className = "";
  switch (variant) {
    case "h1":
      className = `text-6xl font-bold leading-h1 ${className}`;
      break;
    case "h2":
      className = `text-3xl ${className}`;
      break;
    case "h3":
      className = `text-2xl ${className}`;
      break;
    case "h4":
      className = `text-2xl ${className}`;
      break;
    case "h5":
      className = `text-lg ${className}`;
      break;
    case "p":
      className = `text-sm break-words ${className}`;
      break;
  }
</script>

<svelte:element this={variant} class={className}><slot /></svelte:element>
