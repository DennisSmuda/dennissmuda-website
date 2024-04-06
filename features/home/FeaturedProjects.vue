<script setup lang="ts">
const { data, error, pending } = useFetch('/api/projects?limit=30')
</script>

<template>
  <!-- {{ data }} -->
  <!-- <Suspense> -->
  <span v-if="pending">Loading...</span>
  <template v-for="project in data" v-else-if="data" :key="project._id">
    <Project
      :title="project.title"
      :subtitle="project.subtitle"
      :description="project.description"
      :url="project.url"
    />
    <!-- {{project }} -->
  </template>
  <span v-else-if="error">Error: {{ error }}</span>
</template>
