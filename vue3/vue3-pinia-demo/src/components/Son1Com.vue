<template>
  <div>
    我是son1 - {{ counterStore.count }} - {{ counterStore.msg }}
    <button @click="addCount">+</button>
  </div>
  
</template>

<script setup>
import { useCountStore } from '@/store/counter.js'

const counterStore = useCountStore()

const addCount = () => {
  counterStore.addCount()
}
</script>

<style>

</style>