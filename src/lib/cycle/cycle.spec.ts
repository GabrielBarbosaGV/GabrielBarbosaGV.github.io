import { describe, expect, it } from "vitest";
import { cycleFor } from './cycle';

describe('Cycle', () => {
  it('returns [1, 2, 3] in given order', () => {
    const cycle = cycleFor([1, 2, 3]);
    
    let actual: number[] = [];

    actual.push(cycle.next().value!);
    actual.push(cycle.next().value!);
    actual.push(cycle.next().value!);

    expect([1, 2, 3]).toStrictEqual(actual);
  });

  it('returns [4, 7, 3] in given order', () => {
    const cycle = cycleFor([4, 7, 3]);

    let actual: number[] = [];

    actual.push(cycle.next().value!);
    actual.push(cycle.next().value!);
    actual.push(cycle.next().value!);

    expect([4, 7, 3]).toStrictEqual(actual);
  });

  it('repeats [1, 2, 3] after end', () => {
    const cycle = cycleFor([1, 2, 3]);

    let actual: number[] = [];

    actual.push(cycle.next().value!);
    actual.push(cycle.next().value!);
    actual.push(cycle.next().value!);
    actual.push(cycle.next().value!);
    actual.push(cycle.next().value!);
    actual.push(cycle.next().value!);

    expect([1, 2, 3, 1, 2, 3]).toStrictEqual(actual);
  });
});
