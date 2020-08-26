<script>
  import { onMount } from "svelte";
  import Cookie from "../components/Cookie.svelte";
  import { fade, fly } from "svelte/transition";
  import { notifier } from "../components/Notifications/notifier.js";
  import Display from "../components/Notifications/Display.svelte";

  let totalCookies = 0;
  let maxCookies = 0;
  let perSecond = 0;
  let showIntro;

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

    setInterval(() => {
      totalCookies += parseFloat(perSecond);
      localStorage.setItem("collectedCookies", totalCookies);
      localStorage.setItem("perSecond", perSecond);
      localStorage.setItem("maxCookies", maxCookies);
      console.log("max coolies", maxCookies);
    }, 1000);
  });

  const collectCookie = () => {
    totalCookies += 1;
    if (totalCookies > maxCookies) maxCookies = totalCookies;
    showIntro = false;
    localStorage.setItem("collectedCookies", totalCookies);

    if (totalCookies === 1) {
      notifier.success("Interesting.. 🤔?");
    }

    if (totalCookies === 15) {
      notifier.info("you learned how to make butter", 6000);
    }
  };
  const eatCookie = () => {
    console.log("Eat");
    notifier.show("danger", "JO ALLA", 300);
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
  }
  .summary {
    display: flex;
    align-items: baseline;
  }
  .farm {
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
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<Display />

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
            <svg
              width="34"
              height="63"
              viewBox="0 0 34 63"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect
                y="63"
                width="63"
                height="34"
                rx="2"
                transform="rotate(-90 0 63)"
                fill="#ecdd56" />
              <g class="face">
                <path
                  d="M11 30.656C16 32.448 18 32.448 23.5 30.656"
                  stroke="#271A01"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round" />
                <line
                  class="eye"
                  x1="5"
                  y1="26"
                  x2="5"
                  y2="26.096"
                  stroke="#271A01"
                  stroke-width="4"
                  stroke-linecap="round" />
                <line
                  class="eye"
                  x1="30"
                  y1="26"
                  x2="30"
                  y2="26.096"
                  stroke="#271A01"
                  stroke-width="4"
                  stroke-linecap="round" />
              </g>
            </svg>
          </div>
          <div class="info">
            <div class="summary">

              <div class="number">
                <!-- {#if totalCookies >= 10} -->
                {numButterPounders}
              </div>
              butter pounders
            </div>
            <div class="buy">
              <button
                class="button"
                on:click={() => addFarm(1)}
                disabled={totalCookies < 10}>
                buy
              </button>
            </div>
          </div>
        </div>
      {/if}
    </div>
  </section>
{/if}
