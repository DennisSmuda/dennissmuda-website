<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed(() => colorMode.preference === 'dark')

function toggleDarkMode(isDark: boolean) {
  colorMode.preference = isDark ? 'dark' : 'light'
}
</script>

<template>
  <button
    id="theme-toggle"
    type="button"
    class="w-9 h-9 flex items-center justify-center color-black dark:color-white ml-1"
    @click="toggleDarkMode(!isDark)"
  >
    <span class="sr-only">theme color toggle</span>
    <span class="dark-button"> 🌘 </span>
    <span class="light-button"> 😎 </span>
  </button>
</template>

<style lang="css" scoped>
button span {
  @apply text-2xl;
}
</style>
