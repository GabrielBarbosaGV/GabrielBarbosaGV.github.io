<script lang="ts">
  import TechnologyDescription from './TechnologyDescription.svelte';
  import Prism from 'prismjs';

  export let selectedLabel: string;

  const makeLanguageHighlighter = (language: string) => (code: string) => Prism.highlight(
    code,
    Prism.languages[language],
    language
  );

  const highlightHtml = makeLanguageHighlighter('html');

  $: isNotSelected = (label: string) => label !== selectedLabel;
</script>

<svelte:head>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.22.0/themes/prism.min.css" rel="stylesheet" />
</svelte:head>

<div class="relative pt-6 pb-36 flex align-center justify-center">
  <TechnologyDescription invisible={isNotSelected('htmx')}>
      HTMX is a HTML extension library that allows for asynchronous operations to alter the DOM. <br>
      One possible usage is the following, as shown in the technology's official page: <br><br>

      <div class="bg-black text-white rounded-lg p-4">
        {@html highlightHtml(`
          <h1>Hello there!</h1>
        `)}
      </div>

      <br>
      This will allow the result of the POST request, to path "/clicked", to swap the content of the button.
  </TechnologyDescription>

  <TechnologyDescription invisible={isNotSelected('haskell')}>
    Haskell
  </TechnologyDescription>
</div>
