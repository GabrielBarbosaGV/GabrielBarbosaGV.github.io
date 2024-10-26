<script lang="ts">
  import "../app.css";
</script>

<svelte:head>
  <title>
    Gabriel's site!
  </title>
</svelte:head>

<slot />

<style>
  :global(body) {
    background: linear-gradient(#07032b, #09021a);
  }

  :global(html) {
    height: 100%;
  }
</style>
