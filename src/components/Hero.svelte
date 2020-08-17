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
  }

  @media screen and (min-width: 768px) {
    .hero {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>

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
      <span class="emphasis">Germany.</span>
    </p>
    <p>
      There is not much to see yet. But that's okay, you can still
      <a href="mailto:smuda.dennis@gmail.com">reach me.</a>
    </p>
  </div>
</div>
