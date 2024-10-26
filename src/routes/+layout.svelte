<script lang="ts">
  import "../app.css";
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<svelte:head>
  <title>
    Gabriel's site!
  </title>
</svelte:head>

{@render children?.()}

<style>
  :global(body) {
    background: linear-gradient(#07032b, #09021a);
  }

  :global(html) {
    height: 100%;
  }
</style>
