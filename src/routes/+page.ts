import { storeHighlightJs } from "@skeletonlabs/skeleton";
import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = async ({ fetch }) => {
  const rustResponse = await fetch('/code-snippets/rust.rs');

  const rustSnippet = await rustResponse.text();

  return { rustSnippet };
};
