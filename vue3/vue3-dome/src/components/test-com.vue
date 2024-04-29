<template>
  <div>我是用于测试的组件{{ count }}</div>
</template>

<script setup>
  const count = 9999
  const sayHi = () => {
    console.log("nihao");
  }
  defineExpose({
    count,
    sayHi
  })
</script>

<style>

</style>