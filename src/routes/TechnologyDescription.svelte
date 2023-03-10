<script lang="ts">
  import { browser } from '$app/environment';
  export let visible: boolean;
</script>

{#if visible}
  {#if browser}
    <script src="prism.js"></script>
  {/if}

  <div class="py-4">
    <slot />
  </div>
{/if}
