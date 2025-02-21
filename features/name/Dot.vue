<script setup lang="ts">
import type { SpringOptions } from 'motion-v'
import { useSpring } from 'motion-v'

const dot = ref<SVGPathElement>()

const dotSvgX = 77.5
const dotSvgY = 5

const springConfig: SpringOptions = {
  stiffness: 180,
  damping: 5,
}

const parentRect = ref<DOMRect>()
const positionX = useSpring(dotSvgX, springConfig)
const positionY = useSpring(dotSvgY, springConfig)
const radiusSpring = useSpring(15)
const currentX = ref(dotSvgX)
const currentY = ref(dotSvgY)
const radius = ref(15)

onMounted(() => {
  parentRect.value = (dot.value!.parentElement as HTMLElement).getBoundingClientRect()
})

useMotionValueEvent(positionX, 'change', (latest) => {
  currentX.value = latest
})
useMotionValueEvent(positionY, 'change', (latest) => {
  currentY.value = latest
})
useMotionValueEvent(radiusSpring, 'change', (latest) => {
  radius.value = latest
})

function onMouseMove(event: MouseEvent) {
  positionX.set(event.offsetX / parentRect.value!.width * 100)
  positionY.set(event.offsetY / parentRect.value!.height * 100)
  radiusSpring.set(60)
}

function onMouseLeave() {
  setTimeout(() => {
    positionX.set(dotSvgX)
    positionY.set(dotSvgY)
    radiusSpring.set(15)
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
    :class="`${radius > 30 ? 'fill-white' : 'fill-orange'}`"
  />
</template>

<style scoped lang="css">
#dot {
  @apply mix-blend-exclusion;
  @apply mix-blend-difference;
  @apply pointer-events-none;
}
</style>
