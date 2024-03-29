<template>
  <div id="app">

    <hmHead></hmHead>
    <hmMain></hmMain>
    <hmFooter></hmFooter>
  </div>
</template>

<script>
import hmFooter from './commponents/hmFooter.vue'
import hmHead from './commponents/hmHead.vue'
import hmMain from './commponents/hmMain.vue'

export default {
  name: 'App',
  components: {
    hmHead: hmHead,
    hmMain: hmMain,
    hmFooter: hmFooter
  },
  methods: {
    fn() {
      alert('你好')
    }
  },
}
</script>

<style lang="less">
#app {
  width: 600px;
  height: 740px;
  background-color: #87ceeb;
  margin: 0 auto;
  padding: 20px;

  .box {
    width: 200px;
    height: 200px;
    background-color: pink;
  }
}
</style>
