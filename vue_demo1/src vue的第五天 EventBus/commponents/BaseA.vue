<template>
  <div>我是A组件
    <p>{{ msg }}</p>
  </div>
</template>

<script>
import Bus from '../utils/EventBus';

export default {
  data() {
    return {
      msg: ''
    }
  },
  created() {
    // 2. 在A组件（接收方），进行监听Bus的事件（订阅消息）
    Bus.$on('sendMsg', (msg) => {
      this.msg = msg
    })
  }
}
</script>

<style scoped>
div {
  width: 200px;
  height: 130px;
  border: 1px solid #000;
}
</style>