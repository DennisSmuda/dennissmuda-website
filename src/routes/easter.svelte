<script>
  import { onMount } from "svelte";
  import Cookie from "../components/Cookie.svelte";
  import { fade, fly } from "svelte/transition";
  import { notifier } from "../components/Notifications/notifier.js";
  import Display from "../components/Notifications/Display.svelte";
  import Butter from "../components/illustrations/Butter.svelte";

  let totalCookies = 0;
  let maxCookies = 0;
  let perSecond = 0;
  let showIntro;
  let displayNumber = 0.0;

  let shops = [
    {
      name: "Butter Stick",
      initialCost: 3.738,
      coefficient: 1.07,
      initialTime: 0.6,
      initialRevenue: 1,
      initialProductivity: 1.67
    },
    {
      name: "Chocolate Bar",
      initialCost: 60.0,
      coefficient: 1.15,
      initialTime: 3,
      initialRevenue: 60,
      initialProductivity: 20
    }
  ];

  let numButterPounders = 0;

  onMount(() => {
    if (!process.browser) return;
    const cookies = localStorage.getItem("collectedCookies");
    const perSecondSaved = localStorage.getItem("perSecond");

    console.log("Mounted", cookies);

    if (parseFloat(cookies)) {
      totalCookies = parseFloat(cookies);
      showIntro = false;
      maxCookies = localStorage.getItem("maxCookies");
    } else {
      showIntro = true;
    }

    if (perSecondSaved) perSecond = parseFloat(perSecondSaved);

    // window.requestAnimationFrame(loop);
  });

  const collectCookie = () => {
    totalCookies += 1;
    if (totalCookies > maxCookies) maxCookies = totalCookies;
    showIntro = false;

    if (totalCookies === 1) {
      notifier.success("Interesting.. 🤔?");
    }

    if (totalCookies === 15) {
      notifier.info("you learn how to exploit butter", 6000);
    }
  };

  const addFarm = i => {
    console.log("Farm", i);
    if (i === 1) {
      // Butter Pounder
      totalCookies -= i * 10;
      perSecond += 0.25;
      numButterPounders += 1;
    }
  };

  const saveGame = () => {
    localStorage.setItem("collectedCookies", totalCookies);
    localStorage.setItem("perSecond", perSecond);
    localStorage.setItem("maxCookies", maxCookies);
  };

  const loop = () => {
    console.log("Loop", displayNumber);
    displayNumber = (parseFloat(displayNumber) + 0.02).toFixed(2);
    console.log("Loop", displayNumber + 0.2);
    window.requestAnimationFrame(loop);
  };
</script>

<style>
  @media screen and (min-width: 768px) {
    .game-container {
      display: grid;
      gap: 1rem;
      grid-template-columns: minmax(420px, 0.25fr) 1fr;
      max-width: 1024px;
      margin: 0 auto;
    }
  }
  .content {
    max-width: 768px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    user-select: none;
  }

  .clicker {
    border-radius: 1rem;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
  }

  .cookie-container {
    margin: 2rem 1rem;
    cursor: pointer;
    transform: scale(1);
    transition: scale 0.15s;
  }
  .cookie-container:active {
    transform: scale(0.95);
  }
  .number {
    font-size: 2rem;
    font-weight: 900;
    padding-right: 0.5rem;
  }
  .cookie-info {
    flex-grow: 1;
    margin-left: 1rem;
    user-select: none;
  }
  .cookie-info .number {
    font-size: 3rem;
    min-width: 4rem;
    display: block;
    text-align: right;
    line-height: 1;
  }
  .summary {
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;
  }

  .farm {
    position: relative;
    border-radius: 1rem;
    padding: 0.5rem;
    margin-bottom: 1rem;
    user-select: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .farm .image {
    min-width: 80px;
    margin: 2rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .farm .number {
    position: absolute;
    top: 0.5rem;
    left: 1rem;
  }
</style>

<Display />
{displayNumber}
{#if totalCookies === 0 && showIntro === true}
  <section class="main-padding">
    <div class="content">
      <h1>Awkward</h1>
      <p>You find a lone cookie...</p>
      <div on:click={collectCookie} class="cookie-container">
        <Cookie />
      </div>

      <p>You make the obvious choice and start a cookie business!</p>
    </div>
  </section>
{/if}
{#if showIntro === false}
  <section class="main-padding game-container">
    <div in:fade class="clicker secondary-background">
      <div on:click={collectCookie} class="cookie-container">
        <Cookie />
      </div>
      <div class="cookie-info">
        <div class="summary">
          <span id="numCookies" class="number">
            {parseFloat(totalCookies).toFixed(2)}
          </span>
          cookies
        </div>
        {#if perSecond > 0}
          <div>
            <span class="perSecond">{perSecond}</span>
            per Second
          </div>
        {/if}
      </div>
      <!-- <button class="button button--primary" on:click={collectCookie}>
        <span>Collect!</span>
      </button> -->
    </div>
    <div class="farms">
      {#if maxCookies >= 15}
        <div in:fade class="farm secondary-background">
          <div class="image">
            <Butter />
          </div>
          <div class="info">

            <div class="number">{numButterPounders}</div>
            <div class="summary">butter sticks</div>
            <div class="buy">
              <button
                class="button button--small"
                on:click={() => addFarm(1)}
                disabled={totalCookies < 10}>
                <span>buy</span>
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="plus w-6 h-6">
                  <path
                    fill-rule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2
                    0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      {/if}
    </div>
  </section>
{/if}
