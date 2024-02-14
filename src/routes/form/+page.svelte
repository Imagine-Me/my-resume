<script lang="ts">
  import { goto } from "$app/navigation";
  import { onDestroy } from "svelte";
  import { page } from "../../store/page";

  $: currentForm = import(`../../components/form/${$page.currentForm}.svelte`);

  const handleFormChange = () => goto(`/form?page=${$page.currentForm}`);
  let unsubscribe: any;
  $: {
    unsubscribe = page.subscribe(handleFormChange);
  }

  onDestroy(() => {
    unsubscribe();
  });
</script>

{#if currentForm}
  {#await currentForm then { default: Form }}
    <Form />
  {/await}
{/if}
