<script>
  import Toggle from "./LightModeToggle.svelte";
  export let segment;
</script>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    user-select: none;
  }

  ul {
    display: flex;
    align-items: center;
    padding: 0;
  }

  li {
    display: block;
    color: var(--copy-color);
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
    padding: 1em 0.5em;
    display: block;
    color: var(--copy-color);
  }

  .brand {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: 700;
    padding: 0 2.5rem;
    cursor: pointer;
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
