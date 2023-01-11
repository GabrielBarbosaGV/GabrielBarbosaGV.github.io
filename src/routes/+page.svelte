<script lang="ts">
    import BulletedList from './BulletedList.svelte';
    import PageHeader from './PageHeader.svelte';

    const points: string[] = [
        `
            Everything you put into a web page has purpose, be it
            presentation-wise or content-wise. What do you want to
            say? How? Convey it through a story that might as well
            be thought of by the reader, to reach right out of the
            screen and into their interests.
        `,
        `
            A bulleted list, for instance, draws attention through
            pauses and well-contained bits of information. The one
            you’re looking at right now uses opacity to push the
            pauses further. (By the way, SEO-friendly, JavaScript
            does not swap the content, allowing web crawlers to
            read it)
        `,
        `Isn’t it nice? 😉`
    ];
</script>

<PageHeader />

<BulletedList points="{points}" />

<style>
    :global(body) {
        padding: 0px;
        margin: 0px;
        height: 300vh;
    }
</style>