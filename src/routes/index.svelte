<script>
  import Projects from "../components/Projects.svelte";
</script>

<style>
  p {
    color: var(--copy-color);
    max-width: 380px;
    margin: 0.5rem 0;
  }

  h1 {
    display: inline-flex;
    text-align: left;
    border-bottom: 4px solid var(--accent-color);
    padding-bottom: 1rem;
  }

  .hero {
    max-width: 1440px;
    margin: 0 auto;
    display: grid;
    grid-gap: 2rem;
  }

  @media screen and (min-width: 768px) {
    .hero {
      grid-template-columns: 1fr 1fr;
    }
  }

  .intro {
    margin-top: 6rem;
    max-width: 380px;
    align-self: end;
  }

  .face--container {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
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

<div class="hero main-padding">
  <div class="title">
    <h1>
      Dennis
      <br />
      Smuda
    </h1>
  </div>
  <div class="intro">
    <div class="subline">It's Me</div>
    <p class="big-paragraph">
      <span class="keyword">Frontend Developer</span>
      from
      <span class="emphasis">Germany</span>
      .
    </p>
    <p>
      There is not much to see yet. But that's okay, you can still
      <a href="mailto:smuda.dennis@gmail.com">reach me</a>
      .
    </p>
  </div>
</div>

<Projects />

<div class="face--container">
  <div class="face">
    <div class="eyes">
      <span />
      <span />
    </div>
    <div class="mouth" />
  </div>

</div>
