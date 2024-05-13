<script setup>
import { artGetChannelsService } from "@/api/article";
import { ref } from "vue";

defineProps({
  modelValue: {
    type: [Number, String]
  },
  width: {
    type: String
  }
})

const emit = defineEmits(['update:modelValue'])
const channelList = ref([])

const getChannleList = async () => {
  const res = await artGetChannelsService()
  channelList.value = res.data.data
  console.log(channelList.value);
}
getChannleList()
</script> 

<template>
  <el-select :style="{ width }" style="width:150px" :modelValue="modelValue"
    @update:modelValue="emit('update:modelValue', $event)">
    <el-option v-for="channel in channelList" :label="channel.cate_name" :key="channel.id"
      :value="channel.id"></el-option>

  </el-select>
</template>



<style></style>