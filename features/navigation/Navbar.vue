<script setup lang="ts">

</script>

<template>
  <header class="header">
    <Logo />
    <nav class="header__nav">
      <NuxtLink to="/blog" class="button nav-button">
        <span> writing </span>
        <span> ✏️ </span>
      </NuxtLink>
      <NuxtLink to="/about" class="button nav-button">
        <span>about</span>
        <span> 👨🏻‍💻 </span>
      </NuxtLink>
      <NuxtLink to="/work" class="button nav-button">
        <span>work</span>
        <span> 🏋️‍♀️ </span>
      </NuxtLink>
      <ThemeToggle />
    </nav>
  </header>
</template>

<style scoped>
/* nav .router-link-active {
  @apply underline;
} */
.header {
  @apply flex items-center justify-between select-none p-4;
}

.header__nav {
  @apply flex items-center justify-center;
}

.header__nav>span {
  @apply mx-1 opacity-50 hidden;
}

.header__nav a {
  @apply mx-1 sm:mx-2 sm:px-3 py-1 rounded-lg font-medium;
}

.header__nav a:hover {
  @apply text-pink;
}

.header__nav a span:first-child {
  @apply sr-only sm:not-sr-only sm:mr-2;
}

.header__nav a span:last-child {
  @apply flex text-2xl;
}
</style>
