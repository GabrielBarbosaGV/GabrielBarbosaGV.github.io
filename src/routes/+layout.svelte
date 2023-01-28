<script lang="ts">
    import "../app.css";
</script>

<div class="h-12 bg-black flex flex-col justify-center">
    <span class="text-slate-100 text-2xl font-bold p-3">
        GBGV
    </span>
</div>

<div class="text-yellow-100 flex flex-col align-middle p-4">
    <slot />
</div>

<style>
    :global(body) {
        background-color: #1d1d1d;
    }
</style>