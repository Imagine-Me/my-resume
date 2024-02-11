<script lang="ts">
  import FormLayout from "./FormLayout.svelte";
  import TextField from "../generic/TextField.svelte";
</script>

<FormLayout header="Personal Info">
  <div class="my-4 grid grid-cols-2 gap-8">
    <TextField name="name" label="Full name" placeholder="John Doe" />
    <TextField
      name="email"
      label="Email"
      type="email"
      placeholder="email@domail.com"
    />
    <TextField name="phone" label="Phone" placeholder="+91 123456789" />
    <TextField
      name="address"
      label="Address"
      placeholder="789 Coconut Grove
  Kochi, Kerala 682001
  India"
    />
  </div>
</FormLayout>
