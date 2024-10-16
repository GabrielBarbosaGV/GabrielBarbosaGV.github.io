import { describe, expect, it } from "vitest";
import { IntervalsBetween } from "./intervals";

function* sequenceFor(min: number, max: number) {
  for (let i = min; i < max; i++)
    yield i;

  return;
}

describe("IntervalsBetween", () => {
  it("generates numbers according to RNG for 0 - 100 interval", () => {
    let i = 0;

    const intervalsBetween = new IntervalsBetween({
      min: 0,
      max: 100,
      rng: {
        generate: () => {
          i += 1;
          return (i - 1) / 100;
        }
      },
      count: 100
    });

    const expected = [...sequenceFor(0, 100)];
    const actual = [...intervalsBetween.generate()];

    expect(expected).toStrictEqual(actual);
  });
});
