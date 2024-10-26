<script lang="ts">
  import { run } from 'svelte/legacy';

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
</script>

<div class="mx-40 mt-8 text-white">
  <h1 class="text-blue-900 font-bold text-3xl">
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
