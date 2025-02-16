<script setup lang="ts">
useSeoMeta({
  title: 'Work | Dennis Smuda',
  ogTitle: 'Work | Dennis Smuda',
  description: 'All of my past projects! Feel free to check out my work and reach out if you have any questions!',
  ogDescription: 'All of my past projects! Feel free to check out my work and reach out if you have any questions!',
})

const { data } = await useAsyncData(() =>
  queryCollection('projects').order('order', 'DESC').all(),
)
</script>

<template>
  <SharedPageTitle title="work 🏁" subtitle="let's see some of my projects" />

  <div class="container mx-auto p-8 mt-8">
    <template v-for="project in data" :key="project.id">
      <FeatureProjectListProject
        :title="project.headline"
        :subtitle="project.subline"
        :description="project.description"
        :url="project.url"
      />
    </template>
  </div>
</template>

<style scoped>
h1 {
  view-transition-name: header;
}
</style>
