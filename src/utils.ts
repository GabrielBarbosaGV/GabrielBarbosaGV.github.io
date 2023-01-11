// Should the given string have both CRLFs and standard LFs, it is possible that the function
// will not work as expected.
export function trimIndent(s: string) {
    const shortestWhitespaceBeginning = shortestWhitespaceBeginningOfLine(s);

    const lf = '\n';
    const crlf = '\r\n';

    const withLeadingParthRemovedtWithShortestWhitespaceFollowing = (partToRemove: string) =>
        s.replaceAll(`${partToRemove}${shortestWhitespaceBeginning}`, '');

    const finalTexts = [crlf, lf].map(withLeadingParthRemovedtWithShortestWhitespaceFollowing);

    return minBy(finalTexts, t => t.length);
}

function shortestWhitespaceBeginningOfLine(text: string) {
    if (/^\s*$/.test(text))
        throw new Error(`shortestWhitespaceBeginningOfLine must be called with string that is not solely whitespace. Given string was: "${text}"`);

    const matches = text.match(/^\n\s*/) ?? [''];

    const shortestMatch = minBy(matches, m => m.length);

    return shortestMatch;
}

function minBy<T>(elements: T[], transformer: (t: T) => number): T {
    if (elements.length < 1)
        throw new Error(`Function minBy cannot be called with empty arrays`);

    const [result] = elements
        .map(e => [e, transformer(e)])
        .reduce(([e1, n1], [e2, n2]) => n1 < n2 ? [e1, n1] : [e2, n2]);

    return result as T;
}