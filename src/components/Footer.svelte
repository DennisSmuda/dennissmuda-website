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
        href="/blog"
        class="button"
        aria-current={segment === "blog" ? "page" : undefined}>writing</a
      >
      <a
        on:click={playClick}
        href="/about"
        class="button"
        aria-current={segment === "about" ? "page" : undefined}>about</a
      >
      <a
        on:click={playClick}
        href="/imprint"
        class="button"
        aria-current={segment === "imprint" ? "page" : undefined}>imprint</a
      >
    </div>
    <div class="links">
      <!-- <div class="socials"> -->
      <a
        on:click={playClick}
        href="https://github.com/dennissmuda"
        target="_blank"
      >
        github
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
          ><title>GitHub</title><path
            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
          /></svg
        >
      </a>
      <a on:click={playClick} href="mailto:smuda.dennis@gmail.com">
        e-mail
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
          ><title>Mail.Ru</title><path
            d="M15.61 12c0 1.99-1.62 3.61-3.61 3.61-1.99 0-3.61-1.62-3.61-3.61 0-1.99 1.62-3.61 3.61-3.61 1.99 0 3.61 1.62 3.61 3.61M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12c2.424 0 4.761-.722 6.76-2.087l.034-.024-1.617-1.879-.027.017A9.494 9.494 0 0 1 12 21.54c-5.26 0-9.54-4.28-9.54-9.54 0-5.26 4.28-9.54 9.54-9.54 5.26 0 9.54 4.28 9.54 9.54a9.63 9.63 0 0 1-.225 2.05c-.301 1.239-1.169 1.618-1.82 1.568-.654-.053-1.42-.52-1.426-1.661V12A6.076 6.076 0 0 0 12 5.93 6.076 6.076 0 0 0 5.93 12 6.076 6.076 0 0 0 12 18.07a6.02 6.02 0 0 0 4.3-1.792 3.9 3.9 0 0 0 3.32 1.805c.874 0 1.74-.292 2.437-.821.719-.547 1.256-1.336 1.553-2.285.047-.154.135-.504.135-.507l.002-.013c.175-.76.253-1.52.253-2.457 0-6.617-5.383-12-12-12"
          /></svg
        >
      </a>
      <a
        on:click={playClick}
        href="https://discordapp.com/users/dennis_butz#6737"
      >
        discord
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
          ><title>Discord</title><path
            d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"
          /></svg
        >
      </a>
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
</footer>

<style>
  .footer .container {
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
    /* margin-top: 2.5rem; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
  }

  .links > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.5rem;
  }

  @media screen and (min-width: 480px) {
    .links > div {
      flex-direction: row;
    }
  }

  span {
    color: var(--copy-color);
  }

  .links a {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    padding: 0.5rem;
    font-size: 0;
    color: var(--copy-color);
    margin-right: 1.5rem;
    margin-top: 1.5rem;
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

  .links svg {
    width: 2rem;
    height: 2rem;
    padding: 0.25rem;
  }

  .links svg {
    /* stroke: currentColor; */
    fill: currentColor;
    overflow: visible;
  }

  .internal {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
  }

  .internal .button {
    font-size: 0.875rem;
    background-color: var(--second-background-color);
    color: var(--copy-color);
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
  .internal .button:hover {
    background-color: var(--third-background-color);
  }
  .internal .button:active {
    background-color: var(--second-background-color);
  }

  .internal .button[aria-current] {
    background-color: var(--third-background-color);
    color: var(--primary-color);
  }

  .footer {
    position: relative;
    margin-top: 5rem;
    overflow: hidden;
  }

  .badge {
    font-size: 0.75rem;
    border-radius: 0.75rem;
    height: 1.25rem;
    width: 1.25rem;
    position: absolute;
    right: -0.125rem;
    top: -0.125rem;
    background-color: var(--accent-color);
    color: var(--primary-color);
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 900;
  }
</style>
