<section class="main-padding projects">
  <div class="background-shape" />
  <div class="background background--left">
    <h2>Projects</h2>
  </div>
  <div class="container container--narrow">
    <article>
      <div class="article-content">
        <p class="big-paragraph">
          I made a
          <span class="emphasis">BackyTracky</span>
        </p>
        <p>A webapp to help you practice your solos, scales and licks!</p>
        <p>create your own tracks, or jam to other peoples backing tracks!</p>
        <div class="tech-tags tags">
          <div class="tag tag--svelte">svelte</div>
          <div class="tag tag--mongo">mongo</div>
          <div class="tag tag--serverless">serverless</div>
          <div class="tag tag--node">node.js</div>
        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          class="button"
          href="https://backytracky.com/"
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
    <article>
      <div class="article-content">
        <p class="big-paragraph">
          We've built
          <span class="emphasis">KontaktHelfer.</span>
        </p>
        <p>A platform to handle contact-list keeping via qr-codes.</p>
        <div class="tech-tags tags">
          <div class="tag tag--vue">vue.js</div>
          <div class="tag tag--graphql">graphql</div>
        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          class="button"
          href="https://kontakthelfer.de"
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
  </div>
</section>

<style>
  .projects {
    background-color: var(--second-background-color);
    position: relative;
    overflow: hidden;
    padding-bottom: 4rem;
  }

  .projects .container {
    display: flex;
    gap: 4rem;
    flex-direction: column;
    align-items: center;
    /* padding: 4rem; */
    padding: 5rem 1rem;
  }

  @media screen and (min-width: 920px) {
    .projects .container {
      flex-direction: row;
      align-items: flex-start;

      flex-wrap: wrap;
      padding: 4rem 2rem 12rem;
    }
  }

  article {
    /* margin: 0 4rem; */
    position: relative;
    z-index: 1;
    max-width: 420px;
  }

  article:before {
    content: "";
    position: absolute;
    /* display: none; */
    z-index: 0;

    top: -1rem;
    left: -1rem;
    right: -1rem;
    bottom: -1rem;

    background-color: var(--third-background-color);
    border-radius: 1rem;
    transform: scale(0.85);
    transition: transform 0.3s;
  }

  article:hover::before {
    transform: scale(1);
  }

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
    color: var(--background-color);
    background-color: var(--primary-color);
    padding: 0.5rem 1rem;
    align-self: flex-end;
    margin-top: 1rem;
    text-decoration: none;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    font-size: 1rem;
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
  .button:hover svg {
    transform: translateX(4px);
  }
  .button:hover span {
    transform: translateX(-4px);
  }

  .background {
    position: absolute;
    /* top: 0; */
    /* bottom: 0; */

    display: flex;
    flex-direction: column;
    justify-content: center;
    pointer-events: none;
    z-index: 1;
  }

  .background--left {
    top: 0;
    left: 0;
  }

  .background--left h2 {
    transform: translateX(2.25rem);
    user-select: none;
    letter-spacing: -0.03em;
    font-size: 4rem;
    color: var(--third-background-color);
  }

  @media screen and (min-width: 520px) {
    .background--left h2 {
      font-size: 6rem;
      transform: rotate(90deg) translateY(10rem) translateX(50%);
    }
  }

  @media screen and (min-width: 768px) {
    .background--left h2 {
      font-size: 8rem;
      transform: rotate(90deg) translateY(13rem) translateX(42%);
    }
  }

  /* @media screen and (min-width: 1024px) {
    .background--left h2 {
      font-size: 10rem;
    }
  } */

  .background-shape {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 10rem;
    background-color: var(--background-color);
    transform: rotate(4deg) scaleX(1.5) translateX(-25%) translateY(5rem);
    transform-origin: center left;
    z-index: 0;
  }

  .big-paragraph {
    margin-top: 0;
  }
</style>
