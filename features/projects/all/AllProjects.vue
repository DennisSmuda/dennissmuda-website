<script setup lang="ts">
const { projects, getProjects } = useProjects()

getProjects()
</script>

<template>
  <SharedProject
    v-for="project in projects"
    :key="project.id"
    :title="project.headline"
    :subtitle="project.subline"
    :description="project.description"
    :url="project.url"
  />
</template>
