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
    pointer-events: none;
  }

  @media screen and (min-width: 768px) {
    .face--container {
      justify-content: center;
    }
  }

  .face {
    width: 20%;
    height: 3rem;
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
    margin: 0 1rem;
  }

  .mouth {
    width: 1rem;
    height: 1rem;
    background-color: var(--copy-color);
    border-radius: 10vw;
    margin: 0.5rem auto 0;
  }
</style>

<svelte:head>
  <title>Dennis Smuda</title>
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
