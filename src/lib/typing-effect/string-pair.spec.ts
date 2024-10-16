import { describe, expect, it } from "vitest";
import { StringPair } from "./string-pair";


describe('StringPair', () => {
  it("returns ['', 'abcde'] when splitting 'abcde' with zero index", () => {
    const stringPair = new StringPair({ str: 'abcde', index: 0 });

    expect(stringPair.getSplitString()).toStrictEqual(['', 'abcde']);
  });

  it("returns ['a', 'bcde'] when splitting 'abcde' with one index", () => {
    const stringPair = new StringPair({ str: 'abcde', index: 1 });

    expect(stringPair.getSplitString()).toStrictEqual(['a', 'bcde']);
  });

  it("returns ['abcd', 'e'] whe splitting 'abcde' with four index", () => {
    const stringPair = new StringPair({str: 'abcde', index: 4});

    expect(stringPair.getSplitString()).toStrictEqual(['abcd', 'e']);
  });

  it("returns ['', 'abcde'] when splitting 'abcde' without provided index", () => {
    const stringPair = new StringPair({ str: 'abcde' });

    expect(stringPair.getSplitString()).toStrictEqual(['', 'abcde']);
  });

  it("returns ['abc', 'de'] when splitting 'abcde' with index setter of three", () => {
    const stringPair = new StringPair({ str: 'abcde' });

    stringPair.index = 3;

    expect(stringPair.getSplitString()).toStrictEqual(['abc', 'de']);
  });

  it("errors if the given index is outside range in constructor", () => {
    expect(() => new StringPair({ str: 'abcde', index: 10 })).toThrowError();
    expect(() => new StringPair({ str: 'ab', index: -1})).toThrowError();
  });

  it("returns ['a', 'bcde'] when stepping right without a given index", () => {
    const stringPair = new StringPair({ str: 'abcde' });

    stringPair.stepRight();

    expect(stringPair.getSplitString()).toStrictEqual(['a', 'bcde']);
  });

  it("throws an error if stepping right beyond bounds", () => {
    const str = 'abcde';
    const index = str.length;

    const stringPair = new StringPair({ str, index });

    expect(() => stringPair.stepRight()).toThrowError();
  });

  it("returns ['abcd', 'e'] when stepping left with a given index of five", () => {
    const stringPair = new StringPair({ str: 'abcde', index: 5 });

    stringPair.stepLeft();

    expect(stringPair.getSplitString()).toStrictEqual(['abcd', 'e']);
  });

  it("throws an error when stepping left beyond string bounds", () => {
    const stringPair = new StringPair({ str: 'abcde' });

    expect(() => stringPair.stepLeft()).toThrowError();
  });

  it("throws an error when setting index outside bounds", () => {
    const stringPair = new StringPair({ str: 'abcde' });

    expect(() => stringPair.index = -1).toThrowError();
    expect(() => stringPair.index = -10).toThrowError();
  });

  it("returns able to step right with string 'abcde' and index 0", () => {
    const stringPair = new StringPair({ str: 'abcde', index: 0 });

    expect(stringPair.canStepRight()).toBe(true);
  });

  it("returns able to step right with string 'abcde' and index 3", () => {
    const stringPair = new StringPair ({ str: 'abcde', index: 3 });

    expect(stringPair.canStepRight()).toBe(true);
  });

  it("returns unable to step right with string 'abcde' and index 5", () => {
    const stringPair = new StringPair({ str: 'abcde', index: 5 });
    
    expect(stringPair.canStepRight()).toBe(false);
  });

  it("returns able to step left with string 'abcde' and index 3", () => {
    const stringPair = new StringPair({ str: 'abcde', index: 3 });

    expect(stringPair.canStepLeft()).toBe(true);
  });

  it("returns able to step left with string 'abcde' and index 1", () => {
    const stringPair = new StringPair({ str: 'abcde', index: 1 });

    expect(stringPair.canStepLeft()).toBe(true);
  });

  it("returns unable to step left with string 'abcde' and index 0", () => {
    const stringPair = new StringPair({ str: 'abcde', index: 0 });

    expect(stringPair.canStepLeft()).toBe(false);
  });

  it("holds equivalence between constructor and setting index with value 1", () => {
    const stringPair = new StringPair({ str: 'abcde', index: 1 });
    const stringPairWithoutIndex = new StringPair({ str: 'abcde' });

    stringPairWithoutIndex.index = 1;

    expect(stringPair).toStrictEqual(stringPairWithoutIndex);
  });

  it("holds equivalence between constructor and setting index with value 3", () => {
    const stringPair = new StringPair({ str: 'abcde', index: 3 });
    const stringPairWithoutIndex = new StringPair({ str: 'abcde' });

    stringPairWithoutIndex.index = 3;

    expect(stringPair).toStrictEqual(stringPairWithoutIndex);
  });
});
