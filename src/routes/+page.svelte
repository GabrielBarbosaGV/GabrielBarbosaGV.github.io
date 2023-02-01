<script lang="ts">
    import Posts from './Posts.svelte';
</script>

<div
    class="
        flex
        flex-col
        justify-center
        align-middle
        text-center
        mx-2
        fold:mx-10
        lg:mx-40
    "
    >

    <span class="text-[40px] text-center mb-4">
        Hello there!
    </span>

    <p class="text-l sm:text-md text-justify">
        I've been getting into the habit of writing down my thoughts, for better control over life aspects. I thought that it might also be a good idea
        to write down these thoughts for others to see, and to get feedback as well. I hope you like the content :)
    </p>

    <div class="text-slate-200" >

        <div
            class="
                bg-gradient-to-r
                from-[#3e0079]
                to-[#4106ca]
                rounded-t-lg
                text-[25px]
                pl-4
                text-left
                mt-5
            "
            >

            Posts

        </div>

        <div
            class="
                rounded-lg
                h-[300px]
                fold:h-[170px]
                lg:h-[700px]
                bg-gradient-to-b
                from-[#2c048a]
                to-[#1d015f]
                mt-3
                justify-center
                align-middle
                grid
                grid-cols-3
                fold:grid-cols-4
                lg:grid-cols-6
                gap-3
            "
            >
            
            <Posts />

        </div>

    </div>

</div>