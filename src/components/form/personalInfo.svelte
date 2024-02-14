<script lang="ts">
  import FormLayout from "./FormLayout.svelte";
  import TextField from "../generic/TextField.svelte";
  import { data } from "../../store/data";
  import { placeHolders } from "src/constants/placeholders";
  const { personalInfo } = $data;
</script>

<FormLayout header="Personal Info">
  <div class="my-4 grid grid-cols-2 gap-8">
    <TextField
      name="name"
      label="Full name"
      placeholder={placeHolders.personalInfo.name}
      bind:value={personalInfo.name}
      on:input={(e) => data.changeForm("personalInfo", { name: e.detail })}
    />
    <TextField
      name="email"
      label="Email"
      placeholder={placeHolders.personalInfo.email}
      bind:value={personalInfo.email}
      on:input={(e) => data.changeForm("personalInfo", { email: e.detail })}
    />
    <TextField
      name="phone"
      label="Phone"
      placeholder={placeHolders.personalInfo.phone}
      bind:value={personalInfo.phone}
      on:input={(e) => data.changeForm("personalInfo", { phone: e.detail })}
    />
    <TextField
      name="address"
      label="Address"
      placeholder={placeHolders.personalInfo.address}
      bind:value={personalInfo.address}
      on:input={(e) => data.changeForm("personalInfo", { address: e.detail })}
    />
  </div>
</FormLayout>
