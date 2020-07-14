<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap");

  :global(body) {
    background-color: #191c26;
    color: #fffbeb;
    /* transition: background-color 0.25s, color 0.25s; */

    --primary-color: #fffbeb;
    --copy-color: #9da6c3;
    --accent-color: #ea7b15;
    --emphasis-color: #9da6c3;
    --link-color: #38cfff;
    --second-background-color: #1d212f;
  }

  :global(body.light-mode) {
    background-color: #fffbeb;
    color: #191c26;

    --primary-color: #191c26;
    --copy-color: #7d7861;
    --link-color: #00a1d3;
    --second-background-color: #fcf5d8;
  }

  :global(h1, h2, h3, h4, h5, h6, .title) {
    font-family: "Poppins", sans-serif;
  }

  :global(p) {
    color: var(--copy-color);
  }

  :global(p a) {
    color: var(--link-color);
  }

  :global(p a:hover) {
    color: var(--primary-color);
  }

  :global(.emphasis) {
    color: var(--primary-color);
  }

  :global(.keyword) {
    color: var(--accent-color);
  }

  :global(.main-padding) {
    padding: 2.5rem clamp(2.5rem, 10vw, 2.5rem) 5rem;
  }

  :global(.subline) {
    position: relative;
  }

  :global(.subline::after) {
    content: "";
    position: absolute;
    top: calc(50% - 2px);
    right: calc(100% + 0.5rem);
    height: 2px;
    width: 0.5rem;
    background-color: var(--copy-color);
  }

  :global(.big-paragraph) {
    font-size: 2rem;
    line-height: 1.25;
    max-width: initial;
    margin: 1rem 0;
  }

  :global(.container) {
    margin: 0 auto;
    max-width: 1440px;
  }

  /* @media (min-width: 560px) {
    main {
      padding: calc(1rem + 4vw);
    }
  } */
</style>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
    rel="stylesheet" />
</svelte:head>

<Nav {segment} />

<main>
  <slot />
</main>
