<script lang="ts">
interface ContainerProps {
  prose?: boolean
}
</script>

<script setup lang="ts">
withDefaults(defineProps<ContainerProps>(), {
  prose: false,
})
</script>

<template>
  <section
    class="container lg:max-w-4xl mx-auto p-8"
  >
    <div
      v-if="prose"
      :class="{ 'ds-prose': prose }"
    >
      <slot />
    </div>

    <slot v-else />
  </section>
</template>
