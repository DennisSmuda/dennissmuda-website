<script setup lang="ts">
onMounted(async () => {
  const data = await $fetch('/content/projects')
  console.log('data', data)
})
</script>

<template>
  <h2 class="rotated">
    latest work 🏁
  </h2>
  projects
  <!-- {{ data }} -->
</template>
