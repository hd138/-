<template>
  <div class="box">
    <div> 我是B组件（发布方）</div>
    <button @click="clickSend">发布通知</button>
  </div>
</template>

<script>
import Bus from '../utils/EventBus'
export default {

  methods: {
    clickSend() {
      // 3. B组件（发送方） 触发事件的方式传递参数（发布消息）
      Bus.$emit('sendMsg', '今天天气很好')
    }
  }
}
</script>

<style>
.box {
  width: 200px;
  height: 130px;
  border: 1px solid #000;
  margin: 15px 0px;
}
</style>