<script setup lang="ts">
const { data } = useFetch('/api/blog?limit=4')
const isActive = useState('activeBlogPostId')
</script>

<template>
  <!-- {{ data }} -->

  <NuxtLink
    v-for="post in data"
    :key="post._id"
    class="latest-post"
    :to="post._path"
    @click="isActive = post._id"
  >
    <span class="latest-post__date">
      {{ post.createdAt }}
    </span>
    <h3
      class="latest-post__title"
      :class="`${isActive === post._id ? 'active' : ''}`"
    >
      {{ post.title }}
    </h3>
  </NuxtLink>

  <!-- Blog CTA -->
  <NuxtLink class="marker-link mt-4" to="/blog">
    check out all posts 📖
  </NuxtLink>
</template>

<style lang="css" scoped>
	.latest-post {
		@apply no-underline my-8 block z-10;
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
	.latest-post__title.active {
  view-transition-name: blog-header;
  contain: layout;
  }
</style>
