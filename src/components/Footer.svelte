<script>
  export let segment;

  import Toggle from "./LightModeToggle.svelte";
  import { playClick } from "../utils/Sounds";
  const date = new Date().getFullYear();
</script>

<footer class="footer">
  <div class="container main-padding">
    <a on:click={playClick} href="./" class="brand">ds.</a>
    <span class="subline">©{date} built and designed with ♥️ by me. </span>
    <div class="internal">
      <a
        on:click={playClick}
        href="/about"
        class="button"
        aria-current={segment === "about" ? "page" : undefined}>about</a
      >
      <a
        on:click={playClick}
        href="/blog"
        class="button"
        aria-current={segment === "blog" ? "page" : undefined}>writing</a
      >
      <a
        on:click={playClick}
        href="/imprint"
        class="button"
        aria-current={segment === "imprint" ? "page" : undefined}>imprint</a
      >
    </div>
    <div class="links">
      <div class="socials">
        <a
          on:click={playClick}
          href="https://github.com/dennissmuda"
          target="_blank"
        >
          github
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path
              d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2
          2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192
          0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462
          2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566
          0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21"
            />
          </svg>
        </a>
        <a on:click={playClick} href="mailto:smuda.dennis@gmail.com">
          e-mail
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-mail"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <polyline points="3 7 12 13 21 7" />
          </svg>
        </a>
      </div>
      <div class="controls">
        <a
          rel="prefetch"
          class="easter-button"
          on:click={playClick}
          aria-current={segment === "easter" ? "page" : undefined}
          aria-label="Easter Egg"
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
    </div>
  </div>
</footer>

<style>
  .footer {
    border-bottom: 0.25rem solid var(--accent-color);
  }

  .footer .container {
    /* margin-top: 4rem; */
    padding-bottom: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    z-index: 1;
  }

  .brand {
    user-select: none;
    color: var(--copy-color);
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: -2.3px;
    text-decoration: none;
    border-radius: 0.5rem;
    line-height: 1.5;
    padding: 0 0.5rem;
    margin-left: -0.5rem;
  }

  .brand:hover {
    color: var(--primary-color);
  }

  .subline {
    font-size: 0.875rem;
  }

  .links {
    margin-top: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
  }

  .links > div {
    display: flex;
    align-items: center;
  }

  span {
    color: var(--copy-color);
  }

  .links a {
    display: flex;
    flex-direction: center;
    align-items: center;
    border-radius: 0.5rem;
    padding: 0.5rem;
    font-size: 0;
    color: var(--copy-color);
  }

  .controls > * {
    margin-left: 1.5rem;
  }

  .socials > * {
    margin-right: 1.5rem;
  }

  .light-mode-toggle {
    margin-left: 1.5rem;
  }

  .links a {
    position: relative;
    color: var(--copy-color);
  }

  .links a:hover {
    color: var(--primary-color);
    background-color: var(--third-background-color);
  }

  .easter-button svg {
    padding: 0.25rem;
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

  .internal [aria-current] {
    background-color: var(--accent-color);
  }

  .links svg {
    width: 2rem;
    height: 2rem;
  }

  .socials svg {
    stroke-width: 1;
    stroke: currentColor;
    fill: none;
  }

  .internal {
    margin-top: 2rem;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .internal .button {
    font-size: 0.875rem;
  }

  .footer {
    position: relative;
    margin-top: 5rem;
    overflow: hidden;
  }
</style>
