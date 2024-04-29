<script setup>
  import { provide, ref } from 'vue';
  import centerCom from './components/center-com.vue';

  // 1. 跨层传递普通数据
  provide('theme-color','pink')
  // 2. 跨层传递响应式数据
  const count = ref(100)
  provide('count', count)

  setTimeout(() => {
    count.value = 200
  }, 2000);
  // 跨层级传递函数
  provide('changeCount', (newCount) => {
    count.value = newCount
  })
</script>

<template>
  <div>
   <h1>我是顶层组件</h1>
   <centerCom></centerCom>
  </div>
</template>

<style scoped>
</style>
