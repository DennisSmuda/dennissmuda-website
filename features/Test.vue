<script setup lang="ts">
import { useSpring } from 'vue-use-spring'

const position = useSpring({ x: 0, y: 0 })

// change position like you would usually
position.x = 100

</script>
<template>
    <p :style="{ transform: `translateX(${position.x}px)` }">I move!</p>
    blabla
</template>