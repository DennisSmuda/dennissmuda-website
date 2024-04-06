<script setup lang="ts">
const isActive = useState('activeBlogPostId')
</script>

<template>
  <!-- Latest Posts -->
  <h2 class="rotated md:pt-24">
    latest posts ✏️
  </h2>

  <NuxtLink class="latest-post" to="/blog/low-res-voxels">
    <span class="latest-post__date"> Jan. 29, 2023 </span>
    <h3 class="latest-post__title">
      Low-Res Graphics with Voxels 🌊⛵️
    </h3>
  </NuxtLink>

  <NuxtLink class="latest-post" to="/blog/godot-chunking-tutorial">
    <span class="latest-post__date"> Jul. 16, 2022 </span>
    <h3 class="latest-post__title">
      Threaded chunks with Godot 🌎
    </h3>
  </NuxtLink>
  <NuxtLink class="latest-post" to="/blog/bevy-run-get-started">
    <span class="latest-post__date"> Mar. 20, 2022 </span>
    <h3 class="latest-post__title">
      Get started with Rust & Bevy 🎮
    </h3>
  </NuxtLink>
  <NuxtLink class="latest-post" to="/blog/serverless-auth-tutorial">
    <span class="latest-post__date"> Jul. 5, 2021 </span>
    <h3 class="latest-post__title">
      Serverless authentication 🔑
    </h3>
  </NuxtLink>

  <!-- Blog CTA -->
  <a class="marker-link mt-4" href="/blog">check out all posts 📖</a>
</template>

<style lang="css" scoped>
	.latest-post {
		@apply no-underline my-8 block;
	}

	.latest-post:hover .latest-post__title {
		@apply underline underline-offset-2;
	}

	.latest-post__date {
		@apply opacity-50 text-sm;
	}

	.latest-post__title {
		@apply mt-0 leading-6;

	}
</style>
