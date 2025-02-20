<script setup lang="ts">
import { Motion } from 'motion-v'

interface LetterProps {
  path: string
  delay: number
  animateColor?: boolean
  initialX?: number
  initialY?: number
}
const props = withDefaults(defineProps<LetterProps>(), {
  initialX: 0,
  initialY: 100,
  animateColor: false,
})

const randomRotation = () => Math.floor(Math.random() * 11) - 5
</script>

<template>
  <Motion
    as="path"
    class="fill-black dark:fill-white"
    :class="{ animate: props.animateColor }"
    :hover="{ scale: 1.025 }"
    :press="{
      scale: 0.975,
      rotate: randomRotation(),
    }"
    :transition="{
      type: 'spring',
      stiffness: 500,
      damping: 10,
    }"
    :d="path"
  />
</template>

<style>
path.animate {
  animation: colorChange 20s linear alternate infinite;
}

path {
  @apply focus:select-none focus:outline-none cursor-pointer;
}
</style>
