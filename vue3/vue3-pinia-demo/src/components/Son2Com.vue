<template>
  <div>
    我是son2 - {{ counterStore.count }} - {{ counterStore.msg }}
    <button @click="subCount">-</button>
  </div>
</template>

<script setup>
import { useCountStore } from '@/store/counter.js'

const counterStore = useCountStore()
const subCount = () => {
  counterStore.subCount()
}
</script>

<style>

</style>