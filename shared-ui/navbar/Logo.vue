<script lang="ts">
export const INITIAL_SCALE = 4

const initialX = 80
const initialY = 0
</script>

<script lang="ts" setup>
const springConfig = {
  stiffness: 280,
  damping: 15,
}

const xSpring = useSpring(initialX, springConfig)
const ySpring = useSpring(initialY, springConfig)
const scaleSpring = useSpring(INITIAL_SCALE, springConfig)
const parentRect = ref<DOMRect>()
const elementRef = ref<HTMLElement>()

const currentX = ref(initialX)
const currentY = ref(initialY)
const scale = ref(INITIAL_SCALE)

onMounted(() => {
  parentRect.value = elementRef.value?.getBoundingClientRect()
})

useMotionValueEvent(xSpring, 'change', (latest) => {
  currentX.value = latest
})
useMotionValueEvent(ySpring, 'change', (latest) => {
  currentY.value = latest
})
useMotionValueEvent(scaleSpring, 'change', (latest) => {
  scale.value = latest
})

function handleMouseEnter(_event: MouseEvent) {
  xSpring.set(-39)
  ySpring.set(-16)
  scaleSpring.set(24)
}

function handleMouseLeave() {
  xSpring.set(initialX)
  ySpring.set(initialY)
  scaleSpring.set(INITIAL_SCALE)
}
</script>

<template>
  <div
    ref="elementRef"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <NuxtLink to="/" class="logo button relative">
      ds
      <span
        class="block size-0.5 rounded-full absolute bottom-[0.9rem] right-[0.9rem]"
        :class="`${scale > 8 ? 'bg-orange dark:bg-white' : 'bg-orange'}`"
        :style="{
          transform: `scale(${scale}) translate3D(${currentX}%, ${currentY}%, 0px)`,
        }"
      />
    </NuxtLink>
  </div>
</template>

<style scoped>
.logo {
  @apply flex items-center justify-center;
  @apply text-4xl font-black;
  @apply py-2 h-12 cursor-pointer m-0 rounded-lg;
  @apply pl-2 pr-4;
  letter-spacing: -2.3px;
}

.logo:hover,
.logo[aria-current] {
  @apply dark:bg-gray;
}

.logo span {
  @apply dark:mix-blend-difference;
  @apply mix-blend-saturation;
}
</style>
