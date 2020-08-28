<script>
  import { onMount, onDestroy } from "svelte";
  import Cookie from "../components/Cookie.svelte";
  import { fade, fly } from "svelte/transition";
  import { notifier } from "../components/Notifications/notifier.js";
  import Display from "../components/Notifications/Display.svelte";
  import Butter from "../components/illustrations/Butter.svelte";
  import Chocolate from "../components/illustrations/Chocolate.svelte";
  import Egg from "../components/illustrations/Egg.svelte";
  import Cloud from "../components/illustrations/Cloud.svelte";
  import Vanilla from "../components/illustrations/Vanilla.svelte";
  import { farms, debugFarms } from "../farms";

  let totalCookies = 0;
  let maxCookies = 0;
  let perSecond = 0;
  let showIntro;
  let displayNumber = 0.0;

  let shops = JSON.parse(JSON.stringify(farms));

  let timers = [];
  let progress = [];

  let numButterPounders = 0;
  let rafId;

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

    rafId = window.requestAnimationFrame(loop);
  });

  onDestroy(() => {
    if (!process.browser) return;
    shops = null;
    cancelAnimationFrame(rafId);
  });

  const collectCookie = () => {
    totalCookies += 1;
    showIntro = false;

    if (maxCookies === 1) {
      notifier.success("Interesting.. 🤔?");
    }
  };

  const addFarm = i => {
    console.log("Farm", shops[i]);
    let shop = shops[i];

    if (shops[i].owned === 0) {
      console.log("Buy Initial");
      timers.push(0);
      progress.push(0);
    }
    const cost = (
      shop.initialCost * Math.pow(shop.coefficient, shop.owned)
    ).toFixed(2);

    shops[i].owned += 1;
    totalCookies -= cost;
  };

  const saveGame = () => {
    localStorage.setItem("collectedCookies", totalCookies);
    localStorage.setItem("maxCookies", maxCookies);
  };

  let lastSecondTime = 0;

  const loop = now => {
    let targetNumber = totalCookies;

    displayNumber = lerp(displayNumber, targetNumber, 0.1);

    timers.forEach((t, i) => {
      if (!t || now - t >= shops[i].initialTime * 1000) {
        totalCookies += shops[i].initialProductivity * shops[i].owned;
        timers[i] = now;
        console.log("Timer", i);
      } else {
        let currentProgress = (now - t) / shops[i].initialTime / 10;
        progress[i] = currentProgress;
        // console.log("Progress", progress);
      }
    });

    displayNumber = lerp(displayNumber, targetNumber, 0.1, false);
    if (totalCookies > 10) {
      displayNumber = parseFloat(displayNumber).toFixed(2);
    }
    if (totalCookies > 100) {
      displayNumber = parseFloat(displayNumber).toFixed(1);
    }

    rafId = window.requestAnimationFrame(loop);

    updateAchievements();
  };

  const updateAchievements = () => {
    if (totalCookies > maxCookies) maxCookies = totalCookies;

    shops.forEach(s => {
      if (maxCookies >= s.unlockCookieAmount && s.unlocked === false) {
        console.log("unlock", s.unlockCookieAmount, maxCookies);
        notifier.info(s.unlockMessage, 6000);
        s.unlocked = true;
      }
    });
  };

  function lerp(start, end, amt, ret = false) {
    if (end - start < 0.1) return end.toFixed(4);
    return ((1 - amt) * start + amt * end).toFixed(4);
  }
</script>

<style>
  @media screen and (min-width: 820px) {
    .game-container {
      display: grid;
      gap: 1rem;
      grid-template-columns: minmax(420px, 0.25fr) 1fr;
      max-width: 1024px;
      margin: 0 auto;
      align-items: flex-start;
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
    position: sticky;
    top: 1rem;
    z-index: 10;
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
  .productivity {
    display: flex;
    align-items: baseline;
    /* font-weight: 900; */
  }
  .prod-number {
    margin-right: 0.5rem;
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
    flex-direction: column;
    align-items: flex-start;
  }
  .per {
    opacity: 0.5;
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
    overflow: hidden;
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
  .farm .info {
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
  }

  .progress {
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0rem;
    background-color: var(--accent-color);
    border-radius: 1rem;
  }
  .buy {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  }
  .summary .name {
    font-weight: 900;
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
    <!-- Cookie -->
    <div in:fade class="clicker secondary-background">
      <div on:click={collectCookie} class="cookie-container">
        <Cookie />
      </div>
      <div class="cookie-info">
        <div class="summary">
          <span id="numCookies" class="number">{displayNumber}</span>
          cookies
        </div>
        {#if perSecond > 0}
          <div>
            <span class="perSecond">{perSecond}</span>
            per Second
          </div>
        {/if}
      </div>
    </div>
    <!-- Farms -->
    <div class="farms">
      {#each shops as shop, i}
        {#if maxCookies >= shop.unlockCookieAmount}
          <div in:fade|local class="farm secondary-background">
            <div class="progress" style={`width: ${progress[i]}%`} />
            <div class="image">
              {#if i === 0}
                <Butter />
              {/if}
              {#if i === 1}
                <Chocolate />
              {/if}
              {#if i === 2}
                <Egg />
              {/if}
              {#if i === 3}
                <Cloud />
              {/if}
              {#if i === 4}
                <Vanilla />
              {/if}
            </div>
            <div class="info">
              <div class="number">{shop.owned}</div>
              <div class="summary">
                <div class="name">{shop.name}</div>
                {#if shops[i].owned}
                  <div class="productivity">
                    <div class="prod-number">
                      {(shops[i].initialProductivity * shops[i].owned).toFixed(3)}
                    </div>
                    <span class="per">per {shops[i].initialTime}s</span>
                  </div>
                {/if}
              </div>
              <div class="buy">
                <button
                  class="button button--small"
                  on:click={() => addFarm(i)}
                  disabled={shop.initialCost * Math.pow(shop.coefficient, shop.owned) > totalCookies}>
                  <!-- <span>buy</span> -->
                  <span>
                    {(shop.initialCost * Math.pow(shop.coefficient, shop.owned)).toFixed(2)}
                  </span>
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
      {/each}

    </div>
  </section>
{/if}
