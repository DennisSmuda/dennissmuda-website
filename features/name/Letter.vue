<script lang="ts">
import { delay } from 'motion-v'

interface LetterProps {
  path: string
  delay: number
  animateColor?: boolean
  initialX?: number
  initialY?: number
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<LetterProps>(), {
  initialX: 0,
  initialY: 100,
  animateColor: false,
})

const opacity = ref(0)
const positionY = ref(32)

const ySpring = useSpring(32, {
  stiffness: 180,
  damping: 4,
})

const opacityMotion = useTransform(
  ySpring,
  [32, 24, 3, 0],
  [0, 0, 1, 1],
)

useMotionValueEvent(ySpring, 'change', (latest) => {
  positionY.value = latest
})
useMotionValueEvent(opacityMotion, 'change', (latest) => {
  opacity.value = latest
})

delay(() => {
  ySpring.set(0)
}, props.delay / 1000)

const rotation = ref(0)
const rotationSpring = useSpring(0, {
  stiffness: 180,
  damping: 4,
})
const randomRotation = Math.floor(Math.random() * 11) - 5

useMotionValueEvent(rotationSpring, 'change', (latest) => {
  rotation.value = latest
})

function handleMouseOver() {
  rotationSpring.set(randomRotation)
}
</script>

<template>
  <path
    :d="path"
    class="fill-black dark:fill-white"
    :class="{ animate: props.animateColor }"
    :style="`
      transform: translate3D(${0}%, ${positionY}%, 0px);
      rotate: ${rotation}deg;
      opacity: ${opacity};
    `"
    @mouseover="handleMouseOver"
    @mouseleave="rotationSpring.set(0)"
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
