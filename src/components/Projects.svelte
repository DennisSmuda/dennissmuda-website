<style>
  .projects {
    background-color: var(--second-background-color);
  }

  .projects .container {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
  }

  article {
    max-width: 380px;
    margin: 4rem 0;
    display: flex;
    flex-direction: column;
  }

  article:nth-child(even) {
    align-self: flex-end;
  }

  .tags {
    display: flex;
    margin-bottom: 1rem;
  }

  .tag {
    padding: 0.125rem 0.75rem;
    margin-right: 1rem;
    font-size: 0.875rem;
    border-radius: 0.25rem;
  }

  .tag--svelte {
    background-color: #ff3e00;
    color: white;
  }

  .tag--node {
    background-color: #026e00;
    color: white;
  }

  .tag--serverless {
    background-color: #000;
    color: white;
  }

  .tag--vue {
    background-color: #00a591;
    color: white;
  }

  .tag--graphql {
    background-color: #fff;
    color: #e10098;
  }

  .tag--mongo {
    background-color: #13aa52;
    color: #fff;
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
</style>

<section class="main-padding projects">
  <div class="container container--narrow">
    <article>
      <div class="subline">latest</div>
      <p class="big-paragraph">
        I made a
        <span class="emphasis">BackyTracky</span>
      </p>
      <p>It's a webapp to help you practice your solos, scales and licks!</p>
      <p>
        Also you can create your own tracks, or just browser whatever others are
        jamming to.
      </p>
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
        href="https://backytracky.com/">
        <span>see it live</span>
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          class="arrow-narrow-right w-6 h-6">
          <path
            fill-rule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0
            01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0
            010-1.414z"
            clip-rule="evenodd" />
        </svg>
      </a>
    </article>
    <article>
      <div class="subline">previous</div>
      <p class="big-paragraph">
        We've built
        <span class="emphasis">KontaktHelfer.</span>
      </p>
      <p>
        Right now we are building a platform to handle contact-list keeping via
        qr-codes.
      </p>
      <div class="tech-tags tags">
        <div class="tag tag--vue">vue.js</div>
        <div class="tag tag--graphql">graphql</div>
      </div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        class="button"
        href="https://kontakthelfer.de">
        <span>see it live</span>
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          class="arrow-narrow-right w-6 h-6">
          <path
            fill-rule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0
            01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0
            010-1.414z"
            clip-rule="evenodd" />
        </svg>
      </a>
    </article>
  </div>
</section>
