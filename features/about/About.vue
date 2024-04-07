<script lang="ts" setup>
</script>

<template>
  <section class="container lg:max-w-4xl mx-auto px-8">
    <div class="ds-prose ">
      <p>
        Nice to meet you! 👋 My name is
        <span class="keyword">Dennis</span>
        and I have been working as a
        <span class="color-change font-medium">web developer</span>
        for the
        <em>last {{ new Date().getFullYear() - 2014 }}+ years</em>. I have worked on
        projects (mainly UI-focused) ranging from small company and personal websites to full fledged
        web applications.
      </p>
      <p>
        I deeply enjoy building things that can be interacted with, especially if
        it's something <span class="emphasis">fun</span>
        or <em>useful</em> <span class="opacity-50">... or both!</span>
      </p>

      <h2 class="rotated">
        Where I've been 🗺
      </h2>
      <CVList />

      <h2 class="rotated">
        I use 🛠
      </h2>
      <p>
        Whatever mix of tools gets me there.
        <br>
        Here are some of
        <span class="emphasis">my favorites:</span>
      </p>
      <FavoriteTech />

      <!-- I LIke -->
      <h2 class="rotated">
        I like ❤️‍🔥
      </h2>
      <ul>
        <li>
          <div>
            to play music
            <span class="emoji">🎶 🎸 🎹 🥁 🎧</span>
          </div>
        </li>
        <li>
          <div>
            learning new things
            <span class="emoji">🤔 📖 ✨</span>
          </div>
        </li>
        <li>
          <div>
            being part of a team
            <span class="emoji">🎩 🧢 👒 ⛑</span>
          </div>
        </li>
        <li>
          <div>
            riding my bike
            <span class="emoji">🚴‍♂️ 💨</span>
          </div>
        </li>
        <li>
          <div>
            games, movies, books
            <span class="emoji">🎮🍿📖</span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
