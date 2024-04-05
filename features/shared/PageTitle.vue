<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
}>()
</script>

<template>
  <div class="container mx-auto px-6 md:px-8 pt-16 md:pb-4">
    <div class="-rotate-3 flex flex-col sm:flex-row md:items-end relative md:-inset-x-4">
      <h1 class="main-heading color-change">
        {{ title }}
      </h1>
      <p v-if="subtitle" class="subtitle mb-2">
        {{ subtitle }}
      </p>
    </div>
  </div>
</template>

<style lang="css" scoped>
h1 {
  view-transition-name: page-header;
}
.subtitle {
  @apply text-xl md:text-2xl block leading-normal;
  @apply opacity-50 ml-2 md:ml-4 max-w-96 w-40 md:w-56;
  view-transition-name: page-description;
}
</style>
