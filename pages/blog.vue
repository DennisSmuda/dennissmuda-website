<script setup lang="ts">
const { data, pending } = await useAsyncData(
  'blog',
  () => queryContent('blog').find(),
)
const isActive = useState('activeBlogPostId')
</script>

<template>
  <main>
    <PageTitle title="Blog" subtitle="some thoughts and words" />
    {{ pending ? 'Loading...' : '' }}
    <div class="flex flex-col container mx-auto mt-16 px-6 md:px-8">
      <template v-for="post in data" :key="post._id">
        <div>
          <NuxtLink
            :to="`/blog/${post.slug}`"
            class="text-2xl font-bold mb-4 relative inline-flex"
            @click="isActive = post._id"
          >
            <div
              :class="`
                link-background
                background-tag--${post.tags[0].value}
                ${isActive === post._id ? 'active' : ''}
              `"
            />
            <h2
              :class="{ active: isActive === post._id }"
            >
              {{ post.title }}
            </h2>
          </NuxtLink>
          <div class="flex">
            <button v-for="tag in post.tags" :key="tag.value" :class="`button tag tag--${tag.value}`">
              {{ tag.name }}
            </button>
          </div>
        </div>
      </template>
    </div>
  </main>
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
</style>
