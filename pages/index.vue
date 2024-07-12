<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">
      Increment
    </button>
  </div>
</template>

<script setup lang="ts">
const { count, increment } = useTest()
</script>