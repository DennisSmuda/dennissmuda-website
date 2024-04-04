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
