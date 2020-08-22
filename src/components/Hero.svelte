<script>
  // import Splitting from "splitting";
  // if (process.browser) {
  // console.log("Buth");
  // Splitting();
  // }
  import { fade } from "svelte/transition";
  import { gsap } from "gsap";

  import { onMount } from "svelte";

  let Splitting;

  let mounted = false;

  onMount(async () => {
    mounted = true;

    const tl = gsap.timeline({ delay: 0 });
    tl.fromTo(
      ".title h1",
      {
        opacity: 0,
        x: -120
      },
      {
        opacity: 1,
        duration: 1,
        x: 0,
        stagger: 0.2,
        ease: "expo.out"
      }
    )
      .fromTo(
        ".hero .intro > *",
        {
          opacity: 0,
          y: 20
        },
        {
          opacity: 1,
          duration: 1,
          y: 0,
          delay: -0.3,
          stagger: 0.2,
          ease: "expo.out"
        }
      )
      .fromTo(
        ".title .line",
        {
          opacity: 0,
          x: -120
        },
        {
          opacity: 1,
          duration: 1,
          x: 0,
          delay: -0.3,
          stagger: 0.2,
          ease: "expo.out"
        }
      );
  });
</script>

<style>
  p {
    color: var(--copy-color);
    max-width: 380px;
    margin: 0.5rem 0;
  }

  .title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  h1 {
    display: inline-flex;
    text-align: left;
    padding-bottom: 1rem;
  }
  .line {
    height: 1px;
    width: 12rem;
    border-bottom: 4px solid var(--accent-color);
  }

  .intro {
    margin-top: 6rem;
    max-width: 380px;
    align-self: end;
  }

  .hero {
    max-width: 1440px;
    margin: 0 auto;
    display: grid;
    grid-gap: 2rem;
    padding-bottom: 5rem;
    position: relative;
  }

  @media screen and (min-width: 768px) {
    .hero {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>

<div class="hero main-padding">
  <div class="title">
    <h1 data-splitting>Dennis</h1>
    <h1 data-splitting>Smuda</h1>
    <div class="line" />
  </div>
  <div class="intro">
    <div class="subline">It's Me</div>
    <p class="big-paragraph">
      <span class="keyword">Frontend Developer</span>
      <span>from</span>
      <span class="emphasis">Germany.</span>
    </p>
    <p>
      Nice to meet you! Feel free to look around and if you like, you can even
      <a href="mailto:smuda.dennis@gmail.com">reach me.</a>
    </p>
  </div>
</div>
