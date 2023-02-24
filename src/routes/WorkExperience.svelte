<script lang="ts">
  export let title: string;
  export let startDate: string;
  export let endDate = "none";

</script>

<div class="mb-10">
  <span
    class="
      text-md
      md:text-xl
    "
    >

    <strong>{title}:</strong>

  </span>

  <span>
    {#if endDate === "none"}
      From {startDate} (Current)
    {:else}
      From {startDate} to {endDate}
    {/if}
  </span>

  <hr class="my-4">

  <p
    class="
      text-md
      md:text-xl
      text-justify
    "
    >

    <slot />

  </p>
</div>
