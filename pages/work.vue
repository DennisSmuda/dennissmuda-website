<script setup lang="ts">
const { data, pending } = await useAsyncData(
  'projects',
  () => queryContent('projects').sort({ createdAt: 1 }).find(),
)
const isActive = useState('activeProjectId')
</script>

<template>
  <PageTitle title="work 🏁" subtitle="let's see some of my projects" />

  <div class="h-screen container mx-auto p-8">
    Projects
    <template v-for="post in data" :key="post._id">
      {{ post.title }}
    </template>
  </div>
</template>

<style scoped>
h1 {
  view-transition-name: header;
}
</style>
