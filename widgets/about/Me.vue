<script lang="ts" setup>
import { getContentQuery } from '~/entities/content/api/getContentQuery'

const {
  data: content,
} = await useAsyncData(() =>
  getContentQuery('about me'),
)
</script>

<template>
  <ContentRenderer
    v-if="content"
    :value="content"
  />
</template>
