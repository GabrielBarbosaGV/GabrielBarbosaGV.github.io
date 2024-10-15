import { describe, expect, it } from "vitest";
import { randomIntegerBetween } from "./random-integer-between";

describe('randomIntegerBetween', () => {
  it('returns an integer value', () => {
    const r = randomIntegerBetween(0, 1000);

    expect(r).toBe(Math.floor(r));
  });
});
