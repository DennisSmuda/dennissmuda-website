<script lang="ts" setup>
const {
  data: content,
} = await useAsyncData(() =>
  queryCollection('copy').where('title', '=', 'about me').first(),
)

console.log('content', content.value)
</script>

<template>
  <section class="container lg:max-w-4xl mx-auto px-8">
    <div class="ds-prose ">
      <ContentRenderer
        v-if="content"
        :value="content"
      />

      <h2 class="rotated">
        Where I've been 🗺
      </h2>
      <FeatureEmployerList />

      <h2 class="rotated">
        I use 🛠
      </h2>
      <p>
        Whatever mix of tools gets me there.
        <br>
        Here are some of
        <span class="emphasis">my favorites:</span>
      </p>
      <FeatureFavoriteTech />

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
