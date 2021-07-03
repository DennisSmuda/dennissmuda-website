<script>
  import Project from "./Project.svelte";
</script>

<section class="main-padding projects">
  <div class="background-shape" />
  <div class="background background--left">
    <h2>Projects</h2>
  </div>
  <div class="container container--narrow">
    <Project
      titlePrefix="I made "
      titleSuffix=""
      name="BackyTracky"
      link="https://backytracky.com/"
      tags={[
        { name: "svelte", value: "svelte" },
        { name: "mongo", value: "mongo" },
        { name: "serverless", value: "serverless" },
        { name: "node.js", value: "node" },
      ]}
    >
      <p>something to help you practice solos, scales and licks.</p>
      <p>create your own tracks, or jam to other peoples backing tracks!</p>
    </Project>

    <Project
      titlePrefix=""
      titleSuffix=", for triathletes"
      name="TriDeals"
      link="https://tri-deals.de/"
      tags={[
        { name: "vue.js", value: "vue" },
        { name: "graphql", value: "graphql" },
      ]}
    >
      <p>a website that has handpicked deals for very sporty people</p>
    </Project>

    <Project
      titlePrefix="We've built"
      titleSuffix="."
      name="KontaktHelfer"
      link="https://kontakthelfer.de/"
      tags={[
        { name: "vue.js", value: "vue" },
        { name: "graphql", value: "graphql" },
      ]}
    >
      <p>A platform to handle contact-list keeping via qr-codes.</p>
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
    gap: 4rem;
    flex-direction: column;
    align-items: center;
    /* padding: 4rem; */
    padding: 5rem 1rem;
  }

  @media screen and (min-width: 920px) {
    .projects .container {
      flex-direction: row;
      align-items: flex-start;

      flex-wrap: wrap;
      padding: 4rem 2rem 12rem;
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
    z-index: 0;
  }
</style>
