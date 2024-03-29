<template>
  <div id="app">
    我是父组件
    <!-- 父组件，对消息进行监听 -->
    <mySon :percent="percent"></mySon>
  </div>
</template>

<script>
import mySon from '@/commponents/mySon'

export default {
  name: 'App',
  data() {
    return {
      percent: 20
    }
  },

  components: {
    mySon
  },
  methods: {

  }
}
</script>

<style lang="less"></style>
