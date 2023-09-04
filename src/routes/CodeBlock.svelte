<script lang="ts">
	import { onMount } from "svelte";

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
