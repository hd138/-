<template>
  <div id="app">
    <button @click="logout">退出按钮</button>
    <!-- :visible.sync等价于：visible + @update:visible -->
    <div class="base_box">
      我是一个捣乱的盒子
    </div>
    <BaseDiaglog></BaseDiaglog>
  </div>
</template>

<script>

import BaseDiaglog from './commponents/BaseDiaglog.vue'



export default {
  name: 'App',
  data() {
    return {
      isShow: false
    }
  },

  components: {
    BaseDiaglog
  },
  methods: {
    logout() {
      this.isShow = true
    }
  },

}
</script>

<style lang="less"></style>
