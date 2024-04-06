<script setup lang="ts">
import { useSpring } from 'vue-use-spring'
import { useMouse } from '@vueuse/core'

const dot = ref<SVGPathElement>()
const { x, y } = useMouse()

const initialDotPosition = ref({
  x: 0,
  y: 0,
})
const parentPosition = ref({
  x: 0,
  y: 0,
})

const position = useSpring({ x: 0, y: 0 }, {
  friction: 8,
  tension: 280,
})

onMounted(() => {
  // TODO: Fix math..
  const { left, top } = (dot.value as SVGPathElement).getBoundingClientRect()
  const parentRect = (dot.value?.parentElement as SVGElement).getBoundingClientRect()
  initialDotPosition.value = { x: left, y: top }
  parentPosition.value = { x: parentRect.left, y: parentRect.top }
  console.log('initial position')
})

function onMouseMove(event: MouseEvent) {

  // const { clientX, clientY, offsetX, offsetY } = event
  // console.log('Client ', x.value, offsetX, offsetX - initialDotPosition.value.x)
  // const values = {
  //   x: offsetX - initialDotPosition.value.x, // + parentPosition.value.x,
  //   y: y.value - initialDotPosition.value.y - parentPosition.value.y,
  // }
  // position.x = values.x
  // position.y = values.y
}

function onMouseLeave() {
  setTimeout(() => {
    position.x = 0
    position.y = 0
  }, 100)
}

defineExpose({ onMouseMove, onMouseLeave })
</script>

<template>
  <path
    id="dot" ref="dot"
    :style="{ transform: `translate3D(${position?.x}px, ${position?.y}px, 0px)` }"
    d="M298.88 24.96C301.2 27.04 304.16 28.08 307.76 28.08C311.28 28.08 314.16 27.04 316.4 24.96C318.72 22.8 319.88 20.16 319.88 17.04C319.88 13.84 318.72 11.2 316.4 9.12001C314.16 6.96001 311.28 5.88 307.76 5.88C304.16 5.88 301.2 6.96001 298.88 9.12001C296.64 11.2 295.52 13.84 295.52 17.04C295.52 20.16 296.64 22.8 298.88 24.96Z"
    fill="#FAFDFF"
  />
</template>

<style scoped>
#dot {
  @apply mix-blend-exclusion;
  @apply mix-blend-difference;
  @apply animate-bounce;
}
</style>
