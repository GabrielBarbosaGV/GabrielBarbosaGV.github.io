<script lang="ts">
  export let invisible: boolean;
</script>

<div class:opacity-0={invisible} class="transition-all absolute py-4">
  <slot />
</div>
