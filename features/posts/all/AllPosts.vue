<script setup lang="ts">
import { usePosts } from '~/entities/post/model/usePosts'

const { posts, getPosts } = usePosts()

getPosts()

const isActive = useState('activeBlogPostId')
</script>

<template>
  <div id="blog-post-list" class="ds-prose relative">
    <div class="timeline" />
    <template v-for="post in posts" :key="post.id">
      <div class="post">
        <!-- <div
              :class="`
                link-background
                background-tag--${post.tags[0].value}
                ${isActive === post._id ? 'active' : ''}
              `"
            /> -->
        <div class="timeline__dot" />
        <div class="post__date">
          {{ post.createdAt }}
        </div>
        <NuxtLink
          :to="`/blog/${post.slug}`"
          class="inline-flex flex-col mb-2"
          @click="isActive = post.id"
        >
          <h2 class="post__headline" :class="{ active: isActive === post.id }">
            {{ post.title }}
          </h2>
          <p class="post__subline">
            {{ post.description }}
          </p>
        </NuxtLink>
        <div class="flex">
          <button v-for="tag in post.tags" :key="tag.value" :class="`button tag tag--${tag.value}`">
            {{ tag.name }}
          </button>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.active {
  view-transition-name: blog-header;
  contain: layout;
}

.link-background {
  @apply absolute -z-10 w-full h-2 -bottom-2 transition-all;
  /* @apply bg-orange; */
}

.link-background.active {
  view-transition-name: blog-header-background;
  contain: layout;
}

.post {
  @apply my-16 md:my-24 block px-2 -inset-x-2 relative rounded-lg;
}
.post a {
  @apply no-underline rounded-lg;
}

.post__date {
  @apply absolute leading-none opacity-50;
  top: -25px;
}

@screen md {
  .post__date {
    top: -27px;
  }
}

.post__headline {
  @apply my-0;
}

.post:hover .post__headline {
  @apply underline;
}

.post__subline {
  @apply mb-2 text-sm opacity-50 pointer-events-none;
}

.post:hover .timeline__dot {
  @apply scale-150 bg-pink;
}

.timeline {
  @apply -top-6;
}

.timeline__dot {
  @apply -top-6 -left-4 duration-200;
}
</style>
