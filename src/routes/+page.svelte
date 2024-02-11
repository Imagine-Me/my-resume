<script lang="ts">
  import Typography from "src/components/generic/Typography.svelte";
  import Button from "src/components/generic/Button.svelte";
</script>

<div class="flex w-full m-auto">
  <div class="w-1/3">
    <Typography variant="h1">Welcome to ResumeCraft</Typography>
    <Typography variant="h4" className="mt-5"
      >Unlock Your Career Potential with Professional Resumes in Minutes!</Typography
    >
    <Typography variant="h4" className="mt-5">
      Are you ready to take the next step in your career? ResumeCraft is here to
      help you stand out in the job market effortlessly. Our user-friendly
      platform empowers you to create polished and professional resumes in just
      a few simple steps.
    </Typography>
    <a href="/form">
      <Button className="mt-5">Start now</Button>
    </a>
  </div>
  <div class="w-2/3">Templates here</div>
</div>
