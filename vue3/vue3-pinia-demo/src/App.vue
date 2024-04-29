<script setup>
import { storeToRefs } from 'pinia'
import Son1Com from './components/Son1Com.vue'
import Son2Com from './components/Son2Com.vue'
import { useCountStore } from '@/store/counter.js'
import { useChannelStore } from '@/store/channel.js'
const counterStore = useCountStore()
const channelStoer = useChannelStore()
// 直接解构不处理 数据会丢失响应式
const { count, msg } = storeToRefs(counterStore)
const { getList } = channelStoer
const { channelList } = storeToRefs(channelStoer)


</script>

<template>
 <div>
  <h3>
    app根组件 - 
    <!-- {{ counterStore.count }}
    {{ counterStore.msg }} -->
    {{ msg }}
    {{ count  }}
    {{ counterStore.double }}
  </h3>
  <Son1Com></Son1Com>
  <Son2Com></Son2Com>
  <hr>
  <button @click="getList">获取频道的数据</button>
  <ul>
    <li v-for="item in channelList" :key="item.id">{{ item.name }}</li>
  </ul>
 </div>
</template>

<style scoped>

</style>
