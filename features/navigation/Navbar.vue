<script setup lang="ts">

</script>

<template>
  <header class="flex items-center justify-between p-2 fixed top-0 left-0 right-0 z-50">
    <Logo />
    <nav class="mr-2 flex gap-4">
      <NuxtLink to="/blog">
        writing
      </NuxtLink>
      <NuxtLink to="/about">
        about
      </NuxtLink>
    </nav>
  </header>
</template>

<style scoped>
.router-link-active {
  @apply underline;
}
</style>
