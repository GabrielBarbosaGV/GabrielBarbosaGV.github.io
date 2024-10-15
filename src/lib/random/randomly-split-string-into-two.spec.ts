import { describe, expect, it } from "vitest";
import { randomlySplitStringIntoTwo } from "./randomly-split-string-into-two";

describe('randomlySplitStringIntoTwo', () => {
  it('returns two substrings that complete when joined', () => {
    const str = 'abcde';

    const [firstPart, secondPart] = randomlySplitStringIntoTwo(str);

    expect(str).toMatch(firstPart);
    expect(str).toMatch(secondPart);

    expect(`${firstPart}${secondPart}`).toBe(str);
  });

  it('throws an error when passed an empty string', () => {
    expect(() => randomlySplitStringIntoTwo('')).toThrowError();
  });
});
