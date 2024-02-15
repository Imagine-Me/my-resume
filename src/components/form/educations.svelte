<script lang="ts">
  import FormLayout from "./FormLayout.svelte";
  import { data, type IEducation } from "../../store/data";
  import Accordion from "../generic/Accordion.svelte";
  import TextField from "../generic/TextField.svelte";
  import Button from "../generic/Button.svelte";
  import { placeHolders } from "src/constants/placeholders";

  let educations = [...$data.educations];

  let openedAccordion = -1;

  function changeData(i: number, key: keyof IEducation, value: string) {
    const updatedEducations = [...educations];
    updatedEducations[i][key] = value;
    educations = updatedEducations;
  }

  function removeItem(index: number) {
    const updatedEducations = [...educations];
    updatedEducations.splice(index, 1);
    educations = updatedEducations;
    data.changeForm("educations", educations);
  }

  function addMore() {
    const updatedEducations = [
      ...educations,
      { name: "", place: "", degree: "", from: "", to: "" },
    ];
    educations = updatedEducations;
    data.changeForm("educations", educations);
    openedAccordion = updatedEducations.length - 1;
  }
  const toggleAccordion = (index: number) => (isOpen: boolean) => {
    if (isOpen) {
      openedAccordion = index;
    } else {
      openedAccordion = -1;
    }
  };
</script>

<FormLayout header="Education">
  <div class="grid gap-4">
    {#each educations as education, i (i)}
      <Accordion
        header={education.name || "Description"}
        open={i === openedAccordion}
        onAccordionClicked={toggleAccordion(i)}
      >
        <button
          on:click={() => removeItem(i)}
          class="px-4 text-white bg-red-500 rounded"
          slot="icons">Delete</button
        >
        <TextField
          bind:value={education.name}
          name="name"
          label="Institution"
          placeholder={placeHolders.educations.name}
          on:input={(e) => changeData(i, "name", e.detail)}
        />
        <TextField
          bind:value={education.place}
          name="place"
          label="Place"
          placeholder={placeHolders.educations.place}
          on:input={(e) => changeData(i, "place", e.detail)}
        />
        <TextField
          bind:value={education.degree}
          name="degree"
          label="Degree"
          placeholder={placeHolders.educations.degree}
          on:input={(e) => changeData(i, "degree", e.detail)}
        />
        <div class="grid grid-cols-2 gap-2">
          <TextField
            bind:value={education.from}
            name="from"
            label="From"
            placeholder={placeHolders.educations.from}
            on:input={(e) => changeData(i, "from", e.detail)}
          />
          <TextField
            bind:value={education.to}
            name="to"
            label="To"
            placeholder={placeHolders.educations.to}
            on:input={(e) => changeData(i, "to", e.detail)}
          />
        </div>
      </Accordion>
    {/each}
  </div>
  <Button className="mt-4" onClick={addMore}>Add more</Button>
</FormLayout>
