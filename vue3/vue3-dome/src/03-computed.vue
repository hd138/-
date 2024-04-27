<script setup>
import { computed, ref } from "vue";
// 声明数据
const list = ref([1,2,3,4,5,6,7])

// 基于list派生一个计算属性，从list中过滤成 > 2
const comp = computed(()=>{
 return list.value.filter(item=>item > 2 )
})
// 定义一个修改数组的方法
const handleList = () => {
  list.value.push(4,6,2,1)
}
</script>

<template>
  <div>
   <p>计算之前的数据-{{ list }}</p> 
   <p>计算后的数据-{{ comp }}</p> 
   <button @click="handleList">修改</button>
  </div>
  
</template>

<style scoped>
</style>
