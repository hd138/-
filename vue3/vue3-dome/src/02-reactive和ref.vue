
<script setup>
  // import { reactive } from "vue";
  //  1. reactive 接受一个对象类型的数据，返回一个响应式的对象
  // const state = reactive({
  //   count:100
  // })
  // const addCount = () => {
  //   state.count++
  // }
  // 2. ref：接收简单数据类型 或者 复杂数据类型 返回一个响应式的对象
  // 本质 就是在原有传入数据的基础上，外层包了一层对象，包成了复杂数据类型
  // 底层：包成复杂类型之后，在借助reactive实现的响应式
  // 注意点：
  // 1. 脚本中访问数据，需要通过.value
  // 2. 在模板中 。value不需要加

  // 推荐：以后声明数据 统一使用ref=》统一了代码规范
  import { ref } from "vue";
  const count = ref(0)
  console.log(count.value);
  const addCount = () =>{
    count.value++
  }
</script>

<template>
  <!-- 不在要求唯一根元素 -->
  <div>
    <!-- {{ state.count }} -->
    {{ count }}
   <button @click="addCount">+1</button>
  </div>
  
</template>

<style scoped>
</style>
