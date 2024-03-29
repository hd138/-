<template>
  <div id="app">
    我是父组件
    <!-- 父组件，对消息进行监听 -->
    <mySon :title="myTitle" @changeTitle="handle"></mySon>
  </div>
</template>

<script>
import mySon from '@/commponents/mySon'

export default {
  name: 'App',
  data() {
    return {
      myTitle: '码农厨具'
    }
  },

  components: {
    mySon
  },
  methods: {
    handle(newTitle) {
      console.log(newTitle);
      this.myTitle = newTitle
    }
  }
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
