<script lang="ts">

    import type PageHeader from '../PageHeader';

    function pageInfoToPageHeader([title, url, dateString]: [string, string, string?]): PageHeader {
        return {
            title,
            url,
            dateString
        };
    }

    const titleAndUrlList: [string, string, string?][] = [

    ];

    const pageHeaders = titleAndUrlList.map(pageInfoToPageHeader);

</script>

<div
    class="
        flex
        flex-col
        justify-center
        align-middle
        text-center
        xl:mx-40
        fold:mx-10
        mx-2
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
                xl:h-[700px]
                fold:h-[170px]
                h-[300px]
                bg-gradient-to-b
                from-[#2c048a]
                to-[#1d015f]
                mt-3
                flex
                justify-center
                align-middle
            "
            >

            {#if titleAndUrlList.length === 0}
                <div
                    class="
                        text-purple-300
                        h-[100%]
                        flex
                        flex-col
                        justify-center
                    "
                    >

                    Nothing... yet!

                </div>
            {/if}

        </div>

    </div>

</div>