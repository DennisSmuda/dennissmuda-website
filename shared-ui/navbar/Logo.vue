<script lang="ts" setup>
const initialX = 0
const initialY = 0

const springConfig = {
  stiffness: 180,
  damping: 4,
}
const xSpring = useSpring(initialX, springConfig)
const ySpring = useSpring(initialY, springConfig)
const parentRect = ref<DOMRect>()
const elementRef = ref<HTMLElement>()

const currentX = ref(initialX)
const currentY = ref(initialY)

onMounted(() => {
  parentRect.value = elementRef.value?.getBoundingClientRect()
})

useMotionValueEvent(xSpring, 'change', (latest) => {
  currentX.value = latest
})
useMotionValueEvent(ySpring, 'change', (latest) => {
  currentY.value = latest
})

function handleMouseEnter(event: MouseEvent) {
  const { screenX, screenY } = event
  xSpring.set(screenX / window.innerWidth * 100)
  ySpring.set(screenY / window.innerHeight * 100)
  // const { width, height, left, top } = parentRect.value || { width: 0, height: 0, left: 0, top: 0 }
  // const x = ((clientX - left) / width - 0.5) * 100
  // const y = ((clientY - top) / height - 0.5) * 100
  // xSpring.set(x)
  // ySpring.set(y)
}
function handleMouseLeave() {
  xSpring.set(initialX)
  ySpring.set(initialY)
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
        :style="{ transform: `translate3D(${currentX}%, ${currentY}%, 0px)` }"
      >.</span>
    </NuxtLink>
  </div>
</template>

<style scoped>
.logo {
  @apply flex items-center justify-center;
  @apply text-4xl font-black;
  @apply py-2 h-12 cursor-pointer m-0 rounded-lg;
  @apply px-2;
  letter-spacing: -2.3px;
}

.logo:hover,
.logo[aria-current] {
  @apply dark:bg-gray;
}

.logo span {
  @apply transition-transform translate-y-0;
}

.logo[aria-current] span {
  @apply text-orange;
}

.logo:hover span {
  @apply -translate-y-2;
}

.logo:focus span {
  @apply translate-y-0 duration-75;
}
</style>
