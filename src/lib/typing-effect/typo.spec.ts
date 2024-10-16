import { describe, expect, it } from "vitest";
import { typo } from "./typo";

describe("typo", () => {
  it("returns ['abdd', 'e'] when typoing with a 'd' at index 2 for string pair ['abcd', 'e']", () => {
    expect(typo({ typing: ['abcd', 'e'], typo: 'd', index: 2 })).toStrictEqual(['abdd', 'e']);
  });

  it("returns ['abcc', 'e'] when typoing with a 'c' at index 3 for string pair ['abcd', 'e']", () => {
    expect(typo({ typing: ['abcd', 'e'], typo: 'c', index: 3 })).toStrictEqual(['abcc', 'e']);
  });

  it("returns ['abd', 'de'] when typoing with a 'do' at index 2 for string pair ['abc', 'de']", () => {
    expect(typo({ typing: ['abc', 'de'], typo: 'do', index: 2 })).toStrictEqual(['abd', 'de']);
  });

  it("returns ['', 'abcde'] when typoing with a 'do' at index 2 for string pair ['', 'abcde']", () => {
    expect(typo({ typing: ['', 'abcde'], typo: 'do', index: 2 })).toStrictEqual(['', 'abcde']);
  });

  it("returns ['fghij', ''] when typoing with a 'fghij' at index 0 for string pair ['fghij', '']", () => {
    expect(typo({ typing: ['abcde', ''], typo: 'fghij', index: 0 })).toStrictEqual(['fghij', '']);
  });
});
