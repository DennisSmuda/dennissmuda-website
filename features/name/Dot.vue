<script setup lang="ts">
import { delay, useSpring } from 'motion-v'

const dot = ref<SVGPathElement>()

const initialX = 60
const initialY = -10
const initialRadius = 0
const dotSvgX = 77.5
const dotSvgY = 5
const targetRadius = 15

const parentRect = ref<DOMRect>()
const springConfig = {
  stiffness: 180,
  damping: 4,
}

const xSpring = useSpring(initialX, springConfig)
const ySpring = useSpring(initialY, springConfig)
const radiusSpring = useSpring(initialRadius)

const currentX = ref(initialX)
const currentY = ref(initialY)
const radius = ref(initialRadius)

onMounted(() => {
  parentRect.value = (dot.value!.parentElement as HTMLElement).getBoundingClientRect()
  delay(() => {
    xSpring.set(dotSvgX)
    ySpring.set(dotSvgY)
    radiusSpring.set(targetRadius)
  }, 1)
})

useMotionValueEvent(xSpring, 'change', (latest) => {
  currentX.value = latest
})
useMotionValueEvent(ySpring, 'change', (latest) => {
  currentY.value = latest
})
useMotionValueEvent(radiusSpring, 'change', (latest) => {
  radius.value = latest
})

function onMouseMove(event: MouseEvent) {
  xSpring.set(event.offsetX / parentRect.value!.width * 100)
  ySpring.set(event.offsetY / parentRect.value!.height * 100)
  radiusSpring.set(60)
}

function onMouseLeave() {
  setTimeout(() => {
    xSpring.set(dotSvgX)
    ySpring.set(dotSvgY)
    radiusSpring.set(targetRadius)
  }, 100)
}

defineExpose({ onMouseMove, onMouseLeave })
</script>

<template>
  <circle
    id="dot"
    ref="dot"
    :r="radius"
    :cx="0"
    :cy="0"
    :style="{ transform: `translate3D(${currentX}%, ${currentY}%, 0px)` }"
    :class="`${radius > 30 ? 'fill-orange dark:fill-white' : 'fill-orange'}`"
  />
</template>

<style scoped lang="css">
#dot {
  @apply dark:mix-blend-difference;
  @apply mix-blend-saturation;
  @apply pointer-events-none;
}
</style>
