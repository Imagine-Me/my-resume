<script lang="ts">
  import Typography from "../generic/Typography.svelte";
  import Button from "../generic/Button.svelte";
  import { pageData, page } from "../../store/page";
  import { keyTitles } from "src/constants/placeholders";
  const { nextForm, prevForm, current, total } = $pageData;
  export let header: string;
  const previousFormTitle = keyTitles[prevForm as keyof typeof keyTitles];
  const nextFormTitle = keyTitles[nextForm as keyof typeof keyTitles];
</script>

<Typography variant="h2">{header} - {current}/{total}</Typography>
<div class="py-8">
  <slot />
</div>

<div class="flex mt-8 justify-between">
  <div>
    {#if prevForm}
      <Button variant="outlined" onClick={() => page.changeForm(prevForm)}
        >{previousFormTitle}</Button
      >
    {/if}
  </div>

  {#if nextForm}
    <Button onClick={() => page.changeForm(nextForm)}>{nextFormTitle}</Button>
  {/if}
</div>
