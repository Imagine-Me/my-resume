<script lang="ts">
  import FormLayout from "./FormLayout.svelte";
  import Accordion from "../generic/Accordion.svelte";
  import TextField from "../generic/TextField.svelte";
  import Button from "../generic/Button.svelte";
  import MultiTextfield from "../generic/MultiTextfield.svelte";
  import { data } from "../../store/data";
  import { placeHolders } from "src/constants/placeholders";

  let skills = [...$data.skills];
  function changeCategory(i: number, value: string) {
    const updatedSkills = [...skills];
    updatedSkills[i].type = value;
    skills = updatedSkills;
    data.changeForm("skills", skills);
  }

  function changeChoices(i: number, value: string[]) {
    const updatedSkills = [...skills];
    updatedSkills[i].value = value;
    skills = updatedSkills;
    data.changeForm("skills", skills);
  }

  function addMore() {
    const updatedSkills = [...skills, { type: "", value: [] }];
    skills = updatedSkills;
    data.changeForm("skills", skills);
  }

  function removeItem(index: number) {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    skills = updatedSkills;
    data.changeForm("skills", skills);
  }
</script>

<FormLayout header="Skills">
  <div class="grid gap-4">
    {#each skills as skill, i (i)}
      <Accordion header={skill.type || "Description"} open={true}>
        <button
          on:click={() => removeItem(i)}
          class="px-4 text-white bg-red-500 rounded"
          slot="icons">Delete</button
        >
        <TextField
          bind:value={skill.type}
          name="type"
          label="Category"
          placeholder={placeHolders.skills.type}
          on:input={(e) => changeCategory(i, e.detail)}
        />
        <div>
          <MultiTextfield
            bind:values={skill.value}
            className="mt-2"
            name="value"
            label="Choices"
            placeholder={placeHolders.skills.value}
            on:input={(e) => changeChoices(i, e.detail)}
          />
        </div>
      </Accordion>
    {/each}
  </div>

  <Button className="mt-4" onClick={addMore}>Add more</Button>
</FormLayout>
