<script lang="ts">
  import { crossfade } from "svelte/transition";
  import { flip } from "svelte/animate";
	import CodeBlock from "../CodeBlock.svelte";
	import { onMount } from "svelte";

  const [send, receive] = crossfade({});

  let leftItems = [
    "One",
    "Two",
    "Three"
  ];

  let rightItems: typeof leftItems = [

  ];

  function move<T>(item: T, source: T[], destination: T[]): [T[], T[]] {
    return [
      [...source.filter(i => i !== item)],
      [...destination, item]
    ];
  }

  function moveRight(item: string) {
    const [source, destination] = move(item, leftItems, rightItems);

    leftItems = source;
    rightItems = destination;
  }

  function moveLeft(item: string) {
    const [source, destination] = move(item, rightItems, leftItems);

    rightItems = source;
    leftItems = destination;
  }

  let time = 0;

  let playing = false;

  function handleVideoMouseUp(e: any) {
    time = 0;
    e.target.play();
    playing = true;

    setTimeout(() => playing = false, 1000);
  }

  onMount(() => {
    if (window?.Prism) {
      window.Prism.highlightAll();
    }
  });
</script>

<div class="flex flex-row justify-center items-center my-6">
  <h1 class="text-3xl">The leptos_transition_flip Crate</h1>
</div>

<div class="flex flex-col justify-center items-center my-6 mx-20">
  Svelte trivializes the creation of element transitions among lists
  with the crossfade function. The resulting effect is this:

  <div class="flex flex-row justify-around items-center my-6 mx-10">
    <div class="w-[50vw] flex flex-col justify-center items-center">
      {#each leftItems as item (item)}
        <div
          class="bg-green-200 w-[10vw] my-2 rounded-md flex justify-center items-center cursor-pointer"
          animate:flip
          in:receive={{ key: item }}
          out:send={{ key: item }}
          on:click={() => moveRight(item)}
          on:keydown={() => moveRight(item)}
        >
          {item}
        </div>
      {/each}
    </div>

    <div class="w-[50vw] flex flex-col justify-center items-center">
      {#each rightItems as item (item)}
        <div
          class="bg-green-200 w-[10vw] my-2 rounded-md flex justify-center items-center cursor-pointer"
          animate:flip
          in:receive={{ key: item }}
          out:send={{ key: item }}
          on:click={() => moveLeft(item)}
          on:keydown={() => moveLeft(item)}
        >
          {item}
        </div>
      {/each}
    </div>
  </div>

  <p>
    As I wanted the same effect with the also great Leptos Rust crate, I created the
    <a href="https://github.com/GabrielBarbosaGV/leptos-transition-flip" class="text-green-700 bg-orange-200">
      leptos_transition_flip crate.
    </a>
    It results in the same effect (click to play video):
  </p>

  <video class="rounded-md my-6"src="flip_example.webm" on:mouseup={handleVideoMouseUp} bind:currentTime={time}>
    Your browser does not support video tags

    <track kind="captions" />
  </video>

  {#if playing}
    Video started playing...
  {/if}

  Here is a simple usage example:

  <CodeBlock lang="language-rust">
  {`
// Call before changing NodeRefs' positions
let (flip, clear) = prepare_flip(
    ids_to_node_refs,
    container_div_node_ref,
    "transform 0.6s".to_string()
).map_err(|err| format!("FLIP preparation failed with error: {err}"))?;

// Perform action that will change the NodeRefs' positions in page, such as setting signals
// ...

// Perform FLIP animation
flip().map_err(|err| format!("FLIP failed with error: {err}"))?;

// Await end, and then clear transition style
set_timeout(|| {
    if let Err(err) = clear() {
      console_log("Error occurred when trying to clear FLIP transition style: {err}");
    }
}, Duration::from_millis(600));
  `}
  </CodeBlock>

    <p>
      A full code example can be found

      <a href="/leptos-transition-flip/code-example" class="text-green-700 bg-orange-200">
        here.
      </a>
    </p>
</div>
