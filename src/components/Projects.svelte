<script>
  import Project from "./Project.svelte";

  let activeProject = null;
  const setActiveProject = (project) => {
    activeProject = project;
  };
</script>

<section class="main-padding projects">
  <div class="background-shape" />
  <div class="background background--left">
    <h2>Projects</h2>
  </div>
  <div class="container container--narrow">
    <Project
      titlePrefix=""
      titleSuffix=" personal website."
      name="Lukas Gorgon"
      link="https://lukasgorgon.com/"
      tags={[
        { name: "next.js", value: "nextjs" },
        { name: "tailwind.css", value: "tailwind" },
        { name: "figma", value: "figma" },
      ]}
    >
      <p>
        Lukas makes awesome videos with his <em>FPV drones</em>! I built a small
        website that let's him showcase his passion.
      </p>
    </Project>
    <Project
      titlePrefix=""
      titleSuffix=", for triathletes."
      name="TriDeals"
      link="https://tri-deals.de/"
      tags={[
        { name: "vue.js", value: "vue" },
        { name: "tailwind.css", value: "tailwind" },
        { name: "graphql", value: "graphql" },
      ]}
    >
      <p>a website that has <em>handpicked deals</em> for very sporty people</p>
    </Project>

    <Project
      titlePrefix="We've built"
      titleSuffix="."
      name="KontaktHelfer"
      link="https://kontakthelfer.de/"
      tags={[
        { name: "vue.js", value: "vue" },
        { name: "tailwind.css", value: "tailwind" },
        { name: "graphql", value: "graphql" },
      ]}
    >
      <p>A platform to handle <em>contact-list</em> keeping via qr-codes.</p>
    </Project>

    <Project
      titlePrefix="I made "
      titleSuffix="."
      name="BackyTracky"
      link="https://backytracky.com/"
      tags={[
        { name: "svelte", value: "svelte" },
        { name: "tailwind.css", value: "tailwind" },
        { name: "serverless", value: "serverless" },
        { name: "node.js", value: "node" },
        { name: "mongo", value: "mongo" },
      ]}
    >
      <p>something to help you practice solos, scales and licks.</p>
      <p>
        create your own tracks, or jam to other peoples <em>backing tracks</em>!
      </p>
    </Project>

    <Project
      titlePrefix="Launch of the "
      titleSuffix=""
      name="BattleRockets!"
      link="https://battlerockets.netlify.app/"
      tags={[
        { name: "svelte", value: "svelte" },
        { name: "phaser", value: "phaser" },
        { name: "websockets", value: "websockets" },
        { name: "serverless", value: "serverless" },
        { name: "node.js", value: "node" },
        { name: "mongo", value: "mongo" },
      ]}
    >
      <p>
        Simplistic <em>"io-type"-game</em>. Purely skill based, perfectly
        balanced and 100% free!
      </p>
    </Project>
  </div>
</section>

<style>
  .projects {
    background-color: var(--second-background-color);
    position: relative;
    overflow: hidden;
    padding-bottom: 4rem;
  }

  .projects .container {
    display: flex;
    /* grid-template-columns: repeat(3, minmax(200px, 1fr)); */
    gap: 4rem;
    flex-direction: column;
    align-items: center;
    /* padding: 4rem; */
    padding: 5rem 0rem;
  }

  @media screen and (min-width: 880px) {
    .projects .container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      padding: 4rem 2rem 12rem;
      align-items: start;
    }
  }

  .background {
    position: absolute;
    /* top: 0; */
    /* bottom: 0; */

    display: flex;
    flex-direction: column;
    justify-content: center;
    pointer-events: none;
    z-index: 1;
  }

  .background--left {
    top: 0;
    left: 0;
  }

  .background--left h2 {
    transform: translateX(2.25rem);
    user-select: none;
    letter-spacing: -0.03em;
    font-size: 4rem;
    color: var(--third-background-color);
  }

  @media screen and (min-width: 520px) {
    .background--left h2 {
      font-size: 6rem;
      transform: rotate(90deg) translateY(10rem) translateX(50%);
    }
  }

  @media screen and (min-width: 768px) {
    .background--left h2 {
      font-size: 8rem;
      transform: rotate(90deg) translateY(13rem) translateX(42%);
    }
  }

  /* @media screen and (min-width: 1024px) {
    .background--left h2 {
      font-size: 10rem;
    }
  } */

  .background-shape {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 10rem;
    background-color: var(--background-color);
    transform: rotate(4deg) scaleX(1.5) translateX(-25%) translateY(5rem);
    transform-origin: center left;
    transition: background-color 0.3s;
    z-index: 0;
  }
</style>
