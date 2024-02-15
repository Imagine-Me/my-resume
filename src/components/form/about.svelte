<script lang="ts">
  import FormLayout from "./FormLayout.svelte";
  import TextArea from "../generic/TextArea.svelte";
  import MultiTextfield from "../generic/MultiTextfield.svelte";
  import Typography from "../generic/Typography.svelte";
  import Button from "../generic/Button.svelte";
  import { placeHolders } from "../../constants/placeholders";
  import { data } from "../../store/data";
  import Accordion from "../generic/Accordion.svelte";
  import TextField from "../generic/TextField.svelte";
  const { about } = $data;
  let socialMedia = [...about.socialMedia];
  let openedAccordion = -1;

  const toggleAccordion = (index: number) => (isOpen: boolean) => {
    if (isOpen) {
      openedAccordion = index;
    } else {
      openedAccordion = -1;
    }
  };

  function changeLink(i: number, value: string) {
    const updatedSkills = [...socialMedia];
    updatedSkills[i].link = value;
    socialMedia = updatedSkills;
    data.changeForm("about", { socialMedia });
  }

  function changeName(i: number, value: string) {
    const updatedSkills = [...socialMedia];
    updatedSkills[i].name = value;
    socialMedia = updatedSkills;
    data.changeForm("about", { socialMedia });
  }

  function addMore() {
    const updatedSkills = [...socialMedia, { link: "", name: "" }];
    socialMedia = updatedSkills;
    data.changeForm("about", { socialMedia });
    openedAccordion = updatedSkills.length - 1;
  }

  function removeItem(index: number) {
    const updatedSkills = [...socialMedia];
    updatedSkills.splice(index, 1);
    socialMedia = updatedSkills;
    data.changeForm("about", { socialMedia });
  }
</script>

<FormLayout header="About">
  <TextArea
    name="description"
    placeholder={placeHolders.about.description}
    label="Description"
    bind:value={about.description}
    on:input={(e) => data.changeForm("about", { description: e.detail })}
  />
  <MultiTextfield
    label="Short description"
    name="shortDescription"
    on:input={(e) => data.changeForm("about", { shortDescription: e.detail })}
    bind:values={$data.about.shortDescription}
    className="mt-2"
    placeholder={placeHolders.about.shortDescription}
  />

  <Typography variant="h4" className="my-2">Social media</Typography>
  <div class="grid gap-4">
    {#each socialMedia as item, i (i)}
      <Accordion
        header={item.name || "Description"}
        open={openedAccordion === i}
        onAccordionClicked={toggleAccordion(i)}
      >
        <button
          on:click={() => removeItem(i)}
          class="px-4 text-white bg-red-500 rounded"
          slot="icons">Delete</button
        >
        <TextField
          bind:value={item.name}
          name="name"
          label="Name"
          placeholder={placeHolders.about.socialMedia.name}
          on:input={(e) => changeName(i, e.detail)}
        />
        <TextField
          bind:value={item.link}
          name="link"
          label="Link"
          placeholder={placeHolders.about.socialMedia.link}
          on:input={(e) => changeLink(i, e.detail)}
        />
      </Accordion>
    {/each}
  </div>
  <Button className="mt-4" onClick={addMore}>Add more</Button>
</FormLayout>
