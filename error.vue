<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
  error: Object as () => NuxtError,
})

useSeoMeta({
  title: '404 Page not found | Dennis Smuda',
  ogTitle: '404 Page not found | Dennis Smuda',
  description: 'This page does not exist. Maybe you mistyped the URL or the page was moved.',
  ogDescription: 'This page does not exist. Maybe you mistyped the URL or the page was moved.',
})
</script>

<template>
  <SharedPageTitle
    :title="error?.statusCode"
    :subtitle="error?.statusMessage"
  />

  <div class="container mx-auto px-6 md:px-8 pt-16 md:pb-4">
    <NuxtLink class="marker-link mt-4" to="/">
      go back home 🏡
    </NuxtLink>
  </div>
</template>
