<script>
  import "../app.css";
  import Header from "src/components/app/Header.svelte";
  import Footer from "src/components/app/Footer.svelte";
</script>

<div
  class="min-h-screen flex flex-col bg-background text-text px-6 font-body text-lg tracking-wide"
>
  <Header />
  <div class="grow py-12">
    <slot />
  </div>
  <Footer />
</div>
