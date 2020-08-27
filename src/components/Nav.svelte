<script>
  import Toggle from "./LightModeToggle.svelte";
  export let segment;
</script>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    user-select: none;
    align-items: center;
  }

  [aria-current],
  a[aria-current] {
    position: relative;
    /* display: inline-block; */
    color: var(--primary-color);
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
    padding: 0.5rem;
    color: var(--copy-color);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    width: 3rem;
    height: 3rem;
  }
  a:hover {
    background-color: var(--third-background-color);
  }

  .brand {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: 700;
    margin: 0 2rem;
    cursor: pointer;
    width: initial;
    height: 3rem;
    padding: 0.25rem 0.5rem;
  }

  .brand span {
    /* transition: color 0.3s; */
  }

  .brand:hover span {
    color: var(--accent-color);
  }

  .light-mode-toggle {
    /* position: fixed; */
    bottom: 0;
    right: 0;
    padding: 1rem;
  }
  .menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

<nav>
  <a
    href="."
    class="brand title"
    aria-current={segment === undefined ? 'page' : undefined}>
    ds
    <span>.</span>
  </a>
  <div class="menu">
    <!-- <a aria-current={segment === 'easter' ? 'page' : undefined} href="/easter">
      <svg
        viewBox="0 0 20 20"
        fill="currentColor"
        width="20px"
        height="20px"
        class="bell w-6 h-6">
        <path
          d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0
          00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3
          3z" />
      </svg>
    </a> -->
    <!-- <a
      rel="prefetch"
      aria-current={segment === 'blog' ? 'page' : undefined}
      href="blog">
      writing
    </a> -->
    <!-- <li>
      <a aria-current={segment === undefined ? 'page' : undefined} href=".">
        home
      </a>
    </li> -->
    <!-- <li>
      <a aria-current={segment === 'about' ? 'page' : undefined} href="about">
        about
      </a>
    </li> -->

    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
    <!-- <li>
    </li> -->
    <div class="light-mode-toggle">
      <Toggle />
    </div>
  </div>
</nav>
