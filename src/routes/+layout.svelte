<script lang="ts">
  import "../app.css"
</script>

<slot />

<style>
  :global(body) {
    background: linear-gradient(to bottom, #FFFFAA, #FFFFDD) no-repeat center center fixed;
    min-height: 100vh;
  }
</style>
