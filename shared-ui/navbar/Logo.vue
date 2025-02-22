<script lang="ts" setup>
const initialX = 80
const initialY = 0
const initialRadius = 4

const springConfig = {
  stiffness: 280,
  damping: 15,
}

const xSpring = useSpring(initialX, springConfig)
const ySpring = useSpring(initialY, springConfig)
const radiusSpring = useSpring(initialRadius, springConfig)
const parentRect = ref<DOMRect>()
const elementRef = ref<HTMLElement>()

const currentX = ref(initialX)
const currentY = ref(initialY)
const radius = ref(initialRadius)

onMounted(() => {
  parentRect.value = elementRef.value?.getBoundingClientRect()
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

function handleMouseEnter(_event: MouseEvent) {
  xSpring.set(-39)
  ySpring.set(-16)
  radiusSpring.set(24)
}

function handleMouseLeave() {
  xSpring.set(initialX)
  ySpring.set(initialY)
  radiusSpring.set(initialRadius)
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
        :class="`${radius > 8 ? 'bg-orange dark:bg-white' : 'bg-orange'}`"
        :style="{
          transform: `scale(${radius}) translate3D(${currentX}%, ${currentY}%, 0px)`,
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
