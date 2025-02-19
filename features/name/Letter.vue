<script setup lang="ts">
import { useSpring } from 'motion-v'

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

// const position = useSpring({ x: props.initialX, y: props.initialY, opacity: 0 })
const positionX = useSpring(0)
const positionY = useSpring(0)
const opacity = useSpring(0)

// change position like you would usually
setTimeout(() => {
  positionX.set(0)
  positionY.set(0)
  opacity.set(1)
}, props.delay)
</script>

<template>
  <path
    class="fill-black dark:fill-white"
    :class="{ animate: props.animateColor }"
    :style="{ transform: `translate3d(${positionX}px, ${positionY}px, 0px)`, opacity }"
    :d="path"
  />
</template>

<style>
path.animate {
  animation: colorChange 20s linear alternate infinite;
}
</style>
