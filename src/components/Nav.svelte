<script>
  import Toggle from "./LightModeToggle.svelte";
  import { playClick } from "../utils/Sounds";

  export let segment;
</script>

<nav class="container h-padding">
  <a
    href="."
    class="brand title"
    aria-current={segment === undefined ? "page" : undefined}
    on:click={playClick}
  >
    ds
    <span>.</span>
  </a>
  <div class="menu">
    <a
      rel="prefetch"
      aria-current={segment === "blog" ? "page" : undefined}
      href="blog"
      on:click={playClick}
    >
      writing
    </a>
    <a
      rel="prefetch"
      aria-current={segment === "about" ? "page" : undefined}
      href="about"
      on:click={playClick}
    >
      about
    </a>
    <a
      rel="prefetch"
      class="icon-button"
      on:click={playClick}
      aria-current={segment === "easter" ? "page" : undefined}
      href="/easter"
    >
      <svg
        viewBox="0 0 20 20"
        fill="currentColor"
        width="20px"
        height="20px"
        class="bell w-6 h-6"
      >
        <path
          d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0
          00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3
          3z"
        />
      </svg>
      {#if segment !== "easter"}
        <div class="badge">1</div>
      {/if}
    </a>
    <div class="light-mode-toggle">
      <Toggle />
    </div>
  </div>
</nav>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    user-select: none;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .menu {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  @media screen and (min-width: 560px) {
    .menu {
      gap: 1rem;
    }
  }

  [aria-current],
  a[aria-current] {
    position: relative;
    /* display: inline-block; */
    color: var(--primary-color);
    background-color: var(--third-background-color);
  }

  [aria-current]::after:not(.brand) {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: var(--accent-color);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--copy-color);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    position: relative;
    padding: 0.5rem 1rem;
    height: 3rem;
  }

  a.icon-button {
    padding: 0.5rem;
    width: 3rem;
    height: 3rem;
    margin: 0;
  }

  a:hover {
    background-color: var(--third-background-color);
  }
  a:active {
    background-color: var(--background-color);
  }

  .badge {
    font-size: 0.75rem;
    border-radius: 0.75rem;
    height: 1.25rem;
    width: 1.25rem;
    position: absolute;
    right: -0.25rem;
    top: -0.25rem;
    background-color: var(--accent-color);
    color: var(--primary-color);
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 900;
  }

  .brand {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: 700;
    transform: translateX(-0.5rem);
    margin: 0;
    cursor: pointer;
    width: initial;
    height: 3rem;
    padding: 0.25rem 0.5rem;
    letter-spacing: -2.3px;
  }

  .brand span {
    transform: translate3d(0, 0, 0);
    transition: transform 0.3s;
  }

  .brand[aria-current] span {
    /* transition: color 0.3s; */
    color: var(--accent-color);
  }

  .brand:hover span {
    transform: translate3d(0, -0.5rem, 0);
    color: var(--accent-color);
  }
  .brand:focus span {
    transform: translate3d(0, 0, 0);
  }

  .light-mode-toggle {
    /* position: fixed; */
    bottom: 0;
    right: 0;
  }

  .icon-button,
  .light-mode-toggle {
    display: none;
  }

  @media screen and (min-width: 560px) {
    .icon-button,
    .light-mode-toggle {
      display: flex;
    }
  }
</style>
