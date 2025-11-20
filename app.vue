<script setup lang="ts">
useSeoMeta({
  title: 'Dennis Smuda - web developer based in Germany',
  ogTitle: 'Dennis Smuda - web developer based in Germany',
  description: 'I write about stuff I learn along the way and post about projects I release. Come find out more about me or my work, maybe get in touch',
  ogDescription: 'I write about stuff I learn along the way and post about projects I release. Come find out more about me or my work, maybe get in touch',
  ogUrl: 'https://dennissmuda.com',
})
</script>

<template>
  <SharedNavbar />
  <NuxtPage />
  <SharedFooter />
</template>

<style lang="css">
html,
body {
  @apply dark:bg-black dark:text-white;
}

body {
  letter-spacing: 0.01em;
  @apply relative min-h-screen font-light;
  @apply dark:bg-black dark:text-white;
  @apply bg-white text-black;
  @apply transition-colors duration-700 overflow-x-hidden;
}

/* ::view-transition-old(root) {
  animation: 90ms cubic-bezier(0.4, 0, 1, 1) both fade-out;
}

::view-transition-new(root) {
  animation: 210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in;
} */

::view-transition-old(header),
::view-transition-new(header) {
  width: auto;
}

body::-webkit-scrollbar {
  @apply z-50 w-1;
}

/* body::-webkit-scrollbar-track {
  @apply bg-gray;
} */

body::-webkit-scrollbar-thumb {
  @apply bg-orange outline-orange;
}

.keyword {
  @apply text-malachite;
}

.emphasis {
  @apply font-black text-lavender dark:text-greenyellow;
}
</style>
