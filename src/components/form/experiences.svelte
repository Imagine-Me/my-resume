<script lang="ts">
  import FormLayout from "./FormLayout.svelte";
  import Accordion from "../generic/Accordion.svelte";
  import TextField from "../generic/TextField.svelte";
  import {
    data,
    type IExperience,
    type IResponsibilities,
  } from "../../store/data";
  import { placeHolders } from "src/constants/placeholders";
  import Button from "../generic/Button.svelte";
  import Typography from "../generic/Typography.svelte";
  import MultiTextfield from "../generic/MultiTextfield.svelte";
  import TextArea from "../generic/TextArea.svelte";
  let experiences = [...$data.experiences];

  function removeItem(index: number) {
    const updatedExperiences = [...experiences];
    updatedExperiences.splice(index, 1);
    experiences = updatedExperiences;
    data.changeForm("experiences", experiences);
  }

  function addMore() {
    const updatedExperiences = [
      ...experiences,
      {
        company: "",
        role: "",
        place: "",
        from: "",
        to: "",
        about: "",
        responsibilities: [],
      },
    ];
    experiences = updatedExperiences;
    data.changeForm("experiences", experiences);
  }

  function addMoreResponsibility(i: number) {
    const updatedExperiences = [...experiences];
    const updatedResponsibilities = [
      ...updatedExperiences[i].responsibilities,
      { project: "", description: "", technologiesUsed: [] as string[] },
    ];
    updatedExperiences[i].responsibilities = updatedResponsibilities;
    experiences = updatedExperiences;
    data.changeForm("experiences", experiences);
  }

  function changeValue(i: number, key: keyof IExperience, value: string) {
    const updatedExperiences = [...experiences];
    updatedExperiences[i][key] = value as any;
    experiences = updatedExperiences;
    data.changeForm("experiences", experiences);
  }

  function changeResponsibilities(
    experienceIndex: number,
    responsibilityIndex: number,
    key: keyof IResponsibilities,
    value: unknown,
  ) {
    const updatedExperiences = [...experiences];
    const updatedResponsibilities = [
      ...updatedExperiences[experienceIndex].responsibilities,
    ];
    updatedResponsibilities[responsibilityIndex][key] = value as any;
    updatedExperiences[experienceIndex].responsibilities =
      updatedResponsibilities;
    experiences = updatedExperiences;
    data.changeForm("experiences", experiences);
  }
</script>

<FormLayout header="Experiences">
  <div class="grid gap-4">
    {#each experiences as experience, i (i)}
      <Accordion header={experience.company || "Company name"} open={true}>
        <button
          on:click={() => removeItem(i)}
          class="px-4 text-white bg-red-500 rounded"
          slot="icons">Delete</button
        >
        <TextField
          bind:value={experience.company}
          name="type"
          label="Company"
          placeholder={placeHolders.experiences.company}
          on:input={(e) => changeValue(i, "company", e.detail)}
        />

        <TextArea
          bind:value={experience.about}
          name="about"
          label="About company"
          placeholder={placeHolders.experiences.about}
          on:input={(e) => changeValue(i, "about", e.detail)}
        />
        <div class="grid grid-cols-2 gap-2">
          <TextField
            bind:value={experience.role}
            name="role"
            label="Role"
            placeholder={placeHolders.experiences.role}
            on:input={(e) => changeValue(i, "role", e.detail)}
          />
          <TextField
            bind:value={experience.place}
            name="place"
            label="Place"
            placeholder={placeHolders.experiences.place}
            on:input={(e) => changeValue(i, "place", e.detail)}
          />
          <TextField
            bind:value={experience.from}
            name="from"
            label="From"
            placeholder={placeHolders.experiences.from}
            on:input={(e) => changeValue(i, "from", e.detail)}
          />
          <TextField
            bind:value={experience.to}
            name="to"
            label="To"
            placeholder={placeHolders.experiences.to}
            on:input={(e) => changeValue(i, "to", e.detail)}
          />
        </div>
        <Typography variant="h4" className="my-2">Responsibilities</Typography>
        <div class="grid gap-2">
          {#each experience.responsibilities as responsibility, k (k)}
            <Accordion
              header={responsibility.project || "Project Name"}
              open={true}
            >
              <button
                on:click={() => removeItem(i)}
                class="px-4 text-white bg-red-500 rounded"
                slot="icons">Delete</button
              >
              <TextField
                bind:value={responsibility.project}
                name="project"
                label="Project"
                placeholder={placeHolders.experiences.responsibilities.project}
                on:input={(e) =>
                  changeResponsibilities(i, k, "project", e.detail)}
              />
              <TextArea
                name="description"
                label="Description"
                placeholder={placeHolders.experiences.responsibilities
                  .description}
                bind:value={responsibility.description}
                on:input={(e) =>
                  changeResponsibilities(i, k, "description", e.detail)}
              />
              <div>
                <MultiTextfield
                  bind:values={responsibility.technologiesUsed}
                  className="mt-2"
                  name="technologiesUsed"
                  label="Technology Used"
                  placeholder={placeHolders.experiences.responsibilities
                    .technologiesUsed}
                  on:input={(e) =>
                    changeResponsibilities(i, k, "technologiesUsed", e.detail)}
                />
              </div>
            </Accordion>
          {/each}
        </div>
        <Button className="mt-4" onClick={() => addMoreResponsibility(i)}
          >Add More</Button
        >
      </Accordion>
    {/each}
  </div>
  <Button className="mt-4" onClick={addMore}>Add more</Button>
</FormLayout>
