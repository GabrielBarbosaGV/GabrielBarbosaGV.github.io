import { randomIntegerBetween } from "./random-integer-between";

export function randomlySplitStringIntoTwo(s: string): [string, string] {
  if (s.length == 0)
    throw new Error('String passed to randomlySplitStringIntoTwo is empty');

  const i = randomIntegerBetween(0, s.length);

  return [s.substring(0, i), s.substring(i)];
}
