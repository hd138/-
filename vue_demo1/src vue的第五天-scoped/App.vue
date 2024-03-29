<template>
  <div id="app">
    <BaseOne></BaseOne>
    <BaseTwo></BaseTwo>

  </div>
</template>

<script>
import BaseOne from './commponents/BaseOne.vue';
import BaseTwo from './commponents/BaseTwo.vue';

export default {
  name: 'App',
  components: {
    BaseOne,
    BaseTwo
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
