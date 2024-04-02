<template>
  <div id="app">
    我是App组件 <button @click="change">修改数据</button>
    <SonA></SonA>
    <SonB></SonB>
  </div>
</template>

<script>
import SonA from './commponents/SonA.vue';
import SonB from './commponents/SonB.vue';


export default {
  provide() {
    return {
      color: this.color, // 简单数据类型（非响应式）
      userInfo: this.userInfo // 复杂数据类型（响应式）-推荐
    }
  },
  name: 'App',
  data() {
    return {
      color: 'pinl',
      userInfo: {
        name: 'mn',
        age: 18
      }
    }
  },

  components: {
    SonA,
    SonB

  },
  methods: {
    change() {
      this.color = 'red'
      this.userInfo.name = '你好'
    }

  },
  watch: {

  }
}
</script>

<style lang="less">
#app {
  width: 500px;
  height: 600px;
  border: 1px solid;
  text-align: center;
  padding: 20px;
}
</style>
