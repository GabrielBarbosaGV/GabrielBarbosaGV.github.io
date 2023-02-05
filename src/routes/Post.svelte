<script lang="ts">
    export let href: string;
</script>

<div
    class="
        flex
        flex-col
        justify-center
        align-middle
        rounded-lg
        m-4
        bg-black
        transition-all
        hover:m-1
        h-[33%]
    "
    >

    <a href="{href}">

        <slot />

    </a>

</div>
