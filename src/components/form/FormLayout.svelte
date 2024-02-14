<script lang="ts">
  import Typography from "../generic/Typography.svelte";
  import Button from "../generic/Button.svelte";
  import { pageData, page } from "../../store/page";
  import { data } from "../../store/data";
  import { keyTitles } from "src/constants/placeholders";
  import { GenerateResume } from "src/lib/pdf";
  import { template1 } from "src/templates/template1";
  const { nextForm, prevForm, current, total } = $pageData;
  export let header: string;
  const previousFormTitle = keyTitles[prevForm as keyof typeof keyTitles];
  const nextFormTitle = keyTitles[nextForm as keyof typeof keyTitles];
  function generatePDF() {
    const template = template1($data);
    const resume = new GenerateResume(template, { marginX: 20, marginY: 20 });
    resume.downloadResume();
  }
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
  {:else}
    <button
      class="p-4 outline-none bg-indigo-500 text-white rounded"
      on:click={generatePDF}>Download Resume</button
    >
  {/if}
</div>
