<script>
  import Hero from "../components/Hero.svelte";
  import Projects from "../components/Projects.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<style>
  .face--container {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    /* pointer-events: none; */
    transition: transform 0.3s ease;
    transform: translateY(8px);
  }
  .face--container:hover {
    transform: translateY(-4px);
  }

  @media screen and (min-width: 768px) {
    .face--container {
      justify-content: center;
    }
  }

  .face {
    width: 20%;
    /* height: 3rem; */
  }

  .eyes {
    position: relative;
    display: flex;
    justify-content: center;
  }

  .eyes span {
    width: 0.5rem;
    height: 0.5rem;
    background-color: var(--copy-color);
    border-radius: 2rem;
    margin: 0 0.75rem;
    transform: scale(1, 1);
    animation: blink 5s linear alternate infinite;
  }
  @keyframes blink {
    0%,
    100% {
      transform: scale(1, 0);
    }
    5%,
    95% {
      transform: scale(1, 1);
    }
  }

  .mouth {
    width: 1rem;
    height: 1rem;
    background-color: var(--copy-color);
    border-radius: 10vw;
    margin: 0.25rem auto 0;
  }
</style>

<svelte:head>
  <title>Dennis Smuda | Personal Portfolio Page</title>
  <meta
    name="description"
    content="Web Developer from Germany, with a frontend/design/ux focus. Also a
    musician and bike-rider." />
  <meta name="keywords" content="Development, Web, Frontend, Javascript" />
</svelte:head>

<Hero />

<Projects />

<Footer />

<div class="face--container">
  <div class="face">
    <div class="eyes">
      <span />
      <span />
    </div>
    <div class="mouth" />
  </div>

</div>
