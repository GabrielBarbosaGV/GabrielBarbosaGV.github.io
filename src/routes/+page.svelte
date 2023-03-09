<script lang="ts">
  import WorkExperience from './WorkExperience.svelte';
  import TechnologyDescriptions from './TechnologyDescriptions.svelte';
  import { timeOf } from './TechnologyDescriptionUtils.svelte';
	import { onMount } from 'svelte';

  let interval: NodeJS.Timer;

  interface LikedTechnology {
    name: string,
    label: string
  };

  let likedTechnologies: LikedTechnology[] = [

    ['htmx', 'HTMX'],

    ['haskell', 'Haskell'],

    ['ts', 'TypeScript'],

    ['chatgpt', 'ChatGPT']

  ].map(([label, name]) => ({ label, name }));

  let selectedLabel: string = "none";

  onMount(() => {
    interval = setInterval(() => {
      const unselectedLikedTechnologies =
        likedTechnologies.filter(({ label }) => label !== selectedLabel);

      const labelToSelect = randomFrom(unselectedLikedTechnologies.map(({ label }) => label));

      setSelected(labelToSelect);
    }, timeOf(8).seconds())
  });

  function setSelected(label: string) {
    clearInterval(interval);
    selectedLabel = label;
  }

  function randomFrom<T>(ts: T[]): T {
    const index = Math.floor(Math.random() * ts.length);

    return ts[index];
  }
</script>

<div>
  <div
    class="
      h-[3em]
      bg-gradient-to-b
      from-yellow-800
      to-yellow-700
      flex
      flex-row
      justify-start
    "
    >

    <div
      class="
        flex
        flex-row
        items-center
      "
      >

      <span
        class="
          text-lg
          md:text-3xl
          text-yellow-100
          p-2
        "
        >

        Gabriel Barbosa

        <span
          class="
            hidden
            md:inline
          "
          >

          Gaspar Veloso
          
        </span>

        <span
          class="
            text-yellow-400
            text-sm
            md:text-lg
          "
          >

          Aspiring clean coder

        </span>

      </span>

    </div>

  </div>

  <div
    class="
      flex
      flex-row
      justify-center
      m-6
    "
    >

    <img
      src="/EuRecortadoFundoBranco.png"
      alt="A handsome red-headed young man"
      class="
        rounded-full

        h-24
        md:h-40

        hover:scale-110

        transition-all
      "
      />

  </div>

  <div
    class="
      flex
      justify-center
    "
    >

    <!-- Computer icon -->
    <svg xmlns="http://www.w3.org/2000/svg" fill="#CCFFCC" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" class="w-20 h-20">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
    </svg>

  </div>

  <div
    class="
      m-6
      md:m-20
      text-yellow-800
    "
    >

    <p
      class="
        text-justify
        text-md
        md:text-xl
      "
      >

      About me:

      <br>
      <br>

      As a software engineer, I've dealt with a fair share of codebases and systems
      administration workflows, all of which possessed varying degrees of efficiency,
      when the metric is taken over all attributes of the routines, including clearness
      and testability, as opposed to merely amount of production code over time.
      That being so, I feel confident in my sense for professional, clean code, that
      does certainly value feature throughput, but especially values correctness and
      robustness. Effective testing pays more than it costs, doubling as validation and
      documentation, allowing the maintainers to be confident in what they produce,
      while also presenting an easier entry point for newcomers. Ultimately, to me,
      the pinnacle of coding beauty arrives in a well-informed usage of the functional
      style, with code and data sharing space, and random testing, such as
      QuickCheck.

      <br>
      <br>

      I've been having a lot of fun in this profession, ever since I started, when I
      was still an undergraduate, up until now, after graduation. I studied in the
      Center of Informatics of the Federal University of Pernambuco.

    </p>

    <div
      class="
        flex
        justify-center
        m-6
        text-xl
        md:text-2xl
      "
      >

      My Work Experience:

    </div>

    <WorkExperience title="YouDigital" startDate="26/02/2019" endDate="28/03/2021">
      My introduction to professional programming, and where my introduction to Clean Code
      eventually happened through the recommendation of a colleague and friend. Typical
      routine of a CI pipeline, using Jenkins, the Docker-in-Docker image, as well as
      server-side rendered pages, with a bit of jQuery mixed in.
    </WorkExperience>

    <WorkExperience title="B2W Digital (Americanas)" startDate="10/04/2021" endDate="30/08/2021">
      Great opportunity to work with Elixir + Phoenix, as well as Ruby on Rails. A lot of fun,
      and the line in the sand that marks my seeking of opportunity outside of Brazil, due to
      unfortunate economical, health and security conditions. I am extremely grateful for the
      opportunity I was given.
    </WorkExperience>

    <WorkExperience title="EDGE" startDate="01/09/2021">
      My current job, through which I have been working with BNP Paribas. All of the skills I've
      mustered - be they from the other professional experiences, or own time spent learning -
      are ultimately put to the test.
    </WorkExperience>

    <div class="text-center mb-6">
      <span class="text-green-300 text-xl md:text-2xl">
        <strong>My favourite technologies:</strong>
      </span>
    </div>

    <div
      class="
        flex
        flex-wrap
        justify-center
        space-between
      "
      >
      {#each likedTechnologies as { label, name } (label)}
        <div
          class="
            rounded-l-xl
            rounded-r-xl

            border-green-300
            border-solid
            border-2

            text-green-300

            inline-block

            p-1
            m-1

            transition-all

            cursor-pointer
          "

          title="{name}"

          class:scale-110={selectedLabel === label}

          on:click={() => setSelected(label)}

          on:keydown={() => setSelected(label)}

          >

          {name}

        </div>
      {/each}
    </div>

    <TechnologyDescriptions selectedLabel={selectedLabel} />

    <div class="flex justify-center mt-[50em]">
      <span class="text-3xl">More upcoming...</span>
    </div>
  </div>
</div>
