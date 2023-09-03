<script lang="ts">
  import TechnologyDescription from './TechnologyDescription.svelte';
  import CodeBlock from './CodeBlock.svelte';

  export let selectedLabel: string;

  $: isSelected = (label: string) => label === selectedLabel;
</script>

<div>
  <TechnologyDescription visible={isSelected('htmx')}>
      HTMX is a HTML extension library that allows for asynchronous operations to alter the DOM. <br>
      One possible usage is the following, as shown in the technology's official page: <br><br>

      <CodeBlock lang="language-html">
        {`    `}
        &lt;script src=&quot;https://unpkg.com/htmx.org@1.8.6&quot;&gt;&lt;/script&gt;
        &lt;button hx-post=&quot;/clicked&quot; hx-swap=&quot;outerHTML&quot;&gt;
          Click Me
        &lt;/button&gt;
      </CodeBlock>

      <br>
      This will allow the result of the POST request, to path "/clicked", to swap the content of the button.

      This HTML extension is great for not overengineering simple web-pages. To be fair, this very page
      might be overengineered, but I just love SvelteKit that much.
  </TechnologyDescription>

  <TechnologyDescription visible={isSelected('haskell')}>
    Haskell is an amazing and underrated functional programming language. Its type inference and concise syntax
    would make it very powerful, were it not left in the sidelines a good portion of time due to the mistification
    of monads and their usage.

    It's not possible to portray all of the good aspects of the language solely through a small code block, so I
    recommend taking a look at these videos:

    <div class="flex flex-col md:flex-row justify-center">
      <iframe class="p-6 md:h-[400px] aspect-video"
        src="https://www.youtube.com/embed/RqvCNb7fKsg"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      />

      <iframe class="p-6 md:h-[400px] aspect-video"
        src="https://www.youtube.com/embed/Qa8IfEeBJqk"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      />
    </div>


    <CodeBlock lang="language-haskell">
      {`
module Main
import Data.Char

main :: IO ()
main = do
    putStrLn "Do you like Haskell?"
    answer <- getLine
    putStrLn $ if map toLower answer == "yes" then "One of fine tastes ;)" else "Wrong answer!"
      `}
    </CodeBlock>
  </TechnologyDescription>

  <TechnologyDescription visible={isSelected('ts')}>
    We all know and love TypeScript. Dynamically typed languages should not bring problems on their own, if proper testing is done,
    but proramming just becomes a whole lot faster when the compiler is holding your hand through the process. Whilst not as powerful
    as Rust in its type system, it is possible to do a lot with TypeScript, and, for the purposes of the web, definitely more than enough.

    <CodeBlock lang="language-typescript">
      {`
function sentiment([s, ...strings]: string[], language, sentiment) {
  return s && s === "is" ? \`You appear to feel that \${language} is \${sentiment}\`;
}

const lang = "TypeScript";
const amazing = "awesome";

console.log(sentiment\`\${lang} is \${awesome}\`);

// output: "You appear to feel that TypeScript is awesome"
      `}
    </CodeBlock>
  </TechnologyDescription>

  <TechnologyDescription visible={isSelected('chatgpt')}>
    Not much to say here, I'm pretty sure you know ChatGPT pretty well.
    If not, get your mind blown <a class="underline text-yellow-600" href="https://chat.openai.com/chat">here</a>.
  </TechnologyDescription>
</div>
