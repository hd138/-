<script setup>
// 注意：由于写了setup 所以无法直接配置props选项
// 所以：此处需要借助于“编译器宏”函数来接收传递过来的数据
const props = defineProps({
  car: String,
  money: Number
})

const emit = defineEmits(['get-msg', 'get-money'])

const sendMsg = () => {
  emit('get-msg', '奔驰')
}
const sendMoney = () =>{
  emit('get-money', 300)
}
</script>

<template>
  <!-- 对于props传递过来的数据，模板中可以直接使用 -->
  <div class="son">
    <p>我是传递过来的数据：{{ car }}--{{ money }}</p>
    <button @click="sendMsg">修改父组件car的值</button>
    <button @click="sendMoney">修改父组件money的值</button>
  </div>
</template>

<style scoped>
  .son {
    border: 1px solid;
    padding: 30px;
  }
</style>>