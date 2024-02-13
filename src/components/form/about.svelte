<script lang="ts">
  import FormLayout from "./FormLayout.svelte";
  import TextArea from "../generic/TextArea.svelte";
  import MultiTextfield from "../generic/MultiTextfield.svelte";
  import { placeHolders } from "../../constants/placeholders";
  import { data } from "../../store/data";
  const { about } = $data;
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
</FormLayout>
