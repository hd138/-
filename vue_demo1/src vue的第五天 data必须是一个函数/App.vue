<template>
  <div id="app">
    <BaseCount @changeCount="handChange" :count="count"></BaseCount>

  </div>
</template>

<script>
import BaseCount from './commponents/BaseCount.vue';

export default {
  name: 'App',
  data() {
    return {
      count: 0
    }
  },
  components: {
    BaseCount
  },

  methods: {
    // fn() {
    //   alert('你好')
    // }
    handChange(newCount) {
      this.count = newCount
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
