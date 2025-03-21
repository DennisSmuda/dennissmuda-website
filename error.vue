<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
  error: Object as () => NuxtError,
})
</script>

<template>
  <SharedPageTitle
    :title="error?.statusCode"
    :subtitle="error?.statusMessage"
  />
  <NuxtLink class="marker-link mt-4 mx-auto" to="/">
    go back home 🏡
  </NuxtLink>
</template>
