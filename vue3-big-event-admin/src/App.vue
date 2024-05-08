<script setup>
// 在Vue3 CompositionAPI中
// 1. 获取路由对象router useRouter
//    const router = useRouter()
// 2. 获取路由参数route useRoute
//    const route = useRoute
import { useRoute, useRouter } from 'vue-router'
// import { useUserStore, useCounterStore } from '@/stores'

const router = useRouter()
const route = useRoute()
// const goList = () => {
//   router.push('/list')
//   console.log(router, route);
//   console.log(counterStore);
// }
// const userStore = useUserStore()

// const counterStore = useCounterStore()


</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
