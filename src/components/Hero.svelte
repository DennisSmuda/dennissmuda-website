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
    border-bottom: 4px solid var(--accent-color);
  }

  .intro {
    margin-top: 2rem;
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
    <h1>
      Dennis
      <br />
      Smuda
    </h1>
    <!-- <div class="line" /> -->
  </div>
  <div class="intro">
    <div class="subline">it's me</div>
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
