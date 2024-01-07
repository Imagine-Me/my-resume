<script lang="ts">
  import { jsPDF } from "jspdf";
  import Typography from "src/components/Typography.svelte";
  import { data } from "src/store/data";
  let resume: string | HTMLElement;

  import { GenerateResume } from "../lib/pdf";
  import { template1 } from "src/templates/template1";
  function generatePDF() {
    const resume = new GenerateResume(template1, { marginX: 20, marginY: 20 });
    resume.downloadResume();
  }
</script>

<div bind:this={resume} style="width: 500px; height: 834px;" class="">
  <div class="flex">
    <div class="flex-1">
      <Typography variant="h1">{$data.name}</Typography>
      <Typography variant="p" className="mt-2 text-xs"
        >{$data.explain.join(" | ")}</Typography
      >
    </div>
    <div class="w-40">
      <Typography variant="p" className="text-xs">{$data.address}</Typography>
      <Typography variant="p" className="font-bold text-xs"
        >{$data.phoneNumber}</Typography
      >
      <Typography variant="p" className="font-bold text-xs"
        >{$data.email}</Typography
      >
    </div>
  </div>
  <div class="flex mt-3 gap-2">
    <div class="flex-1">
      <Typography variant="p" className="font-bold mb-3 text-sky-500"
        >EXPERIENCE</Typography
      >
      {#each $data.experiences as experience}
        <div class="mb-3">
          <Typography variant="p">
            <span class="font-bold">{experience.title}</span>,
            <span>{experience.place}</span> -
            <span class="italic">{experience.role}</span>
          </Typography>
          <Typography variant="p">{experience.about}</Typography>
          <ul class="list-disc">
            {#each experience.responsibilities as responsibility}
              <li>
                {responsibility.description} [{responsibility.languages.join(
                  ", ",
                )}]
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
    <div class="w-40">
      <Typography variant="p" className="font-bold mb-3 text-sky-500"
        >SKILLS</Typography
      >
      {#each $data.skills as skill}
        <div class="mb-3">
          <span class="font-bold">{skill.type}: </span>
          <span>{skill.value.join(", ")}</span>
        </div>
      {/each}
    </div>
  </div>
</div>
<button class="p-3 bg-red-500" on:click={generatePDF}>Generate</button>
