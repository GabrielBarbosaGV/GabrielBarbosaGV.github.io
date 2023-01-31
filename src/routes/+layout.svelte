<script lang="ts">
    import "../app.css";
</script>

<div class="h-12 bg-black flex flex-col justify-center">
    <span class="text-green-300 text-2xl font-bold p-3 blur-[1px]">
        GBGV
    </span>
</div>

<div class="text-purple-400 flex flex-col align-middle p-4">
    <slot />
</div>

<style>
    :global(body) {
        background-color: #150031;
    }
</style>