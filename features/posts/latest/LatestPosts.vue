<script lang="ts" setup>
import { usePosts } from '~/entities/post/model/usePosts'

const { latestPosts, getLatestPosts } = usePosts()

getLatestPosts()
</script>

<template>
  <SharedPostLink
    v-for="post in latestPosts"
    :id="post.id"
    :key="post.id"
    :title="post.title"
    :subtitle="post.description"
    :description="post.description"
    :slug="post.slug"
    :created-at="post.createdAt"
  />

  <!-- Blog CTA -->
  <NuxtLink class="marker-link mt-4" to="/blog">
    check out all posts 📖
  </NuxtLink>
</template>
