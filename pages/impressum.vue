<script setup lang="ts">
useSeoMeta({
  title: 'Impressum | Dennis Smuda',
  ogTitle: 'Impressum | Dennis Smuda',
  description: 'Impressum | legally required content.',
  ogDescription: 'Impressum | legally required content.',
})

const {
  data: content,
} = await useAsyncData(() =>
  queryCollection('copy').where('title', '=', 'impressum').first(),
)
</script>

<template>
  <SharedPageTitle
    title="Impressum" subtitle="muss halt"
  />

  <SharedPageContainer prose>
    <ContentRenderer
      v-if="content"
      :value="content"
    />
  </SharedPageContainer>
</template>
