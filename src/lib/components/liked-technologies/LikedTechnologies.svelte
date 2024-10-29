<script lang="ts">
  import { type Snippet } from "svelte";
  import { page } from '$app/stores';

  interface Props {
    technologies: Record<string, Snippet>
  }

  let { technologies }: Props = $props();

  let selectedTech = $state(Object.keys(technologies)[0]);

  if (Object.keys(technologies).length < 1)
    throw new Error('Insufficient liked technologies');

  let titleButtons: Record<string, HTMLButtonElement> = $state({});

  function switchToTech(tech: string) {
    selectedTech = tech;
  }

  let ballLeft: number | undefined = $state(undefined);
  let ballTop: number | undefined = $state(undefined);

  let ballStyle = $derived(ballLeft && ballTop ? `left: ${ballLeft}px; top: ${ballTop}px` : '');

  let scrollX = $state(0);
  let scrollY = $state(0);

  $effect(() => {
    let boundingClientRect = titleButtons[selectedTech].getBoundingClientRect();

    ballLeft = boundingClientRect.x + boundingClientRect.width / 2 + scrollX;
    ballTop = boundingClientRect.y + boundingClientRect.height / 2 + scrollY;
  });
</script>

{#snippet ball(additionalClasses: string)}
  <div
    class="rounded-full absolute transition-all duration-[400ms] -translate-x-1/2 -translate-y-[2em] {additionalClasses}"
    style={ballStyle}
  >
  </div>
{/snippet}

{@render ball('bg-blue-200 h-[5px] w-[5px] -z-10')}
{@render ball('bg-blue-300 delay-[3ms] h-[3px] w-[3px] -z-20')}
{@render ball('bg-blue-400 delay-[5ms] h-[1px] w-[1px] -z-30')}

<svelte:window bind:scrollX={scrollX} bind:scrollY={scrollY} />

<div class="flex w-full justify-center items-center">
  <div class="flex flex-row justify-around w-[80%] items-center my-8">
    {#each Object.keys(technologies) as tech (tech)}
      <button
        class="text-center"
        bind:this={titleButtons[tech]}
        onclick={() => switchToTech(tech)}
      >
        <span>{tech}</span>
      </button>
    {/each}
  </div>
</div>

{@render technologies[selectedTech]()}
