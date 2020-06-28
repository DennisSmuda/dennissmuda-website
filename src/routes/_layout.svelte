<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Alegreya:wght@700&family=Rubik:wght@500&display=swap");

  :global(body) {
    background-color: #191c26;
    color: #fffbeb;
    /* transition: background-color 0.25s, color 0.25s; */

    --primary-color: #fffbeb;
    --copy-color: #9da6c3;
    --accent-color: #ea7b15;
    --emphasis-color: #9da6c3;
    --link-color: #38cfff;
  }

  :global(body.light-mode) {
    background-color: #fffbeb;
    color: #191c26;

    --primary-color: #191c26;
    --copy-color: #7d7861;
    --link-color: #00a1d3;
  }

  :global(h1, h2, h3, h4, h5, h6, .title) {
    font-family: "Alegreya", serif;
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

  main {
    padding: clamp(1rem, 10vw, 180px);
  }

  /* @media (min-width: 560px) {
    main {
      padding: calc(1rem + 4vw);
    }
  } */
</style>

<Nav {segment} />

<main>
  <slot />
</main>
