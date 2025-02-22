<script lang="ts" setup>
const {
  data: content,
} = await useAsyncData(() =>
  queryCollection('copy').where('title', '=', 'about me').first(),
)
</script>

<template>
  <ContentRenderer
    v-if="content"
    :value="content"
  />
</template>
