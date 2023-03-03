<script lang="ts">
  export let invisible: boolean;
</script>

<div class:opacity-0={invisible} class="transition-all absolute">
  <slot />
</div>
