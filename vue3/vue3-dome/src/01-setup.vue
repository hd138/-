<!-- 加上setup允许在script中直接编写组合式api -->
<!-- <script>
// setup 
// 1. 执行时机比beforCreate还要早
// 2. setup函数中，获取不到this（this是undefined）
// 3. 数据和函数，需要在setup 最后return 才能在模板中应用
export default {
  setup () {
    // 数据
    const message = 'hello Vue3'
    // 函数
    const logMsg = () =>{
      console.log(message);
    }
    return {
      message,
      logMsg
    }
  }
  
}
</script> -->
<script setup>
   const message = 'this is a message'
    const logMsg = () =>{
      console.log(message);
    }
</script>

<template>
  <!-- 不在要求唯一根元素 -->
  <div>
   我是vue3 {{ message }}
   <button @click="logMsg">打印</button>
  </div>
  
</template>

<style scoped>
</style>
