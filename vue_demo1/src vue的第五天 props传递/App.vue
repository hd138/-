<template>
  <div id="app">
    我是父组件
    <!-- 父组件，对消息进行监听 -->
    <mySon :username="username" :age="age" :isSingle="isSingle" :car="car" :hobby="hobby"></mySon>
  </div>
</template>

<script>
import mySon from '@/commponents/mySon'

export default {
  name: 'App',
  data() {
    return {
      username: '小帅',
      age: 28,
      isSingle: true,
      car: {
        brand: '宝马'
      },
      hobby: ['篮球', '足球', '羽毛球']
    }
  },

  components: {
    mySon
  },
  methods: {

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
