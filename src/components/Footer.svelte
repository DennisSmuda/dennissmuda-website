<script>
  const date = new Date().getFullYear();
</script>

<style>
  .footer {
    /* margin-top: 4rem; */
    padding-bottom: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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

  .links {
    margin-top: 2.5rem;
    display: flex;
    margin-left: -0.5rem;
  }

  span {
    color: var(--copy-color);
  }

  .links a {
    color: var(--copy-color);
    margin-right: 2.5rem;
    display: flex;
    flex-direction: center;
    align-items: center;
    border-radius: 0.5rem;
    padding: 0.5rem;
  }

  .links a:hover {
    color: var(--primary-color);
  }

  .links svg {
    width: 2rem;
    height: 2rem;
    stroke-width: 1;
    stroke: currentColor;
    fill: none;
  }

  .internal {
    margin-top: 2rem;
    display: flex;
  }
  .internal .button {
    margin-right: 1.5rem;
  }
</style>

<footer class="footer container main-padding">
  <a href="./" class="brand">ds.</a>
  <span>©{date} built by myself.</span>
  <div class="internal">
    <a href="/about" class="button">about</a>
    <a href="/blog" class="button">writing</a>
    <a href="/imprint" class="button">imprint</a>

  </div>
  <div class="links">
    <a href="https://github.com/dennissmuda" target="_blank">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-linecap="round"
        stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" />
        <path
          d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2
          2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192
          0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462
          2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566
          0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
      </svg>
    </a>
    <a href="https://gitlab.com/DennisSmuda" target="_blank">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-brand-gitlab"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#2c3e50"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" />
        <path d="M21 14l-9 7-9-7L6 3l3 7h6l3-7z" />
      </svg>
    </a>
    <a href="mailto:smuda.dennis@gmail.com">
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
        stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" />
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <polyline points="3 7 12 13 21 7" />
      </svg>
    </a>
  </div>
</footer>
