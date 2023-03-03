import { it, describe, expect } from 'vitest';

import { randomFromZeroToN, randomFrom, listWithout, toStringifiable } from './routes/TechnologyDescriptionUtils.svelte';

import fc from 'fast-check';

describe('randomFromZeroToN', () => {
  it('returns a number from zero to the specified number', () => {
    fc.assert(
      fc.property(
        fc.nat().map(i => i + 1),

        n => {
          const randomInteger = randomFromZeroToN(n);

          return randomInteger < n && randomInteger >= 0;
        }
      )
    );
 0 });

  it('always returns zero if zero is given', () => {
    fc.assert(
      fc.property(
        fc.constant(0),

        zero => randomFromZeroToN(zero) === zero
      )
    );
  });
});

describe('randomFrom', () => {
  it('returns an element contained in a list', () => {
    fc.assert(
      fc.property(
        fc.array(fc.anything()).filter(a => a.length >= 1),

        l => l.includes(randomFrom(l))
      )
    );
  });
});

describe('listWithout', () => {
  it('returns a list without given elements', () => {
    fc.assert(
      fc.property(
        fc.array(fc.anything()).map(a => [a, a.filter(_ => randomFrom([true, false]))]),

        ([originalList, listOfElementsToRemove]) => {
          const finalList = listWithout(listOfElementsToRemove.map(toStringifiable))
            .from(originalList.map(toStringifiable))
            .map(({ v }) => v);

          return finalList.map(v => originalList.includes(v)).reduce((a, b) => a && b, true)
            && !listOfElementsToRemove.map(v => finalList.includes(v)).reduce((a, b) => a || b, false);
        }
      )
    );
  });
});
