<script lang="ts" setup>
import { getContentQuery } from '~/entities/content/api/getContentQuery'

const {
  data: content,
} = await useAsyncData(() =>
  getContentQuery('about me'),
)

const yearsOfExperience = new Date().getFullYear() - 2015
</script>

<template>
  <ContentRenderer
    v-if="content"
    :value="content"
    :data="{ yearsOfExperience }"
  />
</template>
