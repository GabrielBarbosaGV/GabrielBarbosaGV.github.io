<script lang="ts">
  import { StringPair } from '$lib/typing-effect/string-pair';
  import { cycleFor } from '$lib/cycle/cycle';
  import { IntervalsBetween } from '$lib/sleep/intervals';
  import { sleepForMillis } from '$lib/sleep/sleep';

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
</script>

<svelte:window bind:scrollY={scrollY} />

<div class="mx-40 mt-8 text-white">
  <div class="sticky top-4">
    <div class:opacity-0={scrollY > 100} class="flex justify-center items-center transition-all duration-500">
      <div class="h-[150%] w-[105%] bg-blue-900 absolute z-[-1] blur rounded-md">
      </div>

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
  </div>

  <div class="my-8">
    <p>
      As a software engineer, I've dealt with a fair share of codebases and and systems administration tasks. Through them,
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
</div>
