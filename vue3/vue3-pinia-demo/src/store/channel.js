import { defineStore } from "pinia";
import { ref } from "vue";
import axios from 'axios'

export const useChannelStore = defineStore('channel', () => {
  // 声明数据
  const channelList = ref([])
  // 声明操作数据的方法
  const getList = async () =>{
    const { data:{ data } } = await axios.get('http://geek.itheima.net/v1_0/channels')
    channelList.value = data.channels
    console.log(data);
  }
  // 声明getters相关

  return {
    channelList,
    getList
  }
}, {
  persist: true
})
// 接口：http://geek.itheima.net/v1_0/channels
