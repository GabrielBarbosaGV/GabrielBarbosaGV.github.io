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

<span class="text-3xl text-center">
    Hello there!
</span>

<p class="mt-4">
    I've been getting into the habit of writing down my thoughts, for better control over life aspects. I thought that it might also be a good idea
    to write down these thoughts for others to see, and to get feedback as well. I hope you like the content :)
</p>

<span class="text-xl mt-4">
    Posts
</span>

<ul class="list-disc">

    {#each pageHeaders as { title, url, dateString } (url)}

    <div class="hover:text-3xl hover:translate-y-[-20%] transition-all">
        <li class="ml-4">
            <a href="{url}" class="underline">
                {title}
            </a>

            {#if dateString}

            <span class="text-gray-500">
                {dateString}
            </span>

            {/if}
        </li>
    </div>

    {/each}

</ul>