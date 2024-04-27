<script setup>
// 父传子
// 1， 给子组件，添加属性的方式传值
// 2. 在子组件，通过props接受

// 子传父
// 1. 在子组件内部， emit触发事件(编译器宏获取)
// 2. 在父组件，通过@进行监听 （自定义事件）



import SonCom from '@/components/Son-com.vue'
import { ref } from 'vue'

const money = ref(100)
const addMoney = (num) => {
  money.value += num
}
const getMoney = (num) =>{
  money.value = num
}

const message = ref('宝马')
const getMsg = (msg) =>{
  message.value = msg
}

</script>

<template>
  <div>
    <h3>
      父组件-{{ money }}
      <button @click="addMoney(10)">赚10块钱</button>
    </h3> 
    <!-- 给子组件，添加属性的方式传值 -->
    <SonCom @get-msg="getMsg" :money="money" @get-money="getMoney" :car="message"></SonCom>
  </div>
</template>

<style scoped>
</style>
