<script lang="ts">
  import FormLayout from "./FormLayout.svelte";
  import { data, type IProjects } from "../../store/data";
  import Accordion from "../generic/Accordion.svelte";
  import TextField from "../generic/TextField.svelte";
  import { placeHolders } from "src/constants/placeholders";
  import Button from "../generic/Button.svelte";
  import TextArea from "../generic/TextArea.svelte";
  import MultiTextfield from "../generic/MultiTextfield.svelte";
  import Typography from "../generic/Typography.svelte";

  let projects = [...$data.projects];

  function removeItem(index: number) {
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    projects = updatedProjects;
    data.changeForm("projects", projects);
  }

  function changeValue(i: number, key: keyof IProjects, value: any) {
    const updatedProjects = [...projects];
    updatedProjects[i][key] = value as any;
    projects = updatedProjects;
    data.changeForm("projects", projects);
  }

  function addMore() {
    const updatedProjects = [
      ...projects,
      {
        name: "",
        shortDescription: "",
        description: "",
        links: [],
        technologies: [],
      },
    ];
    projects = updatedProjects;
    data.changeForm("projects", projects);
  }

  function addMoreLinks(i: number) {
    const updatedProjects = [...projects];
    updatedProjects[i].links = [
      ...updatedProjects[i].links,
      { name: "", link: "" },
    ];
    projects = updatedProjects;
    data.changeForm("projects", projects);
  }

  function changeLink(
    projectIndex: number,
    linkIndex: number,
    key: "name" | "link",
    value: string,
  ) {
    const updatedProjects = [...projects];
    const updatedLinks = [...updatedProjects[projectIndex].links];
    updatedLinks[linkIndex][key] = value;
    updatedProjects[projectIndex].links = updatedLinks;
    projects = updatedProjects;
    data.changeForm("projects", projects);
  }
</script>

<FormLayout header="Projects">
  {#each projects as project, i (i)}
    <Accordion header={project.name || "Project name"} open={true}>
      <button
        on:click={() => removeItem(i)}
        class="px-4 text-white bg-red-500 rounded"
        slot="icons">Delete</button
      >
      <TextField
        bind:value={project.name}
        name="name"
        label="Name"
        placeholder={placeHolders.projects.name}
        on:input={(e) => changeValue(i, "name", e.detail)}
      />
      <TextField
        bind:value={project.shortDescription}
        name="shortDescription"
        label="Short description of project"
        placeholder={placeHolders.projects.shortDescription}
        on:input={(e) => changeValue(i, "shortDescription", e.detail)}
      />

      <TextArea
        bind:value={project.description}
        name="description"
        label="Description"
        placeholder={placeHolders.projects.description}
        on:input={(e) => changeValue(i, "description", e.detail)}
      />
      <div>
        <MultiTextfield
          bind:values={project.technologies}
          className="mt-2"
          name="technologiesUsed"
          label="Technology Used"
          placeholder={placeHolders.projects.technologies}
          on:input={(e) => changeValue(i, "technologies", e.detail)}
        />
      </div>
      <Typography variant="h4">Links</Typography>
      <div class="grid gap-2">
        {#each project.links as link, k (k)}
          <Accordion header={link.name || "Link"} open={true}>
            <TextField
              bind:value={link.name}
              name="link_name"
              label="Name"
              placeholder={placeHolders.projects.links.name}
              on:input={(e) => changeLink(i, k, "name", e.detail)}
            />
            <TextField
              bind:value={link.link}
              name="link_link"
              label="Link"
              placeholder={placeHolders.projects.links.link}
              on:input={(e) => changeLink(i, k, "link", e.detail)}
            /></Accordion
          >
        {/each}
      </div>
      <Button className="mt-4" onClick={() => addMoreLinks(i)}>Add more</Button>
    </Accordion>
  {/each}
  <Button className="mt-4" onClick={addMore}>Add more</Button>
</FormLayout>
