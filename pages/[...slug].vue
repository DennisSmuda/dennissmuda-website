<script setup lang="ts">
const isActive = useState('activeBlogPostId')

const { data: page } = await useAsyncData('my-page', queryContent('/').findOne)

useContentHead(page)
</script>

<template>
  <main>
    <ContentDoc v-slot="{ doc }">
      <div class="absolute w-full h-32 top-0 left-0 right-0 overflow-hidden z-0">
        <div
          :class="`link-background background-tag--${doc.tags[0].value}`"
        />
      </div>
      <div class="container mx-auto px-6 md:px-8 pt-32 pb-2">
        <NuxtLink to="/blog" class="breadcrumb inline-block" @click="isActive = doc._id">
          ⬅
          writing
        </NuxtLink>
        <div class="-rotate-3 flex flex-col relative md:-inset-x-4">
          <h1 class="main-heading color-change">
            {{ doc.title }}
          </h1>
        </div>
      </div>
      <div class="blog-post ds-prose container lg:max-w-4xl mx-auto px-8">
        <ContentRenderer :value="doc" />
      </div>
    </ContentDoc>
  </main>
</template>

<style lang="css" scoped>
h1 {
  view-transition-name: blog-header;
  contain: layout;
}

.breadcrumb {
  @apply font-black text-xl -rotate-3 relative rounded-lg px-2;
  view-transition-name: page-header;
  contain: layout;
}

.link-background {
  @apply absolute -z-10 w-full right-0 h-40 -rotate-3 scale-150;
  /* view-transition-name: blog-header-background; */
  /* contain: layout; */
}

.link-background::after {
  content: '';
  @apply block absolute -bottom-4 left-0 w-full bg-white dark:bg-black transition-colors duration-700 h-32 z-10;
}
</style>
