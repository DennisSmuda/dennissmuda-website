<script setup lang="ts">
import About from '~/features/about/About.vue'

useSeoMeta({
  title: 'About Me | Dennis Smuda',
  ogTitle: 'About Me | Dennis Smuda',
  description: 'Nice to meet you! This page tells you a little bit about myself, and what I\'m doing.',
  ogDescription: 'Nice to meet you! This page tells you a little bit about myself, and what I\'m doing.',
})
</script>

<template>
  <PageTitle
    title="about me 👨🏻‍💻️" subtitle="been where done what?"
  />
  <About />
</template>
