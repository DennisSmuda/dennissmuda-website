<script setup lang="ts">
useSeoMeta({
  title: 'Writing | Dennis Smuda',
  ogTitle: 'Writing | Dennis Smuda',
  description: 'My blog, where I write mostly about stuff I\'ve learned on my journey.',
  ogDescription: 'My blog, where I write mostly about stuff I\'ve learned on my journey.',
})
</script>

<template>
  <main>
    <SharedPageTitle title="writing ✏️" subtitle="some thoughts and words" />

    <SharedPageContainer>
      <FeaturePostsAllPosts />
    </SharedPageContainer>
  </main>
</template>
