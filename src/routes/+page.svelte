<script lang="ts">
  import { StringPair } from '$lib/typing-effect/string-pair';
  import { cycleFor } from '$lib/cycle/cycle';
  import { IntervalsBetween } from '$lib/sleep/intervals';
  import { sleepForMillis } from '$lib/sleep/sleep';

  const thingsILikeList = `Games|Drawing|Programming|Martial Arts|Functional Programming|Also Object-Oriented Programming|Much more!`.split('|');

  const thingsILikeCycle = cycleFor(thingsILikeList);

  let thingILike: string;

  const inbetweenWordIntervals = new IntervalsBetween({ min: 1000, max: 3000, rng: { generate: Math.random } }).generate();

  const keydownIntervals = new IntervalsBetween({ min: 40, max: 60, rng : { generate: Math.random } }).generate();

  async function type(sp: StringPair, callback: () => void): Promise<void> {
    while (sp.canStepRight()) {
      sp.stepRight();
      callback();

      const interval = keydownIntervals.next().value!;
      await sleepForMillis(interval);
    }
  }

  async function backspaceWhole(sp: StringPair, callback: () => void): Promise<void> {
    while (sp.canStepLeft()) {
      sp.stepLeft();
      callback();

      const interval = keydownIntervals.next().value!;
      await sleepForMillis(interval);
    }
  }

  let stringPair: StringPair;

  async function typeThenWaitThenNext(): Promise<void> {
    thingILike = thingsILikeCycle.next().value!;

    stringPair = new StringPair({ str: thingILike });

    await sleepForMillis(inbetweenWordIntervals.next().value!);

    await type(stringPair, () => stringPair = stringPair);

    await sleepForMillis(inbetweenWordIntervals.next().value!);

    await backspaceWhole(stringPair, () => stringPair = stringPair);

    setTimeout(typeThenWaitThenNext, inbetweenWordIntervals.next().value!);
  }

  let typed: string;
  let toType: string;

  $: [typed, toType] = stringPair.getSplitString();

  typeThenWaitThenNext();
</script>

<div class="min-w-[100vw] min-h-[100vh] mx-40 mt-8">
  <h1 class="text-blue-900 font-bold text-3xl">
    About me
  </h1>

  <div class="flex flex-row">
    <h2>
      <span>
        {typed}
      </span>

      <span style="opacity: 0.5;">
        {toType}
      </span>
    </h2>
  </div>
</div>
