<script setup lang="ts">
useSeoMeta({
  title: 'About Me | Dennis Smuda',
  ogTitle: 'About Me | Dennis Smuda',
  description: 'Nice to meet you! This page tells you a little bit about myself, and what I\'m doing.',
  ogDescription: 'Nice to meet you! This page tells you a little bit about myself, and what I\'m doing.',
})
</script>

<template>
  <SharedPageTitle
    title="about me 👨🏻‍💻️" subtitle="been where done what?"
  />

  <SharedPageContainer prose>
    <WidgetAboutMe />
  </SharedPageContainer>
</template>
