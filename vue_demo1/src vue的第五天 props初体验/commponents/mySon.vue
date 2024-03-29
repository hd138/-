<template>
  <div>
    <span>我是子组件</span>
    {{ title }}
    <button @click="changeFn">修改title</button>
  </div>
</template>

<script>
export default {
  // data必须是一个函数 保证每个组件实例 维护独立的 
  props: ['title'],
  methods: {
    changeFn() {
      // 通过$emit，向父组件发消息通知
      this.$emit('changeTitle', '码农烧烤')
    }
  }
}
</script>

<style scoped>
div {
  border: 3px solid;
  margin: 20px;
}
</style>