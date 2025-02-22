<script setup lang="ts">
import { useSpring } from 'motion-v'

const dot = ref<SVGPathElement>()

const dotSvgX = 77.5
const dotSvgY = 5

const parentRect = ref<DOMRect>()
const springConfig = {
  stiffness: 180,
  damping: 4,
}

const xSpring = useSpring(dotSvgX, springConfig)
const ySpring = useSpring(dotSvgY, springConfig)
const radiusSpring = useSpring(15)

const currentX = ref(dotSvgX)
const currentY = ref(dotSvgY)
const radius = ref(15)

onMounted(() => {
  parentRect.value = (dot.value!.parentElement as HTMLElement).getBoundingClientRect()
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
