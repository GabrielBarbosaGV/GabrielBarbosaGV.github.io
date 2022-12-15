<script lang="ts">
    import BulletedList from './BulletedList.svelte';
    import PageHeader from './PageHeader.svelte';
</script>

<PageHeader />

<BulletedList points="{['A', 'B']}" />

<style>
    :global(body) {
        padding: 0px;
        margin: 0px;
        height: 300vh;
    }
</style>