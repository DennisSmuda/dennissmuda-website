<script>
  import { playClick } from "../utils/Sounds";
  // import { fade } from "svelte/transition";

  import Name from "./Name.svelte";
</script>

<div class="hero">
  <div class="container main-padding">
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
        <a on:click={playClick} href="/about" class="text-button">
          <span>about me</span>
        </a>
        <a
          on:click={playClick}
          class="button"
          href="mailto:smuda.dennis@gmail.com"
        >
          <span>reach me</span>
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            class="paper-airplane reach-me"
          >
            <path
              d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169
            1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0
            00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
  <div class="background-shape" />
</div>

<style>
  p {
    color: var(--copy-color);
    max-width: 380px;
    margin: 0.5rem 0;
  }

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: visible;
    width: 100%;
    max-width: 520px;
  }

  .title,
  .intro {
    z-index: 2;
  }

  .title,
  .big-paragraph {
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    .title {
      align-items: flex-start;
      text-align: left;
    }
  }

  :global(.title svg) {
    width: 100%;
    height: 100%;
  }

  .intro {
    user-select: none;
    max-width: 380px;
  }
  .hero {
    position: relative;
    overflow: hidden;
  }

  .hero .container {
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding-bottom: 5rem;
    position: relative;
    overflow: hidden;
  }

  .background-shape {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 10rem;
    background-color: var(--second-background-color);

    transform: rotate(-4deg) scaleX(1.8) translateX(10%);
    transform-origin: center right;
    z-index: 0;
  }

  @media screen and (min-width: 920px) {
    .hero .container {
      flex-direction: row;
    }
    .title {
      width: calc(100% - 22rem);
      max-width: 768px;
    }
    .title,
    .big-paragraph {
      text-align: left;
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  @media screen and (min-width: 520px) {
    .button-row {
      flex-direction: row;
      align-items: baseline;
    }
  }

  .keyword {
    animation: colorChange 20s linear alternate infinite;
  }

  .reach-me {
    transform: rotate(32deg);
  }

  .text-button {
    position: relative;
    padding: 0.5rem 1.25rem;
    border-radius: 0.5rem;
  }
  .text-button span {
    position: relative;
    z-index: 10;
  }

  .text-button:after {
    transition: all 0.2s;
    z-index: 0;
    border-radius: 0.5rem;
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
