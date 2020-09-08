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
    --background-color: #191c26;
    --second-background-color: #1d212f;
    --third-background-color: #23293e;
    --outline-color: #ffc400;
    font-size: 18px;
  }

  :global(body.light-mode) {
    background-color: #fffbeb;
    color: #191c26;

    --primary-color: #191c26;
    --copy-color: #6d6955;
    --link-color: #00a1d3;
    --background-color: #fffbeb;
    --second-background-color: #fcf5d8;
    --third-background-color: #ded8b8;
  }

  :global(h1, h2, h3, h4, h5, h6, .title) {
    font-family: "Poppins", sans-serif;
  }

  :global(p) {
    color: var(--copy-color);
    margin: 0.25em 0 1em;
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
  :global(.h-padding) {
    padding: 0 clamp(2.5rem, 10vw, 2.5rem) 0;
  }
  :global(.secondary-background) {
    background-color: var(--second-background-color);
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
    margin: 0.5em 0 0.25em;
  }

  :global(.container) {
    margin: 0 auto;
    max-width: 1440px;
  }

  :global(.container--narrow) {
    max-width: 920px;
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
  <meta name="google-site-verification" content="BLz4Vp0e1I1XHPqHChy-s_7qMz2fewxpIrRu-u2v998" />
</svelte:head>

<Nav {segment} />

<main>
  <slot />
</main>
