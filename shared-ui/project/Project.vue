<script lang="ts">
import type { ProjectsCollectionItem } from '@nuxt/content'

export interface ProjectProps {
  title: ProjectsCollectionItem['title']
  subtitle?: ProjectsCollectionItem['subline']
  description?: ProjectsCollectionItem['description']
  url: ProjectsCollectionItem['url']
}
</script>

<script setup lang="ts">
defineProps<ProjectProps>()
</script>

<template>
  <a class="project" :href="url" target="_blank" rel="noreferrer">
    <span class="visit">visit 👀</span>
    <h2 class="project__headline" v-html="title" />
    <p class="project__subline">
      {{ subtitle }}
    </p>
    <p class="project__description" v-html="description" />
  </a>
</template>

<style scoped>
a.project {
  @apply no-underline mb-16 lg:mb-24 block relative;
}

.project:focus {
  @apply outline-none ring-4 ring-offset-2 ring-offset-black ring-black no-underline;
}

.project:focus .project__headline,
.project:hover .project__headline {
  @apply underline;
}

.project__headline {
  @apply mb-0 underline-offset-2 pointer-events-none;
}

.project__subline {
  @apply mt-2 mb-0 text-sm opacity-50 pointer-events-none;
}

.project__description {
  @apply mt-0 text-sm pointer-events-none max-w-xs;
}

.visit {
  @apply absolute bottom-full -left-2 transition-all;
  @apply opacity-0 translate-y-4 rotate-0;
}

.project:hover .visit {
  @apply opacity-100 translate-y-0 -rotate-3;
}
</style>
