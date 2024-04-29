import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

// 定义store
// defineStore(仓库的唯一标识, () => {....})

 export const useCountStore =  defineStore('counter', () => {
  // 声明数据state
  const count = ref(1000)
  // 声明操作数据的方法action(普通函数)
  const addCount = () => {
    count.value++
  }
   
  const subCount = () => {
    count.value--
  }
  // 声明基于数据派生的计算属性 getters (computed)
  const double = computed(() => count.value *2 )

  // 声明数据state-msg
  const msg = ref('hello pinia')

   return { count, msg, subCount, addCount, double }
}, {
  // persist: true //开启当前模块的持久化
  persist: {
    key: 'mn-counter', // 修改本地存储的唯一标识
    paths: ['count'] // 存储的是哪些数据
  }
})

