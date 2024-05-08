import { defineStore } from "pinia";
import { ref } from 'vue'

// 数字计数模块
export const useCounterStore = defineStore('big-counter', () => {
  const count = ref(100)
  const addCount = (newCount) => {
    count.value += newCount
  }
  return {
    count,
    addCount
  }
})