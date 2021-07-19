<script>
  import { playClick } from "../utils/Sounds";

  export let titlePrefix;
  export let titleSuffix;
  export let name;
  export let link;
  export let tags;
</script>

<article>
  <div class="article-content">
    <p class="big-paragraph">
      {titlePrefix && titlePrefix}
      <span class="emphasis">{name}</span>{titleSuffix && titleSuffix}
    </p>

    <slot />

    <div class="tech-tags tags">
      {#each tags as tag}
        <div on:click={playClick} class="tag tag--{tag.value}">{tag.name}</div>
      {/each}
    </div>

    <a
      on:click={playClick}
      target="_blank"
      rel="noopener noreferrer"
      class="button"
      href={link}
    >
      <span>see it live</span>
      <svg
        viewBox="0 0 20 20"
        fill="currentColor"
        class="arrow-narrow-right w-6 h-6"
      >
        <path
          fill-rule="evenodd"
          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0
            01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0
            010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </a>
  </div>
</article>

<style>
  article {
    position: relative;
    z-index: 1;
    max-width: 420px;
    margin-bottom: 6rem;
  }
  @media screen and (min-width: 880px) {
    article {
      margin-bottom: 2rem;
    }
  }

  :global(article p) {
    padding-right: 2.5rem;
  }

  article:before {
    content: "";
    position: absolute;
    z-index: 0;

    top: -1rem;
    left: -1rem;
    right: -1rem;
    bottom: -1rem;

    background-color: var(--background-color);
    border-radius: 1rem;
    /* transform: scale(1, 0.8); */
    transition: transform 0.3s;
  }

  /* article:hover::before {
    transform: scale(1.1);
  } */

  .article-content {
    display: flex;
    flex-direction: column;

    position: relative;
    z-index: 1;
  }

  @media screen and (min-width: 920px) {
    article {
      /* max-width: 320px; */
      flex: calc(50% - 2rem) 0 0;
    }
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1rem;
  }

  .button {
    /* color: var(--background-color); */
    /* background-color: var(--accent-color); */
    padding: 0.5rem 1rem;
    align-self: flex-end;
    margin-top: 1rem;
    text-decoration: none;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    font-size: 1rem;
    margin-bottom: -2rem;
  }

  .button span {
    margin: 0 0.5rem;
    transform: translateX(0px);
    transition: transform 0.3s;
  }
  .button svg {
    width: 1rem;
    height: 1rem;
    transform: translateX(0px);
    transition: transform 0.3s;
  }

  .button:hover {
    background-color: var(--accent-color);
  }

  .button:hover svg {
    transform: translateX(4px);
  }
  .button:hover span {
    transform: translateX(-4px);
  }
</style>
