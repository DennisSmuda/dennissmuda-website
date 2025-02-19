<script setup lang="ts">
const { latestProjects, getLatestProjects } = useProjects()

getLatestProjects()
</script>

<template>
  <SharedProject
    v-for="project in latestProjects"
    :key="project.id"
    :title="project.headline"
    :subtitle="project.subline"
    :description="project.description"
    :url="project.url"
  />
</template>
