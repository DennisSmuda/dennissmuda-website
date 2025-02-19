<script lang="ts">
export interface PostLinkProps {
  id: string
  title: string
  subtitle?: string
  description?: string
  slug: string
  createdAt: string
}
</script>

<script lang="ts" setup>
defineProps<PostLinkProps>()

const isActiveId = useState('activeBlogPostId')
</script>

<template>
  <NuxtLink
    class="latest-post"
    :to="`/blog/${slug}`"
    @click="isActiveId = id"
  >
    <span class="latest-post__date">
      {{ createdAt }}
    </span>
    <h3
      class="latest-post__title"
      :class="`${isActiveId === id ? 'active' : ''}`"
    >
      {{ title }}
    </h3>
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
