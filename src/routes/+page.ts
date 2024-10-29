import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = async ({ fetch }) => {
  const rustResponse = await fetch('/code-snippets/rust.rs');

  const rustSnippet = await rustResponse.text();

  const htmxResponse = await fetch('/code-snippets/htmx.html');

  const htmxSnippet = await htmxResponse.text();

  const haskellResponse = await fetch('/code-snippets/haskell.hs');

  const haskellSnippet = await haskellResponse.text();

  return {
    rustSnippet,
    htmxSnippet,
    haskellSnippet
  };
};
