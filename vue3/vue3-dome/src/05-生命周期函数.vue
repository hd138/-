<script setup>
  // beforeCreate 和 created 的相关代码
  // 一律放在setup中执行

import { onMounted } from "vue";

  const getList = () => {
    setTimeout(() => {
      console.log('发送请求');
    }, 2000)
  }

  // 一进页面发送请求
  getList()

  // 如果有些代码需要在mounted生命周期中执行
  onMounted(()=>{
    console.log('mounted生命周期函数1');
  })
  
  // 携程函数的调用方式，可以调用多次，并不会冲突，而是完全按照顺序执行
   onMounted(()=>{
    console.log('mounted生命周期函数2');
  })

</script>

<template>

</template>

<style scoped>
</style>
