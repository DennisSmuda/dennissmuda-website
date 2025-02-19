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
</template>
