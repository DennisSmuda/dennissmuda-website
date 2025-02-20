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
  <div class="z-50 fixed top-0 right-0 size-5 bg-white" />
  <NuxtPage />
  <SharedFooter />
</template>

<style lang="css">
html,
body {
  @apply dark:bg-black dark:text-white;
}

body {
  @apply bg-white text-black relative min-h-screen;
  @apply dark:bg-black dark:text-white;
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
</style>
