<script setup lang="ts">
import { useMouse } from '@vueuse/core'
import { useSpring } from 'motion-v'
// const dot = ref<SVGPathElement>()

const initialDotPosition = ref({
  x: 308,
  y: 10,
})
const positionX = useSpring(initialDotPosition.value.x)
const positionY = useSpring(initialDotPosition.value.y)
const radiusSpring = useSpring(15)
const currentX = ref(initialDotPosition.value.x)
const currentY = ref(initialDotPosition.value.y)
const radius = ref(15)
const mouse = useMouse()

onMounted(() => {
  // TODO: Fix math..
  // const { left, top } = (dot.value as SVGPathElement).getBoundingClientRect()
  // initialDotPosition.value = { x: left, y: top }
  // console.log('Dot: mounted', dot.value?.getBoundingClientRect())
  // const parentRect = (dot.value?.parentElement as SVGElement).getBoundingClientRect()
  // parentPosition.value = { x: parentRect.left, y: parentRect.top }
  // console.log('parent rect', parentRect)
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
  console.log('onMouseMove', event.layerX - initialDotPosition.value.x)
  positionX.set(event.offsetX)
  positionY.set(event.offsetY)
  radiusSpring.set(45)
}

function onMouseLeave() {
  setTimeout(() => {
    // positionX.set(initialDotPosition.value.x)
    // positionY.set(initialDotPosition.value.y)
    positionX.set(0)
    positionY.set(0)
    radiusSpring.set(15)
  }, 100)
}

defineExpose({ onMouseMove, onMouseLeave })
</script>

<template>
  <circle
    id="dot"
    :r="radius"
    :cx="initialDotPosition.x"
    :cy="initialDotPosition.y"
    :style="{ transform: `translate3D(${currentX}px, ${currentY}px, 0px)` }"
    class="pointer-events-none fill-orange"
    :class="`${radius > 30 ? 'fill-white' : 'fill-orange'}`"
  />
  <!-- <path
    id="dot" ref="dot"
    :style="{ transform: `translate3D(${currentX - initialDotPosition.x}px, ${currentY - initialDotPosition.y}px, 0px)` }"
    d="M298.88 24.96C301.2 27.04 304.16 28.08 307.76 28.08C311.28 28.08 314.16 27.04 316.4 24.96C318.72 22.8 319.88 20.16 319.88 17.04C319.88 13.84 318.72 11.2 316.4 9.12001C314.16 6.96001 311.28 5.88 307.76 5.88C304.16 5.88 301.2 6.96001 298.88 9.12001C296.64 11.2 295.52 13.84 295.52 17.04C295.52 20.16 296.64 22.8 298.88 24.96Z"
    class="hidden"
    fill="#FAFDFF"
  /> -->
</template>

<style scoped lang="css">
#dot {
  @apply mix-blend-exclusion;
  @apply mix-blend-difference;
  /* @apply animate-bounce; */
}
</style>
