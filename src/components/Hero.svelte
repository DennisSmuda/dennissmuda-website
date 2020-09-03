<script>
  // import { fade } from "svelte/transition";

  import Name from "./Name.svelte";
</script>

<style>
  p {
    color: var(--copy-color);
    max-width: 380px;
    margin: 0.5rem 0;
  }

  .title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-right: 2rem;
  }

  :global(.title svg) {
    width: 100%;
    height: 100%;
    max-width: 380px;
  }

  .intro {
    user-select: none;
    max-width: 380px;
    align-self: end;
  }

  .hero {
    max-width: 1440px;
    margin: 0 auto;
    display: grid;
    grid-gap: 2rem;
    padding-bottom: 5rem;
    position: relative;
  }

  @media screen and (min-width: 768px) {
    .hero {
      grid-template-columns: 1fr 1fr;
    }
    :global(.title svg) {
      max-width: initial;
    }
  }

  @media screen and (min-width: 920px) {
    .title {
      margin-bottom: -1.5vw;
    }
  }

  .button-row {
    margin-top: 1.5rem;
    display: flex;
    align-items: baseline;
  }

  .keyword {
    animation: colorChange 20s linear alternate infinite;
  }

  .reach-me {
    transform: rotate(32deg);
  }

  .text-button {
    position: relative;
    padding: 0.25rem 0.5rem;
    margin-right: 2rem;
  }
  .text-button span {
    position: relative;
    z-index: 10;
  }

  .text-button:after {
    transition: height 0.2s ease-out;
    z-index: 0;
  }
  .text-button:hover {
    transition: color 0.3s;
    /* color: var(--background-color); */
  }

  .text-button:hover:after {
    /* background-color: var(--copy-color); */
    height: 100%;
    bottom: 0;
  }

  .button {
    transition: 0.3s background-color;
  }
  .button:hover {
    background-color: var(--accent-color);
  }
  .button:hover span {
    transform: translateX(-4px);
  }
  .button:hover .reach-me {
    transform: translateX(4px) rotate(90deg);
  }

  @keyframes colorChange {
    0% {
      color: var(--primary-color);
    }
    33% {
      color: var(--accent-color);
    }
    66% {
      color: var(--link-color);
    }
    100% {
      color: var(--copy-color);
    }
  }
</style>

<div class="hero main-padding">
  <!-- My Name -->
  <div class="title">
    <Name />
  </div>
  <div class="intro">
    <!-- Intro -->
    <p class="big-paragraph">
      <span class="keyword">Frontend Developer</span>
      <span>from</span>
      <span class="emphasis">Germany.</span>
    </p>
    <!-- Buttons -->
    <div class="button-row">
      <a href="/about" class="text-button">
        <span>about me</span>
      </a>
      <a class="button" href="mailto:smuda.dennis@gmail.com">
        <span>reach me</span>
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          class="paper-airplane reach-me">
          <path
            d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169
            1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0
            00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
        </svg>
      </a>
    </div>

  </div>
</div>
