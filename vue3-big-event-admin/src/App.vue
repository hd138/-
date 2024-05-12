<script setup>
// 在Vue3 CompositionAPI中
// 1. 获取路由对象router useRouter
//    const router = useRouter()
// 2. 获取路由参数route useRoute
//    const route = useRoute
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
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
    <el-config-provider :locale="zhCn">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<style scoped></style>
