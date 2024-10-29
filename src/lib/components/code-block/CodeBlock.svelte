<script lang="ts">
  interface Props {
    language: string,
    code: string
  }

  let { code, language }: Props = $props();
</script>

<pre><code class={`language-${language}`}>{code}</code></pre>
