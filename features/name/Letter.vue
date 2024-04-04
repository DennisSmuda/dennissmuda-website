<script setup lang="ts">
import { useSpring } from 'vue-use-spring'

interface LetterProps {
  path: string
  delay: number
  color?: string
  animateColor?: boolean
  initialX?: number
  initialY?: number
}
const props = withDefaults(defineProps<LetterProps>(), {
  initialX: 0,
  initialY: 100,
  animateColor: false,
  color: '#FAFDFF',
})

const position = useSpring({ x: props.initialX, y: props.initialY, opacity: 0 })

// change position like you would usually
setTimeout(() => {
  position.x = 0
  position.y = 0
  position.opacity = 1
}, props.delay)
</script>

<template>
  <path
    :class="{ animate: props.animateColor }"
    :style="{ transform: `translate3d(${position.x}px, ${position.y}px, 0px)`, opacity: position.opacity }"
    :d="path"
    :fill="color"
  />
</template>

<style>
path.animate {
  animation: colorChange 20s linear alternate infinite;
}
</style>
