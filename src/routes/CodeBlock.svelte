<script lang="ts">
  export let lang: string;
</script>

<svelte:head>
  <link href="/themes/prism.css" rel="stylesheet" />
  <script src="/prism.js"></script>
</svelte:head>

<pre>
  <code class="{lang}">
    <slot />
  </code>
</pre>
