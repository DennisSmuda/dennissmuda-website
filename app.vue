<script setup lang="ts">
useSeoMeta({
  title: 'Dennis Smuda - web developer based in Germany',
  ogTitle: 'Dennis Smuda - web developer based in Germany',
  description: 'I write about stuff I learn along the way and post about projects I release. Come find out more about me or my work, maybe get in touch',
  ogDescription: 'I write about stuff I learn along the way and post about projects I release. Come find out more about me or my work, maybe get in touch',
})
</script>

<template>
  <Navbar />
  <NuxtPage />
</template>

<style lang="css">
html, body {
  @apply dark:bg-black dark:text-white;
}

::view-transition-old(root) {
  /* animation: 90ms cubic-bezier(0.4, 0, 1, 1) both fade-out; */
}

::view-transition-new(root) {
  /* animation: 210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in; */
}

::view-transition-old(header),
::view-transition-new(header) {
  width: auto;
}
</style>
