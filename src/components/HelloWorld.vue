<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
const resetCount = () => count.value = 0
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card flex flex-col gap-y-4">
    <button class="border border-blue-400 hover:bg-blue-400 ease-in-out transition duration-1000" type="button"
      @click="count++">count is {{ count }}</button>
    <button class="border border-red-400 hover:bg-red-200 ease-in-out transition duration-1000" type="button" @click="resetCount">Reset the count</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
