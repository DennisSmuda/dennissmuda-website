<style>
  p {
    color: var(--copy-color);
    max-width: 380px;
  }
  h1 {
    text-align: left;
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

<h1>
  Dennis
  <br />
  Smuda
</h1>
<p class="subtitle">
  I’m a
  <span class="keyword">Frontend Developer</span>
  from
  <span class="emphasis">Germany</span>
  .
  <br />
  There is not much to see yet. But that's okay.
</p>

<div class="face--container">
  <div class="face">
    <div class="eyes">
      <span />
      <span />
    </div>
    <div class="mouth" />
  </div>

</div>
