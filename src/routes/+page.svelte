<script lang="ts">
  import { StringPair } from '$lib/typing-effect/string-pair';
  import { cycleFor } from '$lib/cycle/cycle';
  import { IntervalsBetween } from '$lib/sleep/intervals';
  import { sleepForMillis } from '$lib/sleep/sleep';
  import type { Snippet } from 'svelte';

  const thingsILikeList = [
    'Games',
    'Drawing',
    'Programming',
    'Martial Arts',
    'Functional Programming',
    'Also Object-Oriented Programming',
    'Rick and Morty',
    'Neon Genesis Evangelion',
    'Ashita no Joe',
    'Gurren Lagann',
    'Nerds',
    'Much more!'
  ];

  const thingsILikeCycle = cycleFor(thingsILikeList);

  let thingILike: string;

  const inbetweenWordIntervals = new IntervalsBetween({ min: 800, max: 1200, rng: { generate: Math.random } }).generate();

  const keydownIntervals = new IntervalsBetween({ min: 40, max: 60, rng : { generate: Math.random } }).generate();

  let typed: string = $state('');
  let toType: string = $state('');

  async function type(sp: StringPair): Promise<void> {
    while (sp.canStepRight()) {
      sp.stepRight();

      [typed, toType] = sp.getSplitString();

      const interval = keydownIntervals.next().value!;
      await sleepForMillis(interval);
    }
  }

  async function backspaceWhole(sp: StringPair): Promise<void> {
    while (sp.canStepLeft()) {
      sp.stepLeft();

      [typed, toType] = sp.getSplitString();

      const interval = keydownIntervals.next().value!;
      await sleepForMillis(interval);
    }
  }

  async function typeThenWaitThenNext(): Promise<void> {
    thingILike = thingsILikeCycle.next().value!;

    const stringPair = new StringPair({ str: thingILike });

    await type(stringPair);

    await sleepForMillis(inbetweenWordIntervals.next().value!);

    await backspaceWhole(stringPair);

    await sleepForMillis(inbetweenWordIntervals.next().value!);

    setTimeout(typeThenWaitThenNext, inbetweenWordIntervals.next().value!);
  }

  typeThenWaitThenNext();

  let scrollY: number = $state(0);

  interface JobExperience {
    title: string,
    startDate: string,
    endDate?: string,
    paragraph: Snippet
  }
</script>

<svelte:window bind:scrollY={scrollY} />

<div class="mx-40 mt-8 text-white">
  <div class="flex justify-center items-center transition-all">
    <div class="w-[100%]">
      <h1 class="text-blue-300 font-bold text-3xl">
        About me
      </h1>

      <div class="flex flex-row">
        <h2>
          <span>
            I like {typed}
          </span>

          <span style="opacity: 0.7;">
            {toType}
          </span>
        </h2>
      </div>
    </div>
  </div>

  <div class="my-8">
    <p>
      As a software engineer, I've dealt with a fair share of codebases and systems administration tasks. Through them,
      I've experienced firsthand the variety of efficiency metrics one can use to measure a project. Some of the ones I
      worked on would have immense LOC throughput, others would be clear to read, and others would have high coverage,
      as well as combinations of these aspects. Of all of these, I must say that TDD has charmed me over other
      characteristics, as those projects that used it turned out to be the least stressful and surprising. Coding is fun,
      but once we push to production, we want boring code above all. As for clarity, though I've found that tested code
      can be made hard to read, it requires twists of logic to make it so. In short, tests pay more than their cost, as
      life is all about investments. Do invest in TDD, the state-of-the-art safety net.

      <br>
      <br>

      Besides this opinion, I greatly appreciate functional programming, or OOP with a compositional style over
      inheritance, which can be confusing. This has made Zig, Rust and Haskell my favorite languages ever. I
      will probably invest more in Zig once it matures, but I do also intend on helping it get there by contributing
      to open-source once I correctly slot time for it.
    </p>
  </div>

  <div class="flex justify-center items-center mt-14 flex-col">
    <h2 class="text-lg">My Experience:</h2>

    {@render jobExperience({ title: 'YouDigital', startDate: '26/02/2019', endDate: '28/03/2021', paragraph: youDigitalParagraph })}
    {@render jobExperience({ title: 'Americanas', startDate: '10/04/2021', endDate: '30/08/2021', paragraph: americanasParagraph })}
    {@render jobExperience({ title: 'EDGE', startDate: '10/04/2021', endDate: '30/08/2021', paragraph: edgeParagraph })}
    {@render jobExperience({ title: 'KnowledgeWorks', startDate: '14/06/2023', endDate: '26/10/2023', paragraph: knowledgeWorksParagraph })}
    {@render jobExperience({ title: 'Celfocus', startDate: '27/10/2023', paragraph: celfocusParagraph })}
  </div>
</div>

{#snippet youDigitalParagraph()}
  <p class="text-xs">Java, Spring, PostgreSQL, Python, Flask, Systems Administration</p>
{/snippet}

{#snippet americanasParagraph()}
  <p class="text-xs">Elixir + Phoenix, Ruby on Rails, MongoDB</p>
{/snippet}

{#snippet edgeParagraph()}
  <p class="text-xs">Java, Spring, Angular, MySQL</p>
{/snippet}

{#snippet knowledgeWorksParagraph()}
  <p class="text-xs">Javascript, Typescript, Express, Angular, Sequelize</p>
{/snippet}

{#snippet celfocusParagraph()}
  <p class="text-xs">Java, Spring</p>
{/snippet}

{#snippet jobExperience(je: JobExperience)}
  <div class="w-full my-4">
    <span class="text-xl">{je.title}</span>

    <span class="text-sm">From {je.startDate} {je.endDate ? `to ${je.endDate}` : '- Current'}</span>

    {@render je.paragraph?.()}
  </div>
{/snippet}
