<script>
  let isLightMode = false;

  function toggle() {
    window.document.body.classList.toggle("light-mode");
    isLightMode = !isLightMode;
  }
</script>

<style>
  button {
    background-color: transparent;
    color: var(--copy-color);
    border: none;
    border-radius: 4px;
    padding: 0.5rem;
    text-transform: uppercase;
    width: 3rem;
    height: 3rem;
    cursor: pointer;
  }

  button:hover {
    color: var(--primary-color);
  }

  :global(body.dark-mode) button {
    background-color: #0084f6;
    color: white;
  }
</style>

<button on:click={toggle}>
  {#if isLightMode}
    <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.962 10.79A9 9 0 119.172 1a7 7 0 009.79 9.79v0z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round" />
    </svg>
  {:else}
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 17a5 5 0 100-10 5 5 0 000 10zM12 1v2M12 21v2M4.22 4.22l1.42
        1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36
        5.64l1.42-1.42"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round" />
    </svg>
  {/if}
</button>
